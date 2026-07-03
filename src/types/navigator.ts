export interface NavigatorOption {
  id: string;
  label: string;
}

export interface NavigatorQuestion {
  id: string;
  legend: string;
  options: readonly NavigatorOption[];
}

/**
 * Setup Navigator copy — a guided intake, NOT an advice/price engine. It gathers
 * a little context to focus the free consultation; it never recommends a
 * specific license, structure, or price.
 */
export interface NavigatorContent {
  eyebrow: string;
  title: string;
  lede: string;
  questions: readonly NavigatorQuestion[];
  summaryLabel: string;
  ctaHref: string;
}
