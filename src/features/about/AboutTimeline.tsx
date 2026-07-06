import { BadgeCheck, FileText, Layers, LifeBuoy, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn, typography } from "@/lib";

/**
 * "How we work" — a qualitative process flow (no invented dates or metrics).
 * A gold spine draws down the left as the reader scrolls; each step reveals
 * in sequence. Steps map to the real setup journey; subject to client review.
 */
const steps: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: MessageSquare,
    title: "Consult",
    body: "We start with a free conversation to understand your goals, activity, and where you want to operate.",
  },
  {
    icon: Layers,
    title: "Structure",
    body: "We recommend the right setup — mainland, free zone, or offshore — for how you actually plan to work.",
  },
  {
    icon: FileText,
    title: "Documentation",
    body: "We prepare and submit the paperwork, coordinating approvals so you don't have to chase them.",
  },
  {
    icon: BadgeCheck,
    title: "Licence",
    body: "We secure your trade licence and get your business legally ready to operate in the UAE.",
  },
  {
    icon: LifeBuoy,
    title: "Beyond",
    body: "We stay on as your partner — renewals, amendments, and everyday documentation after you're live.",
  },
];

export function AboutTimeline() {
  return (
    <div className="relative">
      <span
        aria-hidden
        data-spine
        className="absolute left-6 top-0 h-full w-px origin-top bg-gradient-to-b from-gold/70 via-divider to-transparent"
      />
      <ol data-reveal-stagger className="space-y-10">
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex gap-6">
            <span className="relative z-[1] flex size-12 shrink-0 items-center justify-center rounded-full bg-grad-emerald text-platinum shadow-3d ring-4 ring-background">
              <step.icon className="size-5" aria-hidden />
            </span>
            <div className="pt-1">
              <p className={cn(typography.label, "text-gold/70")}>
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className={cn(typography.h3, "mt-1 text-foreground")}>{step.title}</h3>
              <p className={cn(typography.body, "mt-2 max-w-xl text-muted")}>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
