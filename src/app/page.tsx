import { EntryExperienceClient } from "@/components/entry";
import { Hero } from "@/features/hero";
import { BusinessJourney } from "@/features/journey";
import { ServicesExperience } from "@/features/services";
import { BusinessStory } from "@/features/story";

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
 *   BusinessJourney (#process)      M09 ✅ (this milestone)
 *   #industries M10 · #why-acube M11 · #packages M12
 *   #testimonials M13 · #faq M14 · #contact M15 · Footer M16
 */
export default function HomePage() {
  return (
    <main id="main">
      <EntryExperienceClient />
      <Hero />
      <BusinessStory />
      <ServicesExperience />
      <BusinessJourney />
    </main>
  );
}
