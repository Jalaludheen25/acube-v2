import type { FaqItem as Item } from "@/types";
import { cn, typography } from "@/lib";

interface FaqItemProps {
  item: Item;
  index: number;
}

/**
 * A single FAQ entry — native <details>/<summary>, zero JavaScript.
 *
 * Interaction is fully native (keyboard + screen reader correct by default,
 * independent open/close). Premium dressing only: a mono index, a row hover
 * sweep, a plus→minus icon morph on open (two CSS bars), and a slide-down
 * entrance for the answer (`.faq-answer` keyframes in globals.css).
 */
export function FaqItem({ item, index }: FaqItemProps) {
  return (
    <details className="group border-t border-divider">
      <summary className="row-hover flex cursor-pointer list-none items-center justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden">
        <span className="flex items-baseline gap-5">
          <span
            aria-hidden
            className={cn(
              typography.label,
              "text-muted/60 transition-colors duration-[var(--duration-normal)] group-open:text-gold group-hover:text-gold",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-heading text-h3 font-medium text-foreground transition-colors duration-[var(--duration-normal)] ease-out-quart group-hover:text-gold">
            {item.question}
          </span>
        </span>
        {/* Plus → minus morph: vertical bar rotates away on open. */}
        <span aria-hidden className="relative size-5 shrink-0">
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gold" />
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold transition-transform duration-[var(--duration-normal)] ease-out-quart group-open:rotate-90 group-open:scale-y-0 motion-reduce:transition-none" />
        </span>
      </summary>
      <div className="faq-answer">
        <p className={cn(typography.body, "max-w-2xl pb-8 pl-0 text-muted lg:pl-12")}>
          {item.answer}
        </p>
      </div>
    </details>
  );
}
