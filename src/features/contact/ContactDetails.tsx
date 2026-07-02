import { contact, contactContent } from "@/constants";
import { cn, typography } from "@/lib";
import { mailtoHref, telHref, whatsappHref } from "@/utils";

const dtClass = cn(typography.label, "text-brand-green");
const linkClass =
  "text-body text-foreground transition-colors duration-[var(--duration-normal)] ease-out-quart hover:text-brand-green";

/**
 * Verified contact details as an editorial definition list — hairline dividers,
 * no cards, no icon boxes. Email and phones are real tel:/mailto: links (usable
 * with no JS). The emergency number is intentionally excluded. WhatsApp, hours,
 * social, and map render ONLY when their (currently null/empty) data is present.
 */
export function ContactDetails() {
  const phones = contact.phones.filter((phone) => phone.type !== "emergency");

  return (
    <dl>
      <div className="border-t border-divider py-6">
        <dt className={dtClass}>{contactContent.detailsLabels.email}</dt>
        <dd className="mt-2">
          <a href={mailtoHref(contact.email)} className={linkClass}>
            {contact.email}
          </a>
        </dd>
      </div>

      <div className="border-t border-divider py-6">
        <dt className={dtClass}>{contactContent.detailsLabels.phone}</dt>
        <dd className="mt-2 flex flex-col gap-1">
          {phones.map((phone) => (
            <a key={phone.digits} href={telHref(phone.digits)} className={linkClass}>
              {phone.display}
            </a>
          ))}
        </dd>
      </div>

      <div className="border-t border-divider py-6">
        <dt className={dtClass}>{contactContent.detailsLabels.office}</dt>
        <dd className={cn(typography.body, "mt-2 max-w-sm text-muted")}>
          {contact.address.formatted}
        </dd>
      </div>

      {contact.whatsapp ? (
        <div className="border-t border-divider py-6">
          <dt className={dtClass}>WhatsApp</dt>
          <dd className="mt-2">
            <a
              href={whatsappHref(contact.whatsapp.digits)}
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.whatsapp.display}
            </a>
          </dd>
        </div>
      ) : null}

      {contact.businessHours ? (
        <div className="border-t border-divider py-6">
          <dt className={dtClass}>Hours</dt>
          <dd className={cn(typography.body, "mt-2 text-muted")}>
            {contact.businessHours.days}: {contact.businessHours.opens} – {contact.businessHours.closes}
          </dd>
        </div>
      ) : null}

      {contact.socialLinks.length > 0 ? (
        <div className="border-t border-divider py-6">
          <dt className={dtClass}>Social</dt>
          <dd className="mt-2 flex flex-wrap gap-4">
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
          </dd>
        </div>
      ) : null}
    </dl>
  );
}
