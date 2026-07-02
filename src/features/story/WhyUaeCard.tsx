import type { UaeBenefit } from "@/types";
import { cn, glassVariants, typography } from "@/lib";

interface WhyUaeCardProps {
  benefit: UaeBenefit;
}

/**
 * A single "Why UAE" benefit — a glass card inheriting the signature glass
 * system (hover via glass-interactive). Content only; not interactive.
 */
export function WhyUaeCard({ benefit }: WhyUaeCardProps) {
  return (
    <div className={cn(glassVariants.interactive, "rounded-lg p-6")}>
      <benefit.Icon className="size-6 text-gold" aria-hidden />
      <h3 className="mt-4 font-heading text-body font-semibold text-foreground">{benefit.title}</h3>
      <p className={cn(typography.bodySmall, "mt-2 text-muted")}>{benefit.description}</p>
    </div>
  );
}
