/**
 * Decorative "blueprint" spine — a thin vertical line that draws down the left
 * gutter as the story scrolls (scrubbed via [data-spine] in StoryAnimator).
 * Echoes the Hero's network-line motif. Desktop-only, aria-hidden. Under
 * reduced motion it simply stays fully drawn (static).
 */
export function StorySpine() {
  return (
    <div
      aria-hidden
      data-spine
      className="pointer-events-none absolute left-0 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-transparent via-border to-transparent lg:block"
    />
  );
}
