/**
 * Static hero backdrop — a modern emerald/gold/teal gradient over deep ink
 * (var(--gradient-hero)). Hero animation is intentionally paused for now; the
 * WebGL scene (scene/HeroScene) stays in the codebase to be re-enabled in the
 * final animation pass. Purely decorative; no runtime cost, no motion.
 */
export function HeroPoster() {
  return <div aria-hidden className="absolute inset-0 bg-grad-hero" />;
}
