export interface WhyPrinciple {
  id: string;
  term: string;
  description: string;
}

export interface WhyProofItem {
  id: string;
  value: string;
  label: string;
}

export interface WhyProof {
  headline: string;
  items: readonly WhyProofItem[];
}

export interface WhyContent {
  eyebrow: string;
  headline: string;
  intro: string;
  principles: readonly WhyPrinciple[];
  /** Verified proof — rendered ONLY when non-null; nothing (no placeholder) otherwise. */
  proof: WhyProof | null;
}
