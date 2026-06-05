import Head from 'next/head';
import Link from 'next/link';

export default function TripsurePlusPage() {
  return (
    <>
      <Head>
        <title>Tripsure+ Subscription — Earn More, Travel Better | Coming Soon</title>
        <meta
          name="description"
          content="Tripsure+ is a premium travel subscription at ₹3,999/year. Unlock exclusive earn multipliers, Access Perks (room upgrades, late checkout, breakfast), and advanced loyalty intelligence."
        />
        <link rel="canonical" href="https://tripsure.com/tripsure-plus" />
        <meta property="og:title" content="Tripsure+ — Premium Travel Subscription | Tripsure" />
        <meta property="og:description" content="Tripsure+ subscription at ₹3,999/year. Exclusive earn rates, hotel Access Perks, advanced loyalty features. Coming soon." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tripsure.com/tripsure-plus" />
        <meta property="og:site_name" content="Tripsure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tripsure+ — Premium Travel Subscription" />
        <meta name="twitter:description" content="₹3,999/year. Exclusive earn rates, hotel Access Perks, advanced loyalty intelligence." />
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
            <span className="inline-block bg-[#FBF6EC] text-[#AE8847] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              Premium Subscription — Coming Soon
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight leading-tight mb-3">
              Tripsure+
            </h1>
            <p className="text-2xl font-semibold text-[#C6A15B] mb-5">₹3,999 / year</p>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8 max-w-xl mx-auto">
              Tripsure+ is the premium tier of India's loyalty-native travel platform. Members
              unlock exclusive earn multipliers, hotel Access Perks, and advanced loyalty goal
              tracking — on every booking, every time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
              {[
                { icon: '✦', title: 'Exclusive earn rates', desc: 'Higher earn multipliers on every booking vs. standard Tripsure.' },
                { icon: '🏨', title: 'Access Perks', desc: 'Hotel-funded room upgrades, late checkout, and daily breakfast on thousands of properties.' },
                { icon: '📊', title: 'Loyalty intelligence', desc: 'Advanced goal tracking, multi-programme optimization, and early access to new programmes.' },
              ].map((f) => (
                <div key={f.title} className="bg-[#F7F3EC] rounded-xl p-5">
                  <span className="text-2xl block mb-2" aria-hidden="true">{f.icon}</span>
                  <h2 className="font-semibold text-[#1A1A2E] text-sm mb-1">{f.title}</h2>
                  <p className="text-xs text-[#64748B] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/#contact"
              className="inline-block bg-[#FF5B24] text-white px-8 py-4 rounded-[8px] font-semibold hover:bg-[#E54E1B] transition-colors text-base"
            >
              Notify me when Tripsure+ launches
            </Link>
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
