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
    {
      id: "trading",
      name: "Trading",
      icon: "ShoppingCart",
      angle: "General and specialised trading setups with the right activities on your licence.",
    },
    {
      id: "real-estate",
      name: "Real Estate",
      icon: "Building2",
      angle: "Brokerage and property services structured to meet UAE regulatory requirements.",
    },
    {
      id: "construction",
      name: "Construction",
      icon: "HardHat",
      angle: "Contracting and construction activities with the approvals your work requires.",
    },
    {
      id: "hospitality",
      name: "Hospitality & F&B",
      icon: "UtensilsCrossed",
      angle: "Restaurants, cafes, and hospitality ventures set up for the right permits.",
    },
    {
      id: "retail",
      name: "Retail",
      icon: "Store",
      angle: "Storefront and e-commerce retail licences aligned to how you sell.",
    },
    {
      id: "professional-services",
      name: "Professional Services",
      icon: "Briefcase",
      angle: "Consultancies and professional practices established under the correct category.",
    },
    {
      id: "technology",
      name: "Technology",
      icon: "Cpu",
      angle: "Software, IT, and tech ventures set up on mainland or in a free zone.",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: "HeartPulse",
      angle: "Clinics and health services structured around the necessary approvals.",
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: "Factory",
      angle: "Industrial and manufacturing licences suited to your production activity.",
    },
    {
      id: "import-export",
      name: "Import & Export",
      icon: "Ship",
      angle: "Trade licences and customs setup for moving goods in and out of the UAE.",
    },
    {
      id: "education",
      name: "Education",
      icon: "GraduationCap",
      angle: "Training and education ventures established under the right authority.",
    },
    {
      id: "media",
      name: "Media",
      icon: "Clapperboard",
      angle: "Media, marketing, and creative businesses set up for their activities.",
    },
  ],
  notListed: "Don't see your sector? We help entrepreneurs set up across the UAE.",
  cta: { label: siteConfig.cta.primary, href: "/contact" },
};
