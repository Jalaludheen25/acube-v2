import type { Variants } from "framer-motion";

import { duration, easing, stagger } from "@/constants";

const s = (ms: number): number => ms / 1000;

type Bezier = [number, number, number, number];
const bezier = (e: readonly number[]): Bezier => [e[0] ?? 0, e[1] ?? 0, e[2] ?? 0, e[3] ?? 0];

/**
 * Packages pinned-scene editorial transitions — the left column re-composes
 * on every stage change (repeatable, state-driven), so this uses the same
 * Framer AnimatePresence approach as the About hero rather than RevealRoot's
 * one-time scroll reveals.
 */

export const tierHeadingContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

export const tierCharVariants: Variants = {
  hidden: { opacity: 0, y: "0.45em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: s(duration.medium), ease: bezier(easing.outExpo) },
  },
};

export const tierBodyVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: s(duration.slow), delay: stagger.icons, ease: bezier(easing.outExpo) },
  },
};

/** Benefits list container — staggers the check rows. */
export const tierBenefitsVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger.icons, delayChildren: s(duration.normal) },
  },
};

export const tierBenefitItemVariants: Variants = {
  hidden: { opacity: 0, x: -14, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: s(duration.medium), ease: bezier(easing.outExpo) },
  },
};

export const tierStageExitVariants: Variants = {
  exit: {
    opacity: 0,
    y: -14,
    filter: "blur(5px)",
    transition: { duration: s(duration.normal), ease: bezier(easing.outQuart) },
  },
};
