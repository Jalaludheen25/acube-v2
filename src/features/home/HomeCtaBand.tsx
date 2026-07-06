import { Magnetic, RevealRoot } from "@/components/motion";
import { Button } from "@/components/ui";
import { siteConfig } from "@/constants";
import { cn, container, typography } from "@/lib";

/**
 * Closing call-to-action band — a dark Pine→Ink emphasis panel with a slowly
 * rotating conic light ring, morphing parallax orbs, a per-character headline
 * reveal, and a magnetic CTA. Server Component; Magnetic is an inert leaf.
 */
export function HomeCtaBand() {
  return (
    <section aria-labelledby="home-cta-heading" className="relative bg-background">
      <div className={cn(container.content, "py-24 lg:py-32")}>
        <RevealRoot>
          <div
            data-reveal-scale
            className="section-exhale texture ring-conic border-grad glow-celadon relative overflow-hidden rounded-[var(--radius-2xl)] bg-grad-emerald animated-gradient px-8 py-16 text-center lg:px-16 lg:py-24"
          >
            {/* Floating atmosphere behind the copy. */}
            <div
              aria-hidden
              data-parallax="0.2"
              className="blob bg-grad-celadon pointer-events-none absolute -left-20 -top-24 size-72 opacity-15 blur-3xl"
            />
            <div
              aria-hidden
              data-parallax="-0.14"
              className="blob bg-grad-cta pointer-events-none absolute -bottom-28 -right-16 size-80 opacity-20 blur-3xl"
            />

            <h2
              id="home-cta-heading"
              className={cn(typography.display, "relative mx-auto max-w-2xl text-balance")}
            >
              <span data-split className="text-grad-gold">
                Ready to build your business in the UAE?
              </span>
            </h2>
            <p className={cn(typography.body, "relative mx-auto mt-6 max-w-xl text-muted")}>
              Tell us where you are — we&apos;ll take it from there. No pressure, no obligation.
            </p>
            <Magnetic className="relative mt-10 inline-block">
              <Button href="/contact" variant="primary" size="lg">
                {siteConfig.cta.primary}
              </Button>
            </Magnetic>
          </div>
        </RevealRoot>
      </div>
    </section>
  );
}
