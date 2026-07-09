import type { ServiceHeroContent } from "@/types";

/**
 * Services page video hero — copy supplied by the client. The secondary CTA
 * points at the service catalogue below (an in-page anchor), since a
 * "secondary" action labelled "Explore Services" on the Services page itself
 * can only sensibly mean "jump to the list," not navigate to this same page.
 */
export const serviceHero: ServiceHeroContent = {
  title: "Business Setup Services in Dubai",
  subtitle:
    "End-to-end business setup solutions tailored for entrepreneurs, startups and global investors.",
  primaryCta: { label: "Start Your Business", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "#service-catalogue" },
  video: {
    mp4: "/videos/services/hero.mp4",
    webm: "/videos/services/hero.webm",
    poster: "/videos/services/poster.webp",
  },
};
