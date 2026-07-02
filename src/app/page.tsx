import { EntryExperienceClient } from "@/components/entry";
import { FaqExperience } from "@/features/faq";
import { Hero } from "@/features/hero";
import { IndustriesExperience } from "@/features/industries";
import { BusinessJourney } from "@/features/journey";
import { PackagesExperience } from "@/features/packages";
import { ServicesExperience } from "@/features/services";
import { BusinessStory } from "@/features/story";
import { TrustExperience } from "@/features/testimonials";
import { WhyAcube } from "@/features/why";

/**
 * Home — composition root.
 *
 * `EntryExperienceClient` is a thin "use client" wrapper holding the
 * `next/dynamic ssr:false` import (Next.js 15 rule); this page stays a Server
 * Component. The Hero owns the single <h1>.
 *
 * Section mount order (22-milestone roadmap):
 *   EntryExperienceClient  M05 ✅
 *   Hero (#hero)           M06 ✅
 *   BusinessStory (#business-story) M07 ✅
 *   ServicesExperience (#services)  M08 ✅
 *   BusinessJourney (#process)      M09 ✅
 *   IndustriesExperience (#industries) M10 ✅
 *   WhyAcube (#why-acube)           M11 ✅
 *   PackagesExperience (#packages)  M12 ✅
 *   TrustExperience (#testimonials) M13 ✅
 *   FaqExperience (#faq)            M14 ✅ (this milestone)
 *   #contact M15 · Footer M16
 */
export default function HomePage() {
  return (
    <main id="main">
      <EntryExperienceClient />
      <Hero />
      <BusinessStory />
      <ServicesExperience />
      <BusinessJourney />
      <IndustriesExperience />
      <WhyAcube />
      <PackagesExperience />
      <TrustExperience />
      <FaqExperience />
    </main>
  );
}
