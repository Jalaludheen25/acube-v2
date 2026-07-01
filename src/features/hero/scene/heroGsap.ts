import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

import { easing } from "@/constants";

gsap.registerPlugin(CustomEase);

/** Build a GSAP CustomEase SVG path from a design-token cubic-bezier tuple. */
const toPath = (e: readonly number[]): string =>
  `M0,0 C${e[0] ?? 0},${e[1] ?? 0} ${e[2] ?? 0},${e[3] ?? 0} 1,1`;

/**
 * GSAP eases built from the design-system motion curves — no hardcoded timing.
 * Client-only (this module is imported solely by the ssr:false scene).
 */
export const heroGsapEase = {
  outExpo: CustomEase.create("acubeHeroOutExpo", toPath(easing.outExpo)),
  inOutSoft: CustomEase.create("acubeHeroInOutSoft", toPath(easing.inOutSoft)),
};

export { gsap };
