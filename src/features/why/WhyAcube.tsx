import { RevealRoot } from "@/components/motion";
import { why } from "@/constants";
import { cn, container, typography } from "@/lib";

import { WhyPrinciples } from "./WhyPrinciples";

/**
 * Why ACUBE — the trust section. Speaks only about ACUBE (no competitor
 * comparison); the visitor draws the conclusion. A confident headline, a short
 * framing line, and the principles as an editorial definition list. Typography
 * dominates; only spacing, hairline dividers, and restrained color accents.
 *
 * The proof slot renders only when verified content exists (`why.proof`) — never
 * a placeholder. No CTA here: the section flows straight into Packages (M12).
 * Server Component; RevealRoot enhances the DOM. Section <h2>; principles as <dl>.
 */
export function WhyAcube() {
  return (
    <section id="why-acube" aria-labelledby="why-heading" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "py-24 lg:py-32")}>
          <div data-reveal className="max-w-3xl">
            <p className={cn(typography.label, "text-brand-green")}>{why.eyebrow}</p>
            <h2
              id="why-heading"
              className={cn(typography.display, "mt-6 text-balance text-foreground")}
            >
              {why.headline}
            </h2>
            <p className={cn(typography.body, "mt-6 text-muted")}>{why.intro}</p>
          </div>

          <WhyPrinciples />

          {why.proof ? (
            <div data-reveal className="mt-16 border-t border-divider pt-12">
              <p className={cn(typography.h3, "text-foreground")}>{why.proof.headline}</p>
              <dl className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {why.proof.items.map((item) => (
                  <div key={item.id}>
                    <dt className="font-heading text-h2 font-semibold text-foreground">
                      {item.value}
                    </dt>
                    <dd className="text-caption text-muted">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
        </div>
      </RevealRoot>
    </section>
  );
}
