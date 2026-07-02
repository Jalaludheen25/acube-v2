import type { SiteConfig } from "@/types";

/**
 * Canonical site configuration. `description` is a factual, verified-derived
 * summary (service categories + location, both from client assets) set in the
 * basic-SEO milestone — no invented claims; subject to client approval.
 * `keywords` stays null (ignored by modern search engines) until client-approved.
 * The `url` falls back to localhost for local builds; the production domain is
 * supplied via NEXT_PUBLIC_SITE_URL.
 */
export const siteConfig: SiteConfig = {
  name: "ACUBE",
  legalName: "ACUBE Documents Services",
  title: {
    default: "ACUBE — Business Setup & Corporate Consultancy in the UAE",
    template: "%s | ACUBE",
  },
  description:
    "ACUBE Documents Services provides business setup, company formation, and corporate & government document services in Bur Dubai, Dubai, United Arab Emirates.",
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
