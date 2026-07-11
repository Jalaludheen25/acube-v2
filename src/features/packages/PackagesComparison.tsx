import { Check, Minus } from "lucide-react";

import { FloatingParticles, TiltCard } from "@/components/motion";
import { SectionIntro } from "@/components/sections";
import { packageTiers } from "@/constants";
import { cn, container, typography } from "@/lib";

import { tierAccents } from "./tierAccents";

/**
 * Comparison scope — real service-catalogue groupings (client-to-confirm,
 * like the tier data itself). One row per scope; per-tier inclusion flags.
 */
const rows: { label: string; included: readonly [boolean, boolean, boolean] }[] = [
  { label: "Company formation & trade licence", included: [true, true, true] },
  { label: "Memorandum of Association drafting", included: [true, true, true] },
  { label: "Registered virtual office address", included: [true, true, true] },
  { label: "Document typing & clearing", included: [true, true, true] },
  { label: "Visas, immigration & Emirates ID", included: [false, true, true] },
  { label: "Sponsorship assistance", included: [false, true, true] },
  { label: "Company stamp & seal", included: [false, true, true] },
  { label: "Corporate & legal (POA, court, Istidama)", included: [false, false, true] },
  { label: "Renewals, amendments & ongoing support", included: [false, false, true] },
  { label: "Dedicated personal consultant", included: [false, false, true] },
];

/**
 * The comparison as three pointer-tracked dark-glass tier cards (no table):
 * each carries its accent theme, a reflection sweep, and its full scope with
 * staggered animated check rows — included rows lit, excluded dimmed. The
 * recommended tier is elevated with the pulsing red badge. Blobs + particles
 * keep the section alive. Semantics stay list-based (better for small
 * screens and screen readers than a wide table).
 */
export function PackagesComparison() {
  return (
    <section
      id="package-comparison"
      aria-label="Compare packages"
      className="relative overflow-hidden bg-background"
    >
      {/* Section lighting. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="blob bg-grad-celadon absolute -left-24 top-1/4 size-80 opacity-15 blur-3xl" />
        <span className="blob bg-grad-cta absolute -right-20 bottom-1/4 size-72 opacity-10 blur-3xl" />
        <FloatingParticles count={10} className="max-md:hidden" />
      </div>

      <div className={cn(container.content, "relative py-24 lg:py-32")}>
        <SectionIntro
          eyebrow="Compare"
          title="Every package, side by side."
          size="h2"
          split
          lede="Final inclusions are confirmed on your free consultation — every setup is scoped to your activity, jurisdiction, and visas."
        />

        {/* NOTE: the reveal stagger lives on THIS grid (cards), not on the
            row lists inside — ScrollTrigger targets inside TiltCard's
            will-change/preserve-3d subtree never fire (observed empirically;
            every working stagger on the site wraps outside TiltCard). */}
        <ul data-reveal-stagger className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {packageTiers.map((tier, tierIndex) => {
            const accent = tierAccents[tier.accent];
            return (
              <li key={tier.id} className={cn(tier.recommended && "lg:-mt-4")}>
                <TiltCard maxTilt={5} className="h-full">
                  <article
                    aria-label={`${tier.name} package scope`}
                    className={cn(
                      "theme-dark texture card-spotlight group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)] border bg-ink-black/90 p-7 shadow-3d backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-[var(--duration-normal)] ease-out-quart hover:-translate-y-1 lg:p-8",
                      accent.border,
                      accent.glow,
                      tier.recommended && "shadow-3d-lg",
                    )}
                  >
                    {/* Accent wash + reflection sweep. */}
                    <span aria-hidden className={cn("pointer-events-none absolute inset-0 opacity-80", accent.overlay)} />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-platinum/10 to-transparent motion-safe:[animation:card-sheen_8s_ease-in-out_infinite]"
                      style={{ animationDelay: `${tierIndex * -2.6}s` }}
                    />

                    <header className="relative flex items-start justify-between gap-4">
                      <div>
                        <p className={cn(typography.label, accent.text)}>Package {tier.number}</p>
                        <h3 className={cn(typography.h2, "mt-1 text-foreground")}>{tier.name}</h3>
                      </div>
                      {tier.recommended ? (
                        <span className="motion-safe:[animation:badge-pulse_2.6s_ease-out_infinite] inline-flex shrink-0 items-center rounded-full bg-blushed-brick px-3 py-1.5 text-caption font-semibold text-platinum">
                          Recommended
                        </span>
                      ) : null}
                    </header>

                    <p className={cn(typography.caption, "relative mt-2")}>{tier.tagline}</p>

                    <ul className="relative mt-7 flex-1 space-y-3 border-t border-divider pt-6">
                      {rows.map((row) => {
                        const included = row.included[tierIndex];
                        return (
                          <li
                            key={row.label}
                            className={cn(
                              "flex items-start gap-3 transition-opacity duration-[var(--duration-normal)]",
                              !included && "opacity-40",
                            )}
                          >
                            {included ? (
                              <span
                                className={cn(
                                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full transition-transform duration-[var(--duration-normal)] ease-out-quart group-hover:scale-110",
                                  accent.chip,
                                )}
                              >
                                <Check className="size-3" aria-hidden />
                                <span className="sr-only">Included:</span>
                              </span>
                            ) : (
                              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-muted">
                                <Minus className="size-3" aria-hidden />
                                <span className="sr-only">Not included:</span>
                              </span>
                            )}
                            <span className={cn(typography.bodySmall, included ? "text-foreground" : "text-muted")}>
                              {row.label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <p className={cn(typography.caption, "relative mt-7 border-t border-divider pt-5", accent.text)}>
                      {tier.price.label} — {tier.price.note.toLowerCase()}
                    </p>
                  </article>
                </TiltCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
