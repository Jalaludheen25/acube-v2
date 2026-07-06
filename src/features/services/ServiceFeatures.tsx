import { Compass, Headphones, MapPinned, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn, typography } from "@/lib";

/** Qualitative differentiators (commitments, not invented claims). */
const features: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Compass,
    title: "End-to-end",
    body: "One team from your first question to a fully licensed, operational business.",
  },
  {
    icon: Headphones,
    title: "One point of contact",
    body: "A single consultant who owns your file — no being passed around.",
  },
  {
    icon: MapPinned,
    title: "UAE-savvy",
    body: "Deep familiarity with local procedures, jurisdictions, and approvals.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent",
    body: "Clear steps and honest advice at every stage — no surprises.",
  },
];

/**
 * "Why our setup is different" — a feature strip of qualitative commitments
 * with icons, on the dark exhale surface. Server Component.
 */
export function ServiceFeatures() {
  return (
    <section aria-label="Why our setup is different" className="section-exhale texture relative overflow-hidden">
      <div className="container-content relative py-20 lg:py-28">
        <span
          aria-hidden
          data-parallax="0.16"
          className="blob bg-grad-celadon pointer-events-none absolute -right-24 top-0 size-80 opacity-15 blur-3xl"
        />
        <p data-reveal className={cn(typography.label, "flex items-center gap-3 text-gold")}>
          <span aria-hidden className="h-px w-8 bg-gold/60" />
          Why our setup is different
        </p>
        <h2 data-reveal className={cn(typography.h2, "mt-6 max-w-2xl text-balance text-foreground")}>
          The complexity is ours. The business is yours.
        </h2>
        <ul data-reveal-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="glass card-spotlight group relative overflow-hidden rounded-2xl p-6 shadow-3d"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-gold shadow-3d transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:scale-110">
                <feature.icon className="size-6" aria-hidden />
              </span>
              <h3 className={cn(typography.h3, "mt-5 text-foreground")}>{feature.title}</h3>
              <p className={cn(typography.bodySmall, "mt-2 text-muted")}>{feature.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
