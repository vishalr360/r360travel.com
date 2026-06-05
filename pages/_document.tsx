import { Html, Head, Main, NextScript } from "next/document";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tripsure.com/#organization",
      "name": "Tripsure",
      "legalName": "Polaris Commerce Group Private Limited",
      "url": "https://www.tripsure.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tripsure.com/tripsure_logo.svg",
        "width": 410,
        "height": 97
      },
      "image": "https://www.tripsure.com/og-image.png",
      "description": "Tripsure is India's hotel booking platform for banks, loyalty programmes and customer engagement platforms. Connect to 10+ global hotel suppliers with one API integration.",
      "foundingDate": "2025",
      "foundingLocation": {
        "@type": "Place",
        "name": "Bengaluru, Karnataka, India"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-87925-48484",
          "contactType": "customer support",
          "email": "contact@tripsure.com",
          "availableLanguage": "English"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/in/tripsure-social-97a800413",
        "https://x.com/tripsure_",
        "https://www.instagram.com/tripsureofficial"
      ],
      "identifier": {
        "@type": "PropertyValue",
        "name": "CIN",
        "value": "U52291KA2026PTC217236"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.tripsure.com/#website",
      "url": "https://www.tripsure.com",
      "name": "Tripsure",
      "description": "Hotel booking platform for banks and loyalty programmes",
      "publisher": {
        "@id": "https://www.tripsure.com/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "Service",
      "@id": "https://www.tripsure.com/#service",
      "name": "Hotel Booking Platform for Banks & Loyalty Programmes",
      "provider": {
        "@id": "https://www.tripsure.com/#organization"
      },
      "serviceType": "Travel Technology Platform",
      "description": "White-label hotel booking infrastructure connecting banks and loyalty platforms to 10+ global hotel suppliers. Features include live rate optimisation, configurable mark-ups, white-label UI flows, and 24×7 operations support.",
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Place", "name": "Middle East" },
        { "@type": "Place", "name": "Asia" }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Banks, Financial Institutions, Loyalty Programmes, Customer Engagement Platforms"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tripsure Platform Features",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Multi-Supplier Hotel Aggregation",
              "description": "Live availability and pricing from Expedia, Agoda, Hotelbeds, TBO, Ratehawk, Smyrooms, and more"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "API-First Integration",
              "description": "REST API to power hotel searches, bookings and post-booking flows inside your digital channels"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "White-Label Hotel Portal",
              "description": "Configurable UI flows for web and app with custom mark-ups, commissions and eligibility rules"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tripsure.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Tripsure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tripsure is India's hotel booking platform for banks, loyalty programmes and customer engagement platforms. It connects partners to 10+ global hotel suppliers through a single API integration, with live rate optimisation and 24×7 operations support."
          }
        },
        {
          "@type": "Question",
          "name": "Which hotel suppliers does Tripsure connect to?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tripsure connects to Expedia, Agoda, Hotelbeds, TBO, Ratehawk, Smyrooms, Yelago, and Dida, with more suppliers being added continuously."
          }
        },
        {
          "@type": "Question",
          "name": "Who is Tripsure designed for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tripsure is designed for banks and financial institutions wanting to add hotel benefits to card portfolios and loyalty programmes, and for customer engagement platforms wanting to add a full hotel layer to their stack."
          }
        },
        {
          "@type": "Question",
          "name": "How does Tripsure integrate with existing systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tripsure provides REST APIs that power hotel searches, bookings and post-booking flows. Banks and engagement platforms can go live in weeks, not months. White-label ready UI flows are available for web and app experiences."
          }
        },
        {
          "@type": "Question",
          "name": "Is Tripsure available for international hotel bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tripsure provides global coverage for both domestic and international hotel properties, giving users more choice at key destinations worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "Who operates Tripsure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tripsure is operated by Polaris Commerce Group Private Limited (CIN: U52291KA2026PTC217236), headquartered in Bengaluru, India."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to integrate Tripsure into your bank or loyalty platform",
      "description": "Steps to launch a branded hotel experience on your bank, card or loyalty platform using Tripsure",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Contact Tripsure",
          "text": "Share your use case with the Tripsure team at contact@tripsure.com to get the right integration model."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "API Integration",
          "text": "Connect via Tripsure REST APIs to power hotel searches, bookings and post-booking flows inside your digital channels."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Configure Business Rules",
          "text": "Set up mark-ups, commissions and eligibility rules by channel or partner segment."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Go Live",
          "text": "Launch your branded hotel experience. Tripsure's operations desk handles bookings, amendments and exceptions 24×7."
        }
      ]
    }
  ]
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Favicon — SVG primary, PNG fallback, ICO legacy */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/tripsure-icon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/tripsure-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/tripsure-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/tripsure-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme */}
        <meta name="theme-color" content="#0050FF" />
        <meta name="msapplication-TileColor" content="#0050FF" />
        <meta name="msapplication-TileImage" content="/tripsure-icon.png" />

        {/* Global robots */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* Structured data — Organisation + Website + Service + FAQ + HowTo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
