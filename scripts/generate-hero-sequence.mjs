#!/usr/bin/env node
/**
 * Generates the web-delivery hero frame sequence from the production masters.
 *
 * Reads public/hero/frames/frame-NNN.png (source art, untouched) and writes
 * resized/compressed WebP derivatives + a manifest to public/hero/sequence/,
 * which is what HeroFrameSequence actually fetches at runtime. Rerun this
 * whenever the master frames are replaced.
 *
 * Requires ffmpeg on PATH.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = join(ROOT, "public", "hero", "frames");
const OUT_DIR = join(ROOT, "public", "hero", "sequence");
const OUT_WIDTH = 1600;
const QUALITY = 72;

function main() {
  const frames = readdirSync(SRC_DIR)
    .filter((f) => /^frame-\d+\.png$/i.test(f))
    .sort();

  if (frames.length === 0) {
    console.error(`No frame-*.png files found in ${SRC_DIR}`);
    process.exit(1);
  }

  mkdirSync(OUT_DIR, { recursive: true });

  let width = 0;
  let height = 0;

  frames.forEach((file, i) => {
    const index = String(i + 1).padStart(3, "0");
    const src = join(SRC_DIR, file);
    const out = join(OUT_DIR, `frame-${index}.webp`);

    execFileSync(
      "ffmpeg",
      [
        "-y",
        "-i", src,
        "-vf", `scale=${OUT_WIDTH}:-1`,
        "-c:v", "libwebp",
        "-quality", String(QUALITY),
        out,
      ],
      { stdio: "inherit" },
    );

    if (i === 0) {
      const probe = execFileSync(
        "ffprobe",
        ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", out],
        { encoding: "utf8" },
      ).trim();
      const [w, h] = probe.split(",").map(Number);
      width = w;
      height = h;
    }

    console.log(`[${i + 1}/${frames.length}] ${file} -> frame-${index}.webp`);
  });

  const manifest = {
    count: frames.length,
    width,
    height,
    basePath: "/hero/sequence/frame-",
    pad: 3,
    ext: "webp",
  };

  writeFileSync(join(OUT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\nWrote ${frames.length} frames + manifest.json to ${OUT_DIR}`);
}

main();
