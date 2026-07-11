import type { Variants } from "framer-motion";

import { duration, easing, stagger } from "@/constants";

const s = (ms: number): number => ms / 1000;

type Bezier = [number, number, number, number];
const bezier = (e: readonly number[]): Bezier => [e[0] ?? 0, e[1] ?? 0, e[2] ?? 0, e[3] ?? 0];

/** Contact hero content reveal — same token-driven shape as the other video
 *  hero, kept local so features/contact stays self-contained. */
export const contactHeroContentVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger.features, delayChildren: s(duration.normal) },
  },
};

export const contactHeroItemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: s(duration.slow), ease: bezier(easing.outExpo) },
  },
};
