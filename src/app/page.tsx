import { Hero } from "@/features/hero";
import { HomeCtaBand, HomeMarquee, HomePillars } from "@/features/home";
import { TrustExperience } from "@/features/testimonials";

/**
 * Home — the landing page.
 *
 * A multi-page site: the homepage is a concise landing (hero → pillars that link
 * to dedicated pages → trust → closing CTA), not a long stack of on-page
 * sections. Each header item and each pillar navigates to its own route. The
 * Hero owns the single <h1>; its animation is paused (static backdrop) until the
 * final animation pass.
 */
export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <HomePillars />
      <HomeMarquee />
      <TrustExperience />
      <HomeCtaBand />
    </main>
  );
}
