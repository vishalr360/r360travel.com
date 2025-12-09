// content/r360travel.ts

export const navLinks = [
    { href: '#product', label: 'Product' },
    { href: '#why', label: 'Why R360Travel' },
    { href: '#partners', label: 'Partners' },
    { href: '#technology', label: 'Technology' },
    { href: '#who-we-serve', label: 'Who We Serve' },
    { href: '#contact', label: 'Contact' },
  ];
  
  export const meta = {
    title: 'R360Travel – Global Hotel Deals, Powered by Reward360',
    description:
      'R360Travel aggregates global hotel inventory from multiple suppliers with real-time price optimization and 24×7 support for banks, enterprises and travel partners.',
    url: 'https://www.r360travel.com',
    ogImage: 'https://www.r360travel.com/og-image.png', // TODO: replace with actual
  };
  
  export const hero = {
    kicker: 'Global hotel inventory • Single integration',
    title: 'Discover the world’s best hotel deals — powered by global inventory & 24×7 support.',
    highlight: 'hotel deals',
    subtitle:
      'R360Travel aggregates live inventory from leading suppliers like Expedia, Agoda, Hotelbeds, TBO, Ratehawk, Smyrooms, Yelago and more — giving your customers unbeatable rooms, rates and seamless booking journeys across geographies.',
    primaryCta: { href: '#product', label: 'Explore hotels' },
    secondaryCta: { href: '#contact', label: 'Partner with us' },
    tertiaryCta: { href: '#contact', label: 'Contact sales' },
    meta: [
      { label: 'Inventory', value: 'Multi-supplier, global' },
      { label: 'Engine', value: 'Real-time rate comparison' },
      { label: 'Support', value: '24×7 dedicated team' },
    ],
    suppliersHeadline: 'Global inventory, one integration.',
    suppliers:
      'Expedia • Agoda • Hotelbeds • TBO • Ratehawk • Smyrooms • Yelago • more coming soon.',
  };
  
  export const whySection = {
    id: 'why',
    kicker: 'Why R360Travel',
    title: 'Global inventory. Smart pricing. Human support.',
    description:
      'R360Travel combines a deep multi-supplier hotel network, real-time price optimization and 24×7 support to deliver reliable, high-conversion hotel experiences for your customers.',
    pills: [
      'Global multi-supplier inventory',
      'Real-time price optimization',
      '24×7 dedicated support',
      'Seamless technology integration',
      'Trusted by businesses & travellers',
    ],
    cards: [
      {
        title: 'Global multi-supplier inventory',
        body: 'Access curated hotel options from leading global travel suppliers — ensuring unbeatable availability, better room types and highly competitive rates for every itinerary.',
      },
      {
        title: 'Real-time price optimization',
        body: 'Our engine compares rates across 8+ wholesalers and aggregators to surface the best available deal at the time of search — automatically.',
      },
      {
        title: '24×7 dedicated support',
        body: 'A trained support team is on-call around the clock to handle bookings, cancellations, modifications, refunds and special requests, so your customers travel worry-free.',
      },
      {
        title: 'Seamless technology integration',
        body: 'API-driven architecture delivers fast search results, verified room content, accurate availability and error-free booking journeys across web, app or partner platforms.',
      },
      {
        title: 'Built for B2B & B2B2C',
        body: 'Power bookings for individuals, corporates, banks, enterprise partners and travel agencies with transparent pricing, configurable markups and reliable operations.',
      },
    ],
  };
  
  export const productSection = {
    id: 'product',
    kicker: 'Product',
    title: 'A single hotel platform for your entire travel ecosystem.',
    description:
      'R360Travel is designed for scale. From high-speed supplier APIs to ERP-backed accounting, every layer is built for high-volume, high-availability hotel distribution.',
    techCard: {
      kicker: 'Technology advantage',
      title: 'Engineered for performance and control',
      items: [
        'High-speed supplier APIs for live availability and pricing.',
        'Automated multi-supplier rate comparison.',
        'Dynamic markup and margin controls.',
        'Secure, PCI-compliant payment systems.',
        'Fraud & risk validation for bookings.',
        'ERP-backed backend for accounting & reconciliation.',
        'Cloud-native, scalable infrastructure for high volume.',
      ],
    },
    experienceCard: {
      kicker: 'Experience advantage',
      title: 'Built for banks, enterprises & travel brands',
      paragraphs: [
        'Whether you’re a bank powering a white-labelled travel portal, a large enterprise running a corporate travel desk, or a travel agency serving B2C customers, R360Travel is designed to fit into your existing digital journeys.',
        'Layer R360Travel on top of your loyalty platform or payments ecosystem to unlock differentiated, travel-led experiences without re-building your stack.',
      ],
    },
  };
  
  export const partnerSection = {
    id: 'partners',
    kicker: 'Partner network',
    title: 'Deep integrations with global travel suppliers.',
    description:
      'R360Travel integrates with leading global aggregators and wholesalers, giving your customers unmatched depth of choice for both domestic and international stays.',
    suppliers: [
      'Expedia',
      'Agoda',
      'Hotelbeds',
      'TBO',
      'Ratehawk',
      'Smyrooms',
      'Yelago',
      '…and more coming soon',
    ],
    extraText:
      'This partner network ensures deep coverage across key international hubs as well as domestic destinations, with room types and rate plans tailored for every segment.',
  };
  
  export const technologySection = {
    id: 'technology',
    kicker: 'Architecture',
    title: 'API-first and integration-ready from day one.',
    description:
      'R360Travel plugs into your existing systems with secure, well-documented APIs and operational workflows backed by Reward360’s enterprise-grade stack.',
    cards: [
      {
        title: 'API-driven integration',
        body: 'Plug R360Travel into your website, app, loyalty portal or partner journeys via REST APIs. Get fast search responses, accurate content and robust error handling.',
      },
      {
        title: 'Configurable business rules',
        body: 'Control markups, commissions, eligibility rules and inventory exposure across channels, brands and customer segments.',
      },
      {
        title: 'Operational reliability',
        body: 'ERP-backed accounting, reconciliation and settlement flows ensure your finance and operations teams have complete visibility into every booking.',
      },
    ],
  };
  
  export const whoWeServeSection = {
    id: 'who-we-serve',
    kicker: 'Who we serve',
    title: 'Purpose-built for banks, enterprises and travel partners.',
    description:
      'R360Travel is designed to power hotel experiences for multiple stakeholder groups — while keeping the underlying technology stack simple for your teams.',
    cards: [
      {
        label: 'Banks & enterprise partners',
        title: 'White-labelled hotel booking engines',
        body: 'Launch fully branded hotel booking portals with deep inventory, enterprise SLAs and seamless integration into your existing digital properties.',
      },
      {
        label: 'Travel agencies & OTAs',
        title: 'Access more rooms, better rates',
        body: 'Expand your hotel portfolio with a single integration, while R360Travel’s multi-supplier engine finds the best deal for each search behind the scenes.',
      },
      {
        label: 'Corporates & TMCs',
        title: 'Reliable stays for business travellers',
        body: 'Power corporate travel programs with consistent hotel coverage, controlled markups and 24×7 support for last-minute changes or disruptions.',
      },
    ],
  };
  
  export const contactSection = {
    id: 'contact',
    kicker: 'Contact & partnerships',
    title: 'Looking to integrate or partner with R360Travel?',
    description:
      'Share a few details and our team will get back with a tailored integration or partnership plan for your organisation.',
    email: 'contact@r360travel.com',
    officeText:
      'R360Travel is part of the Reward360 customer engagement ecosystem. Our teams operate across India, the Middle East and Asia to support global partners.',
    offices: 'Bengaluru (HQ), Dubai, Hong Kong and Singapore.',
  };
  
  export const legalSection = {
    termsTitle: 'Terms & conditions',
    terms: [
      'All bookings depend on supplier availability. Prices shown typically include applicable taxes and fees unless explicitly mentioned otherwise. Cancellation and refund rules vary by hotel and supplier; please review the specific fare rules before confirming a booking.',
      'Users are responsible for verifying guest information and travel details prior to finalising a booking. Pricing may change based on supplier updates, currency fluctuations or inventory changes.',
    ],
    privacyTitle: 'Privacy & data protection',
    privacy: [
      'We collect only essential customer information required to fulfil bookings and provide support. Payments are processed securely via PCI-DSS compliant gateways. Customer data is shared only with hotels and suppliers as needed to confirm reservations.',
      'Where applicable, users may request review, correction or deletion of their stored data in line with governing regulations and Reward360 policies.',
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
  