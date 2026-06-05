import Head from 'next/head';
import Link from 'next/link';

// Redirects to homepage — WhatsApp booking positioning removed per brand update
export default function BookingPage() {
  return (
    <>
      <Head>
        <title>Hotel Bookings — Tripsure</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://tripsure.com/" />
      </Head>
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <Link href="/" aria-label="Tripsure - go to homepage">
            <img src="/tripsure_logo.svg" alt="Tripsure" className="h-[28px] w-auto mx-auto mb-8" />
          </Link>
          <h1 className="text-2xl font-bold text-[#1A1A2E] mb-4">Hotel bookings coming soon</h1>
          <p className="text-[#64748B] mb-8">
            Tripsure hotel search and booking is launching soon. Register your interest to be notified.
          </p>
          <Link href="/"
            className="inline-block bg-[#FF5B24] text-white px-8 py-4 rounded-[8px] font-semibold hover:bg-[#E54E1B] transition-colors">
            Go to homepage
          </Link>
        </div>
      </div>
    </>
  );
}
