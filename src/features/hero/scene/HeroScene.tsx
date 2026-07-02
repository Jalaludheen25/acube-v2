"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { MathUtils } from "three";

import type { DeviceCapability } from "@/hooks";

import { CameraRig } from "./CameraRig";
import { NetworkLines } from "./NetworkLines";
import { Particles } from "./Particles";
import { StudioLighting } from "./StudioLighting";
import { UnfoldingCube } from "./UnfoldingCube";

interface HeroSceneProps {
  capability: DeviceCapability;
}

/**
 * The procedural Hero WebGL scene. Transparent canvas (alpha) composites over
 * the page's warm-obsidian background for a seamless hand-off from the Entry
 * Experience. DPR and particle count are tiered by device capability.
 *
 * Scroll progress through the first viewport is captured here (passive listener,
 * off the render thread) and handed to `UnfoldingCube`, which opens the cube
 * into its structural net as the visitor descends.
 */
export function HeroScene({ capability }: HeroSceneProps) {
  const progressRef = useRef(0);

  useEffect(() => {
    const update = () => {
      progressRef.current = MathUtils.clamp(
        window.scrollY / (window.innerHeight * 0.9),
        0,
        1,
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

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
        <UnfoldingCube progressRef={progressRef} />
        <NetworkLines />
        <Particles count={capability.particleCount} />
      </Suspense>
    </Canvas>
  );
}
