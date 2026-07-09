"use client";

import { useLayoutEffect, useState } from "react";
import { m } from "framer-motion";

import { duration, easing } from "@/constants";

const s = (ms: number): number => ms / 1000;

type Bezier = [number, number, number, number];
const bezier = (e: readonly number[]): Bezier => [e[0] ?? 0, e[1] ?? 0, e[2] ?? 0, e[3] ?? 0];

/** Module-scoped: the first template mount is the initial page load (already
 *  covered by the entry Loader and SSR paint) — the veil only plays on
 *  subsequent client-side navigations. */
let hasMountedOnce = false;

/**
 * Route-change transition — mounted by `app/template.tsx`, which re-mounts on
 * every navigation: an ink-black curtain covers the incoming page before its
 * first paint (useLayoutEffect, so the route swap itself is never visible)
 * then lifts away upward (GPU translate only) with a champagne hairline
 * riding its lower edge — "fade through black" and "mask reveal" as one
 * gesture. Unmounts itself when done; skipped entirely on initial load, under
 * prefers-reduced-motion, and for no-JS visitors (SSR renders nothing).
 */
export function PageVeil() {
  const [state, setState] = useState<"pending" | "active" | "done">("pending");

  useLayoutEffect(() => {
    if (!hasMountedOnce) {
      hasMountedOnce = true;
      setState("done");
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("done");
      return;
    }
    setState("active");
  }, []);

  if (state !== "active") return null;

  return (
    <m.div
      aria-hidden
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{
        duration: s(duration.slow),
        ease: bezier(easing.inOutSoft),
        delay: s(duration.fast),
      }}
      onAnimationComplete={() => setState("done")}
      className="pointer-events-none fixed inset-0 z-[calc(var(--z-max)+1)] bg-ink-black will-change-transform"
    >
      {/* Light riding the curtain's lower edge. */}
      <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/80 to-transparent shadow-[0_0_24px_4px_color-mix(in_srgb,var(--color-champagne)_35%,transparent)]" />
      <span className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-celadon/10 to-transparent" />
    </m.div>
  );
}
