// content/r360travel.ts
// BRAND: Tripsure — AI-powered hotel technology platform
// STRICTLY NO: loyalty/points/miles/earn/BIN/card names/bank names/WhatsApp/Reward360

export const navLinks = [
  { href: '#top',         label: 'Home' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '/technology',   label: 'Technology' },
  { href: '#who-we-serve', label: 'About' },
  { href: '#contact',      label: 'Contact' },
];

export const meta = {
  title: 'Tripsure — Best Hotel Prices. AI-Powered Search.',
  description:
    'Tripsure searches 7 global hotel supply networks simultaneously — RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, and Smyrooms — returning the best available rate and live availability in under 800ms.',
  url: 'https://tripsure.com',
  ogImage: 'https://tripsure.com/og-image.png',
  ogImageAlt: 'Tripsure — Best Hotel Prices. AI-Powered Search.',
  siteName: 'Tripsure',
  twitterSite: '@tripsure_',
  keywords:
    'hotel booking India, best hotel prices, hotel search API, hotel technology platform, RateHawk TBO Expedia Agoda Hotelbeds DIDA Smyrooms, multi-supplier hotel search, net rate hotels',
};

export const hero = {
  kicker: 'AI-Powered Hotel Technology Platform',
  title: 'Best hotel prices. AI search. 10+ networks.',
  highlight: 'AI search',
  subtitle:
    'Tripsure queries RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, and Smyrooms in parallel — returning the lowest available net rate with live inventory in under 800ms. Hotels launching soon.',
  primaryCta:  { href: '#contact',      label: 'Get Early Access' },
  secondaryCta: { href: '#how-it-works', label: 'How It Works' },
  stats: [
    { label: 'Supply networks',   value: '7',       sub: 'RateHawk, TBO, Expedia, Agoda + more' },
    { label: 'Median search time', value: '< 800ms', sub: 'Parallel query across all 7 suppliers' },
    { label: 'Hotel properties',  value: '10M+',    sub: '190+ countries, domestic & international' },
    { label: 'Platform uptime',   value: '99.95%',  sub: '17 years of production infrastructure' },
  ],
  suppliersHeadline: '10 supply networks. One search. Best rate.',
  suppliers:
    'RateHawk • TBO • Expedia • Agoda • Hotelbeds • DIDA • Smyrooms — all queried in parallel on every search.',
};

export const logoStrip = [
  'RateHawk',
  'TBO',
  'Expedia',
  'Agoda',
  'Hotelbeds',
  'DIDA',
  'Smyrooms',
];

export const whySection = {
  id: 'why',
  title: 'Why Tripsure finds better hotel rates',
  description:
    'Querying 10+ supply networks simultaneously means Tripsure always surfaces the lowest available net rate — not cached, not estimated.',
  cards: [
    {
      title: 'Best net rate, always',
      body: 'No single supplier has the best rate on every property. With 10+ networks queried in parallel, Tripsure surfaces the lowest available net rate on every search — without checking multiple platforms.',
    },
    {
      title: 'Live inventory, not cached guesses',
      body: 'Rates and availability are refreshed every 5 minutes across all 10+ supplier connections. What you see is what is actually bookable — no phantom availability, no stale prices at checkout.',
    },
    {
      title: 'Sub-second response time',
      body: 'All 10+ suppliers are queried simultaneously in parallel. Median search response is under 800ms. 95% of all searches complete in under 1.8 seconds — fast enough for any live booking flow.',
    },
  ],
};

export const productSection = {
  id: 'how-it-works',
  title: 'How Tripsure works',
  description:
    'Four steps from search to confirmed booking — with the best available rate from 10+ supply networks.',
  techCard: {
    kicker: 'Step by step',
    title: 'Search, compare, book',
    items: [
      'Enter your destination and dates. Tripsure sends a simultaneous query to all 10+10 supply networks.',
      'All 10+ suppliers respond in parallel. The AI layer compares net rates and returns the best result per property.',
      'Select your hotel. Live availability and pricing from RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, or Smyrooms.',
      'Complete payment. Booking confirmed in under 2 seconds. Voucher issued immediately.',
    ],
  },
  experienceCard: {
    kicker: 'For platforms and enterprises',
    title: 'One API. All 10+ networks.',
    paragraphs: [
      'Integrate once via REST API and access all 10+ supply networks through a single endpoint. Standard integration takes 3–5 business days.',
      'White-label hotel search widget also available — deploy as an iframe or web component. Full 10+-network coverage. Go-live in under 2 weeks.',
    ],
  },
};

export const partnerSection = {
  id: 'partners',
  title: '7 of the world\'s leading hotel supply networks.',
  description:
    'Tripsure aggregates live hotel inventory from RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, and Smyrooms — covering 10 million+ properties across 190+ countries.',
  badge: 'Hotel supply partners',
  suppliers: ['RateHawk', 'TBO', 'Expedia', 'Agoda', 'Hotelbeds', 'DIDA', 'Smyrooms'],
  extraText:
    'All 10+ networks are queried in parallel on every search, ensuring the best available rate and real-time availability at all times.',
};

export const technologySection = {
  id: 'technology',
  title: 'Built for performance at every layer.',
  description:
    'Tripsure is engineered on 17 years of live production infrastructure — with sub-800ms median response, live inventory sync every 5 minutes, and 99.95% uptime.',
  cards: [
    {
      title: 'Multi-supplier rate arbitrage',
      body: 'All 7 supply partners queried simultaneously at search time. The AI layer compares net rates across all sources and returns the single best-value result per property in under 800ms.',
      gradient: '#FF5B24 0%, #FF8C5A 100%',
    },
    {
      title: 'Live inventory sync',
      body: 'Rates and availability refreshed every 5 minutes across all 7 supplier connections. No phantom availability, no stale prices — what you see is confirmed bookable inventory.',
      gradient: '#0050FF 0%, #6B8FFF 100%',
    },
    {
      title: 'Enterprise-grade infrastructure',
      body: 'Built on 17 years of production transaction infrastructure. Net rate pricing model with fortnightly INR settlement via NEFT/RTGS. 99.95% monthly uptime SLA.',
      gradient: '#0050FF 0%, #6B8FFF 100%',
    },
  ],
};

export const whoWeServeSection = {
  id: 'who-we-serve',
  title: 'Built for travel platforms and enterprises.',
  description:
    'Tripsure provides hotel search and booking infrastructure for travel platforms, commerce platforms, and enterprise portals.',
  cards: [
    {
      label: 'Travel & commerce platforms',
      title: 'Best hotel rates via a single API',
      body: 'Access all 7 supply networks — RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, and Smyrooms — through one REST API endpoint. Net rate pricing. Standard integration in 3–5 business days.',
      gradient: '#FF5B24 0%, #FF8C5A 100%',
      accentColor: '#FF5B24',
    },
    {
      label: 'Enterprise portals',
      title: 'White-label hotel search in under 2 weeks',
      body: 'Fully white-labelled hotel search widget deployable as an iframe or web component. All 7 supply networks included. Fortnightly INR settlement. Go-live in under 2 weeks.',
      gradient: '#0050FF 0%, #6B8FFF 100%',
      accentColor: '#0050FF',
    },
  ],
};

export const faqSection = {
  id: 'faq',
  title: 'Frequently Asked Questions',
  description: 'Everything you need to know about Tripsure hotel search.',
  items: [
    {
      question: 'Which hotel supply networks does Tripsure use?',
      answer:
        'Tripsure queries 7 supply networks simultaneously: RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, and Smyrooms. All 7 are queried in parallel on every search to return the lowest available net rate.',
    },
    {
      question: 'How fast is Tripsure hotel search?',
      answer:
        'Median search response is under 800ms. 95% of all searches complete in under 1.8 seconds. 99% of searches complete in under 3.5 seconds. All 7 suppliers are queried simultaneously to achieve this.',
    },
    {
      question: 'How does Tripsure always show the best rate?',
      answer:
        'No single supplier has the best rate on every property. Tripsure queries all 7 supply networks in parallel and uses an AI layer to compare net rates, returning the lowest available rate per property on every search.',
    },
    {
      question: 'How current is the hotel availability on Tripsure?',
      answer:
        'Rates and availability are refreshed every 5 minutes across all 7 supplier connections. What you see on Tripsure is confirmed live inventory — not cached or estimated availability.',
    },
    {
      question: 'How can I integrate Tripsure into my platform?',
      answer:
        'Tripsure offers a REST API with Swagger documentation and a sandbox environment. Standard integration takes 3–5 business days. A white-label hotel search widget (iframe or web component) is also available for go-live in under 2 weeks.',
    },
    {
      question: 'What is the pricing model?',
      answer:
        'Tripsure operates on a net rate pricing model. Settlement is fortnightly in INR via NEFT/RTGS. Contact us at contact@tripsure.com to discuss commercial terms.',
    },
    {
      question: 'Who operates Tripsure?',
      answer:
        'Tripsure is operated by Polaris Commerce Pvt. Ltd. (CIN: U52291KA2026PTC217236), headquartered in Bengaluru, India. Built on 17 years of live production travel technology infrastructure.',
    },
  ],
};

export const contactSection = {
  id: 'contact',
  title: 'Get access to Tripsure.',
  description:
    'Hotel search and booking is launching soon on tripsure.com. Register your interest or enquire about API access.',
  email:    'contact@tripsure.com',
  phone:    '+91 87925 48484',
  phoneAlt: '+91 89518 42424',
  officeText:
    'Tripsure is operated by Polaris Commerce Pvt. Ltd., Bengaluru, India.',
};

export const legalSection = {
  termsTitle: 'Key booking terms',
  terms: [
    'All hotel bookings are subject to supplier availability and the fare rules shown at the time of booking.',
    'Cancellation, change and refund conditions vary by property and supplier. Review before confirming.',
  ],
  privacyTitle: 'Data & privacy',
  privacy: [
    'Personal data is collected only for managing bookings and providing support.',
    'Payments processed via secure PCI-compliant providers.',
  ],
};

export const company = {
  name:     'Polaris Commerce Pvt. Ltd.',
  cin:      'U52291KA2026PTC217236',
  cinLabel: 'CIN',
};

export const footer = {
  tagline:   'Best hotel prices. AI-powered search. Seamless booking.',
  brandLine: 'Tripsure is operated by Polaris Commerce Pvt. Ltd.',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'How It Works',  href: '#how-it-works' },
        { label: 'Technology',    href: '/technology' },
        { label: 'Hotels',        href: '/hotels' },
        { label: 'Flights',       href: '/flights' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us',    href: '#who-we-serve' },
        { label: 'Contact Us',  href: '#contact' },
        { label: 'Sitemap',     href: '/sitemap.xml' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy',    href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
      ],
    },
  ],
  copyright: '© 2025 Polaris Commerce Pvt. Ltd. All rights reserved.',
  linkedin:  'https://www.linkedin.com/in/tripsure-social-97a800413',
  twitter:   'https://x.com/tripsure_',
  instagram: 'https://www.instagram.com/tripsureofficial',
};
