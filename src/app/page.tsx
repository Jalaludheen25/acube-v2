import { EntryExperienceClient } from "@/components/entry";
import { Hero } from "@/features/hero";

/**
 * Home — composition root.
 *
 * `EntryExperienceClient` is a thin "use client" wrapper holding the
 * `next/dynamic ssr:false` import (Next.js 15 rule); this page stays a Server
 * Component. The Hero owns the single <h1> (the previous temporary sr-only H1
 * has been removed).
 *
 * Section mount order (22-milestone roadmap):
 *   EntryExperienceClient  M05 ✅
 *   Hero (#hero)           M06 ✅ (this milestone)
 *   #business-story        M07 — Business Story
 *   #services              M08 — Services Experience
 *   #process               M09 — Business Journey (not in primary nav)
 *   #industries            M10 · #why-acube M11 · #packages M12
 *   #testimonials          M13 · #faq M14 · #contact M15 · Footer M16
 */
export default function HomePage() {
  return (
    <main id="main">
      <EntryExperienceClient />
      <Hero />
    </main>
  );
}
