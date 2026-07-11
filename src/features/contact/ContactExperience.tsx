import { RevealRoot } from "@/components/motion";
import { SectionIntro } from "@/components/sections";
import { cn, container } from "@/lib";

import { ContactBackground } from "./ContactBackground";
import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";

/**
 * Contact — the site's dark immersive finale. The verified direct-contact
 * details (primary, works with no JS) wipe in beside the glass form panel
 * (mask reveal, animated gradient edge, cursor spotlight), all over the
 * living ContactBackground environment. Server Component; only the form
 * hydrates.
 */
interface ContactExperienceProps {
  /** "h2" as an in-page section (default); "h1" when used as a page hero. */
  as?: "h1" | "h2";
}

export function ContactExperience({ as = "h2" }: ContactExperienceProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="theme-dark relative overflow-hidden bg-ink-black"
    >
      <RevealRoot>
        <ContactBackground />
        <div className={cn(container.content, "relative py-24 lg:py-32")}>
          <SectionIntro
            as={as}
            eyebrow="Start the conversation"
            title="Every business begins with hello."
            titleId="contact-heading"
            split
            lede="Reach us directly, or send a message — we reply personally."
          />

          <div className="relative mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-reveal-wipe>
              <ContactDetails />
            </div>
            <div
              data-reveal-mask
              className="border-grad card-spotlight relative self-start overflow-hidden rounded-[var(--radius-2xl)] border border-platinum/10 bg-ink-black/55 p-6 backdrop-blur-xl lg:p-8"
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </RevealRoot>
    </section>
  );
}
