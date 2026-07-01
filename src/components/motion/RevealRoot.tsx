"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { duration, spacing, stagger } from "@/constants";

interface RevealRootProps {
  children: ReactNode;
  className?: string;
}

/**
 * Shared scroll-reveal engine (progressive enhancement).
 *
 * Content is server-rendered and fully visible without JS. On mount this
 * dynamically imports GSAP + ScrollTrigger (off the LCP path) and, ONLY under
 * `(prefers-reduced-motion: no-preference)`, applies:
 *   - [data-reveal]          → fade + rise, once at 20% in view
 *   - [data-reveal-stagger]  → staggered children
 *   - [data-spine]           → scrubbed vertical draw (optional; skipped if absent)
 *
 * All values come from design tokens. Everything reverts on unmount.
 * Consumed by the Business Story and the Services Experience.
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

        const spine = el.querySelector<HTMLElement>("[data-spine]");
        if (spine) {
          gsap.fromTo(
            spine,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top 70%", end: "bottom 85%", scrub: true },
            },
          );
        }
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
