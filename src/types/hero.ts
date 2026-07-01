import type { LucideIcon } from "lucide-react";

export interface HeroTrustSignal {
  id: string;
  label: string;
  Icon: LucideIcon;
}

export interface HeroStat {
  id: string;
  value: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  headlineLines: readonly string[];
  subhead: string;
  trustSignals: readonly HeroTrustSignal[];
  /** Numeric statistics — empty until client-verified; activates automatically. */
  stats: readonly HeroStat[];
}
