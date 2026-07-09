#!/usr/bin/env node
/**
 * Generates the web-delivery About frame sequences from the production
 * masters, mirroring generate-hero-sequence.mjs's approach.
 *
 * Reads public/videos/about/frames/frame-NNN.png (source art, untouched) and
 * writes two resized/compressed WebP derivative sets + manifests:
 *   - public/videos/about/sequence/        — desktop, scaled to OUT_WIDTH
 *   - public/videos/about/sequence-mobile/ — narrower, scaled to MOBILE_WIDTH
 *     (no special crop — the About canvas is a shorter full-width band on
 *     mobile, not a tall portrait hero like Home's, so the shared
 *     object-fit-cover draw math handles the source as-is)
 *
 * These are what useAboutFrameSequence actually fetches at runtime. Rerun
 * whenever the master frames are replaced. Requires ffmpeg on PATH.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = join(ROOT, "public", "videos", "about", "frames");
const QUALITY = 72;

const SETS = [
  {
    name: "desktop",
    outDir: join(ROOT, "public", "videos", "about", "sequence"),
    basePath: "/videos/about/sequence/frame-",
    vf: (w) => `scale=${w}:-1`,
    width: 1440,
  },
  {
    name: "mobile",
    outDir: join(ROOT, "public", "videos", "about", "sequence-mobile"),
    basePath: "/videos/about/sequence-mobile/frame-",
    vf: (w) => `scale=${w}:-1`,
    width: 900,
  },
];

function probeDimensions(file) {
  const probe = execFileSync(
    "ffprobe",
    ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", file],
    { encoding: "utf8" },
  ).trim();
  const [w, h] = probe.split(",").map(Number);
  return { width: w, height: h };
}

function generateSet(set, frames) {
  mkdirSync(set.outDir, { recursive: true });
  let width = 0;
  let height = 0;

  frames.forEach((file, i) => {
    const index = String(i + 1).padStart(3, "0");
    const src = join(SRC_DIR, file);
    const out = join(set.outDir, `frame-${index}.webp`);

    execFileSync(
      "ffmpeg",
      ["-y", "-i", src, "-vf", set.vf(set.width), "-c:v", "libwebp", "-quality", String(QUALITY), out],
      { stdio: "inherit" },
    );

    if (i === 0) {
      ({ width, height } = probeDimensions(out));
    }

    console.log(`[${set.name} ${i + 1}/${frames.length}] ${file} -> frame-${index}.webp`);
  });

  const manifest = {
    count: frames.length,
    width,
    height,
    basePath: set.basePath,
    pad: 3,
    ext: "webp",
  };

  writeFileSync(join(set.outDir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Wrote ${frames.length} frames + manifest.json to ${set.outDir}\n`);
}

function main() {
  const frames = readdirSync(SRC_DIR)
    .filter((f) => /^frame-\d+\.png$/i.test(f))
    .sort();

  if (frames.length === 0) {
    console.error(`No frame-*.png files found in ${SRC_DIR}`);
    process.exit(1);
  }

  for (const set of SETS) {
    generateSet(set, frames);
  }
}

main();
