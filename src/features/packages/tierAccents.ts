import type { PackageTierAccent } from "@/types";

/**
 * Per-tier accent styling consumed by the morphing card and the stacked
 * fallback. Emerald = celadon (brand green), gold = champagne (luxury gold),
 * crimson = blushed brick (brand red, used sparingly per the color
 * direction). Each entry keeps the *same* class shape so the card can
 * crossfade between accent layers rather than repainting.
 */
export interface TierAccentLook {
  /** Accent text/icon color. */
  text: string;
  /** Check-icon tile background. */
  chip: string;
  /** Gradient overlay layer (crossfaded per stage). */
  overlay: string;
  /** Card border color at rest. */
  border: string;
  /** Glow shadow (box-shadow classes). */
  glow: string;
}

export const tierAccents: Record<PackageTierAccent, TierAccentLook> = {
  emerald: {
    text: "text-celadon",
    chip: "bg-celadon/15 text-celadon",
    overlay: "bg-[radial-gradient(120%_120%_at_15%_0%,color-mix(in_srgb,var(--color-celadon)_28%,transparent)_0%,transparent_65%)]",
    border: "border-celadon/35",
    glow: "shadow-[0_24px_70px_-18px_color-mix(in_srgb,var(--color-celadon)_38%,transparent)]",
  },
  gold: {
    text: "text-champagne",
    chip: "bg-champagne/15 text-champagne",
    overlay: "bg-[radial-gradient(120%_120%_at_15%_0%,color-mix(in_srgb,var(--color-champagne)_30%,transparent)_0%,transparent_65%)]",
    border: "border-champagne/40",
    glow: "shadow-[0_24px_70px_-18px_color-mix(in_srgb,var(--color-champagne)_40%,transparent)]",
  },
  crimson: {
    text: "text-blushed-brick",
    chip: "bg-blushed-brick/15 text-blushed-brick",
    overlay: "bg-[radial-gradient(120%_120%_at_15%_0%,color-mix(in_srgb,var(--color-blushed-brick)_26%,transparent)_0%,transparent_65%)]",
    border: "border-blushed-brick/40",
    glow: "shadow-[0_24px_70px_-18px_color-mix(in_srgb,var(--color-blushed-brick)_38%,transparent)]",
  },
};
