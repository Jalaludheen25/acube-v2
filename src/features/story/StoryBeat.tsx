import type { ReactNode } from "react";

import { cn, typography } from "@/lib";

interface StoryBeatProps {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Editorial beat wrapper — consistent vertical rhythm and a left offset (on
 * desktop) that clears the blueprint spine. The eyebrow is a small brand-green
 * label consistent with the Hero.
 */
export function StoryBeat({ eyebrow, children, className }: StoryBeatProps) {
  return (
    <div className={cn("relative py-16 md:py-24 lg:py-32 lg:pl-16", className)}>
      {eyebrow ? (
        <p data-reveal className={cn(typography.label, "mb-6 text-gold")}>
          {eyebrow}
        </p>
      ) : null}
      {children}
    </div>
  );
}
