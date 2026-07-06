import { MessagesSquare, Rocket, Route, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn, typography } from "@/lib";

/** Qualitative "what to expect" flow — no invented metrics or timelines. */
const steps: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: MessagesSquare,
    title: "Free consultation",
    body: "We listen first — your goals, activity, and where you want to operate.",
  },
  {
    icon: Route,
    title: "A tailored plan",
    body: "We recommend the structure and licence that actually fit your business.",
  },
  {
    icon: Wrench,
    title: "We handle it",
    body: "Paperwork, approvals, and government liaison — managed end-to-end.",
  },
  {
    icon: Rocket,
    title: "You're operational",
    body: "Your licence is issued and you're ready to trade — with us still on call.",
  },
];

/**
 * "How working with us goes" — a connected step flow with a drawn line on
 * desktop. Server Component; qualitative process, nothing invented.
 */
export function WhyProcess() {
  return (
    <div className="relative">
      <span
        aria-hidden
        data-spine
        className="absolute left-0 top-8 hidden h-px w-full origin-left bg-gradient-to-r from-gold/60 via-divider to-transparent lg:block"
      />
      <ol data-reveal-stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            <span className="relative z-[1] flex size-16 items-center justify-center rounded-2xl bg-grad-emerald text-platinum shadow-3d ring-4 ring-[color:var(--color-pine-teal)]">
              <step.icon className="size-7" aria-hidden />
            </span>
            <p className={cn(typography.label, "mt-6 text-gold/70")}>
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className={cn(typography.h3, "mt-1 text-foreground")}>{step.title}</h3>
            <p className={cn(typography.bodySmall, "mt-2 text-muted")}>{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
