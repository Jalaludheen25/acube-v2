export interface Industry {
  id: string;
  name: string;
  /** lucide-react icon name. */
  icon: string;
}

/** A sector shown in the Industries roster (no icon — typography only). */
export interface IndustrySector {
  id: string;
  name: string;
}

export interface IndustriesContent {
  eyebrow: string;
  framing: string;
  sectors: readonly IndustrySector[];
  notListed: string;
  cta: { label: string; href: string };
}
