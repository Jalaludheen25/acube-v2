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
            lede="From company formation to everyday documentation — explore what we handle, each service delivered end-to-end."
          />

          <div className="mt-16 space-y-16">
            {servicesContent.categories.map((category) => (
              <section key={category.id} aria-label={category.title}>
                <h2 className={cn(typography.h3, "text-gold")}>{category.title}</h2>
                <ul className="mt-4">
                  {category.services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex items-start justify-between gap-6 border-t border-divider py-6"
                      >
                        <div>
                          <h3 className="font-heading text-body font-semibold text-foreground transition-colors duration-[var(--duration-normal)] ease-out-quart group-hover:text-gold">
                            {service.title}
                          </h3>
                          <p className={cn(typography.bodySmall, "mt-1 max-w-xl text-muted")}>
                            {service.description}
                          </p>
                        </div>
                        <ArrowUpRight
                          className="mt-1 size-5 shrink-0 text-muted transition-colors duration-[var(--duration-normal)] ease-out-quart group-hover:text-gold"
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
            className="mt-20 border-t border-divider pt-12"
          >
            <SetupNavigator />
          </section>
        </div>
      </RevealRoot>
    </main>
  );
}
