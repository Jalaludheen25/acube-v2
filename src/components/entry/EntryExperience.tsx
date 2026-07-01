"use client";

import { useState } from "react";

import { useAppReady, useEntrySequence, usePrefersReducedMotion } from "@/hooks";

import { Loader } from "./Loader";

/**
 * Entry Experience orchestrator.
 *
 * Determines whether to show the experience based on two skip conditions:
 *   1. `prefers-reduced-motion` — accessibility: show nothing, reveal Hero immediately.
 *   2. sessionStorage `acube:entry` — performance: skip on return visits this session.
 *
 * If neither skip condition is met:
 *   - Waits for the app to be genuinely ready (useAppReady — no fake delays).
 *   - Drives the sequence through the state machine (useEntrySequence).
 *   - Renders the Loader until phase === 'done', then unmounts cleanly.
 *
 * The component is dynamically imported with `ssr: false` in page.tsx so that
 * sessionStorage (browser-only) is safe to access without hydration mismatches.
 *
 * Hand-off point: when phase becomes 'done', the Loader is unmounted and the
 * Hero beneath (added in M06) is fully visible. No architectural change needed.
 */
export function EntryExperience() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Stable — computed once on client mount; sessionStorage is browser-only.
  const [seenBefore] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !!sessionStorage.getItem("acube:entry");
  });

  const shouldSkip = prefersReducedMotion || seenBefore;
  const ready = useAppReady();

  const { phase, handleLogoAppeared, handleComplete } = useEntrySequence(ready, shouldSkip);

  // Skip or done — render nothing so the Hero is immediately visible.
  if (shouldSkip || phase === "done") return null;

  // Idle — waiting for readyState === 'complete'. Render the overlay in its
  // initial visible (black) state so there is no flash of page content.
  // Entering / exiting — Loader drives its own animation.
  return (
    <Loader
      phase={phase}
      onLogoAppeared={handleLogoAppeared}
      onTransitionComplete={handleComplete}
    />
  );
}
