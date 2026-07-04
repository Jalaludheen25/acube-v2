/**
 * Static hero backdrop — a light, layered gradient scene (var(--gradient-hero))
 * with an animated pan and floating blurred orbs for depth. Purely decorative
 * (aria-hidden). Motion is neutralized under prefers-reduced-motion. The hero's
 * main WebGL scene remains paused; this is the resting backdrop.
 */
export function HeroPoster() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grad-hero animated-gradient" />
      {/* Floating layered orbs — multi-layer depth. */}
      <div className="float absolute -left-20 top-[18%] size-72 rounded-full bg-grad-emerald opacity-20 blur-3xl" />
      <div className="float-slow absolute -right-24 top-[30%] size-80 rounded-full bg-grad-gold opacity-30 blur-3xl" />
      <div className="float absolute -bottom-16 left-1/3 size-64 rounded-full bg-grad-cta opacity-15 blur-3xl" />
    </div>
  );
}
