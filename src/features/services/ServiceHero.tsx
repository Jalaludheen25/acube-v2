"use client";

import Image from "next/image";
import { m } from "framer-motion";

import { Magnetic } from "@/components/motion";
import { Button } from "@/components/ui";
import { serviceHero } from "@/constants";
import { useVideoOnce } from "@/hooks";
import { cn, container, typography } from "@/lib";

import {
  serviceHeroContentVariants,
  serviceHeroCtaVariants,
  serviceHeroItemVariants,
} from "./serviceHeroMotion";

/**
 * Services page introduction — a cinematic 70vh video hero, deliberately
 * different from the Home page's pinned canvas-frame-sequence hero: real
 * footage via a native `<video>`, playing once and freezing on its last
 * frame, in a fixed-height (not pinned) section that scrolls away normally.
 */
export function ServiceHero() {
  const { videoRef, containerRef } = useVideoOnce();

  return (
    <section
      ref={containerRef}
      aria-label="Services introduction"
      className="theme-dark relative isolate flex h-[70vh] min-h-[520px] items-center overflow-hidden"
    >
      <Image
        src={serviceHero.video.poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        poster={serviceHero.video.poster}
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[1200ms] ease-out"
        onCanPlay={(event) => {
          event.currentTarget.style.opacity = "1";
        }}
      >
        <source src={serviceHero.video.webm} type="video/webm" />
        <source src={serviceHero.video.mp4} type="video/mp4" />
      </video>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-services-hero-scrim" />

      <div className={cn(container.content, "relative z-[var(--z-content)]")}>
        <m.div
          variants={serviceHeroContentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <m.h1
            variants={serviceHeroItemVariants}
            className={cn(typography.display, "text-balance text-grad-gold")}
          >
            {serviceHero.title}
          </m.h1>
          <m.p
            variants={serviceHeroItemVariants}
            className={cn(typography.body, "mt-6 max-w-xl text-muted")}
          >
            {serviceHero.subtitle}
          </m.p>
          <m.div
            variants={serviceHeroCtaVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <m.div variants={serviceHeroItemVariants}>
              <Magnetic>
                <Button href={serviceHero.primaryCta.href} variant="primary" size="lg">
                  {serviceHero.primaryCta.label}
                </Button>
              </Magnetic>
            </m.div>
            <m.div variants={serviceHeroItemVariants}>
              {/* glass-interactive's ~4% tint (tuned for the site's own
                  controlled surfaces) isn't nearly opaque enough over real,
                  unpredictable video content. glass-interactive is a custom
                  @utility, not a standard Tailwind color utility, so
                  tailwind-merge won't dedupe it against a plain bg-* class —
                  the `!` important modifier guarantees this override wins
                  regardless of generated-CSS source order. */}
              <Button
                href={serviceHero.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="border-platinum/50! bg-ink-black/45! backdrop-blur-md! hover:bg-ink-black/60!"
              >
                {serviceHero.secondaryCta.label}
              </Button>
            </m.div>
          </m.div>
        </m.div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-8 flex justify-center text-muted">
        <span className="inline-flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5">
          <span className="h-2 w-1 rounded-full bg-muted motion-safe:animate-bounce" />
        </span>
      </div>
    </section>
  );
}
