"use client";

import { useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { MathUtils, type Group, type Mesh } from "three";

import { webglColors } from "@/constants";

/**
 * "The Unfold" — the ACUBE signature.
 *
 * Six panels assembled into a precise dark-glass cube (the resting state, shown
 * on load — LCP-safe and always premium). As the visitor scrolls through the
 * hero, `progressRef` drives each panel from its cube position/orientation to a
 * flat cross-net facing the camera: the cube opens into the *structure* of the
 * business. Gold edges trace every panel (blueprint language). Purely additive
 * to scroll — no pin, no layout shift. WebGL only runs for non-reduced-motion,
 * capable devices (gated upstream); everyone else gets the static poster.
 *
 * Aesthetic is controlled by the constants below so it can be tuned by eye
 * without touching the interpolation logic.
 */
const H = 1.2; // cube half-size (each face is 2H = 2.4 wide)
const S = 2.4; // face pitch in the unfolded net
const NET_SCALE = 0.52; // shrink the wide flat net so it frames on screen
const NET_OFFSET_X = -S / 2; // centre the cross horizontally (net spans x: -S … 2S)
const PANEL = 0.06; // panel thickness

type Face = {
  /** Assembled-cube transform. */
  pos: [number, number, number];
  rot: [number, number, number];
  /** Unfolded-net centre (before centring offset); all faces end facing +Z. */
  net: [number, number, number];
};

const FACES: readonly Face[] = [
  { pos: [0, 0, H], rot: [0, 0, 0], net: [0, 0, 0] }, // front (net centre)
  { pos: [0, H, 0], rot: [-Math.PI / 2, 0, 0], net: [0, S, 0] }, // top
  { pos: [0, -H, 0], rot: [Math.PI / 2, 0, 0], net: [0, -S, 0] }, // bottom
  { pos: [-H, 0, 0], rot: [0, -Math.PI / 2, 0], net: [-S, 0, 0] }, // left
  { pos: [H, 0, 0], rot: [0, Math.PI / 2, 0], net: [S, 0, 0] }, // right
  { pos: [0, 0, -H], rot: [0, Math.PI, 0], net: [2 * S, 0, 0] }, // back (tail of the net)
];

/** Smoothstep — soft ease with no overshoot (matches the premium motion language). */
const smooth = (p: number) => p * p * (3 - 2 * p);

interface UnfoldingCubeProps {
  progressRef: MutableRefObject<number>;
}

export function UnfoldingCube({ progressRef }: UnfoldingCubeProps) {
  const groupRef = useRef<Group>(null);
  const panelsRef = useRef<(Mesh | null)[]>([]);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const p = smooth(MathUtils.clamp(progressRef.current, 0, 1));

    for (let i = 0; i < FACES.length; i++) {
      const face = FACES[i];
      const panel = panelsRef.current[i];
      if (!face || !panel) continue;

      panel.position.set(
        MathUtils.lerp(face.pos[0], face.net[0] + NET_OFFSET_X, p),
        MathUtils.lerp(face.pos[1], face.net[1], p),
        MathUtils.lerp(face.pos[2], face.net[2], p),
      );
      panel.rotation.set(
        MathUtils.lerp(face.rot[0], 0, p),
        MathUtils.lerp(face.rot[1], 0, p),
        MathUtils.lerp(face.rot[2], 0, p),
      );
    }

    group.scale.setScalar(MathUtils.lerp(1, NET_SCALE, p));

    // Life — present when assembled, settling as it unfolds into the flat net.
    const t = state.clock.elapsedTime;
    const life = 1 - p;
    group.rotation.y += delta * 0.12 * life;
    group.rotation.x = Math.sin(t * 0.15) * 0.05 * life;
    group.position.y = Math.sin(t * 0.4) * 0.06;
  });

  return (
    <group ref={groupRef}>
      {FACES.map((face, i) => (
        <mesh
          key={i}
          ref={(el) => {
            panelsRef.current[i] = el;
          }}
          position={face.pos}
          rotation={face.rot}
        >
          <boxGeometry args={[S, S, PANEL]} />
          <meshPhysicalMaterial
            color={webglColors.surface}
            metalness={0.85}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.18}
            reflectivity={0.6}
            envMapIntensity={1.2}
          />
          <Edges color={webglColors.gold} />
        </mesh>
      ))}
    </group>
  );
}
