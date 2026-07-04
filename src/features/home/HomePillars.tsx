import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { RevealRoot } from "@/components/motion";
import { SectionIntro } from "@/components/sections";
import { cn, container, typography } from "@/lib";

const pillars = [
  {
    title: "Services",
    description:
      "Company formation, licensing, corporate and government services — handled end-to-end.",
    href: "/services",
  },
  {
    title: "Industries",
    description: "The sectors we help businesses enter and grow across the UAE.",
    href: "/industries",
  },
  {
    title: "Why ACUBE",
    description: "The principles behind our work — personal, transparent, long-term.",
    href: "/why-acube",
  },
  {
    title: "Business Structures",
    description: "Understand mainland, free zone, and the right setup for your company.",
    href: "/packages",
  },
  {
    title: "About",
    description: "Who we are and how we work, based in Bur Dubai, Dubai.",
    href: "/about",
  },
  {
    title: "FAQ",
    description: "Clear answers on setup, licensing, and documentation.",
    href: "/faq",
  },
] as const;

/**
 * Home pillars — the primary wayfinding on the landing page. Each card is a link
 * to a dedicated page (no on-page sections), with a gradient surface and gold
 * accent. Server Component.
 */
export function HomePillars() {
  return (
    <section aria-labelledby="explore-heading" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "py-24 lg:py-32")}>
          <SectionIntro
            eyebrow="Explore"
            title="Everything you need to establish and run your business."
            titleId="explore-heading"
            size="h2"
            lede="From company formation to everyday documentation — explore how ACUBE can help."
          />

          <ul data-reveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <li key={pillar.href}>
                <Link
                  href={pillar.href}
                  className="group flex h-full flex-col justify-between gap-10 overflow-hidden rounded-2xl border border-border bg-grad-surface p-8 shadow-soft transition-colors duration-[var(--duration-normal)] ease-out-quart hover:border-accent/50"
                >
                  <div>
                    <h3 className={cn(typography.h3, "text-foreground")}>{pillar.title}</h3>
                    <p className={cn(typography.bodySmall, "mt-3 text-muted")}>
                      {pillar.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-body-sm font-medium text-accent">
                    Learn more
                    <ArrowUpRight
                      className="size-4 transition-transform duration-[var(--duration-normal)] ease-out-quart group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </RevealRoot>
    </section>
  );
}
