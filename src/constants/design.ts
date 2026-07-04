/**
 * ACUBE V2 — Design Tokens (typed mirror).
 *
 * The CSS `@theme` block in `src/app/globals.css` is the SINGLE SOURCE OF TRUTH.
 * This module mirrors tokens for JS/TS consumers:
 *
 *  - VISUAL tokens (colors, fonts, radius, shadows, blur, glass, containers) are
 *    exposed as `var(--…)` references — NO value duplication; the literal lives
 *    once in CSS.
 *  - RUNTIME primitives that JavaScript cannot express as `var()` are mirrored as
 *    RAW values and MUST stay in sync with globals.css (the documented CSS↔JS
 *    bridge): motion durations, motion curves, breakpoints, z-index, opacity,
 *    and the single theme-color hex.
 *
 * Rationale: GSAP/Framer need numeric durations & cubic-bezier points, matchMedia
 * needs px breakpoints, and <meta name="theme-color"> needs a literal — none of
 * which accept `var()`. Everything else remains CSS-first.
 */

/* ---------- Colors (var references → single source in CSS) ---------- */
export const colors = {
  background: "var(--color-background)",
  backgroundSecondary: "var(--color-background-secondary)",
  surface: "var(--color-surface)",
  foreground: "var(--color-foreground)",
  muted: "var(--color-muted)",
  border: "var(--color-border)",
  divider: "var(--color-divider)",
  glass: "var(--color-glass)",
  ivory: "var(--color-ivory)",
  ink: "var(--color-ink)",
  inkMuted: "var(--color-ink-muted)",
  brand: {
    red: "var(--color-brand-red)",
    green: "var(--color-brand-green)",
    gold: "var(--color-gold)",
    goldInk: "var(--color-gold-ink)",
  },
  status: {
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    danger: "var(--color-danger)",
  },
} as const;

/**
 * Raw hex required by <meta name="theme-color"> (var() is invalid there).
 * KEEP IN SYNC with --color-background in globals.css.
 */
export const themeColorHex = "#E8F1F2";

/**
 * Raw hex mirrors for WebGL / Three.js consumers (materials, Lightformer colors),
 * which cannot parse CSS `var()`. Same documented CSS↔JS bridge as themeColorHex.
 * KEEP IN SYNC with --color-* in globals.css.
 */
export const webglColors = {
  brandRed: "#C2593F",
  brandGreen: "#1E9E6C",
  gold: "#CBAB6B",
  background: themeColorHex,
  surface: "#131B16",
  foreground: "#F1F4EF",
} as const;

/* ---------- Fonts (var references) ---------- */
export const fonts = {
  display: "var(--font-display)",
  heading: "var(--font-heading)",
  body: "var(--font-body)",
  mono: "var(--font-mono)",
} as const;

/* ---------- Radius (var references) ---------- */
export const radius = {
  xs: "var(--radius-xs)",
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  full: "9999px",
} as const;

/* ---------- Shadows (var references) ---------- */
export const shadows = {
  soft: "var(--shadow-soft)",
  medium: "var(--shadow-medium)",
  large: "var(--shadow-large)",
  floating: "var(--shadow-floating)",
  glass: "var(--shadow-glass)",
  glow: "var(--shadow-glow)",
} as const;

/* ---------- Blur (var references) ---------- */
export const blur = {
  xs: "var(--blur-xs)",
  sm: "var(--blur-sm)",
  md: "var(--blur-md)",
  glass: "var(--blur-glass)",
  lg: "var(--blur-lg)",
} as const;

/* ---------- Glass system (var references) ---------- */
export const glass = {
  background: "var(--glass-bg)",
  backgroundHover: "var(--glass-bg-hover)",
  backgroundActive: "var(--glass-bg-active)",
  border: "var(--glass-border)",
  borderHover: "var(--glass-border-hover)",
  blur: "var(--glass-blur)",
  shadow: "var(--glass-shadow)",
  shadowFloating: "var(--glass-shadow-floating)",
  reflection: "var(--glass-reflection)",
} as const;

/* ---------- Containers (var references) ---------- */
export const containers = {
  content: "var(--container-content)",
  wide: "var(--container-wide)",
  hero: "var(--container-hero)",
} as const;

/* ---------- Spacing — 8px philosophy (allowed scale, px) ----------
 * Reference scale + JS use (e.g. GSAP distances). Utilities come from
 * Tailwind's 4px base (p-1=4 … p-64=256). Never use arbitrary spacing.
 */
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  30: 120,
  40: 160,
  48: 192,
  64: 256,
} as const;

/* ---------- Breakpoints — RAW px (bridge; matchMedia / JS) ---------- */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1600,
  "4xl": 1920,
} as const;

/** Reference device widths for responsive QA (not utility breakpoints). */
export const deviceWidths = [
  320, 360, 375, 390, 430, 768, 1024, 1280, 1440, 1600, 1920,
] as const;

/* ---------- Z-index — RAW (bridge) ---------- */
export const zIndex = {
  base: 0,
  content: 10,
  sticky: 20,
  nav: 50,
  overlay: 60,
  drawer: 70,
  modal: 80,
  toast: 90,
  max: 100,
} as const;

/* ---------- Opacity — RAW (bridge) ---------- */
export const opacity = {
  disabled: 0.5,
  muted: 0.7,
  glass: 0.06,
} as const;

/* ---------- Motion — RAW (bridge; GSAP/Framer consume these) ---------- */
/** Durations in milliseconds. Mirrors --duration-* in globals.css. */
export const duration = {
  fast: 150,
  normal: 250,
  medium: 450,
  slow: 700,
  hero: 1200,
  page: 600,
  scene: 1500,
} as const;

/** Cubic-bezier control points (Framer-friendly). Mirrors --ease-* in CSS. */
export const easing = {
  outExpo: [0.16, 1, 0.3, 1],
  outQuart: [0.25, 1, 0.5, 1],
  outSoft: [0.33, 1, 0.68, 1],
  inOutSoft: [0.65, 0, 0.35, 1],
} as const;

/** Same curves as CSS strings (for inline styles / GSAP). */
export const easingCss = {
  outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  outQuart: "cubic-bezier(0.25, 1, 0.5, 1)",
  outSoft: "cubic-bezier(0.33, 1, 0.68, 1)",
  inOutSoft: "cubic-bezier(0.65, 0, 0.35, 1)",
} as const;

/** Framer Motion spring presets (no bounce beyond subtle). */
export const spring = {
  soft: { type: "spring", stiffness: 120, damping: 20, mass: 1 },
  snappy: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
  gentle: { type: "spring", stiffness: 80, damping: 18, mass: 1 },
} as const;

/** Entrance delays (ms). */
export const delay = {
  none: 0,
  sm: 100,
  md: 200,
  lg: 300,
} as const;

/** Child stagger intervals (seconds — GSAP/Framer). Source: ANIMATION_SYSTEM. */
export const stagger = {
  icons: 0.08,
  statistics: 0.12,
  cards: 0.15,
  features: 0.18,
} as const;

/** Composite presets (duration + easing) for consistent sequences. */
export const motionPresets = {
  hover: { duration: duration.normal, ease: easing.outQuart },
  pageTransition: { duration: duration.page, ease: easing.inOutSoft },
  heroReveal: { duration: duration.hero, ease: easing.outExpo },
  sectionReveal: { duration: duration.slow, ease: easing.outExpo },
} as const;

/* ---------- Aggregate ---------- */
export const designTokens = {
  colors,
  fonts,
  radius,
  shadows,
  blur,
  glass,
  containers,
  spacing,
  breakpoints,
  deviceWidths,
  zIndex,
  opacity,
  duration,
  easing,
  easingCss,
  spring,
  delay,
  stagger,
  motionPresets,
  themeColorHex,
} as const;

export type DesignTokens = typeof designTokens;
