import type { SiteConfig } from "@/types";

/**
 * Canonical site configuration. `description` and `keywords` are intentionally
 * null — company description and SEO keywords are deferred to Milestone 16
 * (SEO) with client-approved copy, never invented (Decision b). The `url`
 * falls back to localhost for local builds; the production domain is supplied
 * via NEXT_PUBLIC_SITE_URL.
 */
export const siteConfig: SiteConfig = {
  name: "ACUBE",
  legalName: "ACUBE Documents Services",
  title: {
    default: "ACUBE — Business Setup & Corporate Consultancy in the UAE",
    template: "%s | ACUBE",
  },
  description: null,
  keywords: null,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  cta: {
    primary: "Book Free Consultation",
    whatsapp: "WhatsApp",
    call: "Call Now",
    secondary: "Explore Services",
  },
};
