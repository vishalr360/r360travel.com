import Head from 'next/head';
import Link from 'next/link';

export default function HotelsPage() {
  return (
    <>
      <Head>
        <title>Hotel Bookings — Best Net Rates | Tripsure — Launching Soon</title>
        <meta name="description"
          content="Tripsure hotel bookings are launching soon. Search hotels across 10M+ properties from 7 global supply networks — RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA, Smyrooms. Best available net rate." />
        <link rel="canonical" href="https://tripsure.com/hotels" />
        <meta property="og:title"       content="Hotel Bookings — Best Net Rates | Tripsure" />
        <meta property="og:description" content="10M+ hotels from 7 global supply networks. Best available net rate. Launching soon." />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://tripsure.com/hotels" />
        <meta property="og:site_name"   content="Tripsure" />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Hotel Bookings — Best Net Rates | Tripsure" />
        <meta name="twitter:description" content="10M+ hotels from 7 global supply networks. Best available net rate. Launching soon." />
      </Head>

      <div className="min-h-screen bg-white flex flex-col">
        <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" aria-label="Tripsure - go to homepage">
              <img src="/tripsure_logo.svg" alt="Tripsure" className="h-[28px] w-auto" />
            </Link>
            <Link href="/#contact" className="bg-[#FF5B24] text-white px-5 py-2.5 rounded-[8px] text-sm font-medium hover:bg-[#E54E1B] transition-colors">
              Get Early Access
            </Link>
          </div>
        </header>

        <main id="main-content" className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl text-center">
            <span className="inline-block bg-[#FFF0E8] text-[#FF5B24] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              Launching Soon
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight leading-tight mb-5">
              Hotel bookings at the best available net rate
            </h1>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8 max-w-xl mx-auto">
              Tripsure hotel bookings are coming soon. Search across 10M+ properties from
              7 global supply networks — RateHawk, TBO, Expedia, Agoda, Hotelbeds, DIDA,
              and Smyrooms — with sub-800ms response time and live inventory.
            </p>

            <div className="bg-[#F7F3EC] rounded-2xl p-8 mb-8 text-left">
              <h2 className="text-lg font-semibold text-[#1A1A2E] mb-4">What to expect at launch</h2>
              <ul className="space-y-3 text-sm text-[#64748B]">
                <li className="flex gap-3 items-start"><span className="text-[#FF5B24] font-bold mt-0.5">✓</span> 10M+ hotels across 190+ countries from 7 supply networks</li>
                <li className="flex gap-3 items-start"><span className="text-[#FF5B24] font-bold mt-0.5">✓</span> Best available net rate — all 7 suppliers queried in parallel</li>
                <li className="flex gap-3 items-start"><span className="text-[#FF5B24] font-bold mt-0.5">✓</span> Live inventory refreshed every 5 minutes — no stale prices</li>
                <li className="flex gap-3 items-start"><span className="text-[#FF5B24] font-bold mt-0.5">✓</span> Sub-800ms median search response</li>
                <li className="flex gap-3 items-start"><span className="text-[#FF5B24] font-bold mt-0.5">✓</span> Booking confirmed in under 2 seconds</li>
              </ul>
            </div>

            <Link href="/#contact"
              className="inline-block bg-[#FF5B24] text-white px-8 py-4 rounded-[8px] font-semibold hover:bg-[#E54E1B] transition-colors text-base">
              Notify me when hotels go live
            </Link>
            <p className="mt-4 text-sm text-[#94A3B8]">No spam. One email when bookings launch.</p>
          </div>
        </main>

        <footer className="border-t border-gray-100 py-5 text-center text-xs text-[#64748B]">
          <nav aria-label="Footer links" className="flex justify-center gap-6 mb-3">
            <Link href="/"            className="hover:text-[#0050FF] transition-colors">Home</Link>
            <Link href="/technology"  className="hover:text-[#0050FF] transition-colors">Technology</Link>
            <Link href="/flights"     className="hover:text-[#0050FF] transition-colors">Flights</Link>
            <Link href="/privacy"     className="hover:text-[#0050FF] transition-colors">Privacy</Link>
            <Link href="/terms"       className="hover:text-[#0050FF] transition-colors">Terms</Link>
          </nav>
          <p>© 2025 Polaris Commerce Pvt. Ltd. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
