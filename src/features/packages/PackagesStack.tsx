import { packageTiers } from "@/constants";
import { SectionIntro } from "@/components/sections";
import { cn, container } from "@/lib";

import { tierAccents } from "./tierAccents";
import { TierCardContent } from "./TierCardContent";

/**
 * Mobile / tablet / reduced-motion presentation of the packages — the same
 * three tier cards, stacked with the standard reveal-stagger treatment
 * instead of the 400vh pinned scene (a long pin is hostile on touch, and
 * reduced-motion users get no pin at all). Shown wherever PackagesShowcase
 * is hidden: below `lg`, or at any width under prefers-reduced-motion.
 */
export function PackagesStack() {
  return (
    <section
      aria-label="ACUBE packages"
      className="theme-dark relative overflow-hidden bg-ink-black motion-safe:lg:hidden"
    >
      <div className={cn(container.content, "py-24 lg:py-32")}>
        <SectionIntro
          eyebrow="Packages"
          title="Three ways to start."
          lede="From your first licence to a full corporate partnership — tailored on a free consultation."
        />
        <ul data-reveal-stagger className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packageTiers.map((tier) => {
            const accent = tierAccents[tier.accent];
            return (
              <li key={tier.id}>
                <div
                  className={cn(
                    "card-spotlight texture relative h-full overflow-hidden rounded-[var(--radius-2xl)] border bg-ink-black/55 backdrop-blur-xl",
                    accent.border,
                    accent.glow,
                  )}
                >
                  <span aria-hidden className={cn("pointer-events-none absolute inset-0", accent.overlay)} />
                  <TierCardContent tier={tier} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
