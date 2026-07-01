/**
 * Route-level loading UI. The premium branded loader (logo → cube reveal)
 * is implemented in Milestone 05; this is the accessible baseline.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-dvh items-center justify-center bg-background text-foreground"
    >
      <span className="sr-only">Loading…</span>
    </div>
  );
}
