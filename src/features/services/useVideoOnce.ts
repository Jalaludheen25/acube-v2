"use client";

import { useEffect, useRef, type RefObject } from "react";

interface UseVideoOnceResult {
  videoRef: RefObject<HTMLVideoElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
}

/**
 * Plays a hero video exactly once, in view. `autoPlay` is deliberately left
 * off the `<video>` element — this hook is the single source of truth for
 * starting playback, so there's no race between the browser's autoplay and
 * our own logic.
 *
 * - Plays when the container enters the viewport; pauses when it leaves
 *   (IntersectionObserver — avoids decoding video off-screen).
 * - Never plays at all under `prefers-reduced-motion: reduce` — checked via
 *   a direct, synchronous `window.matchMedia` read inside the effect (the
 *   same pattern `TiltCard`/`Magnetic` use), not the reactive
 *   `usePrefersReducedMotion` hook — that hook's state resolves one render
 *   after mount, and this effect's first run would otherwise race it: the
 *   observer could start playback before the "reduced motion" state ever
 *   arrives, and nothing would retroactively stop it.
 * - Once `ended` fires, a ref flag permanently stops further `.play()`
 *   calls — no loop, no replay on scroll back into view. The browser itself
 *   already freezes on the last rendered frame once playback ends without
 *   `loop`, so no extra code is needed for the "freeze" behavior.
 */
export function useVideoOnce(): UseVideoOnceResult {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const endedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onEnded = () => {
      endedRef.current = true;
    };
    video.addEventListener("ended", onEnded);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting && !endedRef.current) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(container);

    return () => {
      video.removeEventListener("ended", onEnded);
      observer.disconnect();
      video.pause();
    };
  }, []);

  return { videoRef, containerRef };
}
