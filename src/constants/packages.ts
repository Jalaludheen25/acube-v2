import type { PackagesContent } from "@/types";

/**
 * Business structures — honesty-first.
 *
 * There are NO client-verified packages or prices, so none are invented (no
 * package names, prices, or inclusions). Instead this section presents the
 * general UAE business structures as editorial guidance and drives to a
 * consultation for a tailored recommendation — which is how setup is genuinely
 * scoped (per activity, jurisdiction, and visas).
 *
 * The structure descriptions are general UAE facts and must be confirmed by the
 * client (including that ACUBE handles all three). The `packages` slot is data
 * layer only — reserved for verified priced packages later, never rendered now.
 * All copy is subject to client review.
 */
export const packagesContent: PackagesContent = {
  eyebrow: "Business Structures",
  headline: "Find the structure that fits your business.",
  intro: "There are a few ways to establish a business in the UAE.",
  structures: [
    {
      id: "mainland",
      name: "Mainland",
      description: "Designed for businesses trading directly across the UAE market.",
    },
    {
      id: "free-zone",
      name: "Free Zone",
      description: "Full ownership and tax advantages, with a fast, streamlined setup.",
    },
    {
      id: "offshore",
      name: "Offshore",
      description: "A cost-efficient structure for holding assets and international operations.",
    },
  ],
  packages: [],
  cta: {
    line: "We'll help you choose the right structure for your business.",
    label: "Speak with Our Consultant",
    href: "#contact",
  },
};
