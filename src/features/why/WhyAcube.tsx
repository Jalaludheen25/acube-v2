import { RevealRoot } from "@/components/motion";
import { SectionIntro } from "@/components/sections";
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
interface WhyAcubeProps {
  as?: "h1" | "h2";
}

export function WhyAcube({ as = "h2" }: WhyAcubeProps) {
  return (
    <section
      id="why-acube"
      aria-labelledby="why-heading"
      className="relative section-exhale overflow-hidden"
    >
      <RevealRoot>
        <div className={cn(container.content, "relative pb-24 max-lg:pt-0 lg:py-32")}>
          <div
            aria-hidden
            data-parallax="0.16"
            className="blob bg-grad-celadon pointer-events-none absolute -right-32 top-10 size-96 opacity-15 blur-3xl"
          />
          <SectionIntro
            as={as}
            eyebrow={why.eyebrow}
            title={why.headline}
            titleId="why-heading"
            split
            lede={why.intro}
          />

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
