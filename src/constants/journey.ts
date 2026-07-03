import type { JourneyContent } from "@/types";

import { siteConfig } from "./site";

/**
 * Business Journey — honesty-first.
 *
 * A general, truthful description of the UAE business-setup process, framed as
 * reassurance ("we handle the path"). No invented durations, no timelines, no
 * marketing claims — each stage is a title plus one short line. Subject is "we"
 * to reinforce guided, done-for-you support. Copy is for client review.
 */
export const journey: JourneyContent = {
  eyebrow: "The Journey",
  framing: ["From your first message", "to your first day in business."],
  stages: [
    {
      id: "consultation",
      title: "Consultation",
      description: "We understand your goals, activity, and budget.",
    },
    {
      id: "planning",
      title: "Planning",
      description: "We choose the right jurisdiction, structure, and license.",
    },
    {
      id: "documentation",
      title: "Documentation",
      description: "We prepare and process everything your application needs.",
    },
    {
      id: "government",
      title: "Government Process",
      description: "We handle approvals, licensing, and official procedures.",
    },
    {
      id: "ready",
      title: "Business Ready",
      description: "Your company is established — ready to operate and grow.",
    },
  ],
  closing: "One guided path. We handle the process, so you can focus on your business.",
  cta: { label: siteConfig.cta.primary, href: "/contact" },
};
