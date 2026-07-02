import { contact, footerContent } from "@/constants";
import { cn, typography } from "@/lib";
import { mailtoHref, telHref, whatsappHref } from "@/utils";

const headingClass = cn(typography.label, "text-brand-green");
const linkClass = cn(
  typography.bodySmall,
  "text-muted transition-colors duration-[var(--duration-normal)] ease-out-quart hover:text-foreground",
);

/**
 * Footer contact — verified details only (email, non-emergency phones, office
 * address), wrapped in a semantic <address>. WhatsApp, business hours, and
 * social links render ONLY when their (currently empty) data is present, so
 * they auto-activate later with no code change. Emergency number is excluded.
 */
export function FooterContact() {
  const phones = contact.phones.filter((phone) => phone.type !== "emergency");

  return (
    <div>
      <h2 className={headingClass}>{footerContent.headings.contact}</h2>
      <address className="mt-6 flex flex-col gap-3 not-italic">
        <a href={mailtoHref(contact.email)} className={linkClass}>
          {contact.email}
        </a>
        {phones.map((phone) => (
          <a key={phone.digits} href={telHref(phone.digits)} className={linkClass}>
            {phone.display}
          </a>
        ))}
        <p className={cn(typography.bodySmall, "max-w-xs text-muted")}>
          {contact.address.formatted}
        </p>

        {contact.whatsapp ? (
          <a
            href={whatsappHref(contact.whatsapp.digits)}
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.whatsapp.display}
          </a>
        ) : null}

        {contact.businessHours ? (
          <p className={cn(typography.bodySmall, "text-muted")}>
            {contact.businessHours.days}: {contact.businessHours.opens} – {contact.businessHours.closes}
          </p>
        ) : null}

        {contact.socialLinks.length > 0 ? (
          <span className="flex flex-wrap gap-4">
            {contact.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </span>
        ) : null}
      </address>
    </div>
  );
}
