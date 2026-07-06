import Image from "next/image";

import { cn } from "@/lib";

interface FigureImage {
  /** Path under /public (or a configured remote). */
  src: string;
  alt: string;
  /** Intrinsic size — ignored when `fill` is set, but always required so a
   *  Figure can be flipped between modes without touching the call site. */
  width: number;
  height: number;
}

interface FigureProps {
  image: FigureImage;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /**
   * Crop to fill a fixed-aspect container instead of sizing intrinsically —
   * pass the aspect ratio via an `aspect-*` class in `className`.
   */
  fill?: boolean;
  /** object-position when `fill` is used (e.g. "center", "top", "30% 60%"). */
  focus?: string;
}

/**
 * Media-ready figure — the drop-in slot for photography. Wraps next/image
 * (AVIF/WebP, auto-optimized). Two modes: intrinsic sizing (default — the
 * image dictates its own aspect ratio, for in-flow editorial photos) or
 * `fill` (crops to whatever aspect-ratio class is on `className`, for fixed
 * shape slots like portrait/square/banner cards).
 */
export function Figure({
  image,
  caption,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className,
  fill = false,
  focus = "center",
}: FigureProps) {
  return (
    <figure className={cn("overflow-hidden rounded-2xl", fill && "relative", className)}>
      {fill ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: focus }}
        />
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full object-cover"
        />
      )}
      {caption ? (
        <figcaption className="mt-3 text-caption text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
