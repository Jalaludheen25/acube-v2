import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/constants";
import { cn } from "@/lib";

/** Intrinsic size of public/brand/acube-logo.png — preserves aspect ratio (no CLS). */
const LOGO_WIDTH = 979;
const LOGO_HEIGHT = 245;

interface LogoProps {
  /** Sizing/utility classes, e.g. "h-8 w-auto". */
  className?: string;
  /** Load eagerly — use above the fold (navbar, hero). */
  priority?: boolean;
  /** Wrap in a link to this href; pass `null` to render the image only (e.g. Loader). */
  href?: string | null;
}

/**
 * Shared ACUBE logo — the single implementation consumed by Navigation, Footer,
 * Loader, and Hero. Never duplicate the logo markup.
 */
export function Logo({ className, priority = false, href = "/" }: LogoProps) {
  const image = (
    <Image
      src="/brand/acube-logo.png"
      alt={href === null ? siteConfig.name : ""}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      sizes="128px"
      className={cn("logo-glow h-8 w-auto select-none", className)}
    />
  );

  if (href === null) return image;

  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} — home`}
      className="inline-flex items-center"
    >
      {image}
    </Link>
  );
}
