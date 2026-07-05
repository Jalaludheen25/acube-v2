import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { RevealRoot } from "@/components/motion";
import { Breadcrumb, SectionIntro } from "@/components/sections";
import { servicesContent } from "@/constants";
import { SetupNavigator } from "@/features/navigator";
import { cn, container, typography } from "@/lib";

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

          <div className="mt-20 space-y-24">
            {servicesContent.categories.map((category, categoryIndex) => (
              <section
                key={category.id}
                aria-label={category.title}
                className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-12"
              >
                {/* Sticky category rail — the chapter marker for this group. */}
                <div className="lg:sticky lg:top-32 lg:self-start">
                  <div data-reveal>
                    <span aria-hidden className="index-giant text-stroke block opacity-70">
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </span>
                    <h2 className={cn(typography.h3, "mt-4 text-gold")}>{category.title}</h2>
                    <p className={cn(typography.caption, "mt-2")}>
                      {category.services.length} services
                    </p>
                  </div>
                </div>

                <ul data-reveal-stagger className="mt-8 lg:mt-0">
                  {category.services.map((service, serviceIndex) => (
                    <li key={service.id}>
                      <Link
                        href={`/services/${service.slug}`}
                        data-cursor-label="Open"
                        className="row-hover group flex items-start justify-between gap-6 border-t border-divider py-7"
                      >
                        <div className="flex items-start gap-5">
                          <span
                            aria-hidden
                            className={cn(
                              typography.label,
                              "mt-1.5 text-muted/60 transition-colors duration-[var(--duration-normal)] group-hover:text-gold",
                            )}
                          >
                            {String(serviceIndex + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="font-heading text-h3 font-medium text-foreground transition-colors duration-[var(--duration-normal)] ease-out-quart group-hover:text-gold">
                              {service.title}
                            </h3>
                            <p className={cn(typography.bodySmall, "mt-2 max-w-xl text-muted")}>
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight
                          className="mt-2 size-5 shrink-0 text-muted transition-all duration-[var(--duration-normal)] ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section
            aria-label="Find your starting point"
            className="section-exhale texture mt-24 overflow-hidden rounded-[var(--radius-2xl)] px-8 py-12 shadow-3d-lg lg:px-12 lg:py-16"
          >
            <SetupNavigator />
          </section>
        </div>
      </RevealRoot>
    </main>
  );
}
