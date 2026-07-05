import type { ReactNode } from "react";

import { cn } from "@/lib";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Seconds for one full loop. */
  speed?: number;
  reverse?: boolean;
}

/**
 * Infinite CSS marquee — Server Component (zero JS). The content is rendered
 * twice (second copy aria-hidden) and translated -50% in a loop; pauses on
 * hover; the global reduced-motion rule freezes it.
 */
export function Marquee({ children, className, speed = 36, reverse = false }: MarqueeProps) {
  return (
    <div className={cn("group/marquee overflow-hidden", className)}>
      <div
        className={cn(
          "marquee-track flex w-max items-center group-hover/marquee:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
