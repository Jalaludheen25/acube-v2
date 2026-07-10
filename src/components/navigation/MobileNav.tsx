"use client";

import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

import { useMounted } from "@/hooks";

import { MobileMenu } from "./MobileMenu";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Mobile trigger (< lg). Opens the fullscreen MobileMenu, which is PORTALED
 * to document.body — the navbar's entrance animation leaves a filter on its
 * wrapper, and a filtered ancestor becomes the containing block for
 * `position: fixed`, which would pin the overlay to the hamburger's corner
 * instead of the viewport. The portal escapes that entirely.
 * `AnimatePresence` lives inside the portal so the exit animation still runs.
 */
export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const mounted = useMounted();

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

      {mounted
        ? createPortal(
            <AnimatePresence>
              {open ? <MobileMenu onClose={() => onOpenChange(false)} /> : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  );
}
