#!/usr/bin/env node
/**
 * Generates the web-delivery hero frame sequences from the production masters.
 *
 * Reads public/hero/frames/frame-NNN.png (source art, untouched) and writes
 * two resized/compressed WebP derivative sets + manifests:
 *   - public/hero/sequence/        — desktop, scaled to OUT_WIDTH
 *   - public/hero/sequence-mobile/ — phone-sized, center-cropped to a 3:4
 *     portrait ratio then scaled to MOBILE_WIDTH (an "intelligent crop" of
 *     the same footage — no separate portrait shoot exists)
 *
 * These are what HeroFrameSequence actually fetches at runtime. Rerun this
 * whenever the master frames are replaced. Requires ffmpeg on PATH.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = join(ROOT, "public", "hero", "frames");
const QUALITY = 72;

const SETS = [
  {
    name: "desktop",
    outDir: join(ROOT, "public", "hero", "sequence"),
    basePath: "/hero/sequence/frame-",
    vf: (w) => `scale=${w}:-1`,
    width: 1600,
  },
  {
    name: "mobile",
    outDir: join(ROOT, "public", "hero", "sequence-mobile"),
    basePath: "/hero/sequence-mobile/frame-",
    // Center-crop to a 3:4 portrait ratio (crop defaults to centered when x/y
    // are omitted), then scale down to phone size.
    vf: (w) => `crop=ih*0.75:ih,scale=${w}:-1`,
    width: 760,
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
