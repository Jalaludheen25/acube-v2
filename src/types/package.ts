export interface PackageFeature {
  label: string;
  included: boolean;
}

export interface Package {
  id: string;
  name: string;
  /** Null when pricing is "custom quote". */
  priceLabel: string | null;
  idealFor: string;
  features: PackageFeature[];
  highlighted?: boolean;
  cta: string;
}

/** A UAE business structure/setup option — presented editorially, never as a priced product. */
export interface SetupStructure {
  id: string;
  name: string;
  description: string;
}

export interface PackagesContent {
  eyebrow: string;
  headline: string;
  intro: string;
  structures: readonly SetupStructure[];
  /**
   * Verified priced packages — DATA LAYER ONLY. This slot is never rendered in
   * the UI until a future milestone surfaces client-verified packages; no empty
   * package model is ever exposed.
   */
  packages: readonly Package[];
  cta: { line: string; label: string; href: string };
}
