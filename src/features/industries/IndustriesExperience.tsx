import { FloatingCube, RevealRoot } from "@/components/motion";
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

        {/* Warm counter-light + extra ray so the backdrop reads green/gold/red. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_100%,color-mix(in_srgb,var(--color-blushed-brick)_10%,transparent)_0%,transparent_55%)]" />
          <span className="absolute -top-1/4 left-0 h-[150%] w-24 bg-gradient-to-b from-transparent via-celadon/10 to-transparent blur-xl motion-safe:[animation:light-ray_32s_linear_infinite] motion-safe:[animation-delay:-16s] max-md:hidden" />
        </div>

        {/* Floating brand cubes — bold 3D presence at varied depths (lg+). */}
        <FloatingCube size="lg" className="right-[5%] top-20 max-lg:hidden" duration="15s" />
        <FloatingCube size="sm" className="left-[3%] top-[45%] max-lg:hidden" duration="19s" delay="-7s" />
        <FloatingCube size="md" className="right-[12%] bottom-[12%] max-lg:hidden" duration="12s" delay="-4s" />

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

          <div data-reveal-tilt className="mt-16 max-w-3xl border-t border-divider pt-12">
            <p data-words-scrub className={cn(typography.body, "text-muted")}>{industries.notListed}</p>
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
