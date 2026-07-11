import type { FaqItem as Item } from "@/types";
import { cn, typography } from "@/lib";

interface FaqItemProps {
  item: Item;
  index: number;
}

/**
 * A single FAQ entry — a glass card around a native <details>/<summary>.
 *
 * Interaction stays fully native (keyboard + screen reader correct by
 * default, independent open/close). Premium dressing: glass card with
 * cursor spotlight + hover lift, a mono index, a plus→minus icon morph on
 * open, a slide-down answer entrance, and — in Chromium — a genuinely
 * animated height via `interpolate-size` (see `details.faq-card` in
 * globals.css; other browsers fall back gracefully).
 */
export function FaqItem({ item, index }: FaqItemProps) {
  return (
    <details className="faq-card glass card-spotlight group overflow-hidden rounded-2xl border border-border/60 shadow-3d transition-[transform,box-shadow,border-color] duration-[var(--duration-normal)] ease-out-quart open:border-gold/30 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-3d-lg">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 [&::-webkit-details-marker]:hidden lg:px-8">
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
        <p className={cn(typography.body, "max-w-2xl px-6 pb-8 text-muted lg:px-8 lg:pl-[4.75rem]")}>
          {item.answer}
        </p>
      </div>
    </details>
  );
}
