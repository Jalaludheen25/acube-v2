"use client";

import { m } from "framer-motion";

import { Logo } from "@/components/ui";
import { cn } from "@/lib";

import type { EntryPhase } from "@/hooks";
import { glowVariants, logoVariants } from "./entryMotion";

interface LogoRevealProps {
  phase: EntryPhase;
  onAppeared: () => void;
}

/**
 * Animated ACUBE logo for the Entry Experience.
 *
 * Two layers:
 *   1. Glow capsule  — glass surface that gives the logo legibility on the
 *      deep-black background regardless of PNG transparency, and fades first
 *      during the exit, creating a premium dissolve effect.
 *   2. Logo          — the official ACUBE asset (src/components/ui/Logo).
 *
 * Calls `onAppeared` when the entrance animation fully completes; this triggers
 * the exit sequence. Uses only design-system tokens via entryMotion.ts.
 */
export function LogoReveal({ phase, onAppeared }: LogoRevealProps) {
  const animate = phase === "exiting" ? "exit" : phase === "entering" ? "visible" : "hidden";

  return (
    <div className="relative flex flex-col items-center gap-6">
      {/* Glow capsule — provides legibility + atmospheric light */}
      <m.div
        aria-hidden
        variants={glowVariants}
        animate={animate}
        initial="hidden"
        className={cn(
          "absolute inset-0 -z-10 rounded-2xl",
          "shadow-[0_0_80px_rgba(229,57,53,0.12),0_0_40px_rgba(46,125,50,0.06)]",
        )}
      />

      {/* Logo container with glass backdrop for dark-background legibility */}
      <m.div
        variants={logoVariants}
        animate={animate}
        initial="hidden"
        onAnimationComplete={(def) => {
          if (def === "visible") onAppeared();
        }}
        className="glass rounded-2xl px-10 py-5"
      >
        <Logo
          href={null}
          priority
          className="h-9 w-auto sm:h-11 md:h-12"
        />
      </m.div>
    </div>
  );
}
