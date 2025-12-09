import Head from 'next/head';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions – R360Travel</title>
        <meta name="description" content="Terms and conditions for using R360Travel services." />
      </Head>

      <div className="min-h-screen bg-white text-slate-800">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:h-16 md:px-6">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/r360_travel_logo.svg"
                alt="R360 Travel"
                className="h-8 w-auto"
              />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Terms & Conditions</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: December 2024</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">1. Acceptance of Terms</h2>
              <p>
                By accessing and using R360Travel services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">2. Description of Services</h2>
              <p>
                R360Travel provides hotel booking aggregation services, connecting users with multiple travel suppliers including Expedia, Agoda, Hotelbeds, TBO, Ratehawk, Smyrooms, Yelago, and other partners. Our platform enables real-time price comparison and booking facilitation for accommodation services worldwide.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">3. Booking and Reservations</h2>
              <p className="mb-2">
                All bookings made through R360Travel are subject to availability and confirmation by the respective hotel or supplier. Prices displayed are indicative and may change based on:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-slate-500">
                <li>Real-time supplier inventory updates</li>
                <li>Currency fluctuations</li>
                <li>Seasonal pricing adjustments</li>
                <li>Special events or local conditions</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">4. Payment Terms</h2>
              <p>
                Payments are processed securely through PCI-DSS compliant payment gateways. Users are responsible for ensuring accurate payment information. All transactions are subject to verification and approval. Prices typically include applicable taxes and fees unless explicitly stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">5. Cancellation and Refunds</h2>
              <p>
                Cancellation and refund policies vary by hotel and supplier. Please review the specific fare rules and cancellation terms before confirming any booking. Refund processing times depend on the payment method and supplier policies. R360Travel will facilitate refund requests but final decisions rest with the respective suppliers.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">6. User Responsibilities</h2>
              <p className="mb-2">Users are responsible for:</p>
              <ul className="list-disc space-y-1 pl-5 text-slate-500">
                <li>Providing accurate guest information and travel details</li>
                <li>Verifying booking confirmations and itineraries</li>
                <li>Ensuring valid travel documents and visas where required</li>
                <li>Complying with hotel policies and local regulations</li>
                <li>Maintaining confidentiality of account credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">7. Limitation of Liability</h2>
              <p>
                R360Travel acts as an intermediary between users and travel suppliers. We are not liable for service failures, cancellations, or modifications made by hotels or suppliers. Our liability is limited to the extent permitted by applicable law and shall not exceed the booking value in question.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">8. Intellectual Property</h2>
              <p>
                All content, trademarks, logos, and intellectual property displayed on R360Travel are owned by Reward360 or its licensors. Unauthorized use, reproduction, or distribution of any materials is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">9. Modifications to Terms</h2>
              <p>
                R360Travel reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">10. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">11. Contact Information</h2>
              <p>
                For questions regarding these Terms and Conditions, please contact us at{' '}
                <a href="mailto:contact@r360travel.com" className="text-[#4A9FFF] hover:underline">
                  contact@r360travel.com
                </a>
              </p>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-slate-50 py-4 text-[11px] text-slate-500">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 md:flex-row md:px-6">
            <span>© 2025 R360Travel • A Reward360 Product • All rights reserved.</span>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="hover:text-slate-700 hover:underline hover:underline-offset-2">
                Home
              </Link>
              <Link href="/terms" className="hover:text-slate-700 hover:underline hover:underline-offset-2">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-slate-700 hover:underline hover:underline-offset-2">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
