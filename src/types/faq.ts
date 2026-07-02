export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FaqContent {
  eyebrow: string;
  headline: string;
  items: readonly FaqItem[];
}
