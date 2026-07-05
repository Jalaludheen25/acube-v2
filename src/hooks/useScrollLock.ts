import { useEffect, useState } from "react";

/**
 * Locks body scroll while `locked` is true (mobile menu / modal / drawer).
 * Uses `position: fixed` (not just `overflow: hidden`) so iOS Safari can't
 * rubber-band-scroll the page behind the overlay; restores the exact scroll
 * position on unlock.
 *
 * The scroll position is captured once via a lazy `useState` initializer
 * (React guarantees this runs exactly once per mount) rather than read inside
 * the effect. Reading it in the effect is unsafe under React StrictMode's
 * dev-only double-invoke: the fixed-position trick itself can make
 * `window.scrollY` momentarily unreliable between the simulated
 * mount→cleanup→mount, capturing a stale/zeroed value. Capturing at render
 * time sidesteps that entirely — it runs before any lock styles are applied.
 */
export function useScrollLock(locked: boolean): void {
  const [scrollY] = useState(() => (typeof window !== "undefined" ? window.scrollY : 0));

  useEffect(() => {
    if (!locked) return;

    const body = document.body.style;
    const previous = {
      position: body.position,
      top: body.top,
      width: body.width,
      overflow: body.overflow,
    };

    body.position = "fixed";
    body.top = `-${scrollY}px`;
    body.width = "100%";
    body.overflow = "hidden";

    return () => {
      body.position = previous.position;
      body.top = previous.top;
      body.width = previous.width;
      body.overflow = previous.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [locked, scrollY]);
}
