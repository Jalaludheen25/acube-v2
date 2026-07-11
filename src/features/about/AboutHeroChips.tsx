import { Building2, Globe2, Landmark, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn, typography } from "@/lib";

/** The site's own established terms — no new claims. Positions sit in the
 *  frame's quiet corners so the sequence itself stays the hero. */
const chips: {
  icon: LucideIcon;
  label: string;
  position: string;
  floatDelay: string;
  driftX: number;
  driftY: number;
}[] = [
  { icon: Building2, label: "Business Setup", position: "left-[6%] top-[14%]", floatDelay: "0s", driftX: 10, driftY: -12 },
  { icon: Landmark, label: "Company Formation", position: "right-[8%] top-[24%]", floatDelay: "-2.5s", driftX: -12, driftY: -10 },
  { icon: Globe2, label: "UAE", position: "left-[10%] bottom-[22%]", floatDelay: "-5s", driftX: 12, driftY: 10 },
  { icon: ShieldCheck, label: "Trusted Partner", position: "right-[12%] bottom-[12%]", floatDelay: "-7.5s", driftX: -10, driftY: 12 },
];

/**
 * Floating glass chips over the About hero's canvas — quiet 3D presence in
 * the negative space around the frame sequence. Pure CSS (continuous float +
 * slow drift orbit), glass + gradient edge + soft glow, pointer-events-none
 * so they never intercept the scene, lg+ only, and low opacity so the
 * sequence remains the star. Reduced motion stops all drift via the global
 * animation rule.
 */
export function AboutHeroChips() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] max-lg:hidden">
      {chips.map((chip) => (
        <span
          key={chip.label}
          className={cn("absolute motion-safe:[animation:particle-drift_ease-in-out_infinite]", chip.position)}
          style={{
            animationDuration: "9s",
            animationDelay: chip.floatDelay,
            "--drift-x": `${chip.driftX}px`,
            "--drift-y": `${chip.driftY}px`,
          } as React.CSSProperties}
        >
          <span className="border-grad flex items-center gap-2.5 rounded-full border border-platinum/15 bg-ink-black/45 px-4 py-2 shadow-[0_0_24px_-8px_color-mix(in_srgb,var(--color-celadon)_45%,transparent)] backdrop-blur-md">
            <chip.icon className="size-4 text-celadon" aria-hidden />
            <span className={cn(typography.label, "text-platinum/90")}>{chip.label}</span>
          </span>
        </span>
      ))}
    </div>
  );
}
