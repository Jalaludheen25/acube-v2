import { HeroContent } from "./HeroContent";
import { HeroPoster } from "./HeroPoster";

/**
 * Hero section — the signature experience.
 *
 * Server Component. Layers, back to front:
 *   1. WebGL scene / CSS poster (decorative, aria-hidden, pointer-events-none)
 *   2. Left contrast scrim (guarantees WCAG AA text contrast over the scene)
 *   3. HTML content (single H1, subhead, CTAs, trust, scroll indicator)
 *
 * The canvas is lazy + ssr:false, so the HTML content always renders before the
 * WebGL. `#hero` is the nav scrollspy anchor and the Entry Experience hand-off.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="theme-dark relative isolate min-h-dvh overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <HeroPoster />
      </div>

      <HeroContent />
    </section>
  );
}
