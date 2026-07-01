export interface SiteTitle {
  default: string;
  template: string;
}

export interface SiteCta {
  primary: string;
  whatsapp: string;
  call: string;
  secondary: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  title: SiteTitle;
  /** Company description — deferred to the SEO milestone + client-approved copy. */
  description: string | null;
  /** SEO keywords — deferred; client-verified only. */
  keywords: string[] | null;
  url: string;
  locale: string;
  cta: SiteCta;
}
