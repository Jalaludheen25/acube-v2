import type { Metadata } from "next";

import { RevealRoot } from "@/components/motion";
import { Breadcrumb, LetsTalk, SectionIntro } from "@/components/sections";
import { ImagePlaceholder } from "@/components/ui";
import { servicesContent } from "@/constants";
import { ServiceFeatures, ServiceShowcase } from "@/features/services";
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
      <RevealRoot>
        <div className={cn(container.content, "py-32 lg:py-40")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

          <SectionIntro
            as="h1"
            className="mt-8"
            eyebrow="Services"
            title={servicesContent.framing}
            split
            lede="From company formation to everyday documentation — explore what we handle, each service delivered end-to-end."
          />

          <div className="mt-20">
            <ServiceShowcase />
          </div>
        </div>
      </RevealRoot>

      {/* Why our setup is different */}
      <ServiceFeatures />

      {/* Image banner + Setup Navigator */}
      <RevealRoot>
        <div className={cn(container.content, "py-24 lg:py-32")}>
          {/* Image: "Business Meeting / Consultation" — replace later. */}
          <div data-reveal-scale>
            <ImagePlaceholder
              suggestion="Consultation in Progress"
              hint="A consultant meeting a client at the ACUBE office"
              aspect="wide"
              variant="emerald"
            />
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
