import type { Variants } from "framer-motion";

import { duration, easing, stagger } from "@/constants";

/** ms → seconds (Framer works in seconds). */
const s = (ms: number): number => ms / 1000;

/** readonly token array → mutable Framer bezier 4-tuple */
type Bezier = [number, number, number, number];
const bezier = (e: readonly number[]): Bezier => [e[0] ?? 0, e[1] ?? 0, e[2] ?? 0, e[3] ?? 0];

/**
 * HTML reveal for the Hero content (eyebrow, subhead, CTAs, trust).
 * The H1 is intentionally NOT animated — it renders opaque for LCP.
 * Under prefers-reduced-motion, MotionConfig collapses these to instant.
 */
export const heroContentVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger.features, delayChildren: s(duration.normal) },
  },
};

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: s(duration.slow), ease: bezier(easing.outExpo) },
  },
};
