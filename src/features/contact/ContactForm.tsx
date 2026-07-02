"use client";

import dynamic from "next/dynamic";

/**
 * Client boundary that lazy-loads the form implementation. `ssr: false` keeps
 * React Hook Form + the Zod resolver entirely off the initial First-Load JS
 * (the form is below the fold). The placeholder reserves height to avoid layout
 * shift while the chunk loads.
 */
const ContactFormFields = dynamic(
  () => import("./ContactFormFields").then((m) => ({ default: m.ContactFormFields })),
  { ssr: false, loading: () => <div aria-hidden className="min-h-[32rem]" /> },
);

export function ContactForm() {
  return <ContactFormFields />;
}
