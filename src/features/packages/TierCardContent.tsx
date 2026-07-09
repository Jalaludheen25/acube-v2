import { Check } from "lucide-react";

import { Button } from "@/components/ui";
import { cn, typography } from "@/lib";
import type { PackageTier } from "@/types";

import { tierAccents } from "./tierAccents";

interface TierCardContentProps {
  tier: PackageTier;
}

/**
 * The inside of a package card — shared verbatim between the pinned scene's
 * morphing card (client) and the stacked mobile/reduced-motion fallback
 * (server). Purely presentational; accent styling comes from tierAccents.
 */
export function TierCardContent({ tier }: TierCardContentProps) {
  const accent = tierAccents[tier.accent];

  return (
    <div className="relative flex h-full flex-col p-8 lg:p-10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={cn(typography.label, accent.text)}>Package {tier.number}</p>
          <p className={cn(typography.h2, "mt-2 text-foreground")}>{tier.name}</p>
        </div>
        {tier.recommended ? (
          <span className="motion-safe:[animation:badge-pulse_2.6s_ease-out_infinite] inline-flex shrink-0 items-center rounded-full bg-blushed-brick px-3 py-1.5 text-caption font-semibold text-platinum">
            Recommended
          </span>
        ) : null}
      </div>

      <p className={cn(typography.bodySmall, "mt-3 text-muted")}>{tier.tagline}</p>

      <div className="mt-8 flex items-end gap-3 border-t border-divider pt-6">
        <span className={cn("font-display text-display font-semibold tracking-tight", accent.text)}>
          {tier.price.label}
        </span>
      </div>
      <p className={cn(typography.caption, "mt-1")}>{tier.price.note}</p>

      <ul className="mt-8 flex-1 space-y-3.5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full",
                accent.chip,
              )}
            >
              <Check className="size-3.5" aria-hidden />
            </span>
            <span className={cn(typography.bodySmall, "text-foreground")}>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Button href="/contact" variant="primary" size="lg" className="w-full">
          Start with {tier.name}
        </Button>
        <p className={cn(typography.caption, "mt-4 text-center")}>{tier.idealFor}</p>
      </div>
    </div>
  );
}
