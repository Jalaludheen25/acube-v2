export interface JourneyStage {
  id: string;
  title: string;
  description: string;
}

export interface JourneyContent {
  eyebrow: string;
  /** Opener statement, split into lines. */
  framing: readonly string[];
  stages: readonly JourneyStage[];
  closing: string;
  cta: { label: string; href: string };
}
