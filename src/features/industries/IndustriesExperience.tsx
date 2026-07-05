import { RevealRoot } from "@/components/motion";
import { SectionIntro } from "@/components/sections";
import { Button } from "@/components/ui";
import { industries } from "@/constants";
import { cn, container, typography } from "@/lib";

import { IndustryRoster } from "./IndustryRoster";

/**
 * Industries Experience — answers "Who do you help?".
 *
 * The quietest section of the site: a large-typographic editorial roster where
 * every sector is instantly scannable. Framed as "we help businesses establish
 * themselves in these sectors" — no claim of exclusive expertise. Grouped
 * reveals only (opener / roster / CTA), no per-item motion, no icons/cards/glass.
 * Server Component; RevealRoot enhances the DOM. One concise CTA at the end.
 *
 * Semantics: section <h2>; sectors are a <ul> (not sub-headings).
 */
interface IndustriesExperienceProps {
  as?: "h1" | "h2";
}

export function IndustriesExperience({ as = "h2" }: IndustriesExperienceProps) {
  return (
    <section id="industries" aria-labelledby="industries-heading" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "pb-24 max-lg:pt-0 lg:py-32")}>
          <SectionIntro
            as={as}
            eyebrow={industries.eyebrow}
            title={industries.framing}
            titleId="industries-heading"
            size="h2"
            split
          />

          <IndustryRoster className="mt-16" />

          <div data-reveal className="mt-16 max-w-3xl border-t border-divider pt-12">
            <p className={cn(typography.body, "text-muted")}>{industries.notListed}</p>
            <Button
              href={industries.cta.href}
              variant="primary"
              size="lg"
              className="mt-6"
            >
              {industries.cta.label}
            </Button>
          </div>
        </div>
      </RevealRoot>
    </section>
  );
}
