import { FloatingParticles, TiltCard } from "@/components/motion";
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
 * Animated statistics band — pointer-tracked 3D glass tiles that float at
 * staggered phases over emerald + crimson ambient lighting and drifting
 * particles, each with a gradient-glow border, reflection sweep, and a
 * numeral that counts up on scroll (RevealRoot's `[data-count]`). Numeric
 * values animate; placeholder values ("—") render as-is so the client can
 * drop real, verified figures in later without any code change (the
 * honesty-first `why.proof` pattern — no invented numbers).
 */
export function StatBand({ items, className }: StatBandProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Band lighting — emerald + premium red, plus quiet particles. */}
      <div aria-hidden className="pointer-events-none absolute -inset-8 overflow-hidden">
        <span className="blob bg-grad-celadon absolute -left-16 -top-10 size-64 opacity-20 blur-3xl" />
        <span className="blob bg-grad-cta absolute -bottom-12 -right-14 size-64 opacity-15 blur-3xl" />
        <FloatingParticles count={8} className="max-md:hidden" />
      </div>

      <ul data-reveal-stagger className="relative grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {items.map((item, index) => {
          const numeric = Number.parseFloat(item.value);
          const isNumeric = !Number.isNaN(numeric) && /^\d/.test(item.value.trim());
          return (
            <li key={item.label}>
              <TiltCard maxTilt={7} className="h-full">
                <div
                  className="motion-safe:float h-full"
                  style={{ animationDelay: `${index * -1.6}s` }}
                >
                  <div className="border-grad card-spotlight group relative h-full overflow-hidden rounded-2xl border border-platinum/10 bg-ink-black/40 p-6 text-center shadow-3d backdrop-blur-lg transition-[box-shadow] duration-[var(--duration-normal)] ease-out-quart hover:shadow-[0_18px_50px_-14px_color-mix(in_srgb,var(--color-celadon)_40%,transparent)] lg:p-8">
                    {/* Reflection sweep + corner glow. */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-platinum/10 to-transparent motion-safe:[animation:card-sheen_9s_ease-in-out_infinite]"
                      style={{ animationDelay: `${index * -2.2}s` }}
                    />
                    <span
                      aria-hidden
                      className="blob bg-grad-celadon pointer-events-none absolute -right-10 -top-10 size-28 opacity-25 blur-2xl"
                    />
                    <p className="relative">
                      <span
                        className="text-grad-gold font-display text-display font-semibold tracking-tight"
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
                    </p>
                    <p className={cn(typography.label, "relative mt-3 text-muted")}>{item.label}</p>
                  </div>
                </div>
              </TiltCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
