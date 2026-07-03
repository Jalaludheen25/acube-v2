import type { NavigatorContent } from "@/types";

/**
 * Setup Navigator content. Neutral intake questions only — nothing here gives
 * regulatory advice or quotes a price. Selections simply tailor the free
 * consultation. Copy is subject to client review.
 */
export const navigatorContent: NavigatorContent = {
  eyebrow: "Where to start",
  title: "Let's find your starting point.",
  lede: "Answer a few quick questions and we'll tailor your free consultation — no obligation.",
  questions: [
    {
      id: "intent",
      legend: "What brings you here?",
      options: [
        { id: "start", label: "Start a new business" },
        { id: "formation", label: "Company formation & licensing" },
        { id: "documents", label: "Documentation & government services" },
        { id: "unsure", label: "Not sure yet" },
      ],
    },
    {
      id: "location",
      legend: "Where would you set up?",
      options: [
        { id: "mainland", label: "Mainland" },
        { id: "freezone", label: "Free zone" },
        { id: "unsure", label: "Not sure yet" },
      ],
    },
    {
      id: "timeline",
      legend: "How soon?",
      options: [
        { id: "asap", label: "As soon as possible" },
        { id: "months", label: "In the next few months" },
        { id: "exploring", label: "Just exploring" },
      ],
    },
  ],
  summaryLabel: "We'll focus your consultation on",
  ctaHref: "/contact",
};
