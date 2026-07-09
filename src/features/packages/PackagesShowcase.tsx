"use client";

import { useEffect, useRef, useState } from "react";

import { cn, container } from "@/lib";

import { PackageCard } from "./PackageCard";
import { PackagesBackground } from "./PackagesBackground";
import { PackagesEditorial } from "./PackagesEditorial";

const STAGE_COUNT = 3;

/**
 * The pinned packages scene — a 100vh viewport pinned for a ~400vh scroll
 * footprint (ScrollTrigger, `scrub: 0.8` for the buttery catch-up feel;
 * deliberately no site-wide smooth-scroll library, which would risk the
 * locked Home hero). Scroll progress buckets into 3 stages (editorial column
 * + card morph) and is written continuously to a `--pkg-progress` CSS var
 * (ref, not state — no re-render per frame) for the progress rail.
 *
 * Desktop, motion-safe only: the markup carries `hidden motion-safe:lg:block`
 * and the pin is additionally gated by gsap.matchMedia — below `lg` or under
 * reduced motion, PackagesStack (rendered by the page) takes over entirely.
 */
export function PackagesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void import("@/animations/gsap").then(({ gsap, ScrollTrigger }) => {
      if (cancelled || !section) return;

      let lastStage = 0;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            section.style.setProperty("--pkg-progress", self.progress.toFixed(4));
            const next = Math.min(STAGE_COUNT - 1, Math.floor(self.progress * STAGE_COUNT));
            if (next !== lastStage) {
              lastStage = next;
              setStage(next);
            }
          },
        });
        return () => trigger.kill();
      });

      cleanup = () => mm.revert();
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="packages-showcase"
      aria-label="ACUBE packages"
      className="theme-dark relative isolate hidden h-dvh overflow-hidden bg-ink-black motion-safe:lg:block"
    >
      <PackagesBackground />

      <div className={cn(container.wide, "relative z-[var(--z-content)] flex h-full items-center")}>
        <div className="grid w-full grid-cols-[45fr_55fr] items-center gap-16">
          <PackagesEditorial stage={stage} />
          <div className="flex justify-center">
            <PackageCard stage={stage} />
          </div>
        </div>
      </div>
    </section>
  );
}
