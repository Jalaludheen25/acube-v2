"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";

import type { EntryPhase } from "@/hooks";
import { overlayVariants } from "./entryMotion";

interface EntryTransitionProps {
  phase: EntryPhase;
  onComplete: () => void;
  children: ReactNode;
}

/**
 * Full-viewport dissolve overlay. Wraps the Entry Experience content and fades
 * the entire scene out over the Hero beneath it once the logo has exited.
 *
 * The background gradient prepares the visual atmosphere for the Hero:
 * - Deep black base (--color-background) for seamless background continuity
 * - A very subtle brand-red radial at the bottom-center (6% opacity) — this
 *   hints at the 3D scene's lighting and ensures visual continuity into Hero.
 *
 * `onComplete` is called when the overlay opacity reaches 0, signalling the
 * Hero that the Entry Experience has fully handed off.
 */
export function EntryTransition({ phase, onComplete, children }: EntryTransitionProps) {
  return (
    <m.div
      aria-hidden={phase === "exiting"}
      variants={overlayVariants}
      animate={phase === "exiting" ? "exit" : "visible"}
      initial="visible"
      onAnimationComplete={(def) => {
        if (def === "exit") onComplete();
      }}
      className="fixed inset-0 z-[var(--z-max)] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(229,57,53,0.06) 0%, transparent 65%), var(--color-background)",
      }}
    >
      {children}
    </m.div>
  );
}
