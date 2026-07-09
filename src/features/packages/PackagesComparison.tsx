import { Check, Minus } from "lucide-react";

import { SectionIntro } from "@/components/sections";
import { packageTiers } from "@/constants";
import { cn, container, typography } from "@/lib";

/**
 * Post-pin comparison — real service scopes (verified catalogue groupings,
 * client-to-confirm like the tier data itself) against the three tiers.
 * The Professional column carries the red "Recommended" emphasis. Rows
 * reveal with the standard stagger.
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

export function PackagesComparison() {
  return (
    <section
      id="package-comparison"
      aria-label="Compare packages"
      className="relative bg-background"
    >
      <div className={cn(container.content, "py-24 lg:py-32")}>
        <SectionIntro
          eyebrow="Compare"
          title="Every package, side by side."
          size="h2"
          split
          lede="Final inclusions are confirmed on your free consultation — every setup is scoped to your activity, jurisdiction, and visas."
        />

        <div data-reveal className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[40%] pb-6" />
                {packageTiers.map((tier) => (
                  <th key={tier.id} className={cn("pb-6 text-center", tier.recommended && "relative")}>
                    {tier.recommended ? (
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-full bg-blushed-brick px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-platinum">
                        Recommended
                      </span>
                    ) : null}
                    <span className={cn(typography.label, "block pt-5 text-gold")}>{tier.number}</span>
                    <span className={cn(typography.h3, "mt-1 block text-foreground")}>{tier.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody data-reveal-stagger>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-divider">
                  <td className={cn(typography.bodySmall, "py-4 pr-6 text-foreground")}>{row.label}</td>
                  {row.included.map((included, columnIndex) => {
                    const tier = packageTiers[columnIndex];
                    return (
                      <td
                        key={tier?.id ?? columnIndex}
                        className={cn("py-4 text-center", tier?.recommended && "bg-blushed-brick/5")}
                      >
                        {included ? (
                          <span className="inline-flex size-6 items-center justify-center rounded-full bg-grad-celadon text-ink-black">
                            <Check className="size-3.5" aria-hidden />
                            <span className="sr-only">Included</span>
                          </span>
                        ) : (
                          <span className="inline-flex size-6 items-center justify-center text-muted/50">
                            <Minus className="size-3.5" aria-hidden />
                            <span className="sr-only">Not included</span>
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
