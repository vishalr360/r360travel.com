import Head from 'next/head';
import Link from 'next/link';

export default function WhatsAppBookingPage() {
  return (
    <>
      <Head>
        <title>Book Hotels on WhatsApp, Earn Points | Tripsure — Coming Soon</title>
        <meta
          name="description"
          content="Tripsure WhatsApp booking lets you search hotels, earn loyalty points and confirm bookings without downloading an app. Full hotel search and payment on WhatsApp. Coming soon."
        />
        <link rel="canonical" href="https://tripsure.com/whatsapp-booking" />
        <meta property="og:title" content="WhatsApp Hotel Booking — Earn Points | Tripsure" />
        <meta property="og:description" content="Book hotels on WhatsApp, earn InterMiles, Air India One miles and Marriott Bonvoy points. No app download needed. Coming soon to Tripsure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tripsure.com/whatsapp-booking" />
        <meta property="og:site_name" content="Tripsure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WhatsApp Hotel Booking — Earn Points | Tripsure" />
        <meta name="twitter:description" content="Full hotel booking flow on WhatsApp — no app download. Earn loyalty points. Coming soon." />
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
            <span className="inline-block bg-[#ECFDF3] text-[#027A48] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              Coming Soon — WhatsApp Booking
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight leading-tight mb-5">
              Book Hotels on WhatsApp.<br />Earn Loyalty Points.
            </h1>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8 max-w-xl mx-auto">
              Tripsure's WhatsApp booking flow lets you search hotels, view earn rates on your
              loyalty card, and confirm bookings — all from your WhatsApp chat. No app download,
              no account creation required. India-first.
            </p>

            <div className="bg-[#F7F3EC] rounded-2xl p-8 mb-8 text-left">
              <h2 className="text-lg font-semibold text-[#1A1A2E] mb-4">How WhatsApp booking works</h2>
              <ol className="space-y-3 text-sm text-[#64748B]">
                <li className="flex gap-3 items-start"><span className="font-bold text-[#FF5B24] shrink-0">1.</span> Message Tripsure on WhatsApp with your destination and dates</li>
                <li className="flex gap-3 items-start"><span className="font-bold text-[#FF5B24] shrink-0">2.</span> Receive hotel options with live pricing and loyalty earn rates</li>
                <li className="flex gap-3 items-start"><span className="font-bold text-[#FF5B24] shrink-0">3.</span> Select your hotel and room — reply with your choice</li>
                <li className="flex gap-3 items-start"><span className="font-bold text-[#FF5B24] shrink-0">4.</span> Pay securely via UPI, card or net banking link in chat</li>
                <li className="flex gap-3 items-start"><span className="font-bold text-[#FF5B24] shrink-0">5.</span> Receive confirmation and manage bookings — all in WhatsApp</li>
              </ol>
            </div>

            <Link
              href="/#contact"
              className="inline-block bg-[#FF5B24] text-white px-8 py-4 rounded-[8px] font-semibold hover:bg-[#E54E1B] transition-colors text-base"
            >
              Notify me when WhatsApp booking is live
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
