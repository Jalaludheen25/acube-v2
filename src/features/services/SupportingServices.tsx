import type { Service } from "@/types";
import { cn, glassVariants } from "@/lib";

interface SupportingServicesProps {
  services: readonly Service[];
  className?: string;
}

/**
 * Supporting document/government services — present and honest, shown as a
 * compact glass chip list rather than elevated editorial rows (Decision #1).
 */
export function SupportingServices({ services, className }: SupportingServicesProps) {
  return (
    <ul data-reveal-stagger className={cn("flex flex-wrap gap-3", className)}>
      {services.map((service) => (
        <li
          key={service.id}
          className={cn(glassVariants.base, "rounded-full px-4 py-2 text-caption text-muted")}
        >
          {service.title}
        </li>
      ))}
    </ul>
  );
}
