export interface SiteConfig {
  author: {
    name: string;
    title: string;
    company: string;
    tagline: string;
    heroHeadline: string;
    heroHeadlineSpan: string;
    heroSubheadline: string;
    bioSummary: string;
    location: string;
    email: string;
    whatsappPhone: string;
    socials: {
      platform: string;
      url: string;
      handle: string;
    }[];
  };
  book: {
    title: string;
    subtitle: string;
    author: string;
    publishYear: string;
    description: string;
  };
}

export const siteConfig: SiteConfig = {
  author: {
    name: 'Fidel Castrol',
    title: 'Founder, Entrepreneur & Speaker',
    company: 'Global Ventufires',
    tagline: 'Execution is Everything.',
    heroHeadline: 'Ideas are easy.',
    heroHeadlineSpan: 'Execution is everything.',
    heroSubheadline:
      'Helping entrepreneurs transform ideas into businesses through execution, innovation, and practical knowledge.',
    bioSummary:
      'Fidel Castrol is a globally active entrepreneur, investor, and business strategist. As the creator of The Entrepreneurial Tale and founder of Global Ventufires, he leads initiatives empowering next-generation founders across capital markets, technology, and luxury real estate.',
    location: 'London • Dubai • Global',
    email: 'contact@globalventufires.com',
    whatsappPhone: '0714193384',
    socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com', handle: '@fidelcastrol-official' },
      { platform: 'Twitter / X', url: 'https://x.com', handle: '@fidel_castrol_gv' },
      { platform: 'Instagram', url: 'https://instagram.com', handle: '@fidelcastrol.global' },
      { platform: 'YouTube', url: 'https://youtube.com', handle: 'Global Ventufires Media' },
    ],
  },
  book: {
    title: 'The Entrepreneurial Tale',
    subtitle: 'Navigating Risk, Innovation & Personal Responsibility',
    author: 'Fidel Castrol',
    publishYear: '2026',
    description: 'A pragmatic blueprint for turning abstract ambition into scalable enterprise. Grounded in real-world market battle grounds, risk optimization, and unrelenting execution.',
  },
};
