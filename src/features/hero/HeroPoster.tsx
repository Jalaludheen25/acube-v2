/**
 * Static, non-WebGL Hero backdrop.
 *
 * Fallback for prefers-reduced-motion, data-saver, and no-WebGL devices. Uses
 * only CSS design tokens (no downloaded image asset): faint brand-red and
 * brand-green radial glows over the deep-black background, echoing the mood of
 * the 3D scene without any runtime cost or motion.
 */
export function HeroPoster() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background: [
          "radial-gradient(55% 45% at 68% 42%, color-mix(in srgb, var(--color-brand-red) 10%, transparent) 0%, transparent 70%)",
          "radial-gradient(45% 40% at 60% 62%, color-mix(in srgb, var(--color-brand-green) 8%, transparent) 0%, transparent 70%)",
          "var(--color-background)",
        ].join(", "),
      }}
    />
  );
}
