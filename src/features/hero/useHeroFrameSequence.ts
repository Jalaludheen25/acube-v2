import { useEffect, useRef, useState, type RefObject } from "react";

export interface HeroFrameManifest {
  count: number;
  width: number;
  height: number;
  basePath: string;
  pad: number;
  ext: string;
}

export interface UseHeroFrameSequenceResult {
  containerRef: RefObject<HTMLDivElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  /** True once frame 1 has loaded and the canvas is safe to mount. */
  ready: boolean;
}

/** Eagerly loaded before the canvas mounts; the rest stream in during idle time. */
const EAGER_FRAME_COUNT = 20;

function scheduleIdle(callback: () => void): () => void {
  if (typeof window.requestIdleCallback === "function") {
    const handle = window.requestIdleCallback(callback);
    return () => window.cancelIdleCallback(handle);
  }
  const handle = window.setTimeout(callback, 0);
  return () => window.clearTimeout(handle);
}

/** `background-size: cover`-equivalent source rect for `drawImage`. */
function coverSourceRect(canvasW: number, canvasH: number, imgW: number, imgH: number) {
  const containerRatio = canvasW / canvasH;
  const imageRatio = imgW / imgH;
  if (imageRatio > containerRatio) {
    const sw = imgH * containerRatio;
    return { sx: (imgW - sw) / 2, sy: 0, sw, sh: imgH };
  }
  const sh = imgW / containerRatio;
  return { sx: 0, sy: (imgH - sh) / 2, sw: imgW, sh };
}

/**
 * Loads the hero WebP frame sequence, pins the hero section for ~100vh via
 * GSAP ScrollTrigger, and scrubs the canvas frame-by-frame with scroll
 * progress. No-ops entirely when `reducedMotion` is true — the caller falls
 * back to the static poster image.
 */
export function useHeroFrameSequence(
  manifestUrl: string,
  reducedMotion: boolean,
): UseHeroFrameSequenceResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameCountRef = useRef(1);
  const lastDrawnRef = useRef(-1);
  const [ready, setReady] = useState(false);

  // Fetch the manifest and progressively preload frames.
  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;
    let cancelIdle: (() => void) | undefined;

    const loadFrame = (manifest: HeroFrameManifest, index: number) =>
      new Promise<void>((resolve) => {
        const img = new window.Image();
        img.decoding = "async";
        img.onload = () => {
          imagesRef.current[index] = img;
          resolve();
        };
        img.onerror = () => resolve();
        img.src = `${manifest.basePath}${String(index + 1).padStart(manifest.pad, "0")}.${manifest.ext}`;
      });

    async function run() {
      const res = await fetch(manifestUrl);
      const manifest: HeroFrameManifest = await res.json();
      if (cancelled) return;
      frameCountRef.current = manifest.count;

      const eagerCount = Math.min(EAGER_FRAME_COUNT, manifest.count);
      await Promise.all(
        Array.from({ length: eagerCount }, (_, i) => loadFrame(manifest, i)),
      );
      if (cancelled) return;
      setReady(true);

      let next = eagerCount;
      const loadRest = () => {
        if (cancelled || next >= manifest.count) return;
        const index = next++;
        cancelIdle = scheduleIdle(() => {
          void loadFrame(manifest, index).then(loadRest);
        });
      };
      loadRest();
    }

    void run();

    return () => {
      cancelled = true;
      cancelIdle?.();
    };
  }, [manifestUrl, reducedMotion]);

  // Canvas sizing + draw + scroll pin/scrub — starts once the canvas has mounted.
  useEffect(() => {
    if (reducedMotion || !ready) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(container.clientWidth * dpr);
      canvas.height = Math.round(container.clientHeight * dpr);
    };

    const draw = (index: number) => {
      const upperBound = frameCountRef.current - 1;
      let frameIndex = Math.max(0, Math.min(index, upperBound));
      while (frameIndex > 0 && !imagesRef.current[frameIndex]) frameIndex--;
      const img = imagesRef.current[frameIndex];
      if (!img) return;
      const { sx, sy, sw, sh } = coverSourceRect(canvas.width, canvas.height, img.naturalWidth, img.naturalHeight);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    };

    resize();
    draw(0);

    let resizeRaf: number | null = null;
    const onResize = () => {
      if (resizeRaf !== null) return;
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = null;
        resize();
        draw(lastDrawnRef.current === -1 ? 0 : lastDrawnRef.current);
      });
    };
    window.addEventListener("resize", onResize, { passive: true });

    let cancelled = false;
    let scrollTrigger: { kill: () => void } | undefined;
    let mm: { add: (query: string, cb: () => void) => void; revert: () => void } | undefined;

    void import("@/animations/gsap").then(({ gsap, ScrollTrigger }) => {
      if (cancelled) return;
      const heroSection = document.getElementById("hero");
      if (!heroSection) return;

      mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        scrollTrigger = ScrollTrigger.create({
          trigger: heroSection,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (frameCountRef.current - 1));
            if (index === lastDrawnRef.current) return;
            lastDrawnRef.current = index;
            requestAnimationFrame(() => draw(index));
          },
        });
      });
    });

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      if (resizeRaf !== null) cancelAnimationFrame(resizeRaf);
      scrollTrigger?.kill();
      mm?.revert();
    };
  }, [ready, reducedMotion]);

  return { containerRef, canvasRef, ready };
}
