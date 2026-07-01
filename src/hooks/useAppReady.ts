import { useEffect, useState } from "react";

/**
 * Returns `true` once the document is fully loaded (readyState === 'complete').
 *
 * Uses a single requestAnimationFrame so at least one paint has occurred before
 * the Entry Experience begins — no artificial timers, no fake delays.
 * With Next.js SSR + App Router the page is hydrated quickly, so in most cases
 * readyState is already 'complete' when this hook first runs.
 */
export function useAppReady(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const markReady = () => setReady(true);

    const raf = requestAnimationFrame(() => {
      if (document.readyState === "complete") {
        markReady();
      } else {
        window.addEventListener("load", markReady, { once: true });
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", markReady);
    };
  }, []);

  return ready;
}
