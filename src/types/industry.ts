export interface Industry {
  id: string;
  name: string;
  /** lucide-react icon name. */
  icon: string;
}

/** A sector shown in the Industries roster and its detail page. */
export interface IndustrySector {
  id: string;
  name: string;
  /** lucide-react icon name (see industryIcons). */
  icon?: string;
  /** One general sentence on what setting up in this sector involves.
   *  NOT a claim of ACUBE's sector-specific experience; client-reviewable. */
  angle?: string;
}

export interface IndustriesContent {
  eyebrow: string;
  framing: string;
  sectors: readonly IndustrySector[];
  notListed: string;
  cta: { label: string; href: string };
}
