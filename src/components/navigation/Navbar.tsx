"use client";

import { useState } from "react";
import { m } from "framer-motion";

import { Logo } from "@/components/ui";
import { useScrollState } from "@/hooks";
import { cn } from "@/lib";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { headerEntranceVariants, headerItemVariants, logoScaleTransition } from "./navMotion";

/**
 * Floating glass navigation — a detached bar that reads as part of the
 * cinematic experience rather than a traditional edge-to-edge header.
 *
 * Three scroll states (from useScrollState's threshold + direction):
 *   at top          → fully transparent, borderless — the hero owns the frame
 *   scrolled + down → deep ink glass: strong blur, champagne hairline, shadow
 *   scrolled + up   → lighter glass — the "coming back up" breathing state
 *
 * Entrance choreography (once, on first load — the bar never re-mounts on
 * navigation): logo → nav items → CTA, staggered rise/de-blur. Collapses to
 * instant under reduced motion via the global MotionConfig.
 */
export function Navbar() {
  const { atTop, scrolled, direction } = useScrollState();
  const [menuOpen, setMenuOpen] = useState(false);
  const deep = scrolled && direction === "down";

  return (
    <header className="theme-dark fixed inset-x-0 top-0 z-[var(--z-nav)] px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-4">
      <m.div
        variants={headerEntranceVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "relative mx-auto max-w-[88rem] rounded-2xl border transition-[background-color,border-color,box-shadow,backdrop-filter] duration-[var(--duration-medium)] ease-out-quart",
          atTop && !menuOpen
            ? "border-transparent bg-transparent"
            : deep
              ? "border-champagne/15 bg-ink-black/85 shadow-3d-lg backdrop-blur-xl"
              : "border-platinum/10 bg-ink-black/55 shadow-soft backdrop-blur-lg",
        )}
      >
        {/* Glass top reflection. */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-platinum/25 to-transparent transition-opacity duration-[var(--duration-medium)]",
            atTop && !menuOpen ? "opacity-0" : "opacity-100",
          )}
        />

        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between gap-6 px-4 transition-[padding] duration-[var(--duration-normal)] ease-out-quart sm:px-6",
            scrolled ? "py-2.5" : "py-4",
          )}
        >
          <m.div variants={headerItemVariants}>
            <m.div animate={{ scale: scrolled ? 0.92 : 1 }} transition={logoScaleTransition} className="origin-left">
              <div className="transition-transform duration-[var(--duration-normal)] ease-out-quart hover:scale-105">
                <Logo priority className="h-8 w-auto" />
              </div>
            </m.div>
          </m.div>

          <DesktopNav />

          <m.div variants={headerItemVariants} className="lg:hidden">
            <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
          </m.div>
        </nav>
      </m.div>
    </header>
  );
}
