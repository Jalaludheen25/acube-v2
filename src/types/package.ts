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
