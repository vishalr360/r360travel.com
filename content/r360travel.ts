// content/r360travel.ts

export const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#product', label: 'How It Works' },
  { href: '#who-we-serve', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const meta = {
  title: 'Tripsure — Hotel Platform for Banks & Loyalty Programmes',
  description:
    'Tripsure is India\'s hotel booking platform for banks and loyalty programmes. Connect to 10+ global suppliers — Expedia, Agoda, Hotelbeds, TBO — with one API. White-label ready, 24×7 ops support.',
  url: 'https://www.tripsure.com',
  ogImage: 'https://www.tripsure.com/og-image.png',
  ogImageAlt: 'Tripsure — Hotel Platform for Banks & Loyalty Programmes',
  siteName: 'Tripsure',
  twitterSite: '@tripsure_',
  keywords: 'hotel booking platform, bank travel benefits, loyalty programme hotels, white label hotel booking, hotel aggregator India, travel technology platform',
};

export const hero = {
  kicker: 'Hotel and Flights • Single integration',
  title: 'A single hotel platform for your customers.',
  highlight: 'hotel platform',
  subtitle:
    'Tripsure connects you to global hotel suppliers, live rate optimisation and 24×7 support – so banks and engagement platforms can launch branded travel experiences in weeks, not months.',
  primaryCta: { href: '#contact', label: 'Get Early Access' },
  secondaryCta: { href: '#contact', label: 'Partner with Tripsure' },
  stats: [
    { label: 'Suppliers scanned', value: '10+', sub: 'Expedia, Agoda, Hotelbeds, TBO & more' },
    { label: 'Price optimization', value: 'Real-time', sub: 'Best available deal, every search' },
    { label: 'Coverage', value: 'Global', sub: 'Domestic & international properties' },
    { label: 'Support', value: '24×7', sub: 'Bookings, changes, refunds & more' },
  ],
  suppliersHeadline: 'One integration. Multiple global suppliers.',
  suppliers:
    'Expedia • Agoda • Hotelbeds • TBO • Ratehawk • Smyrooms • Yelago – with more partners being added over time.',
};

export const logoStrip = [
  'Expedia',
  'Dida',
  'Ratehawk',
  'Smyrooms',
  'Agoda',
  'Hotelbeds',
  'TBO',
];

export const whySection = {
  id: 'why',
  title: 'Built for Retention, Reliability and Customer Experience',
  description:
    'Tripsure is designed for teams that care about both unit economics and traveller experience – across loyalty, cards, customer engagement platforms and consumer channels.',
  cards: [
    {
      title: 'More Inventory, Global coverage',
      body: 'Combine multiple global suppliers into one platform to reduce "sold-out" scenarios and give travellers more choice at key destinations.',
    },
    {
      title: 'Human support when it matters',
      body: 'A dedicated operations desk manages bookings, amendments and exceptions so your customers are never left alone during disruptions.',
    },
    {
      title: 'Better economics, by default',
      body: 'Our engine compares rates across suppliers in real time, so you can offer competitive prices while protecting margins and rewards burn rates.',
    },
  ],
};

export const productSection = {
  id: 'product',
  title: 'Everything you need to run a modern travel loyalty',
  description:
    'Tripsure is the hotel layer behind your loyalty portal, customer engagement platform, card programme or consumer travel brand.',
  techCard: {
    kicker: 'Platform Capabilities',
    title: 'One platform, many use cases',
    items: [
      'Live availability and pricing from multiple global hotel suppliers.',
      'Configurable mark-ups, commissions and eligibility rules by channel or partner.',
      'White-label ready UI flows for web and app experiences.',
      'Consolidated reporting for bookings, revenue, redemptions and usage.',
    ],
  },
  experienceCard: {
    kicker: 'Business Outcomes',
    title: 'Designed for banks and engagement platforms',
    paragraphs: [
      'Use Tripsure to power differentiated hotel benefits for cardholders, loyalty members and users of your engagement platform – without rebuilding your stack.',
      'Plug it into existing journeys and systems and let our operations and technology teams handle the complexity behind the scenes.',
    ],
  },
};

export const partnerSection = {
  id: 'partners',
  title: 'Deep integrations with trusted global hotel suppliers.',
  description:
    'Tripsure connects to leading aggregators and wholesalers so you can offer a relevant hotel portfolio across key cities and leisure destinations.',
  badge: 'Connected suppliers',
  suppliers: ['Expedia', 'Agoda', 'Hotelbeds', 'TBO', 'Ratehawk', 'Smyrooms', 'Yelago'],
  extraText:
    'This network gives you depth in both international hubs and domestic destinations, with room types and rate plans suitable for leisure and business travel.',
};

export const technologySection = {
  id: 'technology',
  title: 'API-first, operations-backed hotel infrastructure.',
  description:
    "Tripsure combines modern APIs with Polaris Commerce's experience in running large-scale travel and loyalty programmes.",
  cards: [
    {
      title: 'API-first integration',
      body: 'Connect via REST APIs to power searches, bookings and post-booking flows inside your own digital channels or platforms.',
      gradient: 'from-[#ed353f] to-[#eda635]',
    },
    {
      title: 'Configurable business rules',
      body: 'Control who sees what – and at what price – with flexible rules for channels, partners, products and customer segments.',
      gradient: 'from-[#eda635] to-[#ed353f]',
    },
    {
      title: 'Enterprise-grade operations',
      body: 'ERP-backed accounting, reconciliation and SLAs that match enterprise expectations around reliability and governance.',
      gradient: 'from-[#4299fe] to-[#a855f7]',
    },
  ],
};

export const whoWeServeSection = {
  id: 'who-we-serve',
  title: 'For banks and customer engagement platforms.',
  description:
    'Tripsure plugs into existing customer engagement, loyalty and rewards ecosystems to make travel a differentiated, high-usage benefit.',
  cards: [
    {
      label: 'Banks & Financial Institutions',
      title: 'Travel as a differentiated card & loyalty benefit',
      body: 'Use Tripsure to power hotel benefits for your credit and debit card portfolios, loyalty programmes and co-branded partnerships – with global inventory and a dedicated operations desk behind the scenes.',
      gradient: '#FF5B24 0%, #FF8C5A 100%',
      accentColor: '#FF5B24',
    },
    {
      label: 'Customer Engagement & Loyalty Platforms',
      title: 'Add a full hotel layer to your engagement stack',
      body: 'If you run or provide a customer engagement or loyalty platform, Tripsure becomes the hotel module within it – handling inventory, pricing and fulfilment while you stay focused on journeys, campaigns and analytics.',
      gradient: '#0050FF 0%, #6B8FFF 100%',
      accentColor: '#0050FF',
    },
  ],
};

export const contactSection = {
  id: 'contact',
  title: "Let's explore how Tripsure can work for you.",
  description:
    'Share a few details about your use case and our team will suggest the right integration and operating model.',
  email: 'contact@tripsure.com',
  phone: '+91 87925 48484',
  phoneAlt: '+91 89518 42424',
  officeText:
    'Tripsure is a brand of Polaris Commerce Pvt. Ltd., supporting partners across India, the Middle East and Asia.',
};

export const legalSection = {
  termsTitle: 'Key booking terms (high level)',
  terms: [
    'All hotel bookings are subject to supplier availability and the specific fare rules shown at the time of booking.',
    'Cancellation, change and refund conditions vary by property and supplier. Users should review these before confirming a booking.',
  ],
  privacyTitle: 'Data & privacy (summary)',
  privacy: [
    'Customer details are collected only for managing bookings and providing support, and may be shared with suppliers and hotels solely for this purpose.',
    'Payments are processed via secure, PCI-compliant providers. Full terms and privacy details are available in our detailed policy documents.',
  ],
};

export const company = {
  name: 'Polaris Commerce Group Private Limited',
  cin: 'U52291KA2026PTC217236',
  cinLabel: 'CIN',
};

export const footer = {
  tagline:
    'Tripsure is a brand of Polaris Commerce Pvt. Ltd.',
  brandLine: 'Tripsure is a brand of Polaris Commerce Pvt. Ltd.',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'How It Works', href: '#product' },
        { label: 'Technology', href: '#technology' },
        { label: 'Who We Serve', href: '#who-we-serve' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '#top' },
        { label: 'Contact Us', href: '#contact' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Contact Us', href: '#contact' },
      ],
    },
  ],
  copyright: '© 2025 Polaris Commerce Pvt. Ltd. All rights reserved.',
  linkedin: 'https://www.linkedin.com/in/tripsure-social-97a800413',
  twitter: 'https://x.com/tripsure_',
  instagram: 'https://www.instagram.com/tripsureofficial',
};
