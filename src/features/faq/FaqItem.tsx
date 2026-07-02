import { ChevronDown } from "lucide-react";

import type { FaqItem as Item } from "@/types";
import { cn, typography } from "@/lib";

interface FaqItemProps {
  item: Item;
}

/**
 * A single FAQ entry — native <details>/<summary>, zero JavaScript.
 *
 * Interaction is fully native (keyboard + screen reader correct by default,
 * independent open/close). The only animation is the chevron rotating on open;
 * the answer appears immediately (no sliding/expansion). Hairline divider only —
 * no box, no card. The default disclosure marker is hidden in favor of the chevron.
 */
export function FaqItem({ item }: FaqItemProps) {
  return (
    <details className="group border-t border-divider">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
        <span className="font-heading text-body font-medium text-foreground">{item.question}</span>
        <ChevronDown
          aria-hidden
          className="size-5 shrink-0 text-muted transition-transform duration-[var(--duration-normal)] ease-out-quart group-open:rotate-180 motion-reduce:transition-none"
        />
      </summary>
      <p className={cn(typography.body, "max-w-2xl pb-6 text-muted")}>{item.answer}</p>
    </details>
  );
}
