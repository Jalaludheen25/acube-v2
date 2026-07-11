"use client";

import { AnimatePresence, m } from "framer-motion";

import { aboutStory } from "@/constants";
import { cn, typography } from "@/lib";

import {
  aboutBodyVariants,
  aboutCharVariants,
  aboutHeadingContainerVariants,
  aboutStageExitVariants,
} from "./aboutStoryMotion";

interface AboutHeroTextProps {
  stage: number;
  className?: string;
}

/**
 * The About hero's active story chapter — heading splits into characters
 * that fade/slide/blur in with a stagger, body follows after a short delay.
 * Keyed by `stage` so AnimatePresence swaps chapters as the pinned canvas
 * scrubs through the sequence; each entrance replays (unlike RevealRoot's
 * one-time reveals), which is the point of a scroll-scrubbed narrative.
 */
const FALLBACK_STAGE = { heading: "", body: "" };

export function AboutHeroText({ stage, className }: AboutHeroTextProps) {
  const current = aboutStory[stage] ?? aboutStory[0] ?? FALLBACK_STAGE;
  const chars = Array.from(current.heading);

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait">
        <m.div
          key={stage}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={aboutStageExitVariants}
        >
          {/* Gradient is clipped PER character: background-clip:text on the
              h1 can't reach spans that carry their own filter/transform
              (Framer leaves blur(0px) inline), which renders the text
              invisible. whitespace-pre keeps space glyphs from collapsing
              inside inline-block spans. */}
          <m.h1
            variants={aboutHeadingContainerVariants}
            className={cn(typography.h1, "text-balance")}
            aria-label={current.heading}
          >
            {chars.map((char, index) => (
              <m.span
                key={index}
                variants={aboutCharVariants}
                aria-hidden
                className="text-grad-gold inline-block whitespace-pre"
              >
                {char === " " ? " " : char}
              </m.span>
            ))}
          </m.h1>
          <m.p variants={aboutBodyVariants} className={cn(typography.body, "mt-6 max-w-md text-muted")}>
            {current.body}
          </m.p>
        </m.div>
      </AnimatePresence>
    </div>
  );
}
