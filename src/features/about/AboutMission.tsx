import { Target } from "lucide-react";

import { cn, typography } from "@/lib";

/**
 * Mission — a standalone statement (fade-up, per the brief), split out of
 * the former combined Mission/Vision/Values trio so each concept gets its
 * own distinct entrance. Copy is a commitment, not an invented fact.
 */
export function AboutMission() {
  return (
    <div data-reveal className="max-w-2xl">
      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-grad-celadon text-ink-black shadow-3d">
        <Target className="size-6" aria-hidden />
      </span>
      <p className={cn(typography.label, "mt-6 text-gold")}>Mission</p>
      <h2 className={cn(typography.h2, "mt-2 text-balance text-foreground")}>
        To help businesses establish themselves confidently across the UAE.
      </h2>
      <p className={cn(typography.body, "mt-4 max-w-xl text-muted")}>
        We handle the complexity of setup so founders can focus on building —
        one partner, from your first question to a fully operational business.
      </p>
    </div>
  );
}
