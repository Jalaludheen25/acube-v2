import { servicesContent } from "@/constants";
import type { Service, ServiceCategory } from "@/types";

/** All services flattened across categories, in display order. */
export const allServices: readonly Service[] = servicesContent.categories.flatMap(
  (category) => category.services,
);

/** Find a service (and the category it belongs to) by slug. */
export function getServiceBySlug(
  slug: string,
): { service: Service; category: ServiceCategory } | null {
  for (const category of servicesContent.categories) {
    const service = category.services.find((item) => item.slug === slug);
    if (service) return { service, category };
  }
  return null;
}
