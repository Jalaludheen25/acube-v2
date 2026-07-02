import { RevealRoot } from "@/components/motion";
import { SectionIntro } from "@/components/sections";
import { faqContent } from "@/constants";
import { cn, container } from "@/lib";

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
          <SectionIntro
            eyebrow={faqContent.eyebrow}
            title={faqContent.headline}
            titleId="faq-heading"
          />

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
