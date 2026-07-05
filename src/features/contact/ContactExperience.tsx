import { RevealRoot } from "@/components/motion";
import { SectionIntro } from "@/components/sections";
import { contactContent } from "@/constants";
import { cn, container } from "@/lib";

import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";

/**
 * Contact — the final, human-first conversion section. A warm invitation, then
 * the verified direct-contact details (primary, works with no JS), then a
 * minimal message form (secondary, lazy-loaded). Server Component; only the form
 * hydrates. No cards, no map, no heavy glass — hairline dividers and typography.
 */
interface ContactExperienceProps {
  /** "h2" as an in-page section (default); "h1" when used as a page hero. */
  as?: "h1" | "h2";
}

export function ContactExperience({ as = "h2" }: ContactExperienceProps) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "pb-24 max-lg:pt-0 lg:py-32")}>
          <SectionIntro
            as={as}
            eyebrow={contactContent.eyebrow}
            title={contactContent.headline}
            titleId="contact-heading"
            lede={contactContent.invitation}
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-reveal>
              <ContactDetails />
            </div>
            <div data-reveal>
              <ContactForm />
            </div>
          </div>
        </div>
      </RevealRoot>
    </section>
  );
}
