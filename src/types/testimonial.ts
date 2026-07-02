export interface Testimonial {
  id: string;
  name: string;
  country: string;
  /** ISO 3166-1 alpha-2, e.g. "AE". */
  countryCode: string;
  business?: string;
  quote: string;
  /** 1–5. Stored for records; never rendered as a star wall. */
  rating: number;
  avatar?: string;
  videoUrl?: string;
}

export interface TrustStatementContent {
  eyebrow: string;
  headline: string;
  body: string;
}

export interface TrustQuotesFraming {
  eyebrow: string;
  headline: string;
}

export interface TrustContent {
  /** Premium editorial statement shown when no verified testimonials exist. */
  statement: TrustStatementContent;
  /** Framing used only when verified testimonials are present. */
  quotes: TrustQuotesFraming;
}
