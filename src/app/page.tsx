import { EntryExperienceClient } from "@/components/entry";

/**
 * Home — composition root.
 *
 * `EntryExperienceClient` is a thin "use client" wrapper that holds the
 * `next/dynamic ssr:false` import (required by Next.js 15 — dynamic with ssr:false
 * is only permitted in Client Components). This page remains a Server Component.
 *
 * Section mount order (per the 22-milestone roadmap):
 *   EntryExperienceClient  M05 — Entry Experience ✅ (this milestone)
 *   #hero                  M06 — Hero Experience (3D scene, headline, CTAs, statistics)
 *   #business-story        M07 — Business Story
 *   #services              M08 — Services Experience
 *   #process               M09 — Business Journey (not in primary nav)
 *   #industries            M10 — Industries
 *   #why-acube             M11 — Why ACUBE
 *   #packages              M12 — Packages
 *   #testimonials          M13 — Testimonials
 *   #faq                   M14 — FAQ
 *   #contact               M15 — Contact Experience
 *   Footer                 M16
 *
 * Per Decision #5: the primary heading is always server-rendered HTML and never
 * depends on animation — critical content is never gated on client JS.
 */
export default function HomePage() {
  return (
    <main id="main" className="min-h-dvh">
      {/* Primary H1 — always in the HTML for LCP and screen readers.
          The visual Hero headline (M06) will be the visible styled version;
          this sr-only version ensures the text is crawlable regardless of JS. */}
      <h1 className="sr-only">
        ACUBE — Business Setup &amp; Corporate Consultancy in the UAE
      </h1>

      {/* Entry Experience — cinematic brand introduction (M05).
          Renders as a fixed overlay; Hero content loads beneath it.
          Skip conditions: prefers-reduced-motion OR acube:entry in sessionStorage. */}
      <EntryExperienceClient />

      {/* Hero section anchor — nav scrollspy and Hero component (M06) attach here. */}
      <section id="hero" aria-label="Hero" />
    </main>
  );
}
