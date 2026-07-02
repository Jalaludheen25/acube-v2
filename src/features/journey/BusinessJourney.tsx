import { RevealRoot } from "@/components/motion";
import { SectionIntro } from "@/components/sections";
import { Button } from "@/components/ui";
import { journey } from "@/constants";
import { cn, container, typography } from "@/lib";

import { JourneyPath } from "./JourneyPath";
import { JourneyStage } from "./JourneyStage";

/**
 * Business Journey — answers "What happens after I contact ACUBE?".
 *
 * A guided editorial path (not a timeline): a whisper-faint guide line beside
 * five concise stages. Motion is grouped, not per-stage — the opener, the stage
 * group, and the CTA each reveal once, so the section feels continuous rather
 * than sequential. Server Component; RevealRoot enhances the DOM.
 *
 * Semantics: an ordered list (<ol>, list numbers hidden) preserves sequence for
 * assistive tech without a "numbered list" look. Section <h2>, stages <h3>.
 * The single consultation CTA appears once, at the end.
 */
export function BusinessJourney() {
  return (
    <section id="process" aria-labelledby="journey-heading" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "py-24 lg:py-32")}>
          <SectionIntro
            eyebrow={journey.eyebrow}
            title={journey.framing}
            titleId="journey-heading"
          />

          <div className="relative mt-16 lg:mt-24">
            <JourneyPath />
            <ol data-reveal className="list-none pl-8 lg:pl-12">
              {journey.stages.map((stage) => (
                <JourneyStage key={stage.id} stage={stage} />
              ))}
            </ol>
          </div>

          <div data-reveal className="mt-16 max-w-3xl">
            <p className={cn(typography.body, "text-muted")}>{journey.closing}</p>
            <Button href={journey.cta.href} variant="primary" size="lg" className="mt-6">
              {journey.cta.label}
            </Button>
          </div>
        </div>
      </RevealRoot>
    </section>
  );
}
