import { memo } from "react";

import { contact, mainNav, siteConfig } from "@/constants";
import { whatsappHref } from "@/utils";

import { NavCta } from "./NavCta";
import { NavLink } from "./NavLink";

/**
 * Desktop navigation (≥ lg). Real-route links + the primary consultation CTA
 * (and WhatsApp when a verified number exists).
 */
function DesktopNavComponent() {
  return (
    <div className="hidden items-center gap-10 lg:flex">
      <ul className="flex items-center gap-8">
        {mainNav.map((item) => (
          <li key={item.href}>
            <NavLink item={item} />
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <NavCta href="/contact" label={siteConfig.cta.primary} />
        {contact.whatsapp ? (
          <NavCta
            href={whatsappHref(contact.whatsapp.digits)}
            label={siteConfig.cta.whatsapp}
            variant="secondary"
            external
          />
        ) : null}
      </div>
    </div>
  );
}

export const DesktopNav = memo(DesktopNavComponent);
