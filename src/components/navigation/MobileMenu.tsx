"use client";

import { useEffect, useRef } from "react";
import { m } from "framer-motion";
import { X } from "lucide-react";

import { contact, headerMoreNav, headerNav, siteConfig } from "@/constants";
import { useScrollLock } from "@/hooks";
import { cn, typography } from "@/lib";
import { whatsappHref } from "@/utils";

import { NavCta } from "./NavCta";
import { NavLink } from "./NavLink";
import { mobileMenuItemVariants, mobileMenuVariants } from "./navMotion";

interface MobileMenuProps {
  onClose: () => void;
}

/**
 * Premium fullscreen mobile navigation — the customer-journey items as giant
 * editorial type with mono index numerals and hairline dividers, a smaller
 * "More" group for the secondary routes, ambient background lighting, and
 * the emerald Contact CTA. Locks body scroll, traps focus, closes on Escape,
 * the close button, a link, and backdrop click.
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
      className="theme-dark fixed inset-0 z-[var(--z-drawer)] lg:hidden"
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
        className="absolute inset-0 bg-ink-black/95 backdrop-blur-[var(--blur-glass)]"
      />

      {/* Ambient lighting behind the menu. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="blob bg-grad-celadon absolute -right-24 top-1/4 size-80 opacity-10 blur-3xl" />
        <span className="absolute -top-1/4 left-1/4 h-[150%] w-24 bg-gradient-to-b from-transparent via-champagne/8 to-transparent blur-2xl" />
      </div>

      {/* Close (X) — the accessible close affordance. */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="touch-target absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] inline-flex items-center justify-center text-foreground transition-transform duration-[var(--duration-normal)] ease-out-quart hover:rotate-90"
      >
        <X className="size-6" aria-hidden />
      </button>

      {/* Content — pointer-events pass through empty areas to the backdrop. */}
      <div className="pointer-events-none relative flex h-full flex-col justify-center gap-10 pl-[max(2rem,env(safe-area-inset-left))] pr-[max(2rem,env(safe-area-inset-right))] pb-[max(3rem,calc(2rem+env(safe-area-inset-bottom)))] pt-[max(6rem,calc(6rem+env(safe-area-inset-top)))]">
        <nav aria-label="Mobile" className="pointer-events-auto">
          {/* The journey, in order. */}
          <ul className="flex flex-col">
            {headerNav.map((item, index) => (
              <m.li key={item.href} variants={mobileMenuItemVariants} className="border-b border-divider">
                <span className="flex items-baseline gap-4 py-4">
                  <span aria-hidden className={cn(typography.label, "text-gold/60")}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <NavLink
                    item={item}
                    onNavigate={onClose}
                    className="flex min-h-[2.75rem] items-center font-display text-h1 font-semibold tracking-tight"
                  />
                </span>
              </m.li>
            ))}
          </ul>

          {/* Secondary routes. */}
          <m.ul variants={mobileMenuItemVariants} className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {headerMoreNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  item={item}
                  onNavigate={onClose}
                  className="flex min-h-[2.75rem] items-center text-body font-medium"
                />
              </li>
            ))}
          </m.ul>
        </nav>

        <m.div variants={mobileMenuItemVariants} className="pointer-events-auto flex flex-col gap-3">
          <NavCta href="/contact" label="Contact" variant="contact" onClick={onClose} />
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
