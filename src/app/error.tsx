"use client";

import { useEffect } from "react";

/**
 * Root error boundary. Error reporting is wired to a service in a later
 * milestone; for now failures are logged and the user can recover.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
      <h1 className="font-heading text-3xl font-semibold">Something went wrong</h1>
      <p className="max-w-md text-muted">An unexpected error occurred. Please try again.</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md border border-white/15 px-6 py-3 font-medium transition-colors hover:bg-white hover:text-background"
      >
        Try again
      </button>
    </main>
  );
}
