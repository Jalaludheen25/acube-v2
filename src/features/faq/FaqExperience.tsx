import { RevealRoot } from "@/components/motion";
import { faqContent } from "@/constants";
import { cn, container, typography } from "@/lib";

import { FaqItem } from "./FaqItem";

/**
 * FAQ — the calm last practical step before Contact. Entirely a Server
 * Component: native <details>/<summary> means zero hydration for the accordion;
 * only the reused RevealRoot (section reveal) is client. No CTA — the section
 * transitions naturally into Contact. Adding an item to faqContent.items
 * renders another entry automatically.
 */
export function FaqExperience() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "py-24 lg:py-32")}>
          <div data-reveal className="max-w-3xl">
            <p className={cn(typography.label, "text-gold")}>{faqContent.eyebrow}</p>
            <h2
              id="faq-heading"
              className={cn(typography.display, "mt-6 text-balance text-foreground")}
            >
              {faqContent.headline}
            </h2>
          </div>

          <div data-reveal className="mt-16">
            {faqContent.items.map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </RevealRoot>
    </section>
  );
}
