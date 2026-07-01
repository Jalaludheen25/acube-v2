import { RevealRoot } from "@/components/motion";
import { Button } from "@/components/ui";
import { servicesContent } from "@/constants";
import { cn, container, typography } from "@/lib";

import { ServiceCategory } from "./ServiceCategory";
import { ServiceCategoryRail } from "./ServiceCategoryRail";

/**
 * Services Experience — answers "How can ACUBE help me?".
 *
 * A+C hybrid: a sticky category index rail (instant scope) beside editorial
 * service rows (organized depth), primary-first with document services as a
 * supporting compact category. Server Component; RevealRoot enhances the DOM.
 *
 * Heading hierarchy: section <h2>, categories <h3>, service titles <h4>.
 */
export function ServicesExperience() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "py-24 lg:py-32")}>
          <div className="max-w-3xl">
            <p data-reveal className={cn(typography.label, "text-brand-green")}>
              What We Do
            </p>
            <h2
              id="services-heading"
              data-reveal
              className={cn(typography.h2, "mt-6 text-balance text-foreground")}
            >
              {servicesContent.framing}
            </h2>
          </div>

          <div className="mt-16 lg:flex lg:gap-16">
            <div className="lg:w-56 lg:shrink-0">
              <ServiceCategoryRail />
            </div>

            <div className="lg:flex-1">
              {servicesContent.categories.map((category) => (
                <ServiceCategory key={category.id} category={category} />
              ))}

              <div data-reveal className="mt-12 border-t border-divider pt-12">
                <p className={cn(typography.body, "text-muted")}>Not sure where to start?</p>
                <Button
                  href={servicesContent.cta.href}
                  variant="primary"
                  size="lg"
                  className="mt-6"
                >
                  {servicesContent.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </RevealRoot>
    </section>
  );
}
