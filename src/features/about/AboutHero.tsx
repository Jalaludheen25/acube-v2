"use client";

import Image from "next/image";

import { useMediaQuery, usePrefersReducedMotion } from "@/hooks";
import { aboutStory } from "@/constants";
import { cn, container } from "@/lib";

import { AboutHeroChips } from "./AboutHeroChips";
import { AboutHeroText } from "./AboutHeroText";
import { useAboutFrameSequence } from "./useAboutFrameSequence";

const MOBILE_QUERY = "(max-width: 1023px)";
const PIN_TARGET_ID = "about-hero";

const SEQUENCE = {
  desktop: "/videos/about/sequence/manifest.json",
  mobile: "/videos/about/sequence-mobile/manifest.json",
};

/**
 * About page introduction — a pinned 300vh storytelling hero, deliberately
 * distinct from the Home page: a canvas frame sequence (60% desktop column,
 * full-width band on mobile) plays in sync with a 6-stage text narrative
 * (40% column desktop, stacked below on mobile) as the section stays pinned.
 * Releases naturally once the sequence — and the story — finish.
 *
 * No shared code with features/hero's locked Home hero: own pin distance,
 * own frame-loading hook, own narrative layer.
 */
export function AboutHero() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const manifestUrl = isMobile ? SEQUENCE.mobile : SEQUENCE.desktop;
  const { containerRef, canvasRef, ready, stage } = useAboutFrameSequence(
    manifestUrl,
    PIN_TARGET_ID,
    reducedMotion,
    isMobile,
  );

  const firstFramePoster = isMobile
    ? "/videos/about/sequence-mobile/frame-001.webp"
    : "/videos/about/sequence/frame-001.webp";

  return (
    <section
      id={PIN_TARGET_ID}
      aria-label="About ACUBE — our story"
      className="theme-dark relative isolate flex h-dvh flex-col overflow-hidden bg-ink-black lg:flex-row"
    >
      <div
        ref={containerRef}
        aria-hidden
        className="relative h-[45vh] w-full shrink-0 overflow-hidden lg:h-full lg:w-[60%]"
      >
        <Image src={firstFramePoster} alt="" fill priority sizes="60vw" className="object-cover" />
        {!reducedMotion && ready ? (
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        ) : null}
        {/* A quiet atmospheric vignette — grounds the frame without any
            "fade to page background" implication (this column stays pinned
            for the whole 300vh story, so a bottom wash toward the light
            page bg would look odd mid-narrative, not just at handoff). */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-black/35 via-transparent to-ink-black/10"
        />

        {/* Floating glass chips in the frame's negative space (lg+). */}
        <AboutHeroChips />
      </div>

      <div className={cn(container.content, "relative flex flex-1 items-center py-12 lg:w-[40%] lg:py-0")}>
        <AboutHeroText stage={reducedMotion ? 0 : stage} className="max-w-lg" />
      </div>

      {aboutStory.length > 1 ? (
        <ul
          aria-hidden
          className="pointer-events-none absolute bottom-8 left-1/2 z-[1] flex -translate-x-1/2 gap-2 lg:bottom-10"
        >
          {aboutStory.map((item, index) => (
            <li
              key={item.heading}
              className={cn(
                "h-1 rounded-full transition-all duration-[var(--duration-normal)] ease-out-quart",
                (reducedMotion ? 0 : stage) === index ? "w-6 bg-gold" : "w-1.5 bg-platinum/30",
              )}
            />
          ))}
        </ul>
      ) : null}
    </section>
  );
}
