import { Check } from "lucide-react";

import { Button } from "@/components/ui";
import { story } from "@/constants";
import { cn, container, glassVariants, typography } from "@/lib";

import { StoryAnimator } from "./StoryAnimator";
import { StoryBeat } from "./StoryBeat";
import { StorySpine } from "./StorySpine";
import { StoryStatement } from "./StoryStatement";
import { WhyUAE } from "./WhyUAE";

/**
 * Business Story — answers "Why should I trust ACUBE?" through an editorial,
 * scroll-revealed narrative: Opportunity → Complexity → Solution → Assurance →
 * Forward. Server Component; the client StoryAnimator enhances the DOM.
 *
 * Heading hierarchy: the single <h1> lives in the Hero. Beat 1's statement is
 * this section's <h2>; all other statements and card titles are <h3>.
 */
export function BusinessStory() {
  return (
    <section
      id="business-story"
      aria-labelledby="story-opportunity"
      className="relative isolate overflow-hidden bg-background"
    >
      {/* Subtle brand-tinted atmosphere (<=5%): red near the top, green toward Services. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: [
            "linear-gradient(180deg,",
            "color-mix(in srgb, var(--color-brand-red) 4%, transparent) 0%,",
            "transparent 28%, transparent 72%,",
            "color-mix(in srgb, var(--color-brand-green) 4%, transparent) 100%)",
          ].join(" "),
        }}
      />

      <StoryAnimator>
        <div className={cn(container.content, "relative")}>
          <StorySpine />

          {/* BEAT 1 — Opportunity + Why UAE */}
          <StoryBeat eyebrow={story.opportunity.eyebrow}>
            <StoryStatement id="story-opportunity" level="h2" lines={story.opportunity.statement} />
            <p data-reveal className={cn(typography.body, "mt-8 max-w-2xl text-muted")}>
              {story.opportunity.body}
            </p>
            <WhyUAE className="mt-12" />
          </StoryBeat>

          {/* BEAT 2 — Complexity */}
          <StoryBeat eyebrow={story.complexity.eyebrow}>
            <StoryStatement level="h3" lines={story.complexity.statement} />
            <p data-reveal className={cn(typography.body, "mt-8 max-w-2xl text-muted")}>
              {story.complexity.body}
            </p>
            <ul data-reveal-stagger className="mt-8 flex max-w-2xl flex-col gap-4">
              {story.complexity.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
                  <span className={cn(typography.body, "text-muted")}>{point}</span>
                </li>
              ))}
            </ul>
          </StoryBeat>

          {/* BEAT 3 — Solution / Why ACUBE */}
          <StoryBeat eyebrow={story.solution.eyebrow}>
            <StoryStatement level="h3" lines={story.solution.statement} />
            <p data-reveal className={cn(typography.body, "mt-8 max-w-2xl text-muted")}>
              {story.solution.body}
            </p>
            <ul data-reveal-stagger className="mt-8 flex flex-wrap gap-3">
              {story.solution.values.map((value) => (
                <li
                  key={value.id}
                  className={cn(glassVariants.base, "rounded-full px-4 py-2 text-caption text-muted")}
                >
                  {value.label}
                </li>
              ))}
            </ul>
          </StoryBeat>

          {/* BEAT 4 — Assurance */}
          <StoryBeat eyebrow={story.assurance.eyebrow}>
            <StoryStatement level="h3" lines={story.assurance.statement} />
            <p data-reveal className={cn(typography.body, "mt-8 max-w-2xl text-muted")}>
              {story.assurance.body}
            </p>
          </StoryBeat>

          {/* BEAT 5 — Forward / Transition to Services */}
          <StoryBeat>
            <StoryStatement level="h3" lines={story.transition.statement} />
            <div data-reveal className="mt-10">
              <Button href={story.transition.ctaHref} variant="primary" size="lg">
                {story.transition.ctaLabel}
              </Button>
            </div>
          </StoryBeat>
        </div>
      </StoryAnimator>
    </section>
  );
}
