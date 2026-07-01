/**
 * Home — composition root.
 *
 * Sections are composed here in their respective milestones:
 *   Hero (M05) · Business Story (M06) · Services (M07) · Journey (M08)
 *   · Industries (M09) · Why ACUBE (M10) · Packages (M11)
 *   · Testimonials (M12) · FAQ (M13) · Consultation CTA + Contact (M14)
 *
 * Per project Decision #5, the primary heading and critical content are
 * server-rendered HTML and never depend on animation or client JS.
 */
export default function HomePage() {
  return (
    <main id="main" className="min-h-dvh">
      <h1 className="sr-only">
        ACUBE — Business Setup &amp; Corporate Consultancy in the UAE
      </h1>
    </main>
  );
}
