"use client";

import Image from "next/image";

import { usePrefersReducedMotion } from "@/hooks";

import { useHeroFrameSequence } from "./useHeroFrameSequence";

const MANIFEST_URL = "/hero/sequence/manifest.json";
const POSTER_SRC = "/hero/sequence/frame-120.webp";

/**
 * Hero backdrop — a 120-frame cube-logo → Dubai skyline sequence, scrubbed by
 * scroll (pinned for ~100vh) via `useHeroFrameSequence`. Frame 120 (the
 * resolved skyline) is the real, SSR'd `next/image` poster: it's what paints
 * for LCP, before JS, and for `prefers-reduced-motion`. The canvas is a
 * progressive enhancement layered on top once frames are loaded.
 */
export function HeroFrameSequence() {
  const reducedMotion = usePrefersReducedMotion();
  const { containerRef, canvasRef, ready } = useHeroFrameSequence(MANIFEST_URL, reducedMotion);

  return (
    <div ref={containerRef} aria-hidden className="absolute inset-0 overflow-hidden">
      <Image src={POSTER_SRC} alt="" fill priority sizes="100vw" className="object-cover" />
      {!reducedMotion && ready ? (
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      ) : null}
      {/* Guarantees WCAG AA text contrast over the sequence regardless of frame content. */}
      <div className="absolute inset-0 bg-grad-hero-scrim" />
    </div>
  );
}
