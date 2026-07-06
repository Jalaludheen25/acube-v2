import { Eye, HeartHandshake, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { TiltCard } from "@/components/motion";
import { cn, typography } from "@/lib";

/**
 * Mission / Vision / Values — three pointer-tracked gradient cards. Copy is
 * derived from the approved brand statement and principles (commitments, not
 * invented facts); subject to client review.
 */
const pillars: { icon: LucideIcon; label: string; title: string; body: string; surface: string }[] = [
  {
    icon: Target,
    label: "Mission",
    title: "Make setup effortless",
    body: "To help businesses establish themselves confidently across the UAE — handling the complexity so founders can focus on building.",
    surface: "bg-grad-emerald",
  },
  {
    icon: Eye,
    label: "Vision",
    title: "The partner you keep",
    body: "To be the partner entrepreneurs trust at every step of their UAE journey — from first licence to long-term growth.",
    surface: "bg-grad-teal",
  },
  {
    icon: HeartHandshake,
    label: "Values",
    title: "How we show up",
    body: "Transparency, personal guidance, and end-to-end ownership — in every conversation and every filing.",
    surface: "bg-grad-cta",
  },
];

export function AboutPillars() {
  return (
    <ul data-reveal-stagger className="grid gap-6 lg:grid-cols-3">
      {pillars.map((pillar) => (
        <li key={pillar.label}>
          <TiltCard className="h-full">
            <div
              className={cn(
                "card-spotlight texture theme-dark group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 shadow-3d",
                pillar.surface,
              )}
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-platinum shadow-3d transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:-rotate-6 group-hover:scale-110">
                <pillar.icon className="size-6" aria-hidden />
              </span>
              <p className={cn(typography.label, "mt-6 text-gold")}>{pillar.label}</p>
              <h3 className={cn(typography.h3, "mt-2 text-foreground")}>{pillar.title}</h3>
              <p className={cn(typography.bodySmall, "mt-3 text-muted")}>{pillar.body}</p>
            </div>
          </TiltCard>
        </li>
      ))}
    </ul>
  );
}
