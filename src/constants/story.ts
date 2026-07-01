import { Building2, Globe, KeyRound, Route, ScrollText, TrendingUp } from "lucide-react";

import type { StoryContent } from "@/types";

/**
 * Business Story content — honesty-first.
 *
 * Uses ONLY: general, widely-accepted facts about the UAE (not ACUBE claims),
 * the universal truth that setup is complex, ACUBE's positioning & core values
 * (from the client-approved PROJECT_BIBLE), verified services (business setup,
 * company formation, corporate services), and the verified Bur Dubai · UAE
 * location.
 *
 * NEVER: founding year, years operating, businesses served, team size, client
 * names/quotes, or any statistic. Tax wording is deliberately QUALITATIVE (no
 * figures, which change over time). `future` holds optional client-supplied
 * content that activates automatically once provided.
 *
 * All copy is subject to client review before launch.
 */
export const story: StoryContent = {
  opportunity: {
    id: "opportunity",
    eyebrow: "The Opportunity",
    statement: ["The UAE is one of the world's", "most dynamic places to", "build a business."],
    body: "A stable economy, world-class connectivity, and a government that welcomes entrepreneurs — the conditions for growth are here.",
  },
  uaeBenefits: [
    {
      id: "ownership",
      title: "100% Foreign Ownership",
      description: "Own your company outright across most activities and free zones.",
      Icon: KeyRound,
    },
    {
      id: "tax",
      title: "Attractive Tax Environment",
      description: "A competitive, business-friendly tax framework.",
      Icon: TrendingUp,
    },
    {
      id: "location",
      title: "Strategic Global Location",
      description: "A bridge between East and West, within hours of major markets.",
      Icon: Globe,
    },
    {
      id: "infrastructure",
      title: "World-Class Infrastructure",
      description: "Modern logistics, banking, and digital connectivity.",
      Icon: Building2,
    },
    {
      id: "regulation",
      title: "Business-Friendly Regulation",
      description: "Clear, established pathways for licensing and setup.",
      Icon: ScrollText,
    },
    {
      id: "gateway",
      title: "Gateway to MENA & Beyond",
      description: "Reach a fast-growing region of billions.",
      Icon: Route,
    },
  ],
  complexity: {
    id: "complexity",
    eyebrow: "The Reality",
    statement: ["Opportunity is one thing.", "Navigating it is another."],
    body: "The right path is rarely obvious — and small missteps cost time and money.",
    points: [
      "Choosing the right jurisdiction and company structure",
      "Preparing and processing documentation correctly",
      "Coordinating licensing, approvals, and banking",
    ],
  },
  solution: {
    id: "solution",
    eyebrow: "The ACUBE Approach",
    statement: ["Expert guidance,", "from first question", "to fully operational."],
    body: "ACUBE guides entrepreneurs through business setup and company formation in the UAE — with clarity at every step, and support that continues after your license is issued.",
    values: [
      { id: "integrity", label: "Integrity" },
      { id: "transparency", label: "Transparency" },
      { id: "professionalism", label: "Professionalism" },
      { id: "reliability", label: "Reliability" },
    ],
  },
  assurance: {
    id: "assurance",
    eyebrow: "Your Partner in the UAE",
    statement: ["Real guidance.", "Real people.", "Based in Bur Dubai."],
    body: "Work directly with an experienced consultant who understands the local landscape — and treats your business as their own.",
  },
  transition: {
    statement: ["Ready to see", "how we can help?"],
    ctaLabel: "Explore Our Services",
    ctaHref: "#services",
  },
  future: {
    foundingYear: null,
    founderNote: null,
    credentials: null,
  },
};
