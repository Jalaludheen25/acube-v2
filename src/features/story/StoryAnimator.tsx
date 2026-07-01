"use client";

import type { ReactNode } from "react";

import { RevealRoot } from "@/components/motion";

interface StoryAnimatorProps {
  children: ReactNode;
}

/**
 * Thin wrapper around the shared RevealRoot (kept for API stability so the
 * Business Story composition is unchanged). The reveal logic now lives once in
 * @/components/motion/RevealRoot and is shared with the Services Experience.
 */
export function StoryAnimator({ children }: StoryAnimatorProps) {
  return <RevealRoot>{children}</RevealRoot>;
}
