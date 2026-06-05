import Head from 'next/head';
import Link from 'next/link';

const PARTNERS = [
  { name: 'ratehawk',  alt: 'RateHawk hotel supply platform logo' },
  { name: 'tbo',       alt: 'TBO hotel supply network logo' },
  { name: 'expedia',   alt: 'Expedia hotel supply logo' },
  { name: 'agoda',     alt: 'Agoda hotel supply platform logo' },
  { name: 'hotelbeds', alt: 'Hotelbeds hotel wholesale platform logo' },
  { name: 'dida',      alt: 'DIDA Travel hotel wholesale logo' },
  { name: 'smyrooms',  alt: 'Smyrooms hotel supply platform logo' },
];

const techSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tripsure Hotel API',
  applicationCategory: 'TravelApplication',
  operatingSystem: 'Web',
  description:
    'AI-powered hotel search and booking API querying RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, and Smyrooms in parallel. Sub-800ms median response, 10M+ properties, 99.95% uptime.',
  offers: {
    '@type': 'Offer',
    seller: {
      '@type': 'Organization',
      name: 'Tripsure',
      legalName: 'Polaris Commerce Pvt. Ltd.',
    },
  },
  featureList: [
    'Real-time hotel search across 7 supply networks',
    'Supply partners: RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, Smyrooms',
    'Sub-800ms median API response time',
    'Multi-supplier net rate arbitrage',
    'Live inventory refresh every 5 minutes',
    '10M+ hotel properties globally',
    '99.95% platform uptime SLA',
    'Net rate pricing model',
    'Fortnightly INR settlement via NEFT/RTGS',
    'REST API with Swagger documentation',
    'White-label hotel search widget',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://tripsure.com' },
    { '@type': 'ListItem', position: 2, name: 'Technology', item: 'https://tripsure.com/technology/' },
  ],
};

export default function TechnologyPage() {
  return (
    <>
      <Head>
        <title>AI-Powered Hotel Technology — API Performance &amp; Seamless Integration | Tripsure</title>
        <meta
          name="description"
          content="Tripsure's AI-powered hotel platform queries RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, and Smyrooms in parallel — sub-800ms median response, 10M+ properties, 99.95% uptime."
        />
        <link rel="canonical" href="https://tripsure.com/technology/" />
        <meta property="og:title"       content="AI-Powered Hotel Technology | Tripsure" />
        <meta property="og:description" content="One API. 7 supply networks. 10M+ hotels. Sub-second response. 99.95% uptime." />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://tripsure.com/technology/" />
        <meta property="og:site_name"   content="Tripsure" />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="AI-Powered Hotel Technology | Tripsure" />
        <meta name="twitter:description" content="One API. 7 supply networks. 10M+ hotels. Sub-second response." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <div className="min-h-screen bg-white text-[#1A1A2E]">

        {/* ── HEADER ──────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
          <div className="mx-auto max-w-[1280px] px-6 md:px-20 py-4 flex items-center justify-between">
            <Link href="/" aria-label="Tripsure - go to homepage">
              <img src="/tripsure_logo.svg" alt="Tripsure" className="h-[28px] w-auto" />
            </Link>
            <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 text-sm text-[#1A1A2E]">
              <Link href="/#how-it-works" className="hover:text-[#0050FF] transition-colors">How It Works</Link>
              <Link href="/technology"    className="text-[#0050FF] font-semibold">Technology</Link>
              <Link href="/#who-we-serve" className="hover:text-[#0050FF] transition-colors">About</Link>
              <Link href="/#contact"      className="hover:text-[#0050FF] transition-colors">Contact</Link>
            </nav>
            <Link href="/#contact" className="bg-[#FF5B24] text-white px-5 py-2.5 rounded-[8px] text-sm font-medium hover:bg-[#E54E1B] transition-colors">
              Get Early Access
            </Link>
          </div>
        </header>

        <main id="main-content">

          {/* ── 1. HERO ──────────────────────────────────────── */}
          <section className="bg-white pt-20 pb-16 px-4">
            <div className="mx-auto max-w-[900px] text-center">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="text-sm text-[#64748B] mb-8">
                <Link href="/" className="hover:text-[#0050FF] transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-[#1A1A2E]">Technology</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A2E] tracking-tight leading-tight mb-6">
                AI-powered hotel solutions<br className="hidden md:block" /> for seamless integration
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed max-w-[700px] mx-auto">
                One API. 7 supply networks. 10 million+ hotels. Sub-second response times.
                Built on 17 years of live production infrastructure.
              </p>
            </div>
          </section>

          {/* ── 2. STAT CARDS ────────────────────────────────── */}
          <section className="bg-[#F7F3EC] py-16 px-4">
            <div className="mx-auto max-w-[1100px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { stat: '< 800ms', label: 'Median API response', detail: 'Hotel search results at the 50th percentile' },
                  { stat: '< 1.8s',  label: '95th percentile response', detail: '99% of all searches complete under 1.8 seconds' },
                  { stat: '10M+',    label: 'Hotel properties', detail: 'Aggregated across 7 live supply networks' },
                  { stat: '99.95%',  label: 'Platform uptime', detail: 'Backed by 17 years of production infrastructure' },
                ].map((c) => (
                  <div key={c.label} className="bg-white border border-gray-200 rounded-xl p-6" style={{ borderWidth: '0.5px' }}>
                    <p className="text-4xl font-extrabold text-[#0050FF] tracking-tight leading-none mb-2" style={{ letterSpacing: '-1px' }}>
                      {c.stat}
                    </p>
                    <p className="font-semibold text-[#1A1A2E] text-sm mb-1">{c.label}</p>
                    <p className="text-xs text-[#64748B] leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 3. WHAT AI-POWERED MEANS ─────────────────────── */}
          <section className="bg-white py-20 px-4">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A2E] tracking-tight text-center mb-12">
                What &ldquo;AI-powered&rdquo; actually means at Tripsure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: '⇄',
                    title: 'Multi-supplier rate arbitrage',
                    body: 'At search time, Tripsure simultaneously queries all 7 supply partners in parallel — RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, and Smyrooms. The AI layer compares net rates across all sources, applies margin rules, and returns the single best-value result per property in under 800ms.',
                  },
                  {
                    icon: '₹',
                    title: 'Best net rate, always',
                    body: 'No single supplier has the best rate on every property. With 10+ networks queried simultaneously, Tripsure\'s pricing engine surfaces the lowest net rate available on every search — without the customer needing to check multiple platforms.',
                  },
                  {
                    icon: '↻',
                    title: 'Live inventory, not cached guesses',
                    body: 'Rates and availability are refreshed every 5 minutes across all 10+ supplier connections. What you see is what is actually bookable — no phantom availability, no stale prices at checkout.',
                  },
                  {
                    icon: '✓',
                    title: 'Fraud-resistant booking flow',
                    body: 'Every booking passes through anomaly detection trained on 17 years of production transaction data. Velocity checks, payment pattern analysis, and supplier reconciliation run before every confirmation is issued.',
                  },
                ].map((f) => (
                  <div key={f.title} className="border border-gray-100 rounded-2xl p-8" style={{ borderWidth: '0.5px' }}>
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#0050FF] font-bold text-lg mb-5">
                      {f.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3">{f.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. PERFORMANCE TABLE ─────────────────────────── */}
          <section className="bg-[#F7F3EC] py-20 px-4">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A2E] tracking-tight text-center mb-4">
                API performance benchmarked against global standards
              </h2>
              <p className="text-base text-[#64748B] text-center max-w-[640px] mx-auto mb-10 leading-relaxed">
                Travel search is won or lost in milliseconds. Tripsure&apos;s infrastructure is engineered to meet or exceed
                the 95th percentile of the fastest travel APIs globally — while simultaneously querying 7 supply networks.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-gray-200" style={{ borderWidth: '0.5px' }}>
                <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#0050FF', color: '#fff' }}>
                      <th className="text-left px-6 py-4 font-medium">Metric</th>
                      <th className="text-left px-6 py-4 font-medium">Tripsure</th>
                      <th className="text-left px-6 py-4 font-medium">Industry benchmark</th>
                      <th className="text-left px-6 py-4 font-medium">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: 'Median response (p50)',   tripsure: '< 800ms', benchmark: '900ms–1.2s', note: '7-supplier parallel query',  even: false },
                      { metric: '95th percentile (p95)',   tripsure: '< 1.8s',  benchmark: '2.5s–4s',    note: 'Covers 99% of searches',     even: true },
                      { metric: '99th percentile (p99)',   tripsure: '< 3.5s',  benchmark: '6s–10s+',    note: 'Worst-case tail latency',     even: false },
                      { metric: 'Platform uptime',         tripsure: '99.95%',  benchmark: '99.5%',      note: 'Monthly rolling SLA',         even: true },
                      { metric: 'Inventory refresh',       tripsure: '< 5 min', benchmark: '15–30 min',  note: 'Rate & availability cycle',   even: false },
                      { metric: 'Booking confirmation',    tripsure: '< 2s',    benchmark: '3–8s',       note: 'Payment to voucher',          even: true },
                    ].map((r) => (
                      <tr key={r.metric} style={{ backgroundColor: r.even ? '#F7F3EC' : '#fff' }}>
                        <td className="px-6 py-4 font-medium text-[#1A1A2E]">{r.metric}</td>
                        <td className="px-6 py-4 font-semibold text-[#0050FF]">{r.tripsure}</td>
                        <td className="px-6 py-4 text-[#64748B]">{r.benchmark}</td>
                        <td className="px-6 py-4 text-[#94A3B8]" style={{ fontSize: '13px' }}>{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-4 text-[#94A3B8]" style={{ fontSize: '12px' }}>
                Benchmarks based on internal load testing. Measured at standard hotel search load: single destination,
                1 room, 2 adults, 3-night stay.
              </p>
            </div>
          </section>

          {/* ── 5. INTEGRATION PATHS ─────────────────────────── */}
          <section className="bg-white py-20 px-4">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A2E] tracking-tight text-center mb-12">
                Integrate Tripsure into your platform
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    badge: { text: 'Live now', color: '#12B76A', bg: '#ECFDF3' },
                    title: 'Enterprise platforms',
                    body: 'Tripsure is already live as a hotel supplier on major travel and commerce platforms through existing production infrastructure. No new integration required for connected partners.',
                    cta: null,
                  },
                  {
                    badge: { text: 'For travel platforms', color: '#0050FF', bg: '#EEF2FF' },
                    title: 'REST API',
                    body: 'RESTful JSON API with Swagger documentation and a sandbox environment. Access all 7 supply networks through a single endpoint. Standard integration typically takes 3–5 business days.',
                    cta: { label: 'Request API docs →', href: '/#contact' },
                  },
                  {
                    badge: { text: 'For portals', color: '#0050FF', bg: '#EEF2FF' },
                    title: 'White-label embed',
                    body: 'Fully white-labelled hotel search widget deployable as an iframe or web component. All 7 supply networks included. Go-live in under 2 weeks.',
                    cta: { label: 'Talk to partnerships →', href: '/#contact' },
                  },
                ].map((c) => (
                  <div key={c.title} className="border border-gray-100 rounded-2xl p-8 flex flex-col gap-4" style={{ borderWidth: '0.5px' }}>
                    <span className="inline-block self-start text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ color: c.badge.color, backgroundColor: c.badge.bg }}>
                      {c.badge.text}
                    </span>
                    <h3 className="text-xl font-semibold text-[#1A1A2E]">{c.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed flex-1">{c.body}</p>
                    {c.cta && (
                      <Link href={c.cta.href} className="text-sm font-semibold text-[#0050FF] hover:underline mt-auto">
                        {c.cta.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 6. SUPPLIER ECOSYSTEM ────────────────────────── */}
          <section className="bg-[#F7F3EC] py-20 px-4">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A2E] tracking-tight text-center mb-4">
                Powered by 7 of the world&apos;s leading hotel supply networks
              </h2>
              <p className="text-base text-[#64748B] text-center max-w-[680px] mx-auto mb-10 leading-relaxed">
                Tripsure aggregates live hotel inventory from RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA,
                and Smyrooms — covering 10 million+ properties across 190+ countries. All 10+ networks are queried
                in parallel on every search, ensuring the best available rate and real-time availability.
              </p>

              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest text-center mb-5">
                Hotel supply partners
              </p>

              {/* Logo grid */}
              <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
                {PARTNERS.map((p) => (
                  <figure key={p.name} className="partner-logo" aria-label={p.alt}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '14px 20px', border: '0.5px solid #E4E7EE',
                      borderRadius: '12px', background: '#fff', margin: 0,
                    }}>
                    <picture>
                      <source srcSet={`/assets/logos/partners/${p.name}.webp`} type="image/webp" />
              <source srcSet={`/assets/logos/partners/${p.name}.png`}  type="image/png" />
                      <img
                        src={`/assets/logos/partners/${p.name}.svg`}
                        alt={p.alt}
                        width="120"
                        height="40"
                        loading="lazy"
                        decoding="async"
                        style={{ maxWidth: '120px', maxHeight: '36px', width: 'auto', height: 'auto', objectFit: 'contain' }}
                      />
                    </picture>
                  </figure>
                ))}
              </div>

              <p className="text-center mt-4 text-[#94A3B8]" style={{ fontSize: '11px', maxWidth: '600px', margin: '12px auto 0' }}>
                Logos and trademarks are property of their respective owners. Tripsure integrates with RateHawk,
                TBO, Expedia, Agoda, Hotelbeds, DIDA, and Smyrooms as hotel supply partners.
              </p>
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────── */}
          <section className="bg-white py-20 px-4">
            <div className="mx-auto max-w-[600px] text-center">
              <h2 className="text-3xl font-semibold text-[#1A1A2E] mb-4">Ready to integrate?</h2>
              <p className="text-[#64748B] mb-8">
                Contact us to request API documentation, a sandbox environment, or discuss your integration requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact"
                  className="bg-[#FF5B24] text-white px-8 py-4 rounded-[8px] font-semibold hover:bg-[#E54E1B] transition-colors">
                  Request API access
                </Link>
                <Link href="/"
                  className="border border-gray-200 text-[#1A1A2E] px-8 py-4 rounded-[8px] font-medium hover:border-[#0050FF] transition-colors">
                  Back to homepage
                </Link>
              </div>
            </div>
          </section>

        </main>

        {/* ── FOOTER ───────────────────────────────────────── */}
        <footer className="border-t border-gray-100 bg-white py-6">
          <div className="mx-auto max-w-5xl px-4 text-center text-xs text-[#64748B]">
            <p>© 2025 Polaris Commerce Pvt. Ltd. All rights reserved. Tripsure is operated by Polaris Commerce Pvt. Ltd.</p>
            <nav className="flex justify-center gap-6 mt-3">
              <Link href="/"        className="hover:text-[#0050FF] transition-colors">Home</Link>
              <Link href="/privacy" className="hover:text-[#0050FF] transition-colors">Privacy</Link>
              <Link href="/terms"   className="hover:text-[#0050FF] transition-colors">Terms</Link>
              <Link href="/#contact" className="hover:text-[#0050FF] transition-colors">Contact</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
