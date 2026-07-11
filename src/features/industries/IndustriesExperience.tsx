import { RevealRoot } from "@/components/motion";
import { Atmosphere, SectionIntro } from "@/components/sections";
import { Button } from "@/components/ui";
import { industries } from "@/constants";
import { cn, container, typography } from "@/lib";

import { IndustryRoster } from "./IndustryRoster";

/**
 * Industries Experience — answers "Who do you help?".
 *
 * An interactive sector grid: pointer-tracked 3D glass cards over a living
 * ambient backdrop, opened by a split heading and a real count-up (the true
 * sector count — no invented figures). Framed as "we help businesses
 * establish themselves in these sectors" — no claim of exclusive expertise.
 * Server Component; RevealRoot enhances the DOM.
 *
 * Semantics: section <h2>; sectors are a <ul> (not sub-headings).
 */
interface IndustriesExperienceProps {
  as?: "h1" | "h2";
}

export function IndustriesExperience({ as = "h2" }: IndustriesExperienceProps) {
  const sectorCount = industries.sectors.length;

  return (
    <section id="industries" aria-labelledby="industries-heading" className="relative overflow-hidden bg-background">
      <RevealRoot>
        <Atmosphere />

        {/* Floating brand cube — quiet 3D depth in the corner (lg+). */}
        <div aria-hidden className="pointer-events-none absolute right-[6%] top-24 [perspective:900px] max-lg:hidden">
          <div className="relative size-12 [transform-style:preserve-3d] motion-safe:[animation:cube-drift_14s_ease-in-out_infinite]">
            <span className="absolute inset-0 border border-celadon/30 bg-celadon/10 [transform:translateZ(1.5rem)]" />
            <span className="absolute inset-0 border border-champagne/30 bg-champagne/10 [transform:rotateY(90deg)_translateZ(1.5rem)]" />
            <span className="absolute inset-0 border border-blushed-brick/30 bg-blushed-brick/10 [transform:rotateX(90deg)_translateZ(1.5rem)]" />
          </div>
        </div>

        <div className={cn(container.content, "relative pb-24 max-lg:pt-0 lg:py-32")}>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionIntro
              as={as}
              eyebrow={industries.eyebrow}
              title={industries.framing}
              titleId="industries-heading"
              size="h2"
              split
            />
            {/* Real figure: the number of sectors listed below. */}
            <p data-reveal className="shrink-0 text-right">
              <span
                className="text-grad-pine block font-display text-display font-semibold tracking-tight"
                data-count={sectorCount}
              >
                {sectorCount}
              </span>
              <span className={cn(typography.label, "mt-1 block text-muted")}>Key sectors</span>
            </p>
          </div>

          <div data-reveal-wipe aria-hidden className="mt-12 h-px w-full bg-gradient-to-r from-gold/50 via-divider to-transparent" />

          <IndustryRoster className="mt-12" />

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
