"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Fraction of the pointer offset applied (0–1). */
  strength?: number;
}

/**
 * Magnetic hover — the wrapped element eases toward the cursor while hovered
 * and springs back on leave. rAF-lerped transform only; inert on coarse
 * pointers and reduced motion. Children stay server-renderable.
 */
export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      raf = null;
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        raf = requestAnimationFrame(render);
      }
    };

    const schedule = () => {
      if (raf === null) raf = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      targetX = (event.clientX - (rect.left + rect.width / 2)) * strength;
      targetY = (event.clientY - (rect.top + rect.height / 2)) * strength;
      schedule();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      schedule();
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className ?? "inline-block"}>
      {children}
    </div>
  );
}
