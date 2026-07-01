import { story } from "@/constants";
import { cn } from "@/lib";

import { WhyUaeCard } from "./WhyUaeCard";

interface WhyUAEProps {
  className?: string;
}

/**
 * "Why UAE" benefit grid — collapses 3 → 2 → 1 columns. The whole grid is a
 * stagger-reveal group (data-reveal-stagger); each card rises in sequence.
 */
export function WhyUAE({ className }: WhyUAEProps) {
  return (
    <div
      data-reveal-stagger
      className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}
    >
      {story.uaeBenefits.map((benefit) => (
        <WhyUaeCard key={benefit.id} benefit={benefit} />
      ))}
    </div>
  );
}
