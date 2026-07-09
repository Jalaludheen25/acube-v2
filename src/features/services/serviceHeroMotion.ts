import type { Variants } from "framer-motion";

import { duration, easing, stagger } from "@/constants";

const s = (ms: number): number => ms / 1000;

type Bezier = [number, number, number, number];
const bezier = (e: readonly number[]): Bezier => [e[0] ?? 0, e[1] ?? 0, e[2] ?? 0, e[3] ?? 0];

/**
 * Services video hero content reveal — same token-driven shape as the Home
 * hero's `heroContentVariants`/`heroItemVariants`, kept local so
 * `features/services` doesn't reach into `features/hero`. Title fades
 * upward first, subtitle follows, then the CTAs stagger in.
 */
export const serviceHeroContentVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger.features, delayChildren: s(duration.normal) },
  },
};

export const serviceHeroItemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: s(duration.slow), ease: bezier(easing.outExpo) },
  },
};

export const serviceHeroCtaVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger.cards, delayChildren: s(duration.slow) },
  },
};
