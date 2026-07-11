"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { duration, spacing, stagger } from "@/constants";

interface RevealRootProps {
  children: ReactNode;
  className?: string;
}

/** Wrap each word in an inline-block span; returns the char/word spans. */
function splitInto(el: HTMLElement, granularity: "chars" | "words"): HTMLElement[] {
  const text = el.textContent ?? "";
  el.setAttribute("aria-label", text);
  el.textContent = "";

  const units: HTMLElement[] = [];
  text.split(/(\s+)/).forEach((token) => {
    if (token.trim() === "") {
      el.appendChild(document.createTextNode(token === "" ? "" : " "));
      return;
    }
    const word = document.createElement("span");
    word.setAttribute("aria-hidden", "true");
    word.style.display = "inline-block";
    if (granularity === "words") {
      word.textContent = token;
      units.push(word);
    } else {
      for (const ch of token) {
        const c = document.createElement("span");
        c.style.display = "inline-block";
        c.textContent = ch;
        word.appendChild(c);
        units.push(c);
      }
    }
    el.appendChild(word);
  });
  return units;
}

/**
 * Shared scroll-reveal engine (progressive enhancement).
 *
 * Content is server-rendered and fully visible without JS. On mount this
 * dynamically imports GSAP + ScrollTrigger (off the LCP path) and, ONLY under
 * `(prefers-reduced-motion: no-preference)`, applies:
 *   - [data-reveal]          → fade + rise, once at 20% in view
 *   - [data-reveal-stagger]  → staggered children
 *   - [data-reveal-scale]    → scale 0.92 + fade, once (panels/cards)
 *   - [data-reveal-mask]     → upward clip-path mask reveal, once
 *   - [data-reveal-blur]     → blur + slight overscale dissolve, once
 *   - [data-reveal-tilt]     → perspective rotateX settle, once
 *   - [data-reveal-wipe]     → left→right clip-path wipe, once
 *   - [data-split]           → per-character rise + blur reveal, once
 *   - [data-words-scrub]     → word-by-word opacity illumination, scrubbed
 *   - [data-parallax="0.2"]  → decorative yPercent scrub (value = speed)
 *   - [data-count]           → numeric count-up on reveal
 *   - [data-spine]           → scrubbed vertical draw (optional)
 *   - [data-spine-x]         → scrubbed horizontal draw (connector lines)
 *
 * All values come from design tokens. Everything reverts on unmount.
 */
export function RevealRoot({ children, className }: RevealRootProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void import("@/animations/gsap").then(({ gsap, ease }) => {
      if (cancelled || !el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) => {
          gsap.from(node, {
            opacity: 0,
            y: spacing[20],
            duration: duration.slow / 1000,
            ease: ease.outExpo,
            scrollTrigger: { trigger: node, start: "top 80%", toggleActions: "play none none none" },
          });
        });

        el.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
          gsap.from(Array.from(group.children), {
            opacity: 0,
            y: spacing[10],
            duration: duration.medium / 1000,
            ease: ease.outExpo,
            stagger: stagger.cards,
            scrollTrigger: { trigger: group, start: "top 80%", toggleActions: "play none none none" },
          });
        });

        el.querySelectorAll<HTMLElement>("[data-reveal-scale]").forEach((node) => {
          gsap.from(node, {
            opacity: 0,
            scale: 0.92,
            duration: duration.slow / 1000,
            ease: ease.outExpo,
            scrollTrigger: { trigger: node, start: "top 80%", toggleActions: "play none none none" },
          });
        });

        el.querySelectorAll<HTMLElement>("[data-reveal-mask]").forEach((node) => {
          gsap.from(node, {
            clipPath: "inset(100% 0% 0% 0%)",
            y: 24,
            duration: duration.slow / 1000,
            ease: ease.outExpo,
            scrollTrigger: { trigger: node, start: "top 80%", toggleActions: "play none none none" },
          });
        });

        el.querySelectorAll<HTMLElement>("[data-reveal-blur]").forEach((node) => {
          gsap.from(node, {
            opacity: 0,
            scale: 1.04,
            filter: "blur(14px)",
            duration: duration.slow / 1000,
            ease: ease.outQuart,
            scrollTrigger: { trigger: node, start: "top 80%", toggleActions: "play none none none" },
          });
        });

        el.querySelectorAll<HTMLElement>("[data-reveal-tilt]").forEach((node) => {
          gsap.from(node, {
            opacity: 0,
            y: spacing[16],
            rotationX: 12,
            transformPerspective: 900,
            transformOrigin: "center bottom",
            duration: duration.slow / 1000,
            ease: ease.outExpo,
            scrollTrigger: { trigger: node, start: "top 82%", toggleActions: "play none none none" },
          });
        });

        el.querySelectorAll<HTMLElement>("[data-reveal-wipe]").forEach((node) => {
          gsap.from(node, {
            clipPath: "inset(0% 100% 0% 0%)",
            duration: duration.slow / 1000,
            ease: ease.outQuart,
            scrollTrigger: { trigger: node, start: "top 82%", toggleActions: "play none none none" },
          });
        });

        el.querySelectorAll<HTMLElement>("[data-split]").forEach((node) => {
          const chars = splitInto(node, "chars");
          if (chars.length === 0) return;
          gsap.from(chars, {
            opacity: 0,
            y: "0.6em",
            rotateX: -45,
            filter: "blur(6px)",
            duration: duration.medium / 1000,
            ease: ease.outExpo,
            stagger: { each: 0.018, from: "start" },
            scrollTrigger: { trigger: node, start: "top 85%", toggleActions: "play none none none" },
          });
        });

        el.querySelectorAll<HTMLElement>("[data-words-scrub]").forEach((node) => {
          const words = splitInto(node, "words");
          if (words.length === 0) return;
          gsap.fromTo(
            words,
            { opacity: 0.18 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.08,
              scrollTrigger: { trigger: node, start: "top 78%", end: "top 30%", scrub: true },
            },
          );
        });

        el.querySelectorAll<HTMLElement>("[data-parallax]").forEach((node) => {
          const speed = parseFloat(node.dataset.parallax ?? "0.15");
          if (Number.isNaN(speed) || speed === 0) return;
          gsap.fromTo(
            node,
            { yPercent: speed * 100 },
            {
              yPercent: speed * -100,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        el.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => {
          const target = parseFloat(node.dataset.count ?? "");
          if (Number.isNaN(target)) return;
          const prefix = node.dataset.countPrefix ?? "";
          const suffix = node.dataset.countSuffix ?? "";
          const decimals = target % 1 === 0 ? 0 : 1;
          const counter = { value: 0 };
          gsap.to(counter, {
            value: target,
            duration: duration.slow / 1000,
            ease: ease.outExpo,
            onUpdate: () => {
              node.textContent = `${prefix}${counter.value.toFixed(decimals)}${suffix}`;
            },
            scrollTrigger: { trigger: node, start: "top 85%", toggleActions: "play none none none" },
          });
        });

        el.querySelectorAll<HTMLElement>("[data-spine]").forEach((spine) => {
          gsap.fromTo(
            spine,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top 70%", end: "bottom 85%", scrub: true },
            },
          );
        });

        // Horizontal twin of the spine — for connector lines that draw
        // left→right (e.g. the Why process stepper). Triggered by the line's
        // own viewport entry so short sections still complete the draw.
        el.querySelectorAll<HTMLElement>("[data-spine-x]").forEach((spine) => {
          gsap.fromTo(
            spine,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: { trigger: spine, start: "top 90%", end: "top 45%", scrub: true },
            },
          );
        });
      });

      cleanup = () => mm.revert();
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
