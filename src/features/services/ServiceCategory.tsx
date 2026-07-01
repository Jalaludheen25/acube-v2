import type { ServiceCategory as Category } from "@/types";
import { cn, typography } from "@/lib";

import { ServiceRow } from "./ServiceRow";
import { SupportingServices } from "./SupportingServices";

interface ServiceCategoryProps {
  category: Category;
}

/**
 * A service category block. `id` is the scrollspy/anchor target for the rail
 * (offset by scroll-margin so it clears the fixed navbar). Primary categories
 * render editorial rows; the supporting category renders compact chips.
 */
export function ServiceCategory({ category }: ServiceCategoryProps) {
  return (
    <div id={category.id} className="scroll-mt-28 py-10 lg:py-14">
      <h3 data-reveal className={cn(typography.h3, "text-foreground")}>
        {category.title}
      </h3>

      {category.variant === "supporting" ? (
        <SupportingServices services={category.services} className="mt-8" />
      ) : (
        <div data-reveal-stagger className="mt-8">
          {category.services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}
