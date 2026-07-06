"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE = "a, button, [role='button'], summary, label, input, textarea, select";

/**
 * Premium cursor follower — a small dot that tracks the pointer directly and
 * a larger ring that trails it with a soft lerp. The ring grows and fills
 * over interactive elements, shrinks on press, and displays a mono micro-
 * label over `[data-cursor-label]` targets. The native cursor stays visible
 * (usability); this is an accent layer, `mix-blend-difference` so it reads
 * on both light and dark surfaces.
 *
 * Desktop-only: renders nothing for coarse pointers or reduced motion.
 * Transform-only writes via a single rAF loop; delegated listeners.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

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
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let x = -100;
    let y = -100;
    let ringX = -100;
    let ringY = -100;
    let scale = 1;
    let targetScale = 1;
    let pressed = false;
    let visible = false;
    let raf: number | null = null;

    const render = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      scale += (targetScale - scale) * 0.2;
      const pressScale = pressed ? 0.75 : 1;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${(scale * pressScale).toFixed(3)})`;
      raf = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        ringX = x;
        ringY = y;
      }
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const labelled = target.closest<HTMLElement>("[data-cursor-label]");
      const interactive = labelled ?? target.closest(INTERACTIVE);
      if (labelled?.dataset.cursorLabel) {
        label.textContent = labelled.dataset.cursorLabel;
        ring.classList.add("cursor-ring-labelled");
        targetScale = 2.6;
      } else {
        label.textContent = "";
        ring.classList.remove("cursor-ring-labelled");
        targetScale = interactive ? 1.7 : 1;
      }
    };

    const onDown = () => {
      pressed = true;
    };
    const onUp = () => {
      pressed = false;
    };
    const onLeaveWindow = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    raf = requestAnimationFrame(render);

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[var(--z-max)]">
      <div
        ref={dotRef}
        className="absolute left-0 top-0 size-2 rounded-full bg-white opacity-0 mix-blend-difference transition-opacity duration-[var(--duration-normal)] [filter:drop-shadow(0_0_2px_rgba(0,0,0,0.35))]"
      />
      <div
        ref={ringRef}
        className="cursor-ring absolute left-0 top-0 flex size-9 items-center justify-center rounded-full border-[1.5px] border-white opacity-0 mix-blend-difference transition-opacity duration-[var(--duration-normal)] [filter:drop-shadow(0_0_3px_rgba(0,0,0,0.3))]"
      >
        <span
          ref={labelRef}
          className="cursor-ring-label font-mono text-[0.55rem] uppercase tracking-widest text-white opacity-0"
        />
      </div>
    </div>
  );
}
