import fidelPortrait from '../assets/images/fidel_portrait_1784735748689.jpg';
import bookCover from '../assets/images/book_cover_1784735759839.jpg';
import editorialHero from '../assets/images/editorial_hero_1784735773312.jpg';
import marketplaceCar from '../assets/images/marketplace_car_1784735787393.jpg';
import entrepreneurMagazineCover from '../assets/images/entrepreneur-magazine-cover.jpg';
import founderInstituteCover from '../assets/images/founder-institute-cover.jpg';

import {
  Article,
  Video,
  BookPrinciple,
  MarketplaceItem,
  QuoteItem,
  TimelineEvent,
} from '../types';

export const assets = {
  fidelPortrait,
  bookCover,
  editorialHero,
  marketplaceCar,
};

export const bookPrinciples: BookPrinciple[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Optimizing Risk',
    description:
      'Risk is not something to eliminate; it is something to price, structure, and master. True entrepreneurs engineer asymmetric upside while strictly capping systemic downside.',
    quote: 'Unmitigated risk is gambling; structured risk is market arbitrage.',
  },
  {
    id: 'p2',
    number: '02',
    title: 'Relentless Innovation',
    description:
      'Innovation without unit-economic velocity is merely academic research. We convert novel insights into scalable distribution and self-sustaining economic value.',
    quote: 'Innovation is measured by customer adoption and durable cash margin.',
  },
  {
    id: 'p3',
    number: '03',
    title: 'Personal Responsibility',
    description:
      'Extreme ownership across capital allocation, culture, and market pivots. The leader holds full accountability for outcomes regardless of macroeconomic noise.',
    quote: 'When execution fails, blame the process, own the result, and iterate immediately.',
  },
  {
    id: 'p4',
    number: '04',
    title: 'Managing Change',
    description:
      'Organized adaptability as a core competitive moat. Building agile capital structures and operational frameworks that thrive during market volatility.',
    quote: 'The companies that win the next decade treat market disruption as an operating asset.',
  },
];

export const articlesData: Article[] = [
  {
    id: 'art-1',
    slug: 'entrepreneur-magazine-hub',
    title: 'Entrepreneur Magazine: Actionable Business Ideas & Startup Frameworks',
    summary:
      'Offers actionable lists of profitable small business ideas, lean startup models, free webinars, and expert white papers.',
    category: 'Practical Business Hubs',
    readTime: 'Resource Hub',
    publishedAt: 'Updated Weekly',
    image: entrepreneurMagazineCover,
    featured: true,
    tags: ['Business Ideas', 'Lean Startup', 'White Papers', 'Webinars'],
    authorNote: 'Curated Resource Hub',
    externalUrl: 'https://www.entrepreneur.com',
    body: `
# Entrepreneur Magazine — Business Ideas & Thought Leadership

Entrepreneur Magazine is an essential resource covering business ideation, growth strategies, leadership development, and psychological resilience.

### Key Resources Offered:
- **Profitable Small Business Ideas:** Actionable lists and market gap analysis for aspiring founders.
- **Lean Startup Models:** Blueprint frameworks for validating unit economics before capital deployment.
- **Free Webinars & White Papers:** In-depth masterclasses by industry leaders and serial entrepreneurs.

Visit [www.entrepreneur.com](https://www.entrepreneur.com) to access full archives and actionable startup guides.
    `,
  },
  {
    id: 'art-2',
    slug: 'founder-institute-insights',
    title: 'Founder Institute Insights: Leadership & Risk Navigation',
    summary:
      'Provides weekly curation focusing on leadership-development over hard business skills, navigating risk drivers, and mastering startup frameworks.',
    category: 'Thought Leadership',
    readTime: 'Weekly Insights',
    publishedAt: 'Curated Curation',
    image: founderInstituteCover,
    featured: false,
    tags: ['Leadership', 'Risk Drivers', 'Startup Frameworks'],
    externalUrl: 'https://fi.co/insights',
    body: `
# Founder Institute Insights

The Founder Institute provides weekly curation designed to elevate founder mindset, psychological resilience, and strategic leadership.

### Strategic Focus Areas:
1. **Leadership Development:** Prioritizing executive presence, emotional intelligence, and decision quality over raw technical skills.
2. **Navigating Risk Drivers:** Systematically identifying and mitigating market, team, and financial risk drivers.
3. **Mastering Startup Frameworks:** Structured playbooks from the world's largest pre-seed accelerator network.

Visit [Founder Institute Insights](https://fi.co/insights) for curated leadership analysis.
    `,
  },
  {
    id: 'art-3',
    slug: 'the-conversation-entrepreneurship',
    title: "The Conversation: Evidence-Backed Analysis & Failing Fast",
    summary:
      'Features evidence-backed analysis by research experts, highlighting lessons like the benefits of "failing fast" and pivoting over blind perseverance.',
    category: 'Academic Journals & Evidence',
    readTime: 'Research Analysis',
    publishedAt: 'Evidence-Based',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Academic Analysis', 'Failing Fast', 'Pivoting', 'Evidence'],
    externalUrl: 'https://theconversation.com/global/topics/entrepreneurship-1422',
    body: `
# The Conversation — Entrepreneurship Section

Evidence-backed analysis written by academic research experts and business scholars.

### Key Learnings:
- **The Power of Failing Fast:** Scientific validation showing that early, inexpensive iteration yields higher long-term enterprise survival.
- **Strategic Pivoting vs. Blind Perseverance:** Knowing when to adapt product-market fit based on empirical data rather than emotional attachment.
- **Psychological Resilience:** Academic studies on founder stress management, mental stamina, and leadership endurance.

Explore research-backed insights on [The Conversation Entrepreneurship Section](https://theconversation.com/global/topics/entrepreneurship-1422).
    `,
  },
];

export const videosData: Video[] = [
  {
    id: 'vid-1',
    title: 'Ideas Are Easy, Execution Is Everything — Fidel Castrol Keynote',
    description:
      'Official keynote speech by Fidel Castrol on execution discipline, asymmetric risk management, and transforming abstract concepts into profitable businesses.',
    duration: '24:18',
    thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Keynotes',
    featured: true,
    keyTakeaways: [
      'The 70% information rule for high-speed decision making',
      'Why unit economics trump growth hacking in high-rate environments',
      'Structuring risk to capture unlimited upside with complete accountability',
    ],
  },
];

export const marketplaceItems: MarketplaceItem[] = [
  {
    id: 'mk-1',
    title: 'Luxury Cars — Private Executive Mobility & Fleet Access',
    category: 'Luxury Cars',
    image: marketplaceCar,
    description:
      'Exclusive private fleet access, high-end luxury vehicle brokerage, electric super-sedans, and armored transport for executive mobility.',
    priceOrValue: 'Exclusive Fleet Brokerage',
    badge: 'Luxury Fleet',
    location: 'London • Dubai • Global',
    features: [
      'Chauffeur & Self-Drive Luxury Super-Sedans & Exotics',
      'Armored Executive Transport & VIP Tarmac Transfer',
      'Bespoke Vehicle Sourcing & Private Automotive Brokerage',
    ],
    contactSubject: 'Inquiry regarding Luxury Vehicle Fleet & Sourcing',
  },
  {
    id: 'mk-2',
    title: 'Real Estate Business Dealers — Prime Luxury Estates',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description:
      'Prime coastal luxury residences, commercial real estate dealers, architectural estates, and high-yield real estate dealmaking.',
    priceOrValue: 'Private Appointment',
    badge: 'Real Estate Dealers',
    location: 'Dubai Riviera • London Mayfair',
    features: [
      'Architectural Luxury Coastal Estates & Penthouses',
      'Commercial Real Estate Acquisition & Deal Structuring',
      'Integrated Security & High-Yield Asset Portfolios',
    ],
    contactSubject: 'Private Viewing Request for Real Estate Offerings',
  },
  {
    id: 'mk-3',
    title: 'Custom Performance Motorcycles & Superbikes',
    category: 'Motorcycles',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
    description:
      'Bespoke hand-crafted electric motorcycles and performance superbike builds featuring titanium chassis and aerospace carbon fiber.',
    priceOrValue: 'Bespoke Order',
    badge: 'Custom Builds',
    location: 'Milan • London',
    features: [
      'Hand-Welded Titanium & Carbon Fiber Chassis',
      'Custom Electric Superbike Engineering',
      'Serialized Engraving & Custom Ergonomics',
    ],
    contactSubject: 'Custom Motorcycle Build Inquiry',
  },
  {
    id: 'mk-4',
    title: 'Tech Services — Software Engineering & AI Solutions',
    category: 'Technology Services',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    description:
      'Bespoke web development, custom software engineering, AI agent deployments, and high-speed tech consultation directly with our team.',
    priceOrValue: 'Direct Retainer / Contact',
    badge: 'Tech Services',
    location: 'Global Remote / On-Site',
    features: [
      'Full-Stack Web Development & Mobile Applications',
      'Custom AI Integration & Enterprise Automation',
      'Direct WhatsApp Consultation: 0142614743',
    ],
    contactSubject: 'Tech Services & Consultation Inquiry',
    externalUrl: 'https://wa.me/0142614743?text=Hello%20Fidel%20Castrol%2C%20I%20am%20interested%20in%20your%20Tech%20Services.',
  },

  {
    id: 'mk-6',
    title: 'Referral Programs — Earn Money Online via Visionary Affiliate',
    category: 'Referral Programs',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    description:
      'Join the ChatWave Agencies referral network to start earning money online. Register using our official affiliate link and generate recurring referral revenue.',
    priceOrValue: 'Earn Money Online',
    badge: 'Referral Network',
    location: 'Online / Global',
    features: [
      'Direct Registration Link: chatwaveagencies.com',
      'Earn Money via Multi-Tier Referral Commissions',
      'Instant Account Setup & Real-Time Analytics',
    ],
    contactSubject: 'Referral Program Inquiry',
    externalUrl: 'https://chatwaveagencies.com/user/register.php?ref=VisionaryAffiliate',
  },
];

export const quotesData: QuoteItem[] = [
  {
    id: 'q-1',
    text: 'Ideas are easy. Execution is all that matters.',
    author: 'Casey Neistat',
    title: 'Filmmaker and tech entrepreneur',
    highlight: true,
  },
  {
    id: 'q-2',
    text: "When you innovate, you've got to be prepared for people telling you that you are nuts.",
    author: 'Larry Ellison',
    title: 'Founder of Oracle',
    highlight: true,
  },
  {
    id: 'q-3',
    text: "Don't wait for perfection. Life isn't perfect. Do the best you can and ship.",
    author: 'Guy Kawasaki',
    title: 'Venture capitalist and entrepreneur',
    highlight: true,
  },
  {
    id: 'q-4',
    text: 'Success is walking from failure to failure with no loss of enthusiasm.',
    author: 'Winston Churchill',
    title: 'Statesman and author',
    highlight: true,
  },
  {
    id: 'q-5',
    text: "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.",
    author: 'Jeff Bezos',
    title: 'Founder of Amazon',
    highlight: true,
  },
  {
    id: 'q-6',
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: 'Thomas Edison',
    title: 'Inventor and entrepreneur',
    highlight: true,
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2018',
    title: 'First Venture Foundation',
    subtitle: 'Laying the Groundwork for High-Impact Execution',
    description:
      'Launched first technology and distribution initiative, proving early execution principles in highly competitive market conditions.',
    highlightStat: 'Bootstrapped Profitability',
  },
  {
    year: '2021',
    title: 'Establishment of Global Mogul Entrepreneurs Lab',
    subtitle: 'Consolidating Ventures into an Integrated Holding Platform',
    description:
      'Structured Global Mogul Entrepreneurs Lab to house technology services, real estate assets, and media ventures under unified leadership.',
    highlightStat: 'Multi-Market Expansion',
  },
  {
    year: '2024',
    title: 'Authoring The Entrepreneurial Tale',
    subtitle: 'Codifying Practical Business Knowledge',
    description:
      'Published the definitive guide detailing risk optimization, change management, and personal accountability for modern founders.',
    highlightStat: 'International Bestseller',
  },
  {
    year: '2026',
    title: 'Enclave Platform & Global Keynote Series',
    subtitle: 'Building a World-Class Network of Executing Builders',
    description:
      'Expanding global advisory, luxury marketplace, and venture studio capabilities across London, Dubai, and emerging economic hubs.',
    highlightStat: '10,000+ Founders Reached',
  },
];