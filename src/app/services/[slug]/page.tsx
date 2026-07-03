import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { RevealRoot } from "@/components/motion";
import { Breadcrumb } from "@/components/sections";
import { Button } from "@/components/ui";
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

          <div data-reveal className="mt-8 max-w-3xl">
            <Icon className="size-10 text-gold" aria-hidden />
            <p className={cn(typography.label, "mt-6 flex items-center gap-3 text-gold")}>
              <span aria-hidden className="h-px w-8 bg-gold/60" />
              {category.title}
            </p>
            <h1 className={cn(typography.display, "mt-6 text-balance text-foreground")}>
              {service.title}
            </h1>
            <p className={cn(typography.body, "mt-6 text-muted")}>{service.description}</p>
            {service.idealFor ? (
              <p className={cn(typography.bodySmall, "mt-6 text-muted")}>
                <span className="text-gold">Ideal for</span> · {service.idealFor}
              </p>
            ) : null}

            <Button href="/contact" variant="primary" size="lg" className="mt-10">
              {siteConfig.cta.primary}
            </Button>
          </div>

          {related.length > 0 ? (
            <div data-reveal className="mt-20 border-t border-divider pt-12">
              <h2 className={cn(typography.h3, "text-foreground")}>More in {category.title}</h2>
              <ul className="mt-6">
                {related.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex items-center justify-between gap-6 border-t border-divider py-5"
                    >
                      <span className="font-heading text-body font-medium text-foreground transition-colors duration-[var(--duration-normal)] ease-out-quart group-hover:text-gold">
                        {item.title}
                      </span>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-muted transition-colors duration-[var(--duration-normal)] ease-out-quart group-hover:text-gold"
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
