import Link from "next/link";
import { ArrowUpRight, Briefcase, Building2, HelpCircle, Layers, ShieldCheck, Users } from "lucide-react";

import { RevealRoot, TiltCard } from "@/components/motion";
import { SectionIntro } from "@/components/sections";
import { IconTile } from "@/components/ui";
import { cn, container, typography } from "@/lib";

const pillars = [
  {
    title: "Services",
    description:
      "Company formation, licensing, corporate and government services — handled end-to-end.",
    href: "/services",
    icon: Briefcase,
    surface: "bg-grad-emerald",
    tile: "celadon",
    featured: true,
  },
  {
    title: "Industries",
    description: "The sectors we help businesses enter and grow across the UAE.",
    href: "/industries",
    icon: Building2,
    surface: "bg-grad-teal",
    tile: "sand",
    featured: false,
  },
  {
    title: "Why ACUBE",
    description: "The principles behind our work — personal, transparent, long-term.",
    href: "/why-acube",
    icon: ShieldCheck,
    surface: "bg-grad-cta",
    tile: "sand",
    featured: false,
  },
  {
    title: "Business Structures",
    description: "Understand mainland, free zone, and the right setup for your company.",
    href: "/packages",
    icon: Layers,
    surface: "bg-grad-teal",
    tile: "celadon",
    featured: false,
  },
  {
    title: "About",
    description: "Who we are and how we work, based in Bur Dubai, Dubai.",
    href: "/about",
    icon: Users,
    surface: "bg-grad-cta",
    tile: "sand",
    featured: false,
  },
  {
    title: "FAQ",
    description: "Clear answers on setup, licensing, and documentation.",
    href: "/faq",
    icon: HelpCircle,
    surface: "bg-grad-emerald",
    tile: "celadon",
    featured: false,
  },
] as const;

/**
 * Home pillars — primary wayfinding, as an asymmetric bento grid. The
 * featured Services card spans 2×2 on desktop; every card is a pointer-
 * tracked TiltCard with a cursor spotlight, an outlined index numeral, and
 * a gradient icon tile. Server Component (TiltCard is an inert leaf).
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
            split
            lede="From company formation to everyday documentation — explore how ACUBE can help."
          />

          <ul
            data-reveal-stagger
            className="mt-16 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {pillars.map((pillar, index) => (
              <li
                key={pillar.href}
                className={cn(pillar.featured && "sm:col-span-2 sm:row-span-2")}
              >
                <TiltCard className="h-full">
                  <Link
                    href={pillar.href}
                    data-cursor-label="View"
                    {...(pillar.featured ? { "data-reveal-mask": "" } : {})}
                    className={cn(
                      "card-spotlight texture theme-dark group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl shadow-3d",
                      pillar.featured ? "gap-16 p-8 lg:p-12" : "gap-10 p-8",
                      pillar.surface,
                    )}
                  >
                    <span
                      aria-hidden
                      className="index-corner text-stroke pointer-events-none absolute right-5 top-5 select-none opacity-40"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="relative">
                      <IconTile
                        icon={pillar.icon}
                        variant={pillar.tile}
                        className="transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:-rotate-6 group-hover:scale-110"
                      />
                      <h3
                        className={cn(
                          pillar.featured ? typography.h2 : typography.h3,
                          "mt-6 text-foreground",
                        )}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className={cn(
                          typography.bodySmall,
                          "mt-3 text-muted",
                          pillar.featured && "max-w-md",
                        )}
                      >
                        {pillar.description}
                      </p>
                    </div>
                    <span className="relative inline-flex items-center gap-2 text-body-sm font-medium text-gold">
                      Learn more
                      <ArrowUpRight
                        className="size-4 transition-transform duration-[var(--duration-normal)] ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </TiltCard>
              </li>
            ))}
          </ul>
        </div>
      </RevealRoot>
    </section>
  );
}
