import { memo } from "react";

import { contact, mainNav, siteConfig } from "@/constants";
import { whatsappHref } from "@/utils";

import { NavCta } from "./NavCta";
import { NavLink } from "./NavLink";

interface DesktopNavProps {
  active: string | null;
}

/**
 * Desktop navigation (≥ lg). Memoized so it only re-renders when the active
 * section changes — not on every scroll-state update.
 */
function DesktopNavComponent({ active }: DesktopNavProps) {
  return (
    <div className="hidden items-center gap-10 lg:flex">
      <ul className="flex items-center gap-8">
        {mainNav.map((item) => (
          <li key={item.href}>
            <NavLink item={item} active={active === item.href.slice(1)} />
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <NavCta href="#contact" label={siteConfig.cta.primary} />
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
