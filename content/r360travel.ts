// content/r360travel.ts

export const navLinks = [
    { href: '#product', label: 'Product' },
    { href: '#why', label: 'Why R360Travel' },
    { href: '#partners', label: 'Partners' },
    { href: '#technology', label: 'Technology' },
    { href: '#who-we-serve', label: 'Who we serve' },
    { href: '#contact', label: 'Contact' },
  ];
  
  export const meta = {
    title: 'R360Travel – Hotel platform for banks & engagement platforms',
    description:
      'R360Travel unifies global hotel inventory, live rate optimisation and 24×7 support so banks and customer engagement platforms can launch branded hotel experiences with one integration.',
    url: 'https://www.r360travel.com',
    ogImage: 'https://www.r360travel.com/og-image.png', // TODO: replace with actual
  };
  
  export const hero = {
    kicker: 'Global hotel inventory • Single integration',
    title: 'A single hotel platform for your customers.',
    highlight: 'hotel platform',
    subtitle:
      'R360Travel connects you to global hotel suppliers, live rate optimisation and 24×7 support – so banks and engagement platforms can launch branded travel experiences in weeks, not months.',
    primaryCta: { href: '#product', label: 'Explore the product' },
    secondaryCta: { href: '#contact', label: 'Talk to our team' },
    tertiaryCta: { href: '#contact', label: 'Partner with R360Travel' },
    meta: [
      { label: 'Inventory', value: 'Multi-supplier, global' },
      { label: 'Engine', value: 'Real-time rate optimisation' },
      { label: 'Support', value: '24×7 operations desk' },
    ],
    suppliersHeadline: 'One integration. Multiple global suppliers.',
    suppliers:
      'Expedia • Agoda • Hotelbeds • TBO • Ratehawk • Smyrooms • Yelago – with more partners being added over time.',
  };
  
  export const whySection = {
    id: 'why',
    kicker: 'Why R360Travel',
    title: 'Built for reliability, margin and customer experience.',
    description:
      'R360Travel is designed for teams that care about both unit economics and traveller experience – across loyalty, cards, customer engagement platforms and consumer channels.',
    pills: [
      'Global, multi-supplier inventory',
      'Optimised rates and margins',
      '24×7 support for travellers',
      'API-first, integration-friendly',
    ],
    cards: [
      {
        title: 'More inventory, fewer gaps',
        body: 'Combine multiple global suppliers into one platform to reduce “sold-out” scenarios and give travellers more choice at key destinations.',
      },
      {
        title: 'Better economics, by default',
        body: 'Our engine compares rates across suppliers in real time, so you can offer competitive prices while protecting margins and rewards burn rates.',
      },
      {
        title: 'Human support when it matters',
        body: 'A dedicated operations desk manages bookings, amendments and exceptions so your customers are never left alone during disruptions.',
      },
    ],
  };
  
  export const productSection = {
    id: 'product',
    kicker: 'Product',
    title: 'Everything you need to run a modern hotel programme.',
    description:
      'R360Travel is the hotel layer behind your loyalty portal, customer engagement platform, card programme or consumer travel brand.',
    techCard: {
      kicker: 'Platform capabilities',
      title: 'One platform, many use cases',
      items: [
        'Live availability and pricing from multiple global hotel suppliers.',
        'Configurable mark-ups, commissions and eligibility rules by channel or partner.',
        'White-label ready UI flows for web and app experiences.',
        'Consolidated reporting for bookings, revenue, redemptions and usage.',
      ],
    },
    experienceCard: {
      kicker: 'Business outcomes',
      title: 'Designed for banks and engagement platforms',
      paragraphs: [
        'Use R360Travel to power differentiated hotel benefits for cardholders, loyalty members and users of your engagement platform – without rebuilding your stack.',
        'Plug it into existing journeys and systems and let our operations and technology teams handle the complexity behind the scenes.',
      ],
    },
  };
  
  export const partnerSection = {
    id: 'partners',
    kicker: 'Supplier network',
    title: 'Deep integrations with trusted global hotel suppliers.',
    description:
      'R360Travel connects to leading aggregators and wholesalers so you can offer a relevant hotel portfolio across key cities and leisure destinations.',
    suppliers: [
      'Expedia',
      'Agoda',
      'Hotelbeds',
      'TBO',
      'Ratehawk',
      'Smyrooms',
      'Yelago',
      '…with more being added',
    ],
    extraText:
      'This network gives you depth in both international hubs and domestic destinations, with room types and rate plans suitable for leisure and business travel.',
  };
  
  export const technologySection = {
    id: 'technology',
    kicker: 'Technology & operations',
    title: 'API-first, operations-backed hotel infrastructure.',
    description:
      'R360Travel combines modern APIs with Reward360’s experience in running large-scale travel and loyalty programmes.',
    cards: [
      {
        title: 'API-first integration',
        body: 'Connect via REST APIs to power searches, bookings and post-booking flows inside your own digital channels or platforms.',
      },
      {
        title: 'Configurable business rules',
        body: 'Control who sees what – and at what price – with flexible rules for channels, partners, products and customer segments.',
      },
      {
        title: 'Enterprise-grade operations',
        body: 'ERP-backed accounting, reconciliation and SLAs that match enterprise expectations around reliability and governance.',
      },
    ],
  };
  
  export const whoWeServeSection = {
    id: 'who-we-serve',
    kicker: 'Who we serve',
    title: 'For banks and customer engagement platforms.',
    description:
      'R360Travel plugs into existing customer engagement, loyalty and rewards ecosystems to make travel a differentiated, high-usage benefit.',
    cards: [
      {
        label: 'Banks & financial institutions',
        title: 'Travel as a differentiated card & loyalty benefit',
        body: 'Use R360Travel to power hotel benefits for your credit and debit card portfolios, loyalty programmes and co-branded partnerships – with global inventory and a dedicated operations desk behind the scenes.',
      },
      {
        label: 'Customer engagement & loyalty platforms',
        title: 'Add a full hotel layer to your engagement stack',
        body: 'If you run or provide a customer engagement or loyalty platform, R360Travel becomes the hotel module within it – handling inventory, pricing and fulfilment while you stay focused on journeys, campaigns and analytics.',
      },
    ],
  };
  
  export const contactSection = {
    id: 'contact',
    kicker: 'Contact',
    title: 'Let’s explore how R360Travel can work for you.',
    description:
      'Share a few details about your use case and our team will suggest the right integration and operating model.',
    email: 'contact@r360travel.com',
    officeText:
      'R360Travel is part of the Reward360 customer engagement ecosystem, supporting partners across India, the Middle East and Asia.',
    offices: 'Offices in Bengaluru (HQ), Dubai, Hong Kong and Singapore.',
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
  
  export const footer = {
    copyright: '© 2025 R360Travel • A Reward360 Product • All rights reserved.',
    links: [
      { label: 'Back to top', href: '#top' },
      { label: 'Contact', href: '#contact' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  };
  