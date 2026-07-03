"use client";

import { useEffect, useRef } from "react";
import { m } from "framer-motion";
import { X } from "lucide-react";

import { contact, mainNav, siteConfig } from "@/constants";
import { useScrollLock } from "@/hooks";
import { whatsappHref } from "@/utils";

import { NavCta } from "./NavCta";
import { NavLink } from "./NavLink";
import { mobileMenuItemVariants, mobileMenuVariants } from "./navMotion";

interface MobileMenuProps {
  onClose: () => void;
}

/**
 * Premium fullscreen mobile navigation. Glass backdrop, large typography,
 * staggered reveal. Locks body scroll, traps focus, closes on Escape, on the
 * close button, on a link, and on backdrop (outside) click.
 */
export function MobileMenu({ onClose }: MobileMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollLock(true);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const getFocusable = () =>
      Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

    getFocusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = getFocusable();
      const first = items.at(0);
      const last = items.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <m.div
      id="mobile-menu"
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-[var(--z-drawer)] lg:hidden"
      variants={mobileMenuVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {/* Backdrop — click outside to close. */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-[var(--blur-glass)]"
      />

      {/* Close (X) — the accessible close affordance. */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="touch-target absolute right-4 top-4 inline-flex items-center justify-center text-foreground"
      >
        <X className="size-6" aria-hidden />
      </button>

      {/* Content — pointer-events pass through empty areas to the backdrop. */}
      <div className="pointer-events-none relative flex h-full flex-col justify-center gap-12 px-8 pb-16 pt-28">
        <nav aria-label="Mobile" className="pointer-events-auto">
          <ul className="flex flex-col gap-4">
            {mainNav.map((item) => (
              <m.li key={item.href} variants={mobileMenuItemVariants}>
                <NavLink
                  item={item}
                  onNavigate={onClose}
                  className="text-h2 font-heading font-medium"
                />
              </m.li>
            ))}
          </ul>
        </nav>

        <m.div variants={mobileMenuItemVariants} className="pointer-events-auto flex flex-col gap-3">
          <NavCta href="/contact" label={siteConfig.cta.primary} onClick={onClose} />
          {contact.whatsapp ? (
            <NavCta
              href={whatsappHref(contact.whatsapp.digits)}
              label={siteConfig.cta.whatsapp}
              variant="secondary"
              external
              onClick={onClose}
            />
          ) : null}
        </m.div>
      </div>
    </m.div>
  );
}
