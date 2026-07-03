import type { IndustriesContent } from "@/types";

import { siteConfig } from "./site";

/**
 * Industries / sectors — HONESTY FLAG.
 *
 * ⚠️ This sector list is NOT taken from client assets (the business card lists
 * services, not industries served). A business-setup firm forms companies across
 * sectors, so the framing is deliberately "we help businesses establish
 * themselves in these sectors" — NOT a claim of exclusive industry expertise or
 * of specific experience/clients in any sector. No statistics or claims.
 *
 * The list below is a general, editable set of common UAE business sectors and
 * MUST be confirmed/trimmed by the client. The architecture is fully
 * data-driven — add or remove a sector here with no code change.
 */
export const industries: IndustriesContent = {
  eyebrow: "Who We Help",
  framing: "We help businesses establish themselves across the UAE's key sectors.",
  sectors: [
    { id: "trading", name: "Trading" },
    { id: "real-estate", name: "Real Estate" },
    { id: "construction", name: "Construction" },
    { id: "hospitality", name: "Hospitality & F&B" },
    { id: "retail", name: "Retail" },
    { id: "professional-services", name: "Professional Services" },
    { id: "technology", name: "Technology" },
    { id: "healthcare", name: "Healthcare" },
    { id: "manufacturing", name: "Manufacturing" },
    { id: "import-export", name: "Import & Export" },
    { id: "education", name: "Education" },
    { id: "media", name: "Media" },
  ],
  notListed: "Don't see your sector? We help entrepreneurs set up across the UAE.",
  cta: { label: siteConfig.cta.primary, href: "/contact" },
};
