import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy – R360Travel</title>
        <meta name="description" content="Privacy policy for R360Travel services." />
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
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: December 2024</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">1. Introduction</h2>
              <p>
                R360Travel, a product of Reward360, is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our hotel booking aggregation services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">2. Information We Collect</h2>
              <p className="mb-2">We collect information necessary to provide our services, including:</p>
              <ul className="list-disc space-y-1 pl-5 text-slate-500">
                <li><strong className="text-slate-700">Personal Information:</strong> Name, email address, phone number, billing address</li>
                <li><strong className="text-slate-700">Booking Information:</strong> Travel dates, guest details, room preferences</li>
                <li><strong className="text-slate-700">Payment Information:</strong> Credit/debit card details (processed securely via PCI-DSS compliant gateways)</li>
                <li><strong className="text-slate-700">Technical Information:</strong> IP address, browser type, device information, usage patterns</li>
                <li><strong className="text-slate-700">Communication Data:</strong> Customer support interactions, feedback, and inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">3. How We Use Your Information</h2>
              <p className="mb-2">Your information is used to:</p>
              <ul className="list-disc space-y-1 pl-5 text-slate-500">
                <li>Process and confirm hotel bookings</li>
                <li>Communicate booking confirmations, updates, and support</li>
                <li>Process payments and refunds</li>
                <li>Improve our services and user experience</li>
                <li>Send relevant promotional communications (with your consent)</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">4. Information Sharing</h2>
              <p className="mb-2">We share your information only as necessary:</p>
              <ul className="list-disc space-y-1 pl-5 text-slate-500">
                <li><strong className="text-slate-700">Travel Suppliers:</strong> Hotels and booking partners to fulfill reservations</li>
                <li><strong className="text-slate-700">Payment Processors:</strong> Secure payment gateway providers</li>
                <li><strong className="text-slate-700">Service Providers:</strong> Technology and support partners under confidentiality agreements</li>
                <li><strong className="text-slate-700">Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="mt-2">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data, including encryption, secure servers, and access controls. Payment information is processed through PCI-DSS compliant gateways and is never stored on our servers in plain text.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Booking records are typically retained for a period required by applicable tax and business regulations.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">7. Your Rights</h2>
              <p className="mb-2">Subject to applicable laws, you have the right to:</p>
              <ul className="list-disc space-y-1 pl-5 text-slate-500">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability where applicable</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:contact@r360travel.com" className="text-[#4A9FFF] hover:underline">
                  contact@r360travel.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">8. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings. Disabling certain cookies may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">9. Third-Party Links</h2>
              <p>
                Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">10. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the modified policy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-slate-800">13. Contact Us</h2>
              <p>
                For questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
              </p>
              <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="font-medium text-slate-800">R360Travel</p>
                <p className="mt-1 text-slate-500">Email: <a href="mailto:contact@r360travel.com" className="text-[#1D86FF] hover:underline">contact@r360travel.com</a></p>
                <p className="text-slate-500">Offices: Bengaluru (HQ), Dubai, Hong Kong, Singapore</p>
              </div>
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
