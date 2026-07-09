import type { PackageTier } from "@/types";

/**
 * Package tiers — HONESTY FLAG.
 *
 * Tier names (Starter / Professional / Enterprise) were supplied by the
 * client in the Packages-page brief. The included scope below is a grouping
 * of the 17 VERIFIED services from the client's business card (see
 * constants/services.ts) — no invented capabilities — but the exact
 * tier-to-service mapping is a proposal and MUST be confirmed by the client
 * before launch. Prices are deliberately NOT invented: every tier shows
 * "Tailored" with a consultation note, which is also genuinely how ACUBE
 * quotes (per activity, jurisdiction, and visas). Swapping in verified
 * prices later is a data-only change.
 */
export const packageTiers: readonly PackageTier[] = [
  {
    id: "starter",
    number: "01",
    name: "Starter",
    tagline: "Everything you need to get licensed.",
    description:
      "The essentials, handled end-to-end — your company formed, licensed, and legally ready to operate in the UAE.",
    idealFor: "First-time founders & solo entrepreneurs",
    features: [
      "Company formation & trade licence",
      "Memorandum of Association drafting",
      "Registered virtual office address",
      "Document typing & clearing",
    ],
    accent: "emerald",
    price: { label: "Tailored", note: "Final quote on your free consultation" },
  },
  {
    id: "professional",
    number: "02",
    name: "Professional",
    tagline: "Launch the business and the people behind it.",
    description:
      "Everything in Starter, plus the visas and government paperwork that get you and your team living and working in the UAE.",
    idealFor: "Startups & growing SMEs",
    features: [
      "Everything in Starter",
      "Immigration paperwork & visa processing",
      "Emirates ID & medical applications",
      "Sponsorship assistance",
      "Company stamp & seal",
    ],
    accent: "gold",
    recommended: true,
    price: { label: "Tailored", note: "Final quote on your free consultation" },
  },
  {
    id: "enterprise",
    number: "03",
    name: "Enterprise",
    tagline: "A corporate partner, not just a setup.",
    description:
      "The full corporate relationship — legal instruments, compliance, and a dedicated consultant who stays on long after your licence is issued.",
    idealFor: "Established companies & investors",
    features: [
      "Everything in Professional",
      "Corporate & legal services",
      "Power of Attorney & court applications",
      "Istidama compliance",
      "Renewals, amendments & ongoing support",
      "Dedicated personal consultant",
    ],
    accent: "crimson",
    price: { label: "Tailored", note: "Final quote on your free consultation" },
  },
];
