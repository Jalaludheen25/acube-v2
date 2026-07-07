import type { FooterContent } from "@/types";

/**
 * Footer copy — brand statement, column headings, and bottom-bar text only.
 * Navigation (mainNav), service categories (servicesContent), verified contact
 * details (contact), and the company name (siteConfig) are reused from their
 * own constants — never duplicated here. Copy is subject to client review.
 */
export const footerContent: FooterContent = {
  brandStatement:
    "Helping businesses establish themselves confidently across the UAE.",
  headings: {
    navigation: "Explore",
    services: "Services",
    contact: "Contact",
  },
  rightsReserved: "All rights reserved.",
  developerCredit: "Designed & Developed by TwoMonk Technologies",
};
