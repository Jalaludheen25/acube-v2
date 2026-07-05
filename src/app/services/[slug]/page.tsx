import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { RevealRoot } from "@/components/motion";
import { Breadcrumb } from "@/components/sections";
import { Button, Figure } from "@/components/ui";
import { siteConfig } from "@/constants";
import { allServices, getServiceBySlug } from "@/features/services";
import { FallbackServiceIcon, serviceIcons } from "@/features/services/serviceIcons";
import { cn, container, typography } from "@/lib";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const found = getServiceBySlug(slug);
  if (!found) return {};
  const { service } = found;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const found = getServiceBySlug(slug);
  if (!found) notFound();

  const { service, category } = found;
  const Icon = serviceIcons[service.icon] ?? FallbackServiceIcon;
  const related = category.services.filter((item) => item.slug !== service.slug);

  return (
    <main id="main" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "py-32 lg:py-40")}>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />

          <div data-reveal className="relative mt-8 max-w-3xl">
            <div
              aria-hidden
              data-parallax="0.12"
              className="blob bg-grad-celadon pointer-events-none absolute -left-24 -top-16 size-64 opacity-20 blur-3xl"
            />
            <span className="glass-floating float relative inline-flex size-16 items-center justify-center rounded-2xl">
              <Icon className="size-8 text-gold" aria-hidden />
            </span>
            <p className={cn(typography.label, "relative mt-8 flex items-center gap-3 text-gold")}>
              <span aria-hidden className="h-px w-8 bg-gold/60" />
              {category.title}
            </p>
            <h1
              data-split
              className={cn(typography.display, "relative mt-6 text-balance text-foreground")}
            >
              {service.title}
            </h1>
            <p className={cn(typography.body, "relative mt-6 text-muted")}>
              {service.description}
            </p>
            {service.idealFor ? (
              <p className={cn(typography.bodySmall, "relative mt-6 text-muted")}>
                <span className="text-gold">Ideal for</span> · {service.idealFor}
              </p>
            ) : null}

            <Button href="/contact" variant="primary" size="lg" className="relative mt-10">
              {siteConfig.cta.primary}
            </Button>
          </div>

          {service.image ? (
            <Figure image={service.image} priority className="mt-16 max-w-4xl" />
          ) : null}

          {related.length > 0 ? (
            <div data-reveal className="mt-20 border-t border-divider pt-12">
              <h2 className={cn(typography.h3, "text-foreground")}>More in {category.title}</h2>
              <ul data-reveal-stagger className="mt-6">
                {related.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/services/${item.slug}`}
                      data-cursor-label="Open"
                      className="row-hover group flex items-center justify-between gap-6 border-t border-divider py-5"
                    >
                      <span className="font-heading text-body font-medium text-foreground transition-colors duration-[var(--duration-normal)] ease-out-quart group-hover:text-gold">
                        {item.title}
                      </span>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-muted transition-all duration-[var(--duration-normal)] ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </RevealRoot>
    </main>
  );
}
