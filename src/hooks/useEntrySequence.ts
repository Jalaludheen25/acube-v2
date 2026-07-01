import { useCallback, useEffect, useState } from "react";

/** Phases of the Entry Experience sequence. */
export type EntryPhase = "idle" | "entering" | "exiting" | "done";

interface EntrySequence {
  phase: EntryPhase;
  /** Trigger the exit animations (called when the logo appear animation completes). */
  handleLogoAppeared: () => void;
  /** Mark the sequence fully complete (called when the overlay fade-out completes). */
  handleComplete: () => void;
}

const STORAGE_KEY = "acube:entry";

/**
 * Drives the Entry Experience state machine.
 *
 * - `idle`:     waiting for the app to be ready.
 * - `entering`: logo is animating in.
 * - `exiting`:  logo + overlay are animating out.
 * - `done`:     sequence complete; sessionStorage flag is set.
 *
 * `shouldSkip` should be true when the user prefers reduced motion OR the
 * experience has already been shown this session (sessionStorage check is done
 * externally so the hook stays pure and testable).
 */
export function useEntrySequence(ready: boolean, shouldSkip: boolean): EntrySequence {
  const [phase, setPhase] = useState<EntryPhase>("idle");

  useEffect(() => {
    if (shouldSkip) {
      setPhase("done");
      return;
    }
    if (ready && phase === "idle") {
      setPhase("entering");
    }
  }, [ready, shouldSkip, phase]);

  const handleLogoAppeared = useCallback(() => {
    setPhase("exiting");
  }, []);

  const handleComplete = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Blocked in some private-browsing configurations — fail silently.
    }
    setPhase("done");
  }, []);

  return { phase, handleLogoAppeared, handleComplete };
}

/** Returns true if the Entry Experience has already been shown this session. */
export function hasSeenEntry(): boolean {
  if (typeof window === "undefined") return false;
  return !!sessionStorage.getItem(STORAGE_KEY);
}
