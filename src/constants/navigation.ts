import type { NavGroup, NavItem } from "@/types";

/**
 * Primary header navigation — in-page section anchors (sections built in later
 * milestones). "About" maps to the Business Story section; the Business Journey
 * section (between Services and Industries) is intentionally not in the primary nav.
 */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Why ACUBE", href: "/why-acube" },
  { label: "Packages", href: "/packages" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/**
 * Header navigation — the customer journey, in order: understand what ACUBE
 * offers → compare packages → build trust → contact. Contact is deliberately
 * NOT in this list: the header renders it as the premium CTA button instead.
 * `mainNav` above stays complete for the footer's sitemap role.
 */
export const headerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
];

/** Secondary routes surfaced in the mobile overlay's smaller "More" group
 *  (desktop reaches these via the footer, home pillars, and cross-links). */
export const headerMoreNav: NavItem[] = [
  { label: "Industries", href: "/industries" },
  { label: "Why ACUBE", href: "/why-acube" },
  { label: "FAQ", href: "/faq" },
];

/** Footer navigation groups. */
export const footerNav: NavGroup[] = [
  {
    title: "Explore",
    items: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Industries", href: "#industries" },
      { label: "Packages", href: "#packages" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Why ACUBE", href: "#why-acube" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
