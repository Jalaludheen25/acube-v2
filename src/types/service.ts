import type { SeoMeta } from "./seo";

/** primary = business setup / company formation; supporting = document services (Decision #1). */
export type ServiceTier = "primary" | "supporting";

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** lucide-react icon name (mapped to a component in the services feature). */
  icon: string;
  tier: ServiceTier;
  /** Who the service is for — a short tag, not a paragraph. */
  idealFor?: string;
  /** Optional detail-page href (e.g. /services/[slug]) — reserved for a future milestone. */
  href?: string;
  /** Optional hero image for the detail page; auto-activates when a real asset is supplied. */
  image?: { src: string; alt: string; width: number; height: number };
  seo?: SeoMeta;
}

export interface ServiceCategory {
  id: string;
  title: string;
  /** primary → editorial rows; supporting → compact chips. */
  variant: ServiceTier;
  services: readonly Service[];
}

export interface ServicesContent {
  framing: string;
  categories: readonly ServiceCategory[];
  cta: { label: string; href: string };
}
