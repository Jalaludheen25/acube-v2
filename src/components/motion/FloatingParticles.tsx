import { cn } from "@/lib";

interface Particle {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  opacity: number;
}

/** Deterministic pseudo-random placement (no Math.random() in render — keeps
 *  server and client markup identical, no hydration mismatch). */
function buildParticles(count: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const seed = i * 37.61;
    particles.push({
      left: `${(seed * 2.7) % 100}%`,
      top: `${(seed * 4.3) % 100}%`,
      size: 2 + (i % 4),
      duration: 14 + (i % 6) * 3,
      delay: (i % 5) * -2.4,
      driftX: 8 + (i % 3) * 6,
      driftY: -10 - (i % 4) * 5,
      opacity: 0.12 + (i % 3) * 0.06,
    });
  }
  return particles;
}

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

/**
 * Lightweight ambient background texture — a handful of tiny dots drifting
 * very slowly (pure CSS, GPU transform only, server-renderable). Not the R3F
 * particle field used in the Home entry scene; that's a different, heavier
 * context. Automatically stops under prefers-reduced-motion (global rule in
 * globals.css zeroes all animation durations).
 */
export function FloatingParticles({ count = 16, className }: FloatingParticlesProps) {
  const particles = buildParticles(count);

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-gold"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animationName: "particle-drift",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            // @ts-expect-error -- custom property consumed by the drift keyframe
            "--drift-x": `${particle.driftX}px`,
            "--drift-y": `${particle.driftY}px`,
          }}
        />
      ))}
    </div>
  );
}
