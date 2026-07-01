import type { WhyContent } from "@/types";

/**
 * Why ACUBE — honesty-first.
 *
 * We have NO verified awards, years, or statistics, and invent none. Trust is
 * built through confident positioning and principle, drawn from the
 * client-approved PROJECT_BIBLE values and verified operations. Every principle
 * describes how ACUBE works (a commitment) — never an achievement, and NEVER a
 * comparison to other consultancies (the visitor concludes that on their own).
 * Each description is one concise sentence, no promotional language.
 *
 * `proof` is null and the proof slot renders nothing until the client supplies
 * verified content (trade license, real numbers, credentials) — no placeholders.
 * All copy is subject to client review.
 */
export const why: WhyContent = {
  eyebrow: "Why ACUBE",
  headline: "Your business deserves the right foundation.",
  intro: "A few principles guide everything we do.",
  principles: [
    {
      id: "end-to-end",
      term: "End-to-End Support",
      description: "One partner from your first question to a fully operational business.",
    },
    {
      id: "personal",
      term: "Personal Guidance",
      description: "Direct access to an experienced consultant who handles your setup personally.",
    },
    {
      id: "local",
      term: "Local & Government Knowledge",
      description: "Deep familiarity with UAE procedures, licensing, and approvals.",
    },
    {
      id: "transparency",
      term: "Transparency",
      description: "Clear communication and honest advice at every step.",
    },
    {
      id: "long-term",
      term: "A Long-Term Partner",
      description: "Support that continues long after your license is issued.",
    },
  ],
  proof: null,
};
