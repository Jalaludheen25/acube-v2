import { HeroContent } from "./HeroContent";
import { HeroFrameSequence } from "./HeroFrameSequence";

/**
 * Hero section — the signature experience.
 *
 * Server Component. Layers, back to front:
 *   1. 120-frame scroll-scrubbed canvas sequence (decorative, aria-hidden,
 *      pointer-events-none) with a built-in contrast scrim
 *   2. HTML content (single H1, subhead, CTAs, trust, scroll indicator)
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

      <HeroContent />
    </section>
  );
}
