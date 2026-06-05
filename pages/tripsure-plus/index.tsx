import Head from 'next/head';
import Link from 'next/link';

export default function TripsurePlusPage() {
  return (
    <>
      <Head>
        <title>Tripsure+ — Premium Hotel Access | Coming Soon</title>
        <meta name="description"
          content="Tripsure+ is a premium subscription giving access to enhanced hotel rates, priority booking, and advanced hotel search features across all 7 supply networks." />
        <link rel="canonical" href="https://tripsure.com/tripsure-plus" />
        <meta property="og:title"       content="Tripsure+ — Premium Hotel Access | Tripsure" />
        <meta property="og:description" content="Premium hotel access. Enhanced rates. Priority booking. Coming soon." />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://tripsure.com/tripsure-plus" />
        <meta property="og:site_name"   content="Tripsure" />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Tripsure+ — Premium Hotel Access" />
        <meta name="twitter:description" content="Premium hotel access. Enhanced rates. Priority booking. Coming soon." />
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
            <span className="inline-block bg-[#FBF6EC] text-[#AE8847] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              Premium Subscription — Coming Soon
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight leading-tight mb-3">
              Tripsure+
            </h1>
            <p className="text-2xl font-semibold text-[#C6A15B] mb-5">₹3,999 / year</p>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8 max-w-xl mx-auto">
              Tripsure+ is the premium tier of Tripsure&apos;s hotel search platform. Members
              get priority access to the best available net rates, enhanced hotel benefits,
              and advanced search features — on every booking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
              {[
                { icon: '★', title: 'Best available rates', desc: 'Priority access to the lowest net rates across all 7 supply networks on every search.' },
                { icon: '🏨', title: 'Hotel Access Perks', desc: 'Complimentary room upgrades, late checkout, and daily breakfast on eligible properties.' },
                { icon: '⚡', title: 'Priority search', desc: 'Faster response times and priority queue access during peak demand periods.' },
              ].map((f) => (
                <div key={f.title} className="bg-[#F7F3EC] rounded-xl p-5">
                  <span className="text-2xl block mb-2" aria-hidden="true">{f.icon}</span>
                  <h2 className="font-semibold text-[#1A1A2E] text-sm mb-1">{f.title}</h2>
                  <p className="text-xs text-[#64748B] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <Link href="/#contact"
              className="inline-block bg-[#FF5B24] text-white px-8 py-4 rounded-[8px] font-semibold hover:bg-[#E54E1B] transition-colors text-base">
              Notify me when Tripsure+ launches
            </Link>
          </div>
        </main>

        <footer className="border-t border-gray-100 py-5 text-center text-xs text-[#64748B]">
          <nav aria-label="Footer links" className="flex justify-center gap-6 mb-3">
            <Link href="/"       className="hover:text-[#0050FF] transition-colors">Home</Link>
            <Link href="/hotels" className="hover:text-[#0050FF] transition-colors">Hotels</Link>
            <Link href="/privacy" className="hover:text-[#0050FF] transition-colors">Privacy</Link>
            <Link href="/terms"  className="hover:text-[#0050FF] transition-colors">Terms</Link>
          </nav>
          <p>© 2025 Polaris Commerce Pvt. Ltd. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
