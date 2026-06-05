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
    "AI-powered hotel search platform querying 7 global supply networks in parallel — RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, and Smyrooms. Sub-800ms response, 10M+ properties.",
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
  description: "AI-powered hotel technology platform — best rates from 7 supply networks",
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
    "AI-powered hotel search platform. Best available net rate from 7 global supply networks — RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, Smyrooms.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Global" },
  ],
  priceRange: "₹",
  paymentAccepted: "Credit Card, Debit Card, Net Banking, UPI",
  currenciesAccepted: "INR",
  openingHours: "Mo-Su 00:00-24:00",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hotel Search and Booking",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "LodgingBusiness",
          name: "Hotel Bookings — Best Available Net Rate",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "REST API — Single endpoint for all 7 supply networks",
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
      name: "Which hotel supply networks does Tripsure use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tripsure queries 7 supply networks simultaneously: RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, and Smyrooms. All 7 are queried in parallel on every search to return the lowest available net rate.",
      },
    },
    {
      "@type": "Question",
      name: "How fast is Tripsure hotel search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Median search response is under 800ms. 95% of all searches complete in under 1.8 seconds. All 7 suppliers are queried simultaneously to achieve this speed.",
      },
    },
    {
      "@type": "Question",
      name: "How does Tripsure always show the best rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No single supplier has the best rate on every property. Tripsure queries all 7 supply networks in parallel and uses an AI layer to compare net rates, returning the lowest available rate per property on every search.",
      },
    },
    {
      "@type": "Question",
      name: "How current is hotel availability on Tripsure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rates and availability are refreshed every 5 minutes across all 7 supplier connections. What you see on Tripsure is confirmed live inventory — not cached or estimated availability.",
      },
    },
    {
      "@type": "Question",
      name: "How can I integrate Tripsure into my platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tripsure offers a REST API with Swagger documentation and a sandbox environment. Standard integration takes 3–5 business days. A white-label hotel search widget is also available for go-live in under 2 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pricing model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tripsure operates on a net rate pricing model with fortnightly INR settlement via NEFT/RTGS. Contact contact@tripsure.com to discuss commercial terms.",
      },
    },
    {
      "@type": "Question",
      name: "Who operates Tripsure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tripsure is operated by Polaris Commerce Pvt. Ltd. (CIN: U52291KA2026PTC217236), headquartered in Bengaluru, India. It is unrelated to any travel insurance product.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to search and book hotels on Tripsure",
  description: "4-step process to find and book the best available hotel rate from 7 global supply networks",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Search hotels",
      text: "Enter your destination, dates, and number of guests. Tripsure sends a simultaneous query to all 7 supply networks.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI compares all results",
      text: "All 7 suppliers respond in parallel. The AI layer compares net rates across all sources and returns the best available rate per property in under 800ms.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Select your hotel",
      text: "Browse results with confirmed live availability and net pricing from RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, or Smyrooms.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Book and confirm",
      text: "Complete payment. Booking confirmed in under 2 seconds. Voucher issued immediately.",
    },
  ],
};

/* ACTIVATE ON HOTEL LAUNCH:
const hotelProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Tripsure Hotel Bookings",
  description: "Book hotels across 10M+ properties from 7 global supply networks at the best available net rate.",
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
