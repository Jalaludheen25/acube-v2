import Image from "next/image";

import { cn } from "@/lib";

interface FigureImage {
  /** Path under /public (or a configured remote). */
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface FigureProps {
  image: FigureImage;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Media-ready figure — the drop-in slot for photography or rendered atmosphere.
 * Wraps next/image (AVIF/WebP, intrinsic size → no CLS). The project stays
 * text-first until real assets exist; a section renders a Figure only where a
 * verified image is supplied, so imagery auto-activates with no redesign.
 */
export function Figure({
  image,
  caption,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className,
}: FigureProps) {
  return (
    <figure className={cn("overflow-hidden rounded-2xl", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full object-cover"
      />
      {caption ? (
        <figcaption className="mt-3 text-caption text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
