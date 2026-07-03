"use client";

import { m } from "framer-motion";

import { Button } from "@/components/ui";
import { hero, siteConfig } from "@/constants";
import { cn, typography } from "@/lib";

import { HeroTrust } from "./HeroTrust";
import { heroContentVariants, heroItemVariants } from "./heroMotion";

/**
 * Hero HTML content — the entire semantic payload of the Hero.
 *
 * The single <h1> renders opaque and is NOT animated (LCP-safe, always visible
 * without JS). The supporting elements (eyebrow, subhead, CTAs, trust) reveal
 * via a subtle Framer stagger consuming motion tokens; reduced motion collapses
 * them to instant via the global MotionConfig.
 */
export function HeroContent() {
  return (
    <div className="container-wide relative z-[var(--z-content)] flex min-h-dvh flex-col justify-center py-32">
      <m.div variants={heroContentVariants} initial="hidden" animate="visible" className="max-w-3xl">
        <m.p
          variants={heroItemVariants}
          className={cn(typography.label, "flex items-center gap-3 text-gold")}
        >
          <span aria-hidden className="h-px w-8 bg-gold/60" />
          {hero.eyebrow}
        </m.p>

        <h1 className={cn(typography.hero, "mt-6 text-balance text-foreground")}>
          {hero.headlineLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <m.p
          variants={heroItemVariants}
          className={cn(typography.body, "mt-8 max-w-xl text-muted")}
        >
          {hero.subhead}
        </m.p>

        <m.div variants={heroItemVariants} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/contact" variant="primary" size="lg">
            {siteConfig.cta.primary}
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            {siteConfig.cta.secondary}
          </Button>
        </m.div>

        <m.div variants={heroItemVariants}>
          <HeroTrust className="mt-12" />
        </m.div>
      </m.div>

      {/* Scroll indicator — decorative, reduced-motion safe (CSS). */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-8 flex justify-center text-muted"
      >
        <span className="inline-flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5">
          <span className="h-2 w-1 rounded-full bg-muted motion-safe:animate-bounce" />
        </span>
      </div>
    </div>
  );
}
