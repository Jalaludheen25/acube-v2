import type { Variants } from "framer-motion";

import { duration, easing, stagger } from "@/constants";

const s = (ms: number): number => ms / 1000;

type Bezier = [number, number, number, number];
const bezier = (e: readonly number[]): Bezier => [e[0] ?? 0, e[1] ?? 0, e[2] ?? 0, e[3] ?? 0];

/**
 * About hero story-stage transitions — a *repeatable* state-driven swap
 * (stage 0 → 5 as the user scrolls through the pin), unlike RevealRoot's
 * one-time scroll-triggered reveals. Framer's AnimatePresence handles this
 * far more cleanly than a hand-rolled GSAP timeline would: declarative
 * enter/exit, no manual DOM-mutation bookkeeping.
 */

/** Wraps the per-character heading spans — staggers their entrance. */
export const aboutHeadingContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.022, delayChildren: 0 },
  },
};

/** Fade + slide + blur reveal, per character. */
export const aboutCharVariants: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: s(duration.medium), ease: bezier(easing.outExpo) },
  },
};

/** Body paragraph — starts slightly after the heading begins revealing. */
export const aboutBodyVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: s(duration.slow), delay: stagger.features, ease: bezier(easing.outExpo) },
  },
};

/** Whole-stage exit — simpler than the per-character entrance (fast, calm). */
export const aboutStageExitVariants: Variants = {
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: { duration: s(duration.normal), ease: bezier(easing.outQuart) },
  },
};
