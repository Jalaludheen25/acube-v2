"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  maxTilt?: number;
}

/**
 * Pointer-tracking 3D tilt wrapper. The inner element rotates toward the
 * cursor (rAF-lerped, GPU transform only) and exposes the pointer position as
 * `--px` / `--py` (0–1) so children can paint a following spotlight (see the
 * `card-spotlight` utility). Inert on coarse pointers and reduced motion —
 * the wrapper renders as a plain div, so Server Component children are safe.
 */
export function TiltCard({ children, className, maxTilt = 7 }: TiltCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let hovering = false;

    const render = () => {
      raf = null;
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
      inner.style.transform = `rotateX(${currentY.toFixed(3)}deg) rotateY(${currentX.toFixed(3)}deg)`;
      const settled = Math.abs(targetX - currentX) < 0.01 && Math.abs(targetY - currentY) < 0.01;
      if (!settled || hovering) raf = requestAnimationFrame(render);
    };

    const schedule = () => {
      if (raf === null) raf = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      inner.style.setProperty("--px", px.toFixed(3));
      inner.style.setProperty("--py", py.toFixed(3));
      targetX = (px - 0.5) * 2 * maxTilt;
      targetY = (0.5 - py) * 2 * maxTilt;
      hovering = true;
      schedule();
    };

    const onLeave = () => {
      hovering = false;
      targetX = 0;
      targetY = 0;
      schedule();
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [maxTilt]);

  return (
    <div ref={wrapRef} className={className} style={{ perspective: "1000px" }}>
      <div ref={innerRef} className="h-full will-change-transform [transform-style:preserve-3d]">
        {children}
      </div>
    </div>
  );
}
