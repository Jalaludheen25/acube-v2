"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import type { Mesh } from "three";

import { webglColors } from "@/constants";

/**
 * The ACUBE cube — an abstract, precise, architectural object (not a literal
 * rotating logo). Dark, near-black, semi-metallic with a clearcoat so it reads
 * as premium "dark glass." Brand color arrives only via the rim reflections
 * from StudioLighting. Motion is deliberately slow: a continuous rotation, a
 * subtle tilt, a float, and an almost-imperceptible "breathe."
 */
export function Cube() {
  const ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime;
    mesh.rotation.y += delta * 0.12;
    mesh.rotation.x = Math.sin(t * 0.15) * 0.06;
    mesh.position.y = Math.sin(t * 0.4) * 0.06;
    mesh.scale.setScalar(1 + Math.sin(t * 0.6) * 0.01);
  });

  return (
    <RoundedBox ref={ref} args={[2.4, 2.4, 2.4]} radius={0.16} smoothness={6}>
      <meshPhysicalMaterial
        color={webglColors.background}
        metalness={0.85}
        roughness={0.18}
        clearcoat={1}
        clearcoatRoughness={0.15}
        reflectivity={0.6}
        envMapIntensity={1.2}
      />
    </RoundedBox>
  );
}
