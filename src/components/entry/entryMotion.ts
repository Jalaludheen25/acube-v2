import type { Variants } from "framer-motion";

import { duration, easing } from "@/constants";

/** ms → seconds (Framer works in seconds). */
const s = (ms: number): number => ms / 1000;

/** readonly token array → mutable Framer bezier 4-tuple */
type Bezier = [number, number, number, number];
const bezier = (e: readonly number[]): Bezier => [e[0] ?? 0, e[1] ?? 0, e[2] ?? 0, e[3] ?? 0];

/**
 * Logo animation variants.
 *
 * Timeline (from phase transition to 'exiting'):
 *   hidden  → visible : 700ms easeOutExpo  (logo emerges from darkness)
 *   visible → exit    : 450ms easeInOutSoft (logo recedes into hero)
 *
 * The exit.transition.delay (150ms) is the luxury hold — the brief moment
 * the logo is fully visible before it begins to dissolve. This is NOT an
 * artificial timer; it is part of the cinematic animation choreography.
 */
export const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: s(duration.slow), // 700ms
      ease: bezier(easing.outExpo),
    },
  },
  exit: {
    opacity: 0,
    scale: 1.06,
    y: -8,
    transition: {
      delay: s(duration.fast), // 150ms hold before dissolving
      duration: s(duration.medium), // 450ms
      ease: bezier(easing.inOutSoft),
    },
  },
};

/**
 * Logo glow capsule (the glass wrapper behind the logo).
 * Dims to zero slightly ahead of the logo so the glow fades first.
 */
export const glowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: s(duration.normal), // 250ms — glow arrives after shape
      duration: s(duration.medium),
      ease: bezier(easing.outSoft),
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: s(duration.normal), // 250ms — glow fades first
      ease: bezier(easing.inOutSoft),
    },
  },
};

/**
 * Full-screen overlay variants.
 *
 * The overlay begins exiting (delay: medium) AFTER the logo exit starts,
 * so they overlap — creating a continuous, seamless dissolve into the Hero.
 * The overlay completes last, making it the definitive end of the sequence.
 */
export const overlayVariants: Variants = {
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      delay: s(duration.medium), // 450ms — starts as logo is finishing
      duration: s(duration.slow), // 700ms — completes after logo is gone
      ease: bezier(easing.inOutSoft),
    },
  },
};

/** Total exit duration from phase 'exiting': 450ms delay + 700ms = 1150ms */
export const TOTAL_EXIT_MS = duration.medium + duration.slow; // 1150
