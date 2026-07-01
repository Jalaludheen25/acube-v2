export interface Testimonial {
  id: string;
  name: string;
  country: string;
  /** ISO 3166-1 alpha-2, e.g. "AE". */
  countryCode: string;
  business?: string;
  quote: string;
  /** 1–5. */
  rating: number;
  avatar?: string;
  videoUrl?: string;
}
