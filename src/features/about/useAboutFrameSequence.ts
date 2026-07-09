import { useEffect, useRef, useState, type RefObject } from "react";

export interface AboutFrameManifest {
  count: number;
  width: number;
  height: number;
  basePath: string;
  pad: number;
  ext: string;
}

export interface UseAboutFrameSequenceResult {
  containerRef: RefObject<HTMLDivElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  /** True once the eager frame batch has loaded and the canvas is safe to mount. */
  ready: boolean;
  /** Current chapter of the 6-stage narrative (0–5), driven by scroll progress. */
  stage: number;
}

const STAGE_COUNT = 6;
const EAGER_FRAME_COUNT = 20;
const EAGER_FRAME_COUNT_MOBILE = 12;

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
 * Loads the About WebP frame sequence, pins `pinTargetId` for a 300vh total
 * scroll footprint (desktop) via GSAP ScrollTrigger, and scrubs the canvas
 * frame-by-frame with scroll progress — while also bucketing that same
 * progress into the 6-stage story narrative. Independent of
 * `features/hero/useHeroFrameSequence` by design (own pin distance, own
 * narrative concept, zero shared code with the locked Home hero). No-ops
 * entirely when `reducedMotion` is true — the caller falls back to a static
 * first frame + stage 0 text.
 */
export function useAboutFrameSequence(
  manifestUrl: string,
  pinTargetId: string,
  reducedMotion: boolean,
  mobile: boolean,
): UseAboutFrameSequenceResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameCountRef = useRef(1);
  const lastDrawnRef = useRef(-1);
  const [ready, setReady] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;
    let cancelIdle: (() => void) | undefined;

    const loadFrame = (manifest: AboutFrameManifest, index: number) =>
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
      let manifest: AboutFrameManifest;
      try {
        const res = await fetch(manifestUrl);
        manifest = await res.json();
      } catch {
        // Navigated away mid-fetch, or a real network failure — either way
        // there's nothing to recover; the poster frame stands in.
        return;
      }
      if (cancelled) return;
      frameCountRef.current = manifest.count;

      const eagerCount = Math.min(mobile ? EAGER_FRAME_COUNT_MOBILE : EAGER_FRAME_COUNT, manifest.count);
      await Promise.all(Array.from({ length: eagerCount }, (_, i) => loadFrame(manifest, i)));
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
  }, [manifestUrl, reducedMotion, mobile]);

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
    let lastStage = 0;

    void import("@/animations/gsap").then(({ gsap, ScrollTrigger }) => {
      if (cancelled) return;
      const pinTarget = document.getElementById(pinTargetId);
      if (!pinTarget) return;

      mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        scrollTrigger = ScrollTrigger.create({
          trigger: pinTarget,
          start: "top top",
          end: mobile ? "+=150%" : "+=200%",
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (frameCountRef.current - 1));
            if (index !== lastDrawnRef.current) {
              lastDrawnRef.current = index;
              requestAnimationFrame(() => draw(index));
            }

            const nextStage = Math.min(STAGE_COUNT - 1, Math.floor(self.progress * STAGE_COUNT));
            if (nextStage !== lastStage) {
              lastStage = nextStage;
              setStage(nextStage);
            }
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
  }, [ready, reducedMotion, mobile, pinTargetId]);

  return { containerRef, canvasRef, ready, stage };
}
