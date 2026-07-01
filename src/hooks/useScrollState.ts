import { useEffect, useRef, useState } from "react";

export type ScrollDirection = "up" | "down";

export interface ScrollState {
  /** True within `threshold`px of the top of the page. */
  atTop: boolean;
  /** True once scrolled past `threshold`px. */
  scrolled: boolean;
  direction: ScrollDirection;
}

/**
 * rAF-throttled, passive scroll state. Only commits React state when a value
 * actually changes, to avoid unnecessary re-renders (drives the navbar's
 * transparent → glass, expanded → compact transition).
 */
export function useScrollState(threshold = 24): ScrollState {
  const [state, setState] = useState<ScrollState>({
    atTop: true,
    scrolled: false,
    direction: "up",
  });
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      ticking.current = false;
      const y = window.scrollY;
      const direction: ScrollDirection = y > lastY.current ? "down" : "up";
      const next: ScrollState = {
        atTop: y <= 2,
        scrolled: y > threshold,
        direction,
      };
      lastY.current = y;
      setState((prev) =>
        prev.atTop === next.atTop &&
        prev.scrolled === next.scrolled &&
        prev.direction === next.direction
          ? prev
          : next,
      );
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
