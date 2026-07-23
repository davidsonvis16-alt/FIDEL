export type NavSection =
  | 'home'
  | 'about'
  | 'tale'
  | 'articles'
  | 'videos'
  | 'marketplace'
  | 'contact';

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string;
  category:
    | 'Business Ideas'
    | 'Leadership'
    | 'Mindset'
    | 'Innovation'
    | 'Risk Management'
    | 'Growth'
    | 'Startup Guides';
  readTime: string;
  publishedAt: string;
  image: string;
  featured?: boolean;
  tags: string[];
  authorNote?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  keyTakeaways: string[];
  featured?: boolean;
}

export interface BookPrinciple {
  id: string;
  number: string;
  title: string;
  description: string;
  quote: string;
}

export interface MarketplaceItem {
  id: string;
  title: string;
  category:
    | 'Luxury Cars'
    | 'Real Estate'
    | 'Motorcycles'
    | 'Technology Services'
    | 'Business Dealers'
    | 'Entrepreneur Books'
    | 'Referral Programs';
  image: string;
  description: string;
  priceOrValue: string;
  badge?: string;
  location?: string;
  features: string[];
  contactSubject: string;
  externalUrl?: string;
}

export interface QuoteItem {
  id: string;
  text: string;
  author: string;
  title: string;
  highlight?: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlightStat?: string;
}
