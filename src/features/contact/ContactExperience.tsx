import { RevealRoot } from "@/components/motion";
import { contactContent } from "@/constants";
import { cn, container, typography } from "@/lib";

import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";

/**
 * Contact — the final, human-first conversion section. A warm invitation, then
 * the verified direct-contact details (primary, works with no JS), then a
 * minimal message form (secondary, lazy-loaded). Server Component; only the form
 * hydrates. No cards, no map, no heavy glass — hairline dividers and typography.
 */
export function ContactExperience() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "py-24 lg:py-32")}>
          <div data-reveal className="max-w-3xl">
            <p className={cn(typography.label, "text-brand-green")}>{contactContent.eyebrow}</p>
            <h2
              id="contact-heading"
              className={cn(typography.display, "mt-6 text-balance text-foreground")}
            >
              {contactContent.headline}
            </h2>
            <p className={cn(typography.body, "mt-6 text-muted")}>{contactContent.invitation}</p>
          </div>

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
