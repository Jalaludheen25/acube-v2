import { Infinity as InfinityIcon, ShieldCheck, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { TiltCard } from "@/components/motion";
import { why } from "@/constants";
import { cn, typography } from "@/lib";

/** Curated 3 of the 5 principles that read as values rather than process
 *  (the full 5 stay in the principles grid further down the page). */
const VALUE_IDS = ["transparency", "personal", "long-term"] as const;
const VALUE_ICONS: Record<(typeof VALUE_IDS)[number], LucideIcon> = {
  transparency: ShieldCheck,
  personal: UserCheck,
  "long-term": InfinityIcon,
};

/**
 * Values — a 3-card grid (per the brief), TiltCard + card-spotlight +
 * hover-lift, the same premium card treatment established on Services.
 */
export function AboutValues() {
  const values = VALUE_IDS.map((id) => why.principles.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => p != null,
  );

  return (
    <div>
      <p className={cn(typography.label, "flex items-center gap-3 text-gold")}>
        <span aria-hidden className="h-px w-8 bg-gold/60" />
        Values
      </p>
      <ul data-reveal-stagger className="mt-6 grid gap-6 sm:grid-cols-3">
        {values.map((value) => {
          const Icon = VALUE_ICONS[value.id as (typeof VALUE_IDS)[number]];
          return (
            <li key={value.id}>
              <TiltCard className="h-full">
                <div className="card-spotlight glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 shadow-3d transition-transform duration-[var(--duration-normal)] ease-out-quart hover:-translate-y-1 hover:shadow-3d-lg">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-grad-celadon text-ink-black shadow-3d transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className={cn(typography.h3, "mt-6 text-foreground")}>{value.term}</h3>
                  <p className={cn(typography.bodySmall, "mt-3 text-muted")}>{value.description}</p>
                </div>
              </TiltCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
