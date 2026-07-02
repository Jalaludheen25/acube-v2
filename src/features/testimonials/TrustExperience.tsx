import { RevealRoot } from "@/components/motion";
import { testimonials } from "@/constants";
import { cn, container } from "@/lib";

import { TestimonialList } from "./TestimonialList";
import { TrustStatement } from "./TrustStatement";

/**
 * Trust section. Presents verified testimonials (editorial blockquotes) when
 * they exist, otherwise a premium editorial trust statement — the section is
 * always complete and never hints at an absence. Server Component; the reused
 * RevealRoot enhances the DOM. Adding testimonials to the data array switches
 * the body automatically, with no changes here.
 */
export function TrustExperience() {
  return (
    <section id="testimonials" aria-label="Trust" className="relative section-exhale">
      <RevealRoot>
        <div className={cn(container.content, "py-24 lg:py-32")}>
          {testimonials.length > 0 ? <TestimonialList /> : <TrustStatement />}
        </div>
      </RevealRoot>
    </section>
  );
}
