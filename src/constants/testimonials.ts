import type { Testimonial, TrustContent } from "@/types";

/**
 * Trust section content.
 *
 * When no verified testimonials exist, the section presents a premium editorial
 * statement about ACUBE — permanence, professionalism, guidance. It never
 * explains an absence, never implies "new," and never compares to anything not
 * on the page. Copy is subject to client review.
 */
export const trustContent: TrustContent = {
  statement: {
    eyebrow: "Trust",
    headline: "Built on guidance. Made to last.",
    body: "Every business deserves careful guidance and a foundation built to last — the standard we hold ourselves to on every setup we handle.",
  },
  quotes: {
    eyebrow: "Client Voices",
    headline: "In their words.",
  },
};

/**
 * VERIFIED testimonials only — empty until the client supplies real, consented
 * reviews. Adding a Testimonial object here makes it appear automatically as an
 * editorial blockquote (no component or layout changes). NEVER fabricate names,
 * companies, quotes, ratings, or review counts.
 */
export const testimonials: readonly Testimonial[] = [];
