"use client";

import type { EntryPhase } from "@/hooks";

import { EntryTransition } from "./EntryTransition";
import { LogoReveal } from "./LogoReveal";

interface LoaderProps {
  phase: EntryPhase;
  onLogoAppeared: () => void;
  onTransitionComplete: () => void;
}

/**
 * The branded Entry Experience screen. Composes:
 *   - EntryTransition: full-viewport dissolve overlay with atmospheric background
 *   - LogoReveal:      animated ACUBE logo centered in the viewport
 *
 * Receives all phase state from EntryExperience — this component is purely
 * presentational and contains no business logic.
 */
export function Loader({ phase, onLogoAppeared, onTransitionComplete }: LoaderProps) {
  return (
    <EntryTransition phase={phase} onComplete={onTransitionComplete}>
      <LogoReveal phase={phase} onAppeared={onLogoAppeared} />
    </EntryTransition>
  );
}
