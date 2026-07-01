"use client";

import { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";

import { duration } from "@/constants";

import { gsap, heroGsapEase } from "./heroGsap";

const MAX_TILT = MathUtils.degToRad(5);

interface CameraRigProps {
  enableParallax: boolean;
}

/**
 * Cinematic camera. No OrbitControls, no user control.
 *
 * - Intro: a single, slow GSAP push from z=12 → z=8 (token-driven ease/duration).
 * - Ongoing: an almost-invisible mouse parallax, clamped to ±5°, lerped for
 *   smoothness. Disabled on low-tier / touch devices.
 */
export function CameraRig({ enableParallax }: CameraRigProps) {
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    camera.position.set(0, 0, 12);
    const tween = gsap.to(camera.position, {
      z: 8,
      duration: duration.scene / 1000,
      ease: heroGsapEase.outExpo,
    });
    return () => {
      tween.kill();
    };
  }, [camera]);

  useFrame((state) => {
    if (!enableParallax) return;
    const targetY = state.pointer.x * MAX_TILT;
    const targetX = -state.pointer.y * MAX_TILT;
    camera.rotation.y = MathUtils.lerp(camera.rotation.y, targetY, 0.04);
    camera.rotation.x = MathUtils.lerp(camera.rotation.x, targetX, 0.04);
  });

  return null;
}
