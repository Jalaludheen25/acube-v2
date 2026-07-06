import { HeroContent } from "./HeroContent";
import { HeroFrameSequence } from "./HeroFrameSequence";

/**
 * Hero section — the signature experience.
 *
 * Server Component. Layers, back to front:
 *   1. 120-frame scroll-scrubbed canvas sequence (decorative, aria-hidden,
 *      pointer-events-none) with a built-in contrast scrim
 *   2. A composition-only vignette — softens all four edges (heaviest at the
 *      bottom) so attention settles on the content column instead of the
 *      frame's corners; pure CSS, never touches the video/canvas itself
 *   3. HTML content (single H1, subhead, CTAs, trust, scroll indicator)
 *
 * The frame sequence progressively enhances a real SSR'd poster image, so the
 * HTML content and LCP are never blocked by it. `#hero` is both the nav
 * scrollspy anchor and the ScrollTrigger pin target for the sequence.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="theme-dark relative isolate min-h-dvh overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <HeroFrameSequence />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grad-hero-vignette" />

      <HeroContent />
    </section>
  );
}
