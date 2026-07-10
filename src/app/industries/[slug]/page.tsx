import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";

import { RevealRoot } from "@/components/motion";
import { Breadcrumb, LetsTalk } from "@/components/sections";
import { Button, Figure } from "@/components/ui";
import { industries, siteConfig, why } from "@/constants";
import {
  allSectors,
  FallbackIndustryIcon,
  getRelatedSectors,
  getSectorBySlug,
  industryIcons,
} from "@/features/industries";
import { cn, container, typography } from "@/lib";

interface IndustryDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allSectors.map((sector) => ({ slug: sector.id }));
}

export async function generateMetadata({ params }: IndustryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};
  return {
    title: `${sector.name} Business Setup`,
    description:
      sector.angle ??
      `Set up your ${sector.name.toLowerCase()} business in the UAE with ACUBE — company formation and licensing, handled end-to-end.`,
    alternates: { canonical: `/industries/${sector.id}` },
  };
}

export default async function IndustryDetailPage({ params }: IndustryDetailPageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const Icon = (sector.icon && industryIcons[sector.icon]) || FallbackIndustryIcon;
  const related = getRelatedSectors(sector.id);

  return (
    <main id="main" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "py-32 lg:py-40")}>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: sector.name },
            ]}
          />

          {/* Intro */}
          <div className="mt-8 lg:grid lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-16">
            <div data-reveal className="relative">
              <span
                aria-hidden
                data-parallax="0.12"
                className="blob bg-grad-celadon pointer-events-none absolute -left-24 -top-16 size-64 opacity-20 blur-3xl"
              />
              <span className="glass-floating float relative inline-flex size-16 items-center justify-center rounded-2xl">
                <Icon className="size-8 text-gold" aria-hidden />
              </span>
              <p className={cn(typography.label, "relative mt-8 flex items-center gap-3 text-gold")}>
                <span aria-hidden className="h-px w-8 bg-gold/60" />
                {industries.eyebrow}
              </p>
              <h1
                data-split
                className={cn(typography.display, "relative mt-6 text-balance text-foreground")}
              >
                {sector.name} business setup in the UAE.
              </h1>
              {sector.angle ? (
                <p className={cn(typography.body, "relative mt-6 max-w-xl text-muted")}>
                  {sector.angle}
                </p>
              ) : null}
              <Button href="/contact" variant="primary" size="lg" className="relative mt-10">
                {siteConfig.cta.primary}
              </Button>
            </div>

            <div data-reveal-mask className="mt-12 lg:mt-0">
              <Figure
                image={{
                  src: "/images/industries-operations.jpg",
                  alt: "ACUBE consultants reviewing business setup options with a view of Dubai's skyline",
                  width: 1536,
                  height: 1024,
                }}
                fill
                focus="85% 40%"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[3/4] shadow-3d-lg"
              />
            </div>
          </div>

          {/* How we help — qualitative (reuses the universal principles, not
              invented sector claims). */}
          <div className="mt-24 lg:mt-32">
            <h2 className={cn(typography.h2, "max-w-2xl text-balance text-foreground")}>
              How we help you set up in {sector.name.toLowerCase()}.
            </h2>
            <ul data-reveal-stagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {why.principles.map((principle) => (
                <li
                  key={principle.id}
                  className="glass-depth card-spotlight group relative flex items-start gap-4 overflow-hidden rounded-2xl p-6 shadow-3d"
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-grad-celadon text-ink-black">
                    <Check className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading text-body font-semibold text-foreground">
                      {principle.term}
                    </p>
                    <p className={cn(typography.bodySmall, "mt-1 text-muted")}>
                      {principle.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Related sectors */}
          <div data-reveal className="mt-24 border-t border-divider pt-12">
            <h2 className={cn(typography.h3, "text-foreground")}>Other sectors we help with</h2>
            <ul data-reveal-stagger className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => {
                const RelIcon = (item.icon && industryIcons[item.icon]) || FallbackIndustryIcon;
                return (
                  <li key={item.id}>
                    <Link
                      href={`/industries/${item.id}`}
                      data-cursor-label="Explore"
                      className="row-hover group flex items-center justify-between gap-4 border-t border-divider py-5"
                    >
                      <span className="flex items-center gap-3">
                        <RelIcon className="size-5 text-gold" aria-hidden />
                        <span className="font-heading text-body font-medium text-foreground transition-colors duration-[var(--duration-normal)] ease-out-quart group-hover:text-gold">
                          {item.name}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted transition-all duration-[var(--duration-normal)] ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold"
                        aria-hidden
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </RevealRoot>

      <LetsTalk lede={`Ready to set up your ${sector.name.toLowerCase()} business in the UAE? Book a free consultation and we'll map out your path.`} />
    </main>
  );
}
