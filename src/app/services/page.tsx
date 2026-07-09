import type { Metadata } from "next";

import { FloatingParticles, RevealRoot } from "@/components/motion";
import { Breadcrumb, LetsTalk } from "@/components/sections";
import { Figure } from "@/components/ui";
import { ServiceFeatures, ServiceHero, ServiceShowcase } from "@/features/services";
import { SetupNavigator } from "@/features/navigator";
import { cn, container } from "@/lib";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business setup, company formation, corporate & legal, and government document services in Dubai — the full scope ACUBE handles, delivered end-to-end.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main id="main" className="relative bg-background">
      <ServiceHero />

      <RevealRoot>
        <div id="service-catalogue" className="relative">
          <FloatingParticles className="hidden md:block" />
          <div className={cn(container.content, "relative py-24 lg:py-32")}>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

            <div className="mt-20">
              <ServiceShowcase />
            </div>
          </div>
        </div>
      </RevealRoot>

      {/* Why our setup is different */}
      <RevealRoot>
        <ServiceFeatures />
      </RevealRoot>

      {/* Image banner + Setup Navigator */}
      <RevealRoot>
        <div className={cn(container.content, "py-24 lg:py-32")}>
          <div data-parallax="0.1">
            <div data-reveal-scale>
              <Figure
                image={{
                  src: "/images/services-consultation.jpg",
                  alt: "An ACUBE consultant meeting a client at the office, with Dubai's skyline behind them",
                  width: 1536,
                  height: 1024,
                }}
                fill
                focus="center 35%"
                sizes="100vw"
                className="aspect-[16/7] shadow-3d-lg"
              />
            </div>
          </div>

          <section
            aria-label="Find your starting point"
            className="section-exhale texture relative mt-16 overflow-hidden rounded-[var(--radius-2xl)] px-8 py-12 shadow-3d-lg lg:px-12 lg:py-16"
          >
            <span
              aria-hidden
              data-parallax="0.18"
              className="blob bg-grad-celadon pointer-events-none absolute -left-20 -top-20 size-72 opacity-15 blur-3xl"
            />
            <div className="relative">
              <SetupNavigator />
            </div>
          </section>
        </div>
      </RevealRoot>

      <LetsTalk />
    </main>
  );
}
