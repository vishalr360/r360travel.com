import Head from 'next/head';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — Tripsure by Polaris Commerce Group</title>
        <meta name="description" content="Terms of Service for Tripsure — the hotel booking platform operated by Polaris Commerce Group Private Limited. Covers bookings, payments, cancellations and user obligations." />
        <link rel="canonical" href="https://www.tripsure.com/terms" />
        <meta property="og:title" content="Terms of Service — Tripsure" />
        <meta property="og:description" content="Tripsure Terms of Service. Operated by Polaris Commerce Group Private Limited (CIN: U52291KA2026PTC217236)." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tripsure.com/terms" />
        <meta property="og:site_name" content="Tripsure" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-white text-[#1A1A2E]">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:h-16 md:px-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white flex items-center overflow-hidden p-[7px] rounded-[6px] h-[40px] border border-gray-100 shadow-sm">
                <img src="/tripsure_logo.svg" alt="Tripsure" className="h-[26px] w-auto object-contain object-left" />
              </div>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#1A1A2E] hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A2E] md:text-4xl">Terms of Service</h1>
          <div className="mt-2 text-sm text-[#64748B] space-y-0.5">
            <p>Operated by <strong className="text-[#1A1A2E]">Polaris Commerce Group Private Limited</strong></p>
            <p>CIN: U52291KA2026PTC217236 &nbsp;|&nbsp; Effective Date: June 3, 2025 &nbsp;|&nbsp; Last Updated: June 3, 2025</p>
          </div>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#64748B]">

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">1. About Tripsure</h2>
              <p>Tripsure is a hotel booking and travel technology platform operated under the Tripsure brand by Polaris Commerce Group Private Limited ("Tripsure", "we", "our" or "us"). The Platform aggregates and facilitates hotel bookings by connecting users with independent third-party accommodation suppliers ("Suppliers").</p>
              <p className="mt-2">Tripsure acts solely as an intermediary and aggregation platform. We do not own, operate, manage or control any hotel, accommodation or inventory listed on the Platform. Our role is limited to connecting users with Suppliers and facilitating the booking process.</p>
              <p className="mt-2">By accessing or using the Platform — including the website, mobile site, or mobile application — you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please discontinue use of the Platform immediately.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">2. Changes to These Terms</h2>
              <p>We may revise these Terms at any time. Unless a shorter period is required by applicable law, changes take effect upon posting to the Platform. The "Last Updated" date at the top of this document will reflect the most recent revision. Your continued use of the Platform after any revision constitutes acceptance of the updated Terms.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">3. Eligibility and Use of the Platform</h2>
              <p className="mb-2">To use the Platform, you represent and warrant that:</p>
              <ul className="list-none space-y-1 pl-4">
                <li>– You are at least 18 years of age and have the legal capacity to enter into binding contracts;</li>
                <li>– All information you provide is true, accurate, current and complete;</li>
                <li>– Your use of the Platform is for personal, non-commercial purposes unless we have expressly approved otherwise; and</li>
                <li>– You will comply with all applicable laws and these Terms at all times.</li>
              </ul>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Booking on Behalf of Others</h3>
              <p className="mb-2">If you make a booking on behalf of other travellers, you additionally represent that you have obtained their prior authorisation, informed them of all applicable terms, and accept responsibility for all payments, modifications, cancellations and other obligations arising from the booking.</p>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Prohibited Conduct</h3>
              <p className="mb-2">You agree not to:</p>
              <ul className="list-none space-y-1 pl-4">
                <li>– Make any false, fraudulent, speculative or duplicate bookings;</li>
                <li>– Resell bookings or commercially exploit the Platform without our written authorisation;</li>
                <li>– Use automated tools including bots, scrapers, spiders or data-mining software;</li>
                <li>– Copy, reproduce, distribute, modify or commercially exploit any content on the Platform;</li>
                <li>– Bypass or circumvent any security measures or access restrictions;</li>
                <li>– Upload viruses, malware or any other malicious code;</li>
                <li>– Abuse promotional offers, coupons, cashback, loyalty rewards or referral programmes; or</li>
                <li>– Engage in abusive, threatening, unlawful or inappropriate conduct towards Tripsure staff, Suppliers or hotel personnel.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">4. Booking Confirmation</h2>
              <p>All bookings are subject to availability and confirmation by the relevant Supplier. A booking request does not constitute a confirmed reservation until a Booking Confirmation voucher is issued and communicated to you.</p>
              <p className="mt-2">Prices displayed on the Platform are sourced dynamically from third-party Suppliers and may change prior to confirmation due to real-time inventory updates, currency fluctuations, seasonal demand, promotional changes, Supplier-side pricing revisions or local regulatory changes.</p>
              <p className="mt-2">Tripsure shall not be liable for booking failures, pricing discrepancies, delays or errors arising from API downtime, connectivity failures, third-party Supplier outages, technical disruptions, payment gateway interruptions or force majeure events.</p>
              <p className="mt-2">If you do not receive your Booking Confirmation within 24 hours of completing a booking, you must contact Tripsure support immediately at <a href="mailto:contact@tripsure.com" className="text-[#0050FF] hover:underline">contact@tripsure.com</a>.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">5. Payment Terms</h2>
              <p>Prices for Travel Services are dynamic and may change at any time prior to booking confirmation. Payments are processed through PCI-DSS compliant payment gateways. You are solely responsible for ensuring that valid and accurate payment information is provided. All transactions are subject to payment gateway verification, fraud checks, banking authorisation and compliance review.</p>
              <p className="mt-2">Tripsure reserves the right to cancel or decline bookings that show signs of fraudulent transactions, unauthorised card usage, chargeback abuse, promotional misuse or other suspicious activity.</p>
              <p className="mt-2">Where a chargeback or payment dispute is initiated after successful consumption of Travel Services, you authorise Tripsure to recover all outstanding dues through lawful means, including reprocessing of payment methods, legal recovery proceedings, referral to third-party collection agencies or adjustment against future credits or refunds.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">6. Foreign Exchange Rates</h2>
              <p>For international bookings, the exchange rate applicable at the time of actual transaction processing may differ from the indicative rate displayed at checkout. The final amount charged may vary due to bank conversion rates, card issuer charges, currency fluctuations or applicable foreign exchange regulations. Tripsure shall not be responsible for such variations.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">7. Taxes and Charges</h2>
              <p>Displayed prices may or may not include applicable taxes, service charges, VAT, GST, occupancy taxes or similar levies; this will be indicated at checkout. Certain local taxes — including city taxes, tourism levies, municipal charges and environmental fees — may be imposed by local authorities and payable directly at the hotel at check-in or check-out. You agree to bear all applicable taxes, duties and statutory charges associated with your booking.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">8. International Payments from India</h2>
              <p className="mb-2">Users making international bookings from India must comply with all applicable laws and regulations, including:</p>
              <ul className="list-none space-y-1 pl-4">
                <li>– The Reserve Bank of India Liberalised Remittance Scheme (LRS) and applicable remittance limits;</li>
                <li>– Section 206C of the Income Tax Act and Tax Collected at Source (TCS) provisions;</li>
                <li>– The Foreign Exchange Management Act (FEMA) and rules thereunder; and</li>
                <li>– Any other applicable governmental directives in force from time to time.</li>
              </ul>
              <p className="mt-2">Where required under law, you must provide a valid PAN and any additional information requested. Tripsure reserves the right to cancel bookings where PAN details are invalid, incomplete or unverifiable.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">9. Fraud Prevention</h2>
              <p>Where a booking or account shows signs of fraud, abuse, suspicious activity, government sanctions or unauthorised usage, Tripsure may request additional verification documents. Tripsure reserves the right to cancel associated bookings, suspend or terminate accounts, deny refunds, restrict future Platform access, report suspicious activity to regulatory authorities and initiate legal proceedings.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">10. Additional Charges at the Hotel</h2>
              <p>The booking amount paid through the Platform covers only the accommodation and specific inclusions set out in your Booking Confirmation. All additional charges incurred at the hotel — including laundry, room service, internet, telephone, minibar, additional meals, spa facilities, recreational services and security deposits — are payable directly by you to the hotel.</p>
              <p className="mt-2">Hotels may impose mandatory charges such as gala dinner supplements, festive surcharges, peak-season fees or compulsory meal plans. Tripsure has no authority to waive, modify or refund such charges.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">11. Cancellations and Refunds</h2>
              <p>Cancellation and refund entitlements vary by hotel, Supplier, room category, fare rules and promotional offer. You are required to review the applicable cancellation terms carefully before confirming any booking.</p>
              <p className="mt-2">Tripsure will facilitate refund requests with Suppliers on your behalf; however, the approval of any cancellation or refund rests solely with the relevant Supplier or hotel. Where a refund is approved, it will generally be processed within 15 working days of Tripsure receiving the funds from the Supplier.</p>
              <p className="mt-2">Booking issues should be reported within 48 hours of occurrence wherever possible. The following items are generally non-refundable: convenience fees, payment gateway charges, forex conversion losses, promotional discounts and cashback benefits that have been utilised.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">12. Promotional Offers and Loyalty Programme</h2>
              <p>Tripsure may offer promotional discounts, cashback, loyalty rewards, coupons, subscription benefits or partner offers from time to time. Such offers are subject to their own terms and conditions, may be modified or withdrawn without prior notice, and cannot be combined unless expressly permitted. Tripsure reserves the right to reverse or recover benefits incorrectly credited and to deny benefits where misuse or technical error is identified.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">13. Intellectual Property</h2>
              <p>All content available on the Platform — including logos, branding, text, software, website design, graphics, images, trademarks, databases and technology — is owned by or licensed to Polaris Commerce Group Private Limited and is protected under applicable intellectual property laws. You may not reproduce, distribute, modify, reverse engineer, scrape or commercially exploit any part of the Platform without our prior written consent.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">14. Privacy and Data</h2>
              <p>The collection, use and processing of your personal information is governed by our{' '}
                <Link href="/privacy" className="text-[#0050FF] hover:underline">Privacy Policy</Link>,
                which is incorporated into these Terms by reference. By using the Platform, you acknowledge that you have read and agree to our Privacy Policy.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">15. Indemnity</h2>
              <p>You agree to indemnify, defend and hold harmless Polaris Commerce Group Private Limited, Tripsure, and their respective directors, officers, employees, affiliates, Suppliers and partners against any claims, liabilities, damages, losses, penalties, costs or expenses (including reasonable legal fees) arising out of or in connection with: your use or misuse of the Platform; your breach of these Terms; any fraudulent activity on your part; or your violation of applicable law.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">16. Liability</h2>
              <h3 className="mt-3 mb-2 font-semibold text-[#0050FF]">Consumer Rights</h3>
              <p>Nothing in these Terms limits or excludes any rights you may have under applicable consumer protection legislation in India, including the Consumer Protection Act, 2019.</p>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Liability for Travel Services</h3>
              <p>Travel Services are provided by independent Suppliers. Tripsure acts solely as an intermediary and shall not be liable for hotel quality, denial of check-in, overbooking, service deficiencies, hotel closures, visa or immigration issues, local disputes, Supplier insolvency, Supplier negligence or misrepresentation by Suppliers. Hotel descriptions, star ratings, photographs and amenity listings are supplied by third parties and not independently verified by Tripsure.</p>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Limitation of Liability</h3>
              <p>Tripsure shall not be liable for any indirect, consequential, incidental or special damages, including loss of profits, loss of opportunity, emotional distress, travel disruptions, missed connections, data loss or business interruption, arising from use of the Platform or any Travel Services. In no event shall the aggregate liability of Tripsure to you exceed the total booking amount paid by you for the specific booking giving rise to the claim.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">17. Force Majeure</h2>
              <p>Tripsure shall not be liable for any failure or delay in performance arising from events beyond its reasonable control, including natural disasters, pandemics, government restrictions, war, civil unrest, terrorism, airline disruptions, Supplier shutdowns, internet or payment network failures, labour strikes or other acts of God.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">18. Electronic Communications</h2>
              <p>You agree that Tripsure may communicate with you electronically — by email, SMS, WhatsApp, in-app notification or by posting notices on the Platform — and that such communications satisfy any legal requirement that they be in writing, to the extent permitted by applicable law.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">19. Third-Party Content and Links</h2>
              <p>The Platform may contain content, information or links provided by third parties (including Suppliers). Tripsure does not control and is not responsible for third-party websites, content, products or services. Accessing any third-party link is at your own risk and subject to that party's own terms and policies.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">20. Dispute Resolution and Arbitration</h2>
              <p>In the event of any dispute or claim arising out of or in connection with these Terms or your use of the Platform, the parties shall first attempt to resolve the matter amicably by notifying Tripsure at <a href="mailto:contact@tripsure.com" className="text-[#0050FF] hover:underline">contact@tripsure.com</a>.</p>
              <p className="mt-2">If the dispute is not resolved within 30 days of such notification, it shall be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996, as amended. The seat of arbitration shall be Bengaluru, Karnataka; proceedings shall be conducted in English; and the Tribunal shall comprise a sole arbitrator appointed by mutual agreement.</p>
              <p className="mt-2">Nothing in this clause limits your right to approach any consumer dispute redressal forum or commission established under the Consumer Protection Act, 2019 or any other applicable statute.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">21. Governing Law</h2>
              <p>These Terms are governed by and construed in accordance with the laws of India.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">22. Severability</h2>
              <p>If any provision of these Terms is found to be invalid, unlawful or unenforceable, that provision shall be deemed modified to the minimum extent necessary to make it valid and enforceable. The remaining provisions shall continue in full force and effect.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">23. Contact Information and Grievance Officer</h2>
              <p className="mb-3">For general queries, support or feedback:</p>
              <div className="rounded-2xl border border-[#f1edff] bg-[#F7F3EC] p-5">
                <p className="font-semibold text-[#1A1A2E]">Tripsure | Polaris Commerce Group Private Limited</p>
                <p className="mt-1">CIN: <span className="font-mono">U52291KA2026PTC217236</span></p>
                <p>Email: <a href="mailto:contact@tripsure.com" className="text-[#0050FF] hover:underline">contact@tripsure.com</a></p>
                <p>Phone: <a href="tel:+918792548484" className="text-[#0050FF] hover:underline">+91 87925 48484</a></p>
                <p className="mt-3 font-semibold text-[#1A1A2E]">Grievance Officer</p>
                <p>Name: Pankaj Sapela &nbsp;|&nbsp; Designation: Director</p>
                <p>Email: <a href="mailto:grievances@tripsure.com" className="text-[#0050FF] hover:underline">grievances@tripsure.com</a></p>
              </div>
            </section>

          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-100 bg-white py-5 text-xs text-[#64748B]">
          <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 px-4 md:flex-row md:px-6">
            <span>© 2025 Polaris Commerce Pvt. Ltd. All rights reserved. Tripsure is a brand of Polaris Commerce Pvt. Ltd.</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="hover:text-[#1A1A2E] transition-colors">Home</Link>
              <Link href="/terms" className="hover:text-[#1A1A2E] transition-colors">Terms &amp; Conditions</Link>
              <Link href="/privacy" className="hover:text-[#1A1A2E] transition-colors">Privacy Policy</Link>
              <Link href="/#contact" className="hover:text-[#1A1A2E] transition-colors">Contact Us</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
