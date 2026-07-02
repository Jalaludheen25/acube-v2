/**
 * Footer content — the ONLY footer-specific copy. Navigation, service
 * categories, verified contact details, and the company name are reused from
 * their own constants and never duplicated here.
 */
export interface FooterContent {
  /** Short, factual brand statement (not marketing copy). */
  brandStatement: string;
  /** Small column heading labels. */
  headings: {
    navigation: string;
    services: string;
    contact: string;
  };
  /** Trailing copyright text; year + company name are composed dynamically. */
  rightsReserved: string;
  /** Attribution line shown in the bottom bar. */
  developerCredit: string;
}
