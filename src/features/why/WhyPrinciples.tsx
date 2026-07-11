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
            <TiltCard maxTilt={8} className="h-full">
              <div
                className="motion-safe:float h-full"
                style={{ animationDelay: `${index * -1.3}s` }}
              >
                <div className="border-grad glass card-spotlight group relative flex h-full flex-col overflow-hidden rounded-2xl border border-platinum/10 p-8 shadow-3d transition-[transform,box-shadow,border-color] duration-[var(--duration-normal)] ease-out-quart hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_50px_-12px_color-mix(in_srgb,var(--color-celadon)_40%,transparent)]">
                  {/* Reflection sweep, de-synced per card. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-platinum/10 to-transparent motion-safe:[animation:card-sheen_8s_ease-in-out_infinite]"
                    style={{ animationDelay: `${index * -1.8}s` }}
                  />
                  <span
                    aria-hidden
                    className="index-corner text-stroke pointer-events-none absolute right-5 top-4 select-none opacity-30"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative flex size-12 items-center justify-center rounded-2xl bg-grad-celadon text-ink-black shadow-3d transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className={cn(typography.h3, "relative mt-6 text-foreground")}>{principle.term}</h3>
                  <p className={cn(typography.bodySmall, "relative mt-3 text-muted")}>{principle.description}</p>
                </div>
              </div>
            </TiltCard>
          </li>
        );
      })}
    </ul>
  );
}
