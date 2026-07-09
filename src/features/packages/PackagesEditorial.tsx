"use client";

import { AnimatePresence, m } from "framer-motion";

import { packageTiers } from "@/constants";
import { cn, typography } from "@/lib";

import { tierAccents } from "./tierAccents";
import {
  tierBodyVariants,
  tierCharVariants,
  tierHeadingContainerVariants,
  tierStageExitVariants,
} from "./packagesMotion";

interface PackagesEditorialProps {
  stage: number;
}

/**
 * Left editorial column of the pinned scene — giant numeral watermark,
 * character-revealed tier title, tagline/description, and the scroll
 * progress rail (fill driven by the section's `--pkg-progress` CSS var,
 * written by the ScrollTrigger without React re-renders). Re-composes per
 * stage via AnimatePresence, same repeatable pattern as the About hero.
 */
export function PackagesEditorial({ stage }: PackagesEditorialProps) {
  const tier = packageTiers[stage] ?? packageTiers[0];
  if (!tier) return null;
  const accent = tierAccents[tier.accent];
  const chars = Array.from(tier.name);

  return (
    <div className="relative">
      <p className={cn(typography.label, "flex items-center gap-3 text-gold")}>
        <span aria-hidden className="h-px w-8 bg-gold/60" />
        Packages
      </p>

      <div className="relative mt-6 min-h-[16rem]">
        <span
          aria-hidden
          className="index-giant text-stroke pointer-events-none absolute -top-8 left-0 select-none opacity-30"
        >
          {tier.number}
        </span>

        <AnimatePresence mode="wait">
          <m.div
            key={stage}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tierStageExitVariants}
            className="relative pt-10"
          >
            <m.h2
              variants={tierHeadingContainerVariants}
              aria-label={tier.name}
              className={cn(typography.hero, "text-foreground")}
            >
              {chars.map((char, index) => (
                <m.span key={index} variants={tierCharVariants} aria-hidden className="inline-block">
                  {char}
                </m.span>
              ))}
            </m.h2>
            <m.p variants={tierBodyVariants} className={cn(typography.h3, "mt-4", accent.text)}>
              {tier.tagline}
            </m.p>
            <m.p variants={tierBodyVariants} className={cn(typography.body, "mt-4 max-w-md text-muted")}>
              {tier.description}
            </m.p>
            <m.p variants={tierBodyVariants} className="mt-6">
              <span
                className={cn(
                  "inline-flex items-center rounded-full border px-4 py-1.5 text-caption",
                  accent.border,
                  accent.text,
                )}
              >
                {tier.idealFor}
              </span>
            </m.p>
          </m.div>
        </AnimatePresence>
      </div>

      {/* Progress rail — fill width follows the pin's scroll progress. */}
      <div className="mt-14 max-w-sm">
        <div className="flex items-center justify-between">
          <span className={cn(typography.label, "text-muted")}>
            {tier.number} / {String(packageTiers.length).padStart(2, "0")}
          </span>
          <span className="flex gap-2">
            {packageTiers.map((item, index) => (
              <span
                key={item.id}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-[var(--duration-normal)] ease-out-quart",
                  index === stage ? cn("w-6", accent.chip) : "w-1.5 bg-platinum/20",
                )}
              />
            ))}
          </span>
        </div>
        <div className="mt-3 h-px w-full overflow-hidden rounded-full bg-platinum/15">
          <span
            className="block h-full origin-left bg-gradient-to-r from-celadon via-champagne to-blushed-brick"
            style={{ transform: "scaleX(var(--pkg-progress, 0))" }}
          />
        </div>
      </div>

      <a
        href="#package-comparison"
        className="hover-underline mt-10 inline-block w-fit text-body-sm font-medium text-gold"
      >
        Compare all packages
      </a>
    </div>
  );
}
