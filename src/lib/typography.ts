/**
 * Typography variants — semantic className presets composed from design-system
 * utilities (font-size + line-height from @theme; weight/tracking via utilities).
 *
 * Why: components must never hardcode font sizes. Consume with `cn()`, e.g.
 *   cn(typography.h1, "text-foreground")
 *
 * Fluid clamp() sizing means each variant is already responsive
 * (mobile → desktop) with no per-breakpoint overrides.
 */
export const typography = {
  // Editorial serif (Fraunces) for display-scale headings — the "voice".
  hero: "font-display text-hero font-semibold tracking-tight",
  display: "font-display text-display font-semibold tracking-tight",
  h1: "font-display text-h1 font-semibold tracking-tight",
  h2: "font-display text-h2 font-semibold tracking-tight",
  // Grotesk (Inter) for smaller headings/UI — the "system".
  h3: "font-heading text-h3 font-semibold",
  body: "font-body text-body font-normal",
  bodySmall: "font-body text-body-sm font-normal",
  caption: "font-body text-caption text-muted",
  button: "font-body text-button font-semibold",
  // Officialdom accent: mono, uppercase, tracked — echoes document/reference type.
  label: "font-mono text-label font-medium uppercase tracking-wider",
  code: "font-mono text-code",
} as const;

export type TypographyVariant = keyof typeof typography;
