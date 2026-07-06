import {
  Building2,
  FileCheck2,
  Landmark,
  RefreshCw,
  Replace,
  LifeBuoy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn, typography } from "@/lib";

/** Factual scope items — what ACUBE handles (framed as our scope, not a
 *  comparison to any competitor). */
const benefits: { icon: LucideIcon; title: string }[] = [
  { icon: Building2, title: "Company formation & licensing" },
  { icon: FileCheck2, title: "Documentation & attestation" },
  { icon: Landmark, title: "Government liaison & approvals" },
  { icon: RefreshCw, title: "Renewals & amendments" },
  { icon: Replace, title: "Corporate & structural changes" },
  { icon: LifeBuoy, title: "Ongoing support after launch" },
];

/**
 * "What we handle for you" — a checklist-style grid of the real scope, each
 * with an icon. Server Component. Frames our ownership of the work; never a
 * competitor comparison (per the Why honesty rule).
 */
export function WhyBenefits() {
  return (
    <ul data-reveal-stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit) => (
        <li
          key={benefit.title}
          className="row-hover group flex items-center gap-4 rounded-xl border border-border/60 bg-surface/40 p-5 transition-colors hover:border-gold/40"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-grad-celadon text-ink-black shadow-3d transition-transform duration-[var(--duration-normal)] ease-out-quart group-hover:scale-110">
            <benefit.icon className="size-5" aria-hidden />
          </span>
          <span className={cn(typography.body, "font-medium text-foreground")}>{benefit.title}</span>
        </li>
      ))}
    </ul>
  );
}
