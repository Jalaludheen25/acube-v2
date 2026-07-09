import Link from "next/link";
import { ArrowUpRight, FileStack, Rocket, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { TiltCard } from "@/components/motion";
import { servicesContent } from "@/constants";
import { cn, typography } from "@/lib";

import { FallbackServiceIcon, serviceIcons } from "./serviceIcons";

/** Per-category presentation: gradient header band + icon. */
const categoryLook: Record<string, { icon: LucideIcon; surface: string }> = {
  "services-setup": { icon: Rocket, surface: "bg-grad-emerald" },
  "services-corporate": { icon: Scale, surface: "bg-grad-teal" },
  "services-documentation": { icon: FileStack, surface: "bg-grad-cta" },
};

/**
 * The full service catalogue as bold, colorful category blocks. Each category
 * opens with a gradient header band (icon + count), then its services as
 * interactive cards — pointer-tracked 3D tilt + cursor spotlight for primary
 * categories, a denser glass grid for supporting documentation services.
 * Server Component; TiltCard is an inert leaf.
 */
export function ServiceShowcase() {
  return (
    <div className="space-y-20">
      {servicesContent.categories.map((category, categoryIndex) => {
        const look = categoryLook[category.id] ?? { icon: Rocket, surface: "bg-grad-emerald" };
        const primary = category.variant === "primary";
        return (
          <section key={category.id} aria-label={category.title} data-reveal>
            {/* Gradient header band */}
            <div
              className={cn(
                "texture theme-dark relative flex items-center gap-5 overflow-hidden rounded-2xl px-6 py-6 shadow-3d lg:px-8",
                look.surface,
              )}
            >
              <span
                aria-hidden
                className="index-corner text-stroke pointer-events-none absolute right-5 top-4 select-none opacity-30"
              >
                {String(categoryIndex + 1).padStart(2, "0")}
              </span>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-platinum shadow-3d">
                <look.icon className="size-6" aria-hidden />
              </span>
              <div>
                <h2 className={cn(typography.h3, "text-foreground")}>{category.title}</h2>
                <p className={cn(typography.caption, "mt-1")}>
                  <span
                    data-count={category.services.length}
                    data-count-suffix=" services"
                  >
                    {category.services.length} services
                  </span>
                </p>
              </div>
            </div>

            {/* Service cards */}
            <ul
              data-reveal-stagger
              className={cn(
                "mt-6 grid gap-4",
                primary ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {category.services.map((service) => {
                const Icon = serviceIcons[service.icon] ?? FallbackServiceIcon;
                const card = (
                  <Link
                    href={`/services/${service.slug}`}
                    data-cursor-label="Open"
                    className={cn(
                      "card-spotlight group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 p-6 shadow-3d transition-[color,background-color,border-color,box-shadow,transform] duration-[var(--duration-normal)] ease-out-quart hover:-translate-y-1 hover:shadow-3d-lg",
                      primary ? "bg-surface hover:border-gold/40" : "glass hover:border-gold/40",
                    )}
                  >
                    <span className="flex items-start justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-grad-celadon text-ink-black shadow-3d transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:-rotate-6 group-hover:scale-110">
                        <Icon className="size-6" aria-hidden />
                      </span>
                      <ArrowUpRight
                        className="size-5 text-muted transition-all duration-[var(--duration-normal)] ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold"
                        aria-hidden
                      />
                    </span>
                    <h3 className="mt-5 font-heading text-h3 font-medium text-foreground transition-colors duration-[var(--duration-normal)] ease-out-quart group-hover:text-gold">
                      {service.title}
                    </h3>
                    <p className={cn(typography.bodySmall, "mt-2 flex-1 text-muted")}>
                      {service.description}
                    </p>
                    {service.idealFor ? (
                      <span className="mt-4 inline-flex w-fit items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-caption text-gold">
                        {service.idealFor}
                      </span>
                    ) : null}
                  </Link>
                );
                return (
                  <li key={service.id}>
                    {primary ? <TiltCard className="h-full">{card}</TiltCard> : card}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
