/**
 * ACUBE V2 — Design Tokens (typed mirror).
 *
 * The CSS `@theme` block in `src/app/globals.css` is the canonical source of
 * truth. This module mirrors the subset of tokens that JS/TS consumers need —
 * GSAP timelines, Three.js materials, and runtime logic — where CSS custom
 * properties are not ergonomic.
 *
 * Milestone 01 establishes the STRUCTURE and confirmed brand values only.
 * The full scale (typography, spacing, shadows, motion) is implemented in
 * Milestone 03 (Design System). Keep this file in sync with @theme.
 */

export const colors = {
  background: "#050505",
  surface: "#16181D",
  foreground: "#FFFFFF",
  muted: "#B4BAC3",
  brand: {
    red: "#E53935",
    green: "#2E7D32",
    gold: "#D4AF37",
  },
} as const;

export const fonts = {
  heading: "var(--font-space-grotesk)",
  body: "var(--font-inter)",
  mono: "var(--font-jetbrains-mono)",
} as const;

/* ---- Implemented in Milestone 03 (Design System) ---- */
export const spacing = {} as const; // 8px base scale
export const radius = {} as const; // button 18 / input 18 / card 28 / section 40
export const shadows = {} as const; // sm / md / lg — soft, no harsh shadows
export const typography = {} as const; // hero / section / body / caption scale
export const motion = {} as const; // durations + easings

export const designTokens = {
  colors,
  fonts,
  spacing,
  radius,
  shadows,
  typography,
  motion,
} as const;

export type DesignTokens = typeof designTokens;
