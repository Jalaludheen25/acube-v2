import { Infinity as InfinityIcon, ShieldCheck, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { TiltCard } from "@/components/motion";
import { why } from "@/constants";
import { cn, typography } from "@/lib";

/** Curated 3 of the 5 principles that read as values rather than process
 *  (the full 5 stay in the principles grid further down the page). Each
 *  value carries its own accent — emerald, gold, crimson. */
const VALUE_IDS = ["transparency", "personal", "long-term"] as const;

const VALUE_LOOKS: Record<
  (typeof VALUE_IDS)[number],
  { icon: LucideIcon; text: string; border: string; hoverBorder: string; chip: string; glow: string; wash: string }
> = {
  transparency: {
    icon: ShieldCheck,
    text: "text-pine-teal",
    border: "border-pine-teal/25",
    hoverBorder: "hover:border-pine-teal/60",
    chip: "bg-grad-celadon text-ink-black",
    glow: "hover:shadow-[0_18px_50px_-12px_color-mix(in_srgb,var(--color-pine-teal)_45%,transparent)]",
    wash: "bg-[radial-gradient(120%_100%_at_20%_0%,color-mix(in_srgb,var(--color-celadon)_30%,transparent)_0%,transparent_60%)]",
  },
  personal: {
    icon: UserCheck,
    text: "text-champagne",
    border: "border-champagne/30",
    hoverBorder: "hover:border-champagne/70",
    chip: "bg-champagne/90 text-ink-black",
    glow: "hover:shadow-[0_18px_50px_-12px_color-mix(in_srgb,var(--color-champagne)_45%,transparent)]",
    wash: "bg-[radial-gradient(120%_100%_at_20%_0%,color-mix(in_srgb,var(--color-champagne)_26%,transparent)_0%,transparent_60%)]",
  },
  "long-term": {
    icon: InfinityIcon,
    text: "text-blushed-brick",
    border: "border-blushed-brick/25",
    hoverBorder: "hover:border-blushed-brick/60",
    chip: "bg-grad-cta text-platinum",
    glow: "hover:shadow-[0_18px_50px_-12px_color-mix(in_srgb,var(--color-blushed-brick)_45%,transparent)]",
    wash: "bg-[radial-gradient(120%_100%_at_20%_0%,color-mix(in_srgb,var(--color-blushed-brick)_22%,transparent)_0%,transparent_60%)]",
  },
};

/**
 * Values — three pointer-tracked 3D glass cards, each with its own accent
 * (emerald / gold / crimson): tinted top-light wash, glowing border and
 * colored shadow that intensify on hover, a reflection sweep, an index
 * watermark, and an icon micro-animation. TiltCard provides the 3D
 * rotation; everything else is CSS on design tokens.
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
        {values.map((value, index) => {
          const look = VALUE_LOOKS[value.id as (typeof VALUE_IDS)[number]];
          const Icon = look.icon;
          return (
            <li key={value.id}>
              <TiltCard maxTilt={8} className="h-full">
                <div
                  className={cn(
                    "card-spotlight glass group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 shadow-3d transition-[transform,box-shadow,border-color] duration-[var(--duration-normal)] ease-out-quart hover:-translate-y-1",
                    look.border,
                    look.hoverBorder,
                    look.glow,
                  )}
                >
                  {/* Accent top-light + reflection sweep. */}
                  <span aria-hidden className={cn("pointer-events-none absolute inset-0 opacity-70", look.wash)} />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-platinum/15 to-transparent motion-safe:[animation:card-sheen_8s_ease-in-out_infinite]"
                    style={{ animationDelay: `${index * -2.5}s` }}
                  />
                  <span
                    aria-hidden
                    className="index-corner text-stroke pointer-events-none absolute right-5 top-4 select-none opacity-30"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={cn(
                      "relative inline-flex size-12 items-center justify-center rounded-2xl shadow-3d transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:-rotate-6 group-hover:scale-110",
                      look.chip,
                    )}
                  >
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <p className={cn(typography.label, "relative mt-6", look.text)}>Value {String(index + 1).padStart(2, "0")}</p>
                  <h3 className={cn(typography.h3, "relative mt-2 text-foreground")}>{value.term}</h3>
                  <p className={cn(typography.bodySmall, "relative mt-3 text-muted")}>{value.description}</p>
                </div>
              </TiltCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
