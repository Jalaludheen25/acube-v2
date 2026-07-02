"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { QuadraticBezierCurve3, Vector3, type Group } from "three";

import { webglColors } from "@/constants";

/** Node endpoints — connection reaching outward from the cube. */
const NODES: readonly [number, number, number][] = [
  [4, 2.5, -1],
  [-4.5, 1.5, -2],
  [3.5, -2.5, -1.5],
  [-3.5, -2, -1],
  [0, 3.4, -2],
  [4.5, -0.5, 0.5],
];

/**
 * Blueprint-style connection lines — thin, precise, very low opacity (not
 * glowing "internet cables"). Curved from the cube's centre to distant nodes,
 * with tiny brand-tinted node points. The whole group drifts extremely slowly.
 */
export function NetworkLines() {
  const group = useRef<Group>(null);

  const curves = useMemo(
    () =>
      NODES.map((node) => {
        const end = new Vector3(node[0], node[1], node[2]);
        const mid = end.clone().multiplyScalar(0.5).add(new Vector3(0, 0.6, 0.4));
        return new QuadraticBezierCurve3(new Vector3(0, 0, 0), mid, end).getPoints(24);
      }),
    [],
  );

  useFrame((state) => {
    if (group.current) group.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <group ref={group}>
      {curves.map((points, i) => (
        <Line
          key={`line-${i}`}
          points={points}
          color={webglColors.foreground}
          lineWidth={1}
          transparent
          opacity={0.12}
        />
      ))}
      {NODES.map((node, i) => (
        <mesh key={`node-${i}`} position={node}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? webglColors.brandRed : webglColors.gold}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}
