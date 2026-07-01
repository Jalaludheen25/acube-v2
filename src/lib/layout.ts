/**
 * Layout helpers — container, section rhythm, responsive grids, and glass
 * surface presets that reuse design-system utilities.
 *
 * Why: no page should invent its own container widths or grid. Consume with
 * `cn()`, e.g. cn(container.content, section).
 */

/** Content-width wrappers (max-width + fluid horizontal padding). */
export const container = {
  content: "container-content", // 1280
  wide: "container-wide", // 1440
  hero: "container-hero", // 1600
  full: "container-full", // 100%
} as const;

/** Vertical section rhythm (fluid 96 → 160). */
export const section = "section-y";

/** Responsive grids collapsing 12 → 8 → 4 (desktop → tablet → mobile). */
export const grid = {
  cols4: "grid grid-cols-4 gap-6",
  cols8: "grid grid-cols-4 gap-6 md:grid-cols-8",
  cols12: "grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12",
} as const;

/** Glass surface presets (see @utility glass* in globals.css). */
export const glassVariants = {
  base: "glass",
  floating: "glass-floating",
  interactive: "glass-interactive",
} as const;

/** Minimum-size interactive target (WCAG 2.5.5). */
export const touchTarget = "touch-target";

export type ContainerVariant = keyof typeof container;
export type GridVariant = keyof typeof grid;
export type GlassVariant = keyof typeof glassVariants;
