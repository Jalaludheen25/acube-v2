import type { AboutStoryStage } from "@/types";

/**
 * The About hero's 6-stage scroll narrative — copy supplied by the client,
 * synced to the pinned frame sequence via useAboutFrameSequence's stage
 * bucketing (6 equal bands across the pin's scroll progress).
 */
export const aboutStory: readonly AboutStoryStage[] = [
  {
    heading: "About ACUBE",
    body: "Premium Business Setup Partner in Dubai.",
  },
  {
    heading: "Built on Precision",
    body: "Every successful business begins with careful planning, expertise and attention to detail.",
  },
  {
    heading: "Premium Environment",
    body: "Designed to deliver confidence, professionalism and long-term business success.",
  },
  {
    heading: "Executive Experience",
    body: "Modern spaces that reflect trust, quality and global standards.",
  },
  {
    heading: "Our Commitment",
    body: "Helping entrepreneurs establish and grow businesses with confidence.",
  },
  {
    heading: "Trusted Partner",
    body: "Your business journey begins with ACUBE.",
  },
];
