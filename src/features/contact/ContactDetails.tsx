import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { IconTile } from "@/components/ui";
import { contact, contactContent } from "@/constants";
import { cn, typography } from "@/lib";
import { mailtoHref, telHref, whatsappHref } from "@/utils";

const dtClass = cn(typography.label, "text-gold");
const linkClass =
  "hover-underline text-body text-foreground transition-colors duration-[var(--duration-normal)] ease-out-quart hover:text-gold";

function DetailRow({
  icon,
  tile,
  label,
  children,
}: {
  icon: LucideIcon;
  tile: "green" | "warm" | "celadon" | "sand";
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="row-hover flex items-start gap-5 border-t border-divider py-7">
      <IconTile icon={icon} variant={tile} />
      <div className="min-w-0">
        <dt className={dtClass}>{label}</dt>
        <dd className="mt-2">{children}</dd>
      </div>
    </div>
  );
}

/**
 * Verified contact details as an editorial definition list with gradient icon
 * tiles and animated-underline links. Email and phones are real tel:/mailto:
 * links (usable with no JS). The emergency number is intentionally excluded.
 * WhatsApp, hours, and social render ONLY when their (currently null/empty)
 * data is present.
 */
export function ContactDetails() {
  const phones = contact.phones.filter((phone) => phone.type !== "emergency");

  return (
    <dl data-reveal-stagger>
      <DetailRow icon={Mail} tile="green" label={contactContent.detailsLabels.email}>
        <a href={mailtoHref(contact.email)} className={linkClass}>
          {contact.email}
        </a>
      </DetailRow>

      <DetailRow icon={Phone} tile="warm" label={contactContent.detailsLabels.phone}>
        <span className="flex flex-col gap-1.5">
          {phones.map((phone) => (
            <a key={phone.digits} href={telHref(phone.digits)} className={cn(linkClass, "w-fit")}>
              {phone.display}
            </a>
          ))}
        </span>
      </DetailRow>

      <DetailRow icon={MapPin} tile="celadon" label={contactContent.detailsLabels.office}>
        <span className={cn(typography.body, "block max-w-sm text-muted")}>
          {contact.address.formatted}
        </span>
      </DetailRow>

      {contact.whatsapp ? (
        <DetailRow icon={Phone} tile="sand" label="WhatsApp">
          <a
            href={whatsappHref(contact.whatsapp.digits)}
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.whatsapp.display}
          </a>
        </DetailRow>
      ) : null}

      {contact.businessHours ? (
        <div className="border-t border-divider py-6">
          <dt className={dtClass}>Hours</dt>
          <dd className={cn(typography.body, "mt-2 text-muted")}>
            {contact.businessHours.days}: {contact.businessHours.opens} –{" "}
            {contact.businessHours.closes}
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
