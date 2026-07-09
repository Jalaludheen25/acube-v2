/** Accent theme for a tier — drives the card's gradient, glow, and border. */
export type PackageTierAccent = "emerald" | "gold" | "crimson";

export interface PackageTier {
  id: string;
  /** Display numeral, e.g. "01". */
  number: string;
  name: string;
  tagline: string;
  description: string;
  idealFor: string;
  /** Included scope — groupings of the verified service catalogue. */
  features: readonly string[];
  accent: PackageTierAccent;
  /** Highlighted tier (red badge, per the client's color direction). */
  recommended?: boolean;
  /** No invented prices — label is "Tailored" until client-verified figures exist. */
  price: { label: string; note: string };
}
