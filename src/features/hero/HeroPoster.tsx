/**
 * Static, non-WebGL Hero backdrop.
 *
 * Fallback for prefers-reduced-motion, data-saver, and no-WebGL devices. Uses
 * only CSS design tokens (no downloaded image asset): a champagne-gold key glow
 * with a faint lacquer-red accent over the warm-obsidian background, echoing the
 * mood of the 3D scene without any runtime cost or motion.
 */
export function HeroPoster() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background: [
          "radial-gradient(50% 45% at 66% 40%, color-mix(in srgb, var(--color-gold) 12%, transparent) 0%, transparent 70%)",
          "radial-gradient(45% 40% at 58% 64%, color-mix(in srgb, var(--color-brand-red) 8%, transparent) 0%, transparent 70%)",
          "var(--color-background)",
        ].join(", "),
      }}
    />
  );
}
