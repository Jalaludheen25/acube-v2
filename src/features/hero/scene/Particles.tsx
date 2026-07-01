"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Points as ThreePoints } from "three";

import { webglColors } from "@/constants";

interface ParticlesProps {
  count: number;
}

/**
 * Minimal atmospheric particles — tiny, very low opacity, extremely slow drift.
 * No sparkle, no attenuation flicker. Count is tiered by device capability
 * (120 / 60 / 25 per the 3D system spec).
 */
export function Particles({ count }: ParticlesProps) {
  const ref = useRef<ThreePoints>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color={webglColors.foreground}
        transparent
        opacity={0.12}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
