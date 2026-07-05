import { why } from "@/constants";
import { cn, typography } from "@/lib";

/**
 * The principles as a numbered editorial sequence — an outlined index
 * numeral, the term, and its one-sentence description, each row separated by
 * a hairline and revealed in a stagger while a gold spine draws down the
 * left edge on scroll. No icons or cards; typography still dominates.
 */
export function WhyPrinciples() {
  return (
    <div className="relative mt-16">
      <span
        aria-hidden
        data-spine
        className="absolute -left-6 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-gold/70 via-divider to-transparent lg:block"
      />
      <dl data-reveal-stagger>
        {why.principles.map((principle, index) => (
          <div
            key={principle.id}
            className="row-hover grid gap-2 border-t border-divider py-9 lg:grid-cols-[6rem_1fr_2fr] lg:items-start lg:gap-8"
          >
            <span aria-hidden className={cn(typography.label, "hidden pt-2 text-gold/70 lg:block")}>
              /{String(index + 1).padStart(2, "0")}
            </span>
            <dt className="font-heading text-h3 font-medium text-foreground">
              <span aria-hidden className={cn(typography.label, "mr-3 text-gold/70 lg:hidden")}>
                /{String(index + 1).padStart(2, "0")}
              </span>
              {principle.term}
            </dt>
            <dd className={cn(typography.body, "text-muted lg:pt-1")}>
              {principle.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
