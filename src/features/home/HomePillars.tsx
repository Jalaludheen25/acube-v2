import Link from "next/link";
import { ArrowUpRight, Briefcase, Building2, HelpCircle, Layers, ShieldCheck, Users } from "lucide-react";

import { RevealRoot } from "@/components/motion";
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
  },
  {
    title: "Industries",
    description: "The sectors we help businesses enter and grow across the UAE.",
    href: "/industries",
    icon: Building2,
  },
  {
    title: "Why ACUBE",
    description: "The principles behind our work — personal, transparent, long-term.",
    href: "/why-acube",
    icon: ShieldCheck,
  },
  {
    title: "Business Structures",
    description: "Understand mainland, free zone, and the right setup for your company.",
    href: "/packages",
    icon: Layers,
  },
  {
    title: "About",
    description: "Who we are and how we work, based in Bur Dubai, Dubai.",
    href: "/about",
    icon: Users,
  },
  {
    title: "FAQ",
    description: "Clear answers on setup, licensing, and documentation.",
    href: "/faq",
    icon: HelpCircle,
  },
] as const;

/**
 * Home pillars — primary wayfinding on the landing page. Each is a 3D card (soft
 * depth shadow + lift on hover) with a gradient 3D icon tile, linking to a
 * dedicated page (no on-page sections). Server Component.
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
                  className="card-3d group flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-grad-surface p-8 shadow-3d"
                >
                  <div>
                    <IconTile icon={pillar.icon} />
                    <h3 className={cn(typography.h3, "mt-6 text-foreground")}>{pillar.title}</h3>
                    <p className={cn(typography.bodySmall, "mt-3 text-muted")}>{pillar.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-body-sm font-medium text-accent">
                    Learn more
                    <ArrowUpRight
                      className="size-4 transition-transform duration-[var(--duration-normal)] ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1"
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
