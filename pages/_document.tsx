import { Html, Head, Main, NextScript } from "next/document";

/* ─── JSON-LD Schemas (loaded on every page) ────────────────── */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://tripsure.com/#organization",
  name: "Tripsure",
  legalName: "Polaris Commerce Pvt. Ltd.",
  url: "https://tripsure.com",
  logo: {
    "@type": "ImageObject",
    url: "https://tripsure.com/tripsure_logo.svg",
    width: 410,
    height: 97,
  },
  image: "https://tripsure.com/og-image.png",
  description:
    "India's loyalty-native travel platform. Book hotels and flights and earn points across 25+ loyalty programmes — InterMiles, Air India One, Marriott Bonvoy and more.",
  foundingDate: "2025",
  foundingLocation: { "@type": "Place", name: "Bengaluru, Karnataka, India" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-87925-48484",
    contactType: "customer support",
    email: "contact@tripsure.com",
    availableLanguage: ["English", "Hindi"],
    areaServed: "IN",
  },
  sameAs: [
    "https://twitter.com/tripsure_",
    "https://instagram.com/tripsureofficial",
    "https://linkedin.com/in/tripsure-social-97a800413",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Reward360 Global Services Pvt. Ltd.",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "CIN",
    value: "U52291KA2026PTC217236",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://tripsure.com/#website",
  name: "Tripsure",
  url: "https://tripsure.com",
  description: "India's loyalty-native travel platform — book hotels & flights, earn points",
  publisher: { "@id": "https://tripsure.com/#organization" },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://tripsure.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://tripsure.com/#travel-agency",
  name: "Tripsure",
  url: "https://tripsure.com",
  description:
    "Book hotels and flights, earn loyalty points across 25+ programmes. India's loyalty-native OTA.",
  areaServed: { "@type": "Country", name: "India" },
  priceRange: "₹",
  paymentAccepted: "Credit Card, Debit Card, Net Banking, UPI",
  currenciesAccepted: "INR",
  openingHours: "Mo-Su 00:00-24:00",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hotels and Flights",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "LodgingBusiness",
          name: "Hotel Bookings — Earn Loyalty Points",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Flight",
          name: "Flight Bookings — Earn Miles",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which loyalty programmes does Tripsure support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tripsure currently supports InterMiles, Air India One (Maharaja Club), and Marriott Bonvoy, with 25+ programmes launching across 2025 including Emirates Skywards, Singapore KrisFlyer, Accor Live Limitless, Hilton Honors, World of Hyatt, Taj InnerCircle, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How does Tripsure detect my credit card tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tripsure uses BIN-level card detection — when you enter your card details, the platform automatically identifies your card tier (e.g. HDFC Infinia, Regalia, Millennia) and applies the correct earn multiplier to every hotel and flight result.",
      },
    },
    {
      "@type": "Question",
      name: "Is Tripsure available on WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tripsure offers a full booking flow on WhatsApp — search, select, pay, confirm, and manage bookings — with no app download required.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Tripsure available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tripsure is currently available on ICICI Bank iShop, Kotak Unbox, and HDFC SmartBuy bank platforms, and as a standalone website at tripsure.com.",
      },
    },
    {
      "@type": "Question",
      name: "What is Tripsure+?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tripsure+ is a premium subscription at ₹3,999/year that unlocks exclusive earn rates, hotel Access Perks (room upgrades, late checkout, daily breakfast), and advanced loyalty intelligence features.",
      },
    },
    {
      "@type": "Question",
      name: "Who operates Tripsure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tripsure is operated by Polaris Commerce Pvt. Ltd. (CIN: U52291KA2026PTC217236), a subsidiary of Reward360 Global Services Pvt. Ltd., headquartered in Bengaluru, India.",
      },
    },
    {
      "@type": "Question",
      name: "Is Tripsure a travel insurance company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Tripsure (tripsure.com) is a hotel and flight booking platform operated by Polaris Commerce Pvt. Ltd., India. It is completely unrelated to any travel insurance product or company.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to earn loyalty points on hotel and flight bookings with Tripsure",
  description: "4-step process to book travel and maximise loyalty point earnings on Tripsure",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Search hotels or flights",
      text: "Enter your destination, dates, and number of guests on Tripsure. Browse results with live pricing from 10+ global suppliers.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Card detected automatically",
      text: "Enter your payment card. Tripsure detects your card BIN and identifies your tier (e.g. HDFC Infinia 3×, Regalia 2×). Earn rates update automatically on all results.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Choose your loyalty programme",
      text: "Select which programme earns on this booking — InterMiles, Air India One, Marriott Bonvoy, or any of 25+ supported programmes.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Book and earn",
      text: "Complete payment. Points credit to your chosen loyalty programme. Track your goal progress on your Tripsure dashboard.",
    },
  ],
};

/* ACTIVATE ON HOTEL LAUNCH:
const hotelProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Tripsure Hotel Bookings",
  description": "Book hotels across India and globally. Earn InterMiles, Air India One miles, or Marriott Bonvoy points on every booking.",
  brand: { "@type": "Brand", name: "Tripsure" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Tripsure" }
  }
};
*/

const fullSchema = [
  organizationSchema,
  webSiteSchema,
  travelAgencySchema,
  faqSchema,
  howToSchema,
];

export default function Document() {
  return (
    <Html lang="en-IN">
      <Head>
        {/* ── Charset + Compat ─────────────────────────────────── */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="color-scheme" content="light" />

        {/* ── Fonts ───────────────────────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* ── DNS Prefetch ─────────────────────────────────────── */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://analytics.google.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* ── Favicons ─────────────────────────────────────────── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/tripsure-icon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/tripsure-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/tripsure-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/tripsure-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ── Theme ────────────────────────────────────────────── */}
        <meta name="theme-color" content="#0050FF" />
        <meta name="msapplication-TileColor" content="#0050FF" />
        <meta name="msapplication-TileImage" content="/tripsure-icon.png" />

        {/* ── Global robots ────────────────────────────────────── */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />

        {/* ── Verification placeholders ────────────────────────── */}
        {/* <meta name="google-site-verification" content="INSERT_GSC_TOKEN" /> */}
        {/* <meta name="msvalidate.01" content="INSERT_BING_TOKEN" /> */}

        {/* GA4 is loaded via next/script in _app.tsx (afterInteractive strategy) */}

        {/* ── JSON-LD: Organisation + WebSite + TravelAgency + FAQ + HowTo ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema) }}
        />
      </Head>
      <body className="antialiased">
        {/* GTM noscript — insert actual GTM-XXXXXXX when ready */}
        {/*
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        */}

        {/* Skip-to-content — first focusable element for keyboard users */}
        <a
          href="#main-content"
          className="fixed -top-full left-4 z-[9999] bg-[#0050FF] text-white px-4 py-3 rounded focus:top-4 transition-all text-sm font-medium min-h-[44px] flex items-center"
        >
          Skip to main content
        </a>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
