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
  hero: "font-heading text-hero font-bold tracking-tight",
  display: "font-heading text-display font-bold tracking-tight",
  h1: "font-heading text-h1 font-semibold tracking-tight",
  h2: "font-heading text-h2 font-semibold tracking-tight",
  h3: "font-heading text-h3 font-semibold",
  body: "font-body text-body font-normal",
  bodySmall: "font-body text-body-sm font-normal",
  caption: "font-body text-caption text-muted",
  button: "font-body text-button font-semibold",
  label: "font-body text-label font-medium uppercase tracking-wider",
  code: "font-mono text-code",
} as const;

export type TypographyVariant = keyof typeof typography;
