import type { FaqContent } from "@/types";

/**
 * FAQ — honesty-first.
 *
 * No legal, tax, or immigration ADVICE. No statistics, timelines, government
 * promises, approval guarantees, or pricing estimates. Where an answer depends
 * on circumstances (cost, timeline, structure), it defers to the business
 * activity and a consultation. Answers describe what ACUBE does (verified
 * services) and are readable in under 15 seconds. All copy is subject to client
 * review.
 *
 * Adding an item here creates another FAQ entry automatically — no component or
 * layout changes. The markup is ready for FAQPage JSON-LD in the SEO milestone.
 */
export const faqContent: FaqContent = {
  eyebrow: "FAQ",
  headline: "Questions, answered.",
  items: [
    {
      id: "help-setup",
      question: "Can you help me set up a business in the UAE?",
      answer:
        "Yes — we guide you through the full setup, from choosing a structure to your license and the paperwork in between.",
    },
    {
      id: "structure",
      question: "Which business structure is right for me?",
      answer:
        "It depends on your activity and how you plan to operate. We'll help you find the right fit during your consultation.",
    },
    {
      id: "cost",
      question: "How much does it cost?",
      answer:
        "It depends on your activity, structure, and requirements — we'll go through it clearly with you in a consultation.",
    },
    {
      id: "time",
      question: "How long does the process take?",
      answer:
        "It depends on your business activity and the steps involved. We'll talk you through what to expect from the start.",
    },
    {
      id: "documents",
      question: "Do you handle the documentation?",
      answer: "Yes — we prepare and process the documentation involved in your setup.",
    },
    {
      id: "visas",
      question: "Can you help with visas and Emirates ID?",
      answer:
        "Yes — we assist with immigration paperwork, Emirates ID, medical applications, and related documentation.",
    },
    {
      id: "location",
      question: "Where are you based?",
      answer: "In Bur Dubai, Dubai — and we work with businesses across the UAE.",
    },
  ],
};
