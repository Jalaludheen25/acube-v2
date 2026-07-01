"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import type { DeviceCapability } from "@/hooks";

import { CameraRig } from "./CameraRig";
import { Cube } from "./Cube";
import { NetworkLines } from "./NetworkLines";
import { Particles } from "./Particles";
import { StudioLighting } from "./StudioLighting";

interface HeroSceneProps {
  capability: DeviceCapability;
}

/**
 * The procedural Hero WebGL scene. Transparent canvas (alpha) composites over
 * the page's deep-black background for a seamless hand-off from the Entry
 * Experience. DPR and particle count are tiered by device capability.
 */
export function HeroScene({ capability }: HeroSceneProps) {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={capability.dpr}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ fov: 35, near: 0.1, far: 100, position: [0, 0, 8] }}
      frameloop="always"
    >
      <Suspense fallback={null}>
        <StudioLighting />
        <CameraRig enableParallax={capability.enableParallax} />
        <Cube />
        <NetworkLines />
        <Particles count={capability.particleCount} />
      </Suspense>
    </Canvas>
  );
}
