import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { RevealRoot } from "@/components/motion";
import { Breadcrumb, LetsTalk, SectionIntro, StatBand } from "@/components/sections";
import { Button, Figure, IconTile } from "@/components/ui";
import { AboutPillars, AboutTimeline } from "@/features/about";
import { contact, siteConfig, why } from "@/constants";
import { cn, container, typography } from "@/lib";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.description ?? undefined,
  alternates: { canonical: "/about" },
};

/** Placeholder metrics — the client supplies verified figures (renders "—"). */
const aboutStats = [
  { value: "—", label: "Years in Dubai" },
  { value: "—", label: "Businesses helped" },
  { value: "—", label: "Free zones covered" },
  { value: "—", label: "Avg. response" },
] as const;

export default function AboutPage() {
  return (
    <main id="main" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "py-32 lg:py-40")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

          {/* Intro + hero image */}
          <div className="mt-8 lg:grid lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-16">
            <SectionIntro
              as="h1"
              eyebrow="About"
              title={why.headline}
              split
              lede={siteConfig.description ?? undefined}
            />
            <Figure
              image={{
                src: "/images/about-office.jpg",
                alt: "The ACUBE office, overlooking Dubai's skyline",
                width: 1536,
                height: 1024,
              }}
              fill
              focus="80% 45%"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[3/4] shadow-3d-lg mt-12 lg:mt-0"
            />
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <section aria-label="Mission, vision, and values" className="relative bg-background">
          <div className={cn(container.content, "pb-24 lg:pb-32")}>
            <AboutPillars />
          </div>
        </section>

        {/* Stats band (placeholder metrics) */}
        <section aria-label="By the numbers" className="section-exhale texture relative overflow-hidden">
          <div className={cn(container.content, "py-20 lg:py-28")}>
            <p data-reveal className={cn(typography.label, "flex items-center justify-center gap-3 text-center text-gold")}>
              <span aria-hidden className="h-px w-8 bg-gold/60" />
              A quick picture
            </p>
            <StatBand items={aboutStats} className="mt-10" />
            <p data-reveal className={cn(typography.caption, "mt-6 text-center")}>
              Figures confirmed with the client before launch.
            </p>
          </div>
        </section>

        {/* Company story */}
        <section aria-label="Our story" className="relative bg-background">
          <div className={cn(container.content, "py-24 lg:py-32 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16")}>
            <Figure
              image={{
                src: "/images/about-team.jpg",
                alt: "ACUBE consultants reviewing a business setup plan with a client",
                width: 1536,
                height: 1024,
              }}
              fill
              focus="center 30%"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-square shadow-3d-lg"
            />
            <div data-reveal className="mt-12 lg:mt-0">
              <SectionIntro
                eyebrow="Our story"
                title="Built to make UAE setup simple."
                size="h2"
              />
              <p className={cn(typography.body, "mt-6 text-muted")}>
                {siteConfig.description}
              </p>
              <p className={cn(typography.body, "mt-4 text-muted")}>
                From our base in Bur Dubai, we guide entrepreneurs through every step of
                establishing and running a business in the Emirates — so the paperwork never
                gets in the way of the plan.
              </p>
            </div>
          </div>
        </section>

        {/* How we work timeline */}
        <section aria-label="How we work" className="relative bg-background">
          <div className={cn(container.content, "pb-24 lg:pb-32")}>
            <SectionIntro
              eyebrow="How we work"
              title="From first question to fully operational."
              size="h2"
              split
            />
            <div className="mt-16 max-w-2xl">
              <AboutTimeline />
            </div>
          </div>
        </section>

        {/* Principles grid */}
        <section aria-label="Our principles" className="relative bg-background">
          <div className={cn(container.content, "pb-24 lg:pb-32")}>
            <SectionIntro eyebrow="What guides us" title={why.intro} size="h2" />
            <ul data-reveal-stagger className="mt-16 grid gap-x-16 gap-y-10 border-t border-divider pt-12 md:grid-cols-2">
              {why.principles.map((principle, index) => (
                <li key={principle.id} className="relative">
                  <span aria-hidden className={cn(typography.label, "text-gold/70")}>
                    /{String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className={cn(typography.h3, "mt-2 text-foreground")}>{principle.term}</h3>
                  <p className={cn(typography.body, "mt-2 text-muted")}>{principle.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Visit us */}
        <section aria-label="Visit us" className="relative bg-background">
          <div className={cn(container.content, "pb-24 lg:pb-32")}>
            <div
              data-reveal-scale
              className="glass-depth relative overflow-hidden rounded-[var(--radius-2xl)] p-8 lg:p-12"
            >
              <span
                aria-hidden
                data-parallax="0.15"
                className="blob bg-grad-celadon pointer-events-none absolute -right-20 -top-24 size-72 opacity-25 blur-3xl"
              />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-5">
                  <IconTile icon={MapPin} variant="green" size="lg" className="float" />
                  <div>
                    <p className={cn(typography.label, "text-gold")}>Visit us</p>
                    <p className={cn(typography.body, "mt-3 max-w-md text-muted")}>
                      {contact.address.formatted}
                    </p>
                  </div>
                </div>
                <Button href="/contact" variant="primary" size="lg" className="shrink-0">
                  {siteConfig.cta.primary}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </RevealRoot>

      <LetsTalk />
    </main>
  );
}
