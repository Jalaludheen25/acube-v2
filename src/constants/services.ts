import type { ServicesContent } from "@/types";

/**
 * Services — honesty-first.
 *
 * Every service is taken from the client's business card (the only verified
 * source). Nothing invented — no services, capabilities, or statistics.
 * Descriptors are plain, factual descriptions of each service.
 *
 * Organized per Decision #1: business setup & company formation lead (primary,
 * editorial rows); document/government services are present as a supporting
 * category (compact chips). Adding a service later = one data entry; no redesign.
 *
 * NOTE for client review: service names are kept close to the card and grouped
 * for clarity. Please confirm the exact wording of "Istidama" and
 * "Document Clearing", and all descriptor copy, before launch.
 */
export const servicesContent: ServicesContent = {
  framing: "Everything you need to establish and run your business in the UAE.",
  categories: [
    {
      id: "services-setup",
      title: "Business Setup & Company Formation",
      variant: "primary",
      services: [
        {
          id: "svc-business-setup",
          slug: "business-setup",
          title: "Business Setup",
          description: "End-to-end company setup in the UAE — mainland or free zone.",
          icon: "Rocket",
          tier: "primary",
          idealFor: "New entrepreneurs & investors",
        },
        {
          id: "svc-company-formation",
          slug: "company-formation",
          title: "Company Formation",
          description: "Company formation and procedures, handled from start to finish.",
          icon: "Building2",
          tier: "primary",
          idealFor: "Startups & SMEs",
        },
        {
          id: "svc-instant-license",
          slug: "instant-license",
          title: "Instant License",
          description: "Fast-track licensing to get your business operational quickly.",
          icon: "BadgeCheck",
          tier: "primary",
          idealFor: "Time-sensitive launches",
        },
        {
          id: "svc-sponsorship",
          slug: "sponsorship-assistance",
          title: "Sponsorship Assistance",
          description: "Local sponsorship arrangements where your setup requires them.",
          icon: "Handshake",
          tier: "primary",
          idealFor: "Mainland setups",
        },
        {
          id: "svc-virtual-office",
          slug: "virtual-office",
          title: "Virtual Office",
          description: "A registered UAE business address without the overhead of a physical office.",
          icon: "Building",
          tier: "primary",
          idealFor: "Lean & remote businesses",
        },
      ],
    },
    {
      id: "services-corporate",
      title: "Corporate & Legal Services",
      variant: "primary",
      services: [
        {
          id: "svc-corporate",
          slug: "corporate-services",
          title: "Corporate Services",
          description: "Ongoing corporate support for established businesses.",
          icon: "Briefcase",
          tier: "primary",
          idealFor: "Growing companies",
        },
        {
          id: "svc-moa",
          slug: "memorandum-of-association",
          title: "Memorandum of Association",
          description: "Drafting and processing of your Memorandum of Association.",
          icon: "FileText",
          tier: "primary",
          idealFor: "New & restructuring companies",
        },
        {
          id: "svc-poa",
          slug: "power-of-attorney",
          title: "Power of Attorney",
          description: "Preparation and attestation of Power of Attorney documents.",
          icon: "FileSignature",
          tier: "primary",
          idealFor: "Delegated authority",
        },
        {
          id: "svc-liquidation",
          slug: "company-liquidation",
          title: "Company Liquidation",
          description: "Orderly closure and deregistration of companies.",
          icon: "Archive",
          tier: "primary",
          idealFor: "Businesses winding down",
        },
        {
          id: "svc-cases",
          slug: "cases-court-applications",
          title: "Cases & Court Applications",
          description: "Support with case filing and court applications.",
          icon: "Scale",
          tier: "primary",
          idealFor: "Legal matters",
        },
        {
          id: "svc-istidama",
          slug: "istidama",
          title: "Istidama",
          description: "Istidama documentation and related processing.",
          icon: "ShieldCheck",
          tier: "primary",
          idealFor: "Compliance requirements",
        },
      ],
    },
    {
      id: "services-documentation",
      title: "Documentation & Government Services",
      variant: "supporting",
      services: [
        {
          id: "svc-emirates-id",
          slug: "emirates-id-applications",
          title: "Emirates ID Applications",
          description: "Emirates ID application processing.",
          icon: "FileText",
          tier: "supporting",
        },
        {
          id: "svc-medical",
          slug: "medical-applications",
          title: "Medical Applications",
          description: "Medical fitness application processing.",
          icon: "FileText",
          tier: "supporting",
        },
        {
          id: "svc-immigration",
          slug: "immigration-paperwork",
          title: "Immigration Paperwork",
          description: "Immigration document preparation and processing.",
          icon: "FileText",
          tier: "supporting",
        },
        {
          id: "svc-typing",
          slug: "typing-photocopying",
          title: "Typing & Photocopying",
          description: "Professional typing and photocopying services.",
          icon: "FileText",
          tier: "supporting",
        },
        {
          id: "svc-document-clearing",
          slug: "document-clearing",
          title: "Document Clearing",
          description: "Document clearing and attestation support.",
          icon: "FileText",
          tier: "supporting",
        },
        {
          id: "svc-stamp-seal",
          slug: "stamp-seal-making",
          title: "Stamp & Seal Making",
          description: "Company stamp and seal production.",
          icon: "FileText",
          tier: "supporting",
        },
      ],
    },
  ],
  cta: { label: "Book a Free Consultation", href: "#contact" },
};
