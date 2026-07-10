"use client";

import { LazyMotion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * App-level client providers.
 *
 * - `LazyMotion` lazily loads the Framer Motion DOM feature bundle on demand,
 *   keeping it out of the initial JS. `strict` enforces using the `m`
 *   component (not `motion`) across the app for tree-shaking discipline.
 * - `MotionConfig reducedMotion="user"` honors prefers-reduced-motion for
 *   every Framer animation (accessibility).
 *
 * Server-rendered `children` pass through unchanged (RSC composition), so this
 * wrapper adds no server cost and no client cost until an `m.*` component mounts.
 *
 * NOTE: GSAP and Three.js are intentionally NOT initialized here (Milestone 05+).
 */
/** domMax (not domAnimation): the header's sliding active indicator uses
 *  shared-layout `layoutId` animation, which only the max bundle includes.
 *  Still lazy — loaded on demand, off the initial JS. */
const loadFeatures = () => import("framer-motion").then((mod) => mod.domMax);

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
