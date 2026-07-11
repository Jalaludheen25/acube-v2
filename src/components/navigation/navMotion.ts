import type { Transition, Variants } from "framer-motion";

import { duration, easing, stagger } from "@/constants";

/** ms → seconds (Framer works in seconds). */
const s = (ms: number): number => ms / 1000;

/** Convert a readonly cubic-bezier token into Framer's mutable 4-tuple. */
type Bezier = [number, number, number, number];
const bezier = (e: readonly number[]): Bezier => [e[0] ?? 0, e[1] ?? 0, e[2] ?? 0, e[3] ?? 0];

/** Logo scale on scroll (transform → GPU-friendly). */
export const logoScaleTransition: Transition = {
  duration: s(duration.normal),
  ease: bezier(easing.outQuart),
};

/** Fullscreen mobile menu container — fades/scales and choreographs its children. */
export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: s(duration.normal), ease: bezier(easing.outQuart), when: "afterChildren" },
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: s(duration.medium),
      ease: bezier(easing.outExpo),
      when: "beforeChildren",
      staggerChildren: stagger.cards,
    },
  },
};

/** Individual mobile menu rows — staggered rise/fade. */
export const mobileMenuItemVariants: Variants = {
  closed: { opacity: 0, y: 24, transition: { duration: s(duration.fast), ease: bezier(easing.outQuart) } },
  open: { opacity: 1, y: 0, transition: { duration: s(duration.medium), ease: bezier(easing.outExpo) } },
};
