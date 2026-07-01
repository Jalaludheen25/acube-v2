import { useEffect } from "react";

/** Locks body scroll while `locked` is true (mobile menu / modal / drawer). */
export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
