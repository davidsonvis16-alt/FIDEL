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
    company: 'Global Mogul Entrepreneurs Lab',
    tagline: 'Execution is Everything.',
    heroHeadline: 'Ideas are easy.',
    heroHeadlineSpan: 'Execution is everything.',
    heroSubheadline:
      'Helping entrepreneurs transform ideas into businesses through execution, innovation, and practical knowledge.',
    bioSummary:
      'Fidel Castrol is a globally active entrepreneur, investor, and business strategist. As the creator of The Entrepreneurial Tale and founder of Global Mogul Entrepreneurs Lab, he leads initiatives empowering next-generation founders across capital markets, technology, and luxury real estate.',
    location:'Nairobi • Karen • Global',
    email: 'contact@globalmogulentrepreneurslab.com',
    whatsappPhone: '0714193384',
    socials: [
      { platform: 'Twitter / X', url: 'https://x.com/Fidel_Castrol', handle: 'F.i.d.e.l_C.a.s.t.r.o.l' },
      { platform: 'Instagram', url: 'https://www.instagram.com/f.i.d.e.l_c.a.s.t.r.o.l', handle: 'f.i.d.e.l_c.a.s.t.r.o.l' },
      { platform: 'YouTube', url: 'https://youtube.com/@fidelcastroventures', handle: '@fidelcastroventures' },
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