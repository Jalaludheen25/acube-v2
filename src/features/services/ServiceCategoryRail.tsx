"use client";

import { useMemo } from "react";

import { servicesContent } from "@/constants";
import { useActiveSection } from "@/hooks";
import { cn } from "@/lib";

/**
 * Sticky category index (desktop). Reuses the M04 scrollspy hook to highlight
 * the category currently in view; anchor links jump to each category. Gives the
 * visitor instant scope comprehension. Hidden on mobile (categories are read
 * inline).
 */
export function ServiceCategoryRail() {
  const ids = useMemo(() => servicesContent.categories.map((category) => category.id), []);
  const active = useActiveSection(ids);

  return (
    <nav aria-label="Service categories" className="hidden lg:block">
      <ul className="sticky top-28 flex flex-col gap-1">
        {servicesContent.categories.map((category) => {
          const isActive = active === category.id;
          return (
            <li key={category.id}>
              <a
                href={`#${category.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "block border-l-2 py-2 pl-4 text-body-sm transition-colors duration-[var(--duration-normal)] ease-out-quart",
                  isActive
                    ? "border-brand-red text-foreground"
                    : "border-border text-muted hover:text-foreground",
                )}
              >
                {category.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
