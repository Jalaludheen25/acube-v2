"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Site-wide pointer-reactive environment lighting — a large, very soft
 * celadon radial that trails the cursor with a slow lerp, so every surface
 * feels subtly lit by the visitor's attention (cards already have their own
 * spotlight; this is the room's light). Fixed, pointer-events-none,
 * transform-only writes on a single rAF loop — the same discipline as
 * Cursor. Renders nothing for coarse pointers or reduced motion.
 */
export function PointerGlow() {
  const [enabled, setEnabled] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const glow = glowRef.current;
    if (!glow) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;
    let currentX = x;
    let currentY = y;
    let visible = false;
    let raf: number | null = null;

    const render = () => {
      currentX += (x - currentX) * 0.06;
      currentY += (y - currentY) * 0.06;
      glow.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        visible = true;
        glow.style.opacity = "1";
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(render);

    return () => {
      document.removeEventListener("pointermove", onMove);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div
        ref={glowRef}
        className="absolute left-0 top-0 size-[44rem] rounded-full opacity-0 transition-opacity duration-[var(--duration-slow)] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-celadon) 7%, transparent) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
