"use client";

import { useState } from "react";
import { m } from "framer-motion";

import { Logo } from "@/components/ui";
import { useScrollState } from "@/hooks";
import { cn } from "@/lib";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { logoScaleTransition } from "./navMotion";

/**
 * Floating, sticky navigation.
 *
 * Transparent + expanded at the top of the page; gains a glass background + soft
 * shadow and compacts once scrolled. Links are real routes (crawlable); the
 * active tab follows the current page (see NavLink).
 */
export function Navbar() {
  const { scrolled } = useScrollState();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[var(--z-nav)]">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 border-b border-border bg-background/70 shadow-soft backdrop-blur-[var(--blur-glass)] transition-opacity duration-[var(--duration-normal)] ease-out-quart",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />
      <nav
        aria-label="Primary"
        className={cn(
          "container-wide relative flex items-center justify-between gap-6 transition-[padding] duration-[var(--duration-normal)] ease-out-quart",
          scrolled ? "py-3" : "py-6",
        )}
      >
        <m.div
          animate={{ scale: scrolled ? 0.9 : 1 }}
          transition={logoScaleTransition}
          className="origin-left"
        >
          <Logo priority className="h-8 w-auto" />
        </m.div>

        <DesktopNav />
        <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
      </nav>
    </header>
  );
}
