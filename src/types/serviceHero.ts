interface ServiceHeroCta {
  label: string;
  href: string;
}

export interface ServiceHeroContent {
  title: string;
  subtitle: string;
  primaryCta: ServiceHeroCta;
  secondaryCta: ServiceHeroCta;
  video: {
    mp4: string;
    webm: string;
    poster: string;
  };
}
