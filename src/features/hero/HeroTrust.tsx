import { hero } from "@/constants";
import { cn } from "@/lib";

interface HeroTrustProps {
  className?: string;
}

/**
 * Hero trust section.
 *
 * Renders numeric statistics when client-verified data exists in `hero.stats`;
 * otherwise renders qualitative, verifiable trust signals. No invented numbers —
 * the numeric variant activates automatically once `hero.stats` is populated,
 * with no code change.
 */
export function HeroTrust({ className }: HeroTrustProps) {
  if (hero.stats.length > 0) {
    return (
      <dl className={cn("flex flex-wrap gap-x-10 gap-y-4", className)}>
        {hero.stats.map((stat) => (
          <div key={stat.id} className="flex flex-col">
            <dt className="font-heading text-h3 font-semibold text-foreground">{stat.value}</dt>
            <dd className="text-caption text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-3", className)}>
      {hero.trustSignals.map((signal) => (
        <li key={signal.id} className="inline-flex items-center gap-2 text-muted">
          <signal.Icon className="size-4 shrink-0 text-brand-green" aria-hidden />
          <span className="text-caption">{signal.label}</span>
        </li>
      ))}
    </ul>
  );
}
