import type { SeoMeta } from "./seo";

/** primary = business setup / company formation; supporting = document services (Decision #1). */
export type ServiceTier = "primary" | "supporting";

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** lucide-react icon name. */
  icon: string;
  tier: ServiceTier;
  seo?: SeoMeta;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}
