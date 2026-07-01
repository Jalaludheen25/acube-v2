import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { easing } from "@/constants";

gsap.registerPlugin(ScrollTrigger, CustomEase);

/** Build a GSAP CustomEase SVG path from a design-token cubic-bezier tuple. */
const toPath = (e: readonly number[]): string =>
  `M0,0 C${e[0] ?? 0},${e[1] ?? 0} ${e[2] ?? 0},${e[3] ?? 0} 1,1`;

/**
 * Shared GSAP configuration — the canonical home for scroll-driven animation.
 * ScrollTrigger + CustomEase registered once; eases derived from design tokens
 * (no hardcoded curves). Imported dynamically (client-only, post-mount) so it
 * stays off the LCP path.
 */
export const ease = {
  outExpo: CustomEase.create("acOutExpo", toPath(easing.outExpo)),
  outQuart: CustomEase.create("acOutQuart", toPath(easing.outQuart)),
  inOutSoft: CustomEase.create("acInOutSoft", toPath(easing.inOutSoft)),
};

export { gsap, ScrollTrigger };
