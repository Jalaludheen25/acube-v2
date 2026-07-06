import { cn, typography } from "@/lib";

export interface StatItem {
  /** Numeric string (e.g. "12") animates a count-up; any non-numeric (e.g.
   *  "—") renders statically as a client-to-supply placeholder. */
  value: string;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatBandProps {
  items: readonly StatItem[];
  className?: string;
}

/**
 * Animated statistics row — glass tiles with gradient numerals that count up
 * on scroll (via RevealRoot's `[data-count]`). Numeric values animate;
 * placeholder values ("—") render as-is so the client can drop real, verified
 * figures in later without any code change (mirrors the honesty-first
 * `why.proof` pattern — no invented numbers).
 */
export function StatBand({ items, className }: StatBandProps) {
  return (
    <dl
      data-reveal-stagger
      className={cn("grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4", className)}
    >
      {items.map((item) => {
        const numeric = Number.parseFloat(item.value);
        const isNumeric = !Number.isNaN(numeric) && /^\d/.test(item.value.trim());
        return (
          <div
            key={item.label}
            className="glass-depth card-spotlight group relative overflow-hidden rounded-2xl p-6 text-center shadow-3d lg:p-8"
          >
            <span
              aria-hidden
              className="blob bg-grad-celadon pointer-events-none absolute -right-10 -top-10 size-28 opacity-20 blur-2xl"
            />
            <dd className="relative">
              <span
                className="text-grad-pine font-display text-display font-semibold tracking-tight"
                {...(isNumeric
                  ? {
                      "data-count": String(numeric),
                      ...(item.prefix ? { "data-count-prefix": item.prefix } : {}),
                      ...(item.suffix ? { "data-count-suffix": item.suffix } : {}),
                    }
                  : {})}
              >
                {isNumeric ? `${item.prefix ?? ""}0${item.suffix ?? ""}` : item.value}
              </span>
            </dd>
            <dt className={cn(typography.label, "relative mt-3 text-muted")}>{item.label}</dt>
          </div>
        );
      })}
    </dl>
  );
}
