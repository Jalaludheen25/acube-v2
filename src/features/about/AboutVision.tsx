import { Eye } from "lucide-react";

import { cn, typography } from "@/lib";

/**
 * Vision — a standalone statement with a per-character split reveal (per
 * the brief), distinct from Mission's plain fade-up. `data-split` is
 * RevealRoot's one-time scroll-triggered char animation.
 */
export function AboutVision() {
  return (
    <div data-reveal className="max-w-2xl">
      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-grad-teal text-ink-black shadow-3d">
        <Eye className="size-6" aria-hidden />
      </span>
      <p className={cn(typography.label, "mt-6 text-gold")}>Vision</p>
      <h2 data-split className={cn(typography.h2, "mt-2 text-balance text-foreground")}>
        To be the partner entrepreneurs trust at every step of their UAE journey.
      </h2>
      <p className={cn(typography.body, "mt-4 max-w-xl text-muted")}>
        From first licence to long-term growth — a relationship that outlasts
        the paperwork.
      </p>
    </div>
  );
}
