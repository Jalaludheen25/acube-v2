import { RevealRoot } from "@/components/motion";
import { Button } from "@/components/ui";
import { siteConfig } from "@/constants";
import { cn, container, typography } from "@/lib";

/**
 * Closing call-to-action band on the landing page — a gradient-surfaced panel
 * with a gold gradient headline and the primary consultation CTA. Server
 * Component.
 */
export function HomeCtaBand() {
  return (
    <section aria-labelledby="home-cta-heading" className="relative bg-background">
      <div className={cn(container.content, "pb-24 lg:pb-32")}>
        <RevealRoot>
          <div
            data-reveal
            className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-grad-surface px-8 py-16 text-center lg:px-16 lg:py-24"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grad-hero opacity-60"
            />
            <div className="relative">
              <h2
                id="home-cta-heading"
                className={cn(typography.display, "mx-auto max-w-2xl text-balance")}
              >
                <span className="text-grad-gold">Ready to build your business in the UAE?</span>
              </h2>
              <p className={cn(typography.body, "mx-auto mt-6 max-w-xl text-muted")}>
                Tell us where you are — we&apos;ll take it from there. No pressure, no obligation.
              </p>
              <Button href="/contact" variant="primary" size="lg" className="mt-10">
                {siteConfig.cta.primary}
              </Button>
            </div>
          </div>
        </RevealRoot>
      </div>
    </section>
  );
}
