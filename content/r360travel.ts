// content/r360travel.ts

export const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#product', label: 'How It Works' },
  { href: '#who-we-serve', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const meta = {
  // Primary keyword first, brand last, ≤60 chars
  title: 'Tripsure — Book Hotels & Flights, Earn Points | India',
  // 140-155 chars, unique value prop
  description:
    "Tripsure lets you book hotels and flights while maximising loyalty points across 25+ programmes — InterMiles, Air India One, Marriott Bonvoy and more. India's loyalty-native travel platform.",
  url: 'https://tripsure.com',
  ogImage: 'https://tripsure.com/og-image.png',
  ogImageAlt: 'Tripsure — Book Hotels & Flights, Earn Loyalty Points in India',
  siteName: 'Tripsure',
  twitterSite: '@tripsure_',
  keywords:
    'book hotels earn points India, loyalty travel platform India, InterMiles hotel booking, Air India One hotel points, Marriott Bonvoy India, credit card travel rewards, HDFC Infinia travel, ICICI iShop hotels, WhatsApp hotel booking India, earn miles hotels',
};

export const hero = {
  kicker: "India's Loyalty-Native Travel Platform",
  // H1 — primary keyword, matches schema + page title
  title: 'Book Hotels & Flights. Earn Loyalty Points.',
  highlight: 'Earn Loyalty Points',
  subtitle:
    'Tripsure maximises your credit card and loyalty programme rewards on every hotel and flight booking — InterMiles, Air India One, Marriott Bonvoy and 25+ more programmes. Hotels launching soon.',
  primaryCta: { href: '#contact', label: 'Get Early Access' },
  secondaryCta: { href: '#product', label: 'How It Works' },
  stats: [
    { label: 'Loyalty programmes', value: '25+', sub: 'InterMiles, Air India One, Bonvoy & more' },
    { label: 'Earn rate detection', value: 'Auto', sub: 'BIN-level card tier detection' },
    { label: 'Hotel coverage', value: 'Global', sub: 'Domestic & international properties' },
    { label: 'Support', value: '24×7', sub: 'Bookings, changes, refunds & more' },
  ],
  suppliersHeadline: 'Powered by 10+ global hotel suppliers.',
  suppliers:
    'Expedia • Agoda • Hotelbeds • TBO • Ratehawk • Smyrooms • Yelago • Dida – live rates, every search.',
};

export const logoStrip = [
  'InterMiles',
  'Air India One',
  'Marriott Bonvoy',
  'Emirates Skywards',
  'Hilton Honors',
  'Accor Live',
  'World of Hyatt',
  'Taj InnerCircle',
];

export const whySection = {
  id: 'why',
  title: 'Every Booking Earns More. Here Is Why.',
  description:
    'Tripsure is built specifically for loyalty — BIN detection, earn optimisation, and 25+ programme integrations mean you never leave points on the table.',
  cards: [
    {
      title: 'Automatic card tier detection',
      body: 'Tripsure reads your card BIN and applies the correct earn multiplier — HDFC Infinia earns 3×, Regalia 2×. No manual configuration. Points displayed before you book.',
    },
    {
      title: 'Choose your loyalty programme',
      body: 'Select which programme earns on each booking — InterMiles, Air India One, Marriott Bonvoy, or any of 25+ supported programmes. Switch any time.',
    },
    {
      title: 'Access Perks on eligible hotels',
      body: 'Hotel-funded room upgrades, late checkout, and daily breakfast through Access Perks — available on thousands of properties with no extra cost.',
    },
  ],
};

export const productSection = {
  id: 'product',
  title: 'How Tripsure Works',
  description:
    'Four steps from search to earning loyalty points on every hotel and flight booking.',
  techCard: {
    kicker: 'Step by Step',
    title: 'Search, detect, earn',
    items: [
      'Search hotels or flights. Live pricing from 10+ global suppliers — Expedia, Agoda, Hotelbeds, TBO and more.',
      'Enter your card. Tripsure auto-detects your BIN and shows the earn rate for your exact card tier.',
      'Choose your loyalty programme — InterMiles, Air India One, Marriott Bonvoy or any of 25+ programmes.',
      'Book and earn. Points credit to your chosen programme. Track progress on your goal bar.',
    ],
  },
  experienceCard: {
    kicker: 'Also available on WhatsApp',
    title: 'Full booking flow on WhatsApp',
    paragraphs: [
      'Search hotels, select your room, pay, and confirm — all on WhatsApp. No app download required.',
      'Tripsure on WhatsApp is designed for India: instant confirmations, booking management, and support in your chat.',
    ],
  },
};

export const partnerSection = {
  id: 'partners',
  title: '25+ Loyalty Programmes. Every Major Bank Supported.',
  description:
    'From InterMiles to Marriott Bonvoy, Tripsure connects your bookings to every major Indian and international loyalty programme.',
  badge: 'Supported programmes',
  suppliers: ['InterMiles', 'Air India One', 'Marriott Bonvoy', 'Emirates Skywards', 'Hilton Honors', 'Accor Live', 'Taj InnerCircle'],
  extraText:
    'Available on ICICI Bank iShop, Kotak Unbox, HDFC SmartBuy, and tripsure.com. More bank platforms launching in 2025.',
};

export const technologySection = {
  id: 'technology',
  title: 'Built for loyalty. Every detail counts.',
  description:
    "Tripsure combines multi-supplier hotel aggregation with Polaris Commerce's loyalty intelligence — built on Reward360's platform powering millions of reward transactions.",
  cards: [
    {
      title: 'BIN-level earn intelligence',
      body: 'The first 6-8 digits of your card identify your exact tier. Tripsure maps this to earn rates across all supported programmes — automatically, on every result.',
      gradient: 'from-[#FF5B24] to-[#FF8C5A]',
    },
    {
      title: 'Multi-supplier rate aggregation',
      body: 'Live pricing from Expedia, Agoda, Hotelbeds, TBO, Ratehawk and more — best available rate displayed with loyalty earn on every search.',
      gradient: 'from-[#0050FF] to-[#6B8FFF]',
    },
    {
      title: 'Access Perks & hotel benefits',
      body: 'Hotel-funded upgrades, late checkout, and breakfast on thousands of properties. Available to eligible cardholders automatically — no negotiating required.',
      gradient: 'from-[#0050FF] to-[#6B8FFF]',
    },
  ],
};

export const whoWeServeSection = {
  id: 'who-we-serve',
  title: 'For every Indian traveller who earns points.',
  description:
    'Whether you are an individual maximising credit card rewards or a business managing travel, Tripsure makes every booking count.',
  cards: [
    {
      label: 'Credit card holders',
      title: 'Maximise your card rewards on every trip',
      body: 'HDFC Infinia, Regalia, ICICI Sapphiro, Kotak Royale — Tripsure detects your card automatically and applies the highest possible earn rate. Hotels launching soon, flights to follow.',
      gradient: '#FF5B24 0%, #FF8C5A 100%',
      accentColor: '#FF5B24',
    },
    {
      label: 'Loyalty programme members',
      title: 'Earn InterMiles, Air India One miles and Bonvoy points',
      body: 'Tripsure is the only platform in India designed to maximise loyalty earn across 25+ programmes simultaneously. Choose your programme per booking — or split across multiple.',
      gradient: '#0050FF 0%, #6B8FFF 100%',
      accentColor: '#0050FF',
    },
  ],
};

export const faqSection = {
  id: 'faq',
  title: 'Frequently Asked Questions',
  description: 'Everything you need to know about Tripsure and earning loyalty points.',
  items: [
    {
      question: 'Which loyalty programmes does Tripsure support?',
      answer:
        'Tripsure currently supports InterMiles, Air India One (Maharaja Club), and Marriott Bonvoy. 25+ programmes are rolling out through 2025, including Emirates Skywards, Singapore KrisFlyer, Accor Live Limitless, Hilton Honors, World of Hyatt, and Taj InnerCircle.',
    },
    {
      question: 'How does Tripsure know my credit card earn rate?',
      answer:
        'Tripsure uses BIN-level card detection — the first 6-8 digits of your card identify your issuer and tier. HDFC Infinia earns 3×, Regalia 2×, Millennia 1×. This happens automatically; you never need to select your card tier manually.',
    },
    {
      question: 'Is Tripsure available on WhatsApp?',
      answer:
        'Yes. Tripsure offers a full booking flow on WhatsApp — search hotels, select your room, pay, confirm, and manage bookings without downloading an app.',
    },
    {
      question: 'Where can I use Tripsure?',
      answer:
        'Tripsure is available at tripsure.com and on ICICI Bank iShop, Kotak Unbox, and HDFC SmartBuy. More bank platforms are coming in 2025.',
    },
    {
      question: 'When will hotel and flight bookings be live?',
      answer:
        'Hotel bookings are launching soon on tripsure.com. Flights will follow. Register your email to be notified the moment bookings go live.',
    },
    {
      question: 'What is Tripsure+?',
      answer:
        'Tripsure+ is a premium subscription at ₹3,999/year. Members unlock exclusive earn multipliers, Access Perks (room upgrades, late checkout, daily breakfast) on thousands of hotels, and advanced loyalty goal tracking.',
    },
    {
      question: 'Who runs Tripsure?',
      answer:
        'Tripsure is operated by Polaris Commerce Pvt. Ltd. (CIN: U52291KA2026PTC217236), a subsidiary of Reward360 Global Services Pvt. Ltd. — the loyalty technology company behind reward programmes at major Indian banks.',
    },
  ],
};

export const contactSection = {
  id: 'contact',
  title: 'Get early access to Tripsure.',
  description:
    'Hotels booking is launching soon. Register your interest and be first to earn loyalty points on every booking.',
  email: 'contact@tripsure.com',
  phone: '+91 87925 48484',
  phoneAlt: '+91 89518 42424',
  officeText:
    'Tripsure is operated by Polaris Commerce Pvt. Ltd., India. Backed by Reward360 Global Services Pvt. Ltd.',
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
  name: 'Polaris Commerce Pvt. Ltd.',
  cin: 'U52291KA2026PTC217236',
  cinLabel: 'CIN',
};

export const footer = {
  tagline: 'Book travel. Earn points. Every time.',
  brandLine: 'Tripsure is a brand of Polaris Commerce Pvt. Ltd.',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'How It Works', href: '#product' },
        { label: 'Hotels', href: '/hotels' },
        { label: 'Flights', href: '/flights' },
        { label: 'Tripsure+', href: '/tripsure-plus' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '#who-we-serve' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'Sitemap', href: '/sitemap.xml' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
      ],
    },
  ],
  copyright: '© 2025 Polaris Commerce Pvt. Ltd. All rights reserved.',
  linkedin: 'https://www.linkedin.com/in/tripsure-social-97a800413',
  twitter: 'https://x.com/tripsure_',
  instagram: 'https://www.instagram.com/tripsureofficial',
};
