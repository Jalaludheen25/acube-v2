"use client";

import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

import { MobileMenu } from "./MobileMenu";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  active: string | null;
}

/**
 * Mobile trigger (< lg). Opens the fullscreen MobileMenu; the menu renders its
 * own close/backdrop affordances. `AnimatePresence` drives the exit animation.
 */
export function MobileNav({ open, onOpenChange, active }: MobileNavProps) {
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => onOpenChange(true)}
        className="touch-target inline-flex items-center justify-center text-foreground"
      >
        <Menu className="size-6" aria-hidden />
      </button>

      <AnimatePresence>
        {open ? <MobileMenu active={active} onClose={() => onOpenChange(false)} /> : null}
      </AnimatePresence>
    </div>
  );
}
