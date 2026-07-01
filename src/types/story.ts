import type { LucideIcon } from "lucide-react";

export interface UaeBenefit {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface StoryValue {
  id: string;
  label: string;
}

export interface StoryBeatContent {
  id: string;
  eyebrow: string;
  /** Statement headline split into lines for kinetic reveal. */
  statement: readonly string[];
  body: string;
}

/**
 * Optional client-supplied content. Renders only when provided — never invented.
 * (Same auto-activate pattern as hero.stats.)
 */
export interface StoryFutureContent {
  foundingYear: number | null;
  founderNote: string | null;
  credentials: string | null;
}

export interface StoryContent {
  opportunity: StoryBeatContent;
  uaeBenefits: readonly UaeBenefit[];
  complexity: StoryBeatContent & { points: readonly string[] };
  solution: StoryBeatContent & { values: readonly StoryValue[] };
  assurance: StoryBeatContent;
  transition: { statement: readonly string[]; ctaLabel: string; ctaHref: string };
  future: StoryFutureContent;
}
