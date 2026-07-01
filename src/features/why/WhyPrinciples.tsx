import { why } from "@/constants";
import { cn, typography } from "@/lib";

/**
 * The principles as an editorial definition list. On desktop the term sits in
 * the first column and its one-sentence description in the next two — an
 * aligned, document-like reading rhythm. Typography and hairline dividers only;
 * no icons, cards, or graphics. Reveals as one group (data-reveal on the <dl>).
 */
export function WhyPrinciples() {
  return (
    <dl data-reveal className="mt-16">
      {why.principles.map((principle) => (
        <div
          key={principle.id}
          className="grid gap-2 border-t border-divider py-8 lg:grid-cols-3 lg:gap-8"
        >
          <dt className="font-heading text-h3 font-medium text-foreground lg:col-span-1">
            {principle.term}
          </dt>
          <dd className={cn(typography.body, "text-muted lg:col-span-2 lg:pt-2")}>
            {principle.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}
