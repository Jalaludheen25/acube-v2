"use client";

import Image from "next/image";
import { m } from "framer-motion";

import { contactContent } from "@/constants";
import { useVideoOnce } from "@/hooks";
import { cn, container, typography } from "@/lib";

import { contactHeroContentVariants, contactHeroItemVariants } from "./contactHeroMotion";

const VIDEO = {
  mp4: "/videos/contact/hero.mp4",
  webm: "/videos/contact/hero.webm",
  poster: "/videos/contact/poster.webp",
};

/**
 * Contact page introduction — the grand finale opens on real footage: a
 * cinematic ~65vh video hero (same proven anatomy as the Services hero:
 * poster paints instantly, the video cross-fades in, plays once, freezes on
 * its final frame, pauses off-screen, and never autoplays under reduced
 * motion), dissolving into the dark experience below.
 */
export function ContactHero() {
  const { videoRef, containerRef } = useVideoOnce();

  return (
    <section
      ref={containerRef}
      aria-label="Contact ACUBE"
      className="theme-dark relative isolate flex h-[65vh] min-h-[480px] items-center overflow-hidden bg-ink-black"
    >
      <Image src={VIDEO.poster} alt="" fill priority sizes="100vw" className="object-cover" />

      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        poster={VIDEO.poster}
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[1200ms] ease-out"
        onCanPlay={(event) => {
          event.currentTarget.style.opacity = "1";
        }}
      >
        <source src={VIDEO.webm} type="video/webm" />
        <source src={VIDEO.mp4} type="video/mp4" />
      </video>

      {/* Readability wash; the bottom stays dark — the page continues dark. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-black/55 via-ink-black/35 to-ink-black"
      />

      <div className={cn(container.content, "relative z-[var(--z-content)]")}>
        <m.div
          variants={contactHeroContentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <m.p
            variants={contactHeroItemVariants}
            className={cn(typography.label, "flex items-center gap-3 text-gold")}
          >
            <span aria-hidden className="h-px w-8 bg-gold/60" />
            {contactContent.eyebrow}
          </m.p>
          <m.h1
            variants={contactHeroItemVariants}
            className={cn(typography.display, "mt-6 text-balance text-grad-gold")}
          >
            {contactContent.headline}
          </m.h1>
          <m.p
            variants={contactHeroItemVariants}
            className={cn(typography.body, "mt-6 max-w-xl text-muted")}
          >
            {contactContent.invitation}
          </m.p>
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
