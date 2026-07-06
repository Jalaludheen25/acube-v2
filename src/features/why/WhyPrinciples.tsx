import { Eye, Infinity as InfinityIcon, Landmark, UserCheck, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { TiltCard } from "@/components/motion";
import { why } from "@/constants";
import { cn, typography } from "@/lib";

/** Principle id → icon. */
const principleIcons: Record<string, LucideIcon> = {
  "end-to-end": Workflow,
  personal: UserCheck,
  local: Landmark,
  transparency: Eye,
  "long-term": InfinityIcon,
};

/**
 * The principles as pointer-tracked glass cards with icons and a hover glow —
 * a bold upgrade from the plain definition list. Each is a commitment to how
 * ACUBE works (never an achievement or comparison). Server Component.
 */
export function WhyPrinciples() {
  return (
    <ul data-reveal-stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {why.principles.map((principle, index) => {
        const Icon = principleIcons[principle.id] ?? Workflow;
        return (
          <li key={principle.id}>
            <TiltCard className="h-full">
              <div className="glass card-spotlight group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 shadow-3d transition-colors hover:border-gold/30">
                <span
                  aria-hidden
                  className="index-corner text-stroke pointer-events-none absolute right-5 top-4 select-none opacity-30"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-grad-celadon text-ink-black shadow-3d transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className={cn(typography.h3, "mt-6 text-foreground")}>{principle.term}</h3>
                <p className={cn(typography.bodySmall, "mt-3 text-muted")}>{principle.description}</p>
              </div>
            </TiltCard>
          </li>
        );
      })}
    </ul>
  );
}
