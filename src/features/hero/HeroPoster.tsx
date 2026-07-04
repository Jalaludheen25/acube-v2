/**
 * Hero backdrop — a rich, dark Pine→Ink gradient scene (var(--gradient-hero))
 * with an animated pan, floating gradient orbs, and a subtle texture for depth.
 * Purely decorative (aria-hidden); motion is neutralized under
 * prefers-reduced-motion. The WebGL scene remains paused.
 */
export function HeroPoster() {
  return (
    <div aria-hidden className="texture absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grad-hero animated-gradient" />
      {/* Floating layered orbs — multi-layer depth in palette colors. */}
      <div className="float absolute -left-24 top-[14%] size-80 rounded-full bg-grad-celadon opacity-25 blur-3xl" />
      <div className="float-slow absolute -right-28 top-[26%] size-96 rounded-full bg-grad-teal opacity-40 blur-3xl" />
      <div className="float absolute -bottom-20 left-1/3 size-72 rounded-full bg-grad-cta opacity-25 blur-3xl" />
    </div>
  );
}
