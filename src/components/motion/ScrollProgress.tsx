"use client";

import { useEffect, useState } from "react";

/**
 * Reading-progress bar — a thin warm gradient line fixed to the top of the
 * viewport that fills as the page scrolls. Passive listener; transform/opacity
 * only. Decorative (aria-hidden).
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[var(--z-max)] h-[3px]"
    >
      <div
        className="h-full bg-grad-cta transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
