import Head from 'next/head';
import Link from 'next/link';

export default function FlightsPage() {
  return (
    <>
      <Head>
        <title>Book Flights, Earn Miles | Tripsure — Coming Soon</title>
        <meta
          name="description"
          content="Tripsure flight bookings are coming soon. Book flights and earn InterMiles, Air India One miles, Emirates Skywards and 25+ loyalty programme points on every journey."
        />
        <link rel="canonical" href="https://tripsure.com/flights" />
        <meta property="og:title" content="Flight Bookings — Earn Miles | Tripsure" />
        <meta property="og:description" content="Book flights and earn miles across 25+ loyalty programmes. InterMiles, Air India One, Emirates Skywards and more. Coming soon to Tripsure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tripsure.com/flights" />
        <meta property="og:site_name" content="Tripsure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flight Bookings — Earn Miles | Tripsure" />
        <meta name="twitter:description" content="Book flights and earn miles across 25+ loyalty programmes. Coming soon." />
      </Head>

      <div className="min-h-screen bg-white flex flex-col">
        <header role="banner" className="border-b border-gray-100 bg-white sticky top-0 z-50">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" aria-label="Tripsure — go to homepage">
              <img src="/tripsure_logo.svg" alt="Tripsure" className="h-[28px] w-auto" />
            </Link>
            <Link href="/#contact" className="bg-[#FF5B24] text-white px-5 py-2.5 rounded-[8px] text-sm font-medium hover:bg-[#E54E1B] transition-colors">
              Get Early Access
            </Link>
          </div>
        </header>

        <main id="main-content" className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl text-center">
            <span className="inline-block bg-[#EEF2FF] text-[#0050FF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              Coming Soon — After Hotels
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight leading-tight mb-5">
              Book Flights & Earn Miles<br />on Every Journey
            </h1>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8 max-w-xl mx-auto">
              Tripsure flight bookings are coming after hotel launch. Search flights across all
              major Indian and international routes, earning InterMiles, Air India One miles,
              Emirates Skywards and 25+ more programmes on every ticket.
            </p>

            <div className="bg-[#F7F3EC] rounded-2xl p-8 mb-8 text-left">
              <h2 className="text-lg font-semibold text-[#1A1A2E] mb-4">Flight features at launch</h2>
              <ul className="space-y-3 text-sm text-[#64748B]">
                <li className="flex gap-3 items-start"><span className="text-[#0050FF] font-bold mt-0.5">✓</span> All major airlines — domestic and international routes from India</li>
                <li className="flex gap-3 items-start"><span className="text-[#0050FF] font-bold mt-0.5">✓</span> Earn miles across InterMiles, Air India One, Emirates Skywards, Singapore KrisFlyer</li>
                <li className="flex gap-3 items-start"><span className="text-[#0050FF] font-bold mt-0.5">✓</span> BIN-level card detection — earn rate on your exact card tier</li>
                <li className="flex gap-3 items-start"><span className="text-[#0050FF] font-bold mt-0.5">✓</span> Available on ICICI iShop, Kotak Unbox, HDFC SmartBuy and tripsure.com</li>
              </ul>
            </div>

            <Link
              href="/#contact"
              className="inline-block bg-[#0050FF] text-white px-8 py-4 rounded-[8px] font-semibold hover:bg-[#0040CC] transition-colors text-base"
            >
              Notify me when flights go live
            </Link>
            <p className="mt-4 text-sm text-[#94A3B8]">
              Hotels launch first.{' '}
              <Link href="/hotels" className="text-[#0050FF] hover:underline">Book hotels now →</Link>
            </p>
          </div>
        </main>

        <footer role="contentinfo" className="border-t border-gray-100 py-5 text-center text-xs text-[#64748B]">
          <nav aria-label="Footer links" className="flex justify-center gap-6 mb-3">
            <Link href="/" className="hover:text-[#0050FF] transition-colors">Home</Link>
            <Link href="/hotels" className="hover:text-[#0050FF] transition-colors">Hotels</Link>
            <Link href="/privacy" className="hover:text-[#0050FF] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#0050FF] transition-colors">Terms</Link>
          </nav>
          <p>© 2025 Polaris Commerce Pvt. Ltd. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
