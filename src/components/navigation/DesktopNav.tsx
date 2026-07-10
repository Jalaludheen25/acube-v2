"use client";

import { m } from "framer-motion";
import { usePathname } from "next/navigation";

import { Magnetic } from "@/components/motion";
import { headerNav } from "@/constants";
import { duration, easing } from "@/constants";

import { NavCta } from "./NavCta";
import { NavLink } from "./NavLink";
import { headerItemVariants } from "./navMotion";

type Bezier = [number, number, number, number];
const bezier = (e: readonly number[]): Bezier => [e[0] ?? 0, e[1] ?? 0, e[2] ?? 0, e[3] ?? 0];

/**
 * Desktop navigation (≥ lg) — the customer-journey items (headerNav) plus
 * Contact as the premium CTA. The active page carries a shared-layout
 * gradient pill (`layoutId`) that *slides* between items on route change —
 * the "always obvious" current-page indicator. Client component: active
 * state comes from the pathname.
 */
export function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-8 lg:flex">
      <ul className="flex items-center gap-1">
        {headerNav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <m.li key={item.href} variants={headerItemVariants} className="relative">
              {active ? (
                <m.span
                  layoutId="nav-active"
                  aria-hidden
                  transition={{ duration: duration.medium / 1000, ease: bezier(easing.outExpo) }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-celadon/15 via-celadon/5 to-champagne/10 shadow-[0_0_18px_-4px_color-mix(in_srgb,var(--color-celadon)_45%,transparent)]"
                />
              ) : null}
              <NavLink item={item} active={active} className="relative z-[1] px-4 py-2" />
            </m.li>
          );
        })}
      </ul>

      <m.div variants={headerItemVariants}>
        <Magnetic strength={0.25}>
          <NavCta href="/contact" label="Contact" variant="contact" />
        </Magnetic>
      </m.div>
    </div>
  );
}
