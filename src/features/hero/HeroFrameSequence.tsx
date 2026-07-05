"use client";

import Image from "next/image";

import { useMediaQuery, usePrefersReducedMotion } from "@/hooks";

import { useHeroFrameSequence } from "./useHeroFrameSequence";

const MOBILE_QUERY = "(max-width: 1023px)";

const SEQUENCE = {
  desktop: { manifestUrl: "/hero/sequence/manifest.json", posterSrc: "/hero/sequence/frame-120.webp" },
  mobile: { manifestUrl: "/hero/sequence-mobile/manifest.json", posterSrc: "/hero/sequence-mobile/frame-120.webp" },
};

/**
 * Hero backdrop — a 120-frame cube-logo → Dubai skyline sequence, scrubbed by
 * scroll (pinned for ~100vh on desktop, ~60vh on mobile) via
 * `useHeroFrameSequence`. Frame 120 (the resolved skyline) is the real, SSR'd
 * `next/image` poster: it's what paints for LCP, before JS, and for
 * `prefers-reduced-motion`. The canvas is a progressive enhancement layered
 * on top once frames are loaded.
 *
 * Below `lg` (1024px), a separate pre-cropped/pre-shrunk portrait sequence is
 * used instead of the desktop landscape frames. `isMobile` comes from
 * `useMediaQuery`, which — like the server — starts `false` and only resolves
 * client-side after mount; a synchronous `window.matchMedia` read here would
 * disagree with the server's SSR output (no `window`) and break hydration.
 * The brief window before it resolves costs one wasted manifest/eager-preload
 * fetch on mobile, not a hydration mismatch.
 */
export function HeroFrameSequence() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const { manifestUrl, posterSrc } = isMobile ? SEQUENCE.mobile : SEQUENCE.desktop;
  const { containerRef, canvasRef, ready } = useHeroFrameSequence(manifestUrl, reducedMotion, isMobile);

  return (
    <div ref={containerRef} aria-hidden className="absolute inset-0 overflow-hidden">
      <Image src={posterSrc} alt="" fill priority sizes="100vw" className="object-cover" />
      {!reducedMotion && ready ? (
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      ) : null}
      {/* Guarantees WCAG AA text contrast over the sequence regardless of frame content. */}
      <div className="absolute inset-0 bg-grad-hero-scrim" />
    </div>
  );
}
