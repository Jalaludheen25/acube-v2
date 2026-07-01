import Link from "next/link";

/**
 * 404 page. Styling is intentionally minimal here; it adopts the full
 * design system + Button primitive in Milestone 03.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
      <p className="font-heading text-6xl font-bold">404</p>
      <h1 className="font-heading text-2xl font-semibold">Page not found</h1>
      <p className="max-w-md text-muted">
        The page you are looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="rounded-md border border-white/15 px-6 py-3 font-medium transition-colors hover:bg-white hover:text-background"
      >
        Back to home
      </Link>
    </main>
  );
}
