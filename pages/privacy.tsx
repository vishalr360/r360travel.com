import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Tripsure by Polaris Commerce Group</title>
        <meta name="description" content="Tripsure's privacy policy — how Polaris Commerce Group Private Limited collects, uses and protects your personal data under the DPDP Act 2023." />
        <link rel="canonical" href="https://www.tripsure.com/privacy" />
        <meta property="og:title" content="Privacy Policy — Tripsure" />
        <meta property="og:description" content="How Tripsure handles your personal data. Operated by Polaris Commerce Group Private Limited (CIN: U52291KA2026PTC217236)." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tripsure.com/privacy" />
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
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A2E] md:text-4xl">Privacy Policy</h1>
          <div className="mt-2 text-sm text-[#64748B] space-y-0.5">
            <p>Operated by <strong className="text-[#1A1A2E]">Polaris Commerce Group Private Limited</strong></p>
            <p>CIN: U52291KA2026PTC217236 &nbsp;|&nbsp; Effective Date: June 3, 2025 &nbsp;|&nbsp; Last Updated: June 3, 2025</p>
          </div>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#64748B]">

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">1. Introduction</h2>
              <p>
                Polaris Commerce Group Private Limited operates the Tripsure platform ("Tripsure", "we", "our" or "us"). We are committed to handling your personal information responsibly and transparently.
              </p>
              <p className="mt-2">
                This Privacy Policy explains what information we collect when you use the Tripsure website, mobile site or application (collectively, the "Platform"), how we use it, with whom we share it, and what rights you have in relation to it. It should be read alongside our Terms of Service.
              </p>
              <p className="mt-2">
                By accessing or using the Platform, you acknowledge that you have read and understood this Privacy Policy. If you do not agree, please discontinue use of the Platform.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">2. Who We Are</h2>
              <p>For the purposes of applicable data protection law, the data fiduciary responsible for your personal information is:</p>
              <div className="mt-3 rounded-2xl border border-[#f1edff] bg-[#F7F3EC] p-5">
                <p className="font-semibold text-[#1A1A2E]">Polaris Commerce Group Private Limited</p>
                <p className="mt-1">CIN: <span className="font-mono">U52291KA2026PTC217236</span></p>
                <p>Email: <a href="mailto:contact@tripsure.com" className="text-[#0050FF] hover:underline">contact@tripsure.com</a></p>
                <p>Phone: <a href="tel:+918792548484" className="text-[#0050FF] hover:underline">+91 87925 48484</a></p>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">3. Information We Collect</h2>
              <p>We collect only the information necessary to operate the Platform and facilitate your bookings. This falls into two broad categories.</p>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Information You Provide</h3>
              <p className="mb-2">When you register, make a booking or contact us, you may provide:</p>
              <ul className="list-none space-y-1 pl-4">
                <li>– Identity and contact details — name, email address, phone number;</li>
                <li>– Travel documentation — passport number or government-issued identification, where required for international booking fulfilment or regulatory compliance;</li>
                <li>– Payment information — processed securely through our payment gateway partners; we do not store full card details on our systems; and</li>
                <li>– Correspondence — communications you send us, including support queries and feedback.</li>
              </ul>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Information Collected Automatically</h3>
              <p>When you use the Platform, we may automatically collect certain technical information, including device type and identifiers, browser type and version, operating system, IP address, pages visited and actions taken on the Platform, and referral URLs. This information is used for platform security, analytics and service improvement.</p>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Information from Third Parties</h3>
              <p>We may receive booking-related information from accommodation suppliers and payment partners in connection with the fulfilment of your reservation. We do not purchase or acquire personal data from unrelated third-party data brokers.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">4. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect for the following purposes:</p>
              <ul className="list-none space-y-1 pl-4">
                <li>– To process and confirm your bookings and communicate booking status to you;</li>
                <li>– To verify your identity and comply with applicable legal and regulatory requirements, including tax and anti-money laundering obligations;</li>
                <li>– To process payments and manage refunds, disputes and chargebacks;</li>
                <li>– To respond to your queries, complaints and support requests;</li>
                <li>– To send transactional communications relating to your bookings — such as confirmations, reminders and updates;</li>
                <li>– To send promotional communications where you have consented or where we are otherwise permitted to do so under applicable law;</li>
                <li>– To detect, investigate and prevent fraud, misuse, suspicious activity or security incidents;</li>
                <li>– To improve, personalise and develop the Platform and our services; and</li>
                <li>– To comply with our legal obligations and enforce our Terms of Service.</li>
              </ul>
              <p className="mt-3">We process your personal information on the following legal bases: performance of a contract with you (primarily for booking fulfilment); compliance with a legal obligation; our legitimate interests (such as fraud prevention, security and service improvement); and, where required, your consent.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">5. Travel Documents and Sensitive Information</h2>
              <p>Passport numbers and government-issued identification details fall within categories of personal information that warrant heightened care. We collect this information only where it is strictly necessary — for example, to fulfil international hotel bookings that require guest identification, or to comply with applicable legal obligations.</p>
              <p className="mt-2">Such information is shared only with the relevant accommodation supplier or authority to whom disclosure is legally required or contractually necessary for your booking. It is not used for marketing and is not shared with any unrelated third party.</p>
              <p className="mt-2">We retain such information only for as long as necessary for the purpose for which it was collected, or as required by law, following which it is securely deleted.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">6. Sharing Your Information</h2>
              <p>We do not sell your personal information. We share it only in the following circumstances:</p>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Accommodation Suppliers and Partners</h3>
              <p>We share booking-related information — including your name, contact details and, where required, travel documentation — with the relevant hotel or accommodation supplier to fulfil your reservation. Suppliers are required to handle your information in accordance with applicable law.</p>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Payment Processors</h3>
              <p>Payment information is processed by our PCI-DSS compliant payment gateway partners. These partners operate under strict data security obligations and are not permitted to use your payment data for their own purposes.</p>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Technology and Service Providers</h3>
              <p>We engage third-party service providers for functions such as cloud hosting, analytics, communications and customer support. These providers process data on our behalf and are bound by contractual obligations to protect it.</p>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Legal and Regulatory Disclosure</h3>
              <p>We may disclose your information where required by law, court order, regulatory authority or government directive, or where we believe disclosure is necessary to protect our legal rights, prevent fraud or ensure the safety of our users.</p>

              <h3 className="mt-4 mb-2 font-semibold text-[#0050FF]">Business Transfers</h3>
              <p>In the event of a merger, acquisition, restructuring or sale of all or part of our business, your information may be transferred as part of that transaction. We will notify you of any such change as required by law.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">7. International Transfer of Data</h2>
              <p>Tripsure operates in connection with global accommodation suppliers and technology partners. Your information may be transferred to and processed in countries outside India in connection with booking fulfilment. Where such transfers occur, we take reasonable steps to ensure that your information receives an adequate level of protection consistent with applicable Indian data protection law.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">8. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting and regulatory requirements. Booking records and associated personal data are generally retained for a period of seven years following the date of the booking, in line with standard financial record-keeping obligations under Indian law.</p>
              <p className="mt-2">Technical and usage data collected automatically is retained for shorter periods as appropriate for its purpose. Where you request deletion of your account, we will delete or anonymise your personal information within a reasonable period, except where retention is required by law or for the resolution of outstanding disputes.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">9. Your Rights</h2>
              <p className="mb-2">Subject to applicable law, including the Digital Personal Data Protection Act, 2023 ("DPDP Act"), you have the following rights in relation to your personal information:</p>
              <ul className="list-none space-y-1 pl-4">
                <li>– <strong className="text-[#1A1A2E]">Access</strong> — the right to request confirmation of whether we process your personal data and to obtain a summary of such data;</li>
                <li>– <strong className="text-[#1A1A2E]">Correction</strong> — the right to request correction of inaccurate or incomplete personal data;</li>
                <li>– <strong className="text-[#1A1A2E]">Erasure</strong> — the right to request deletion of your personal data, subject to applicable legal exceptions;</li>
                <li>– <strong className="text-[#1A1A2E]">Grievance redressal</strong> — the right to have your data-related grievances addressed in a timely and effective manner; and</li>
                <li>– <strong className="text-[#1A1A2E]">Nomination</strong> — the right to nominate an individual to exercise your rights in the event of your death or incapacity, as provided under the DPDP Act.</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, please contact our Grievance Officer at <a href="mailto:grievances@tripsure.com" className="text-[#0050FF] hover:underline">grievances@tripsure.com</a>. We will respond within the timeframe required by applicable law.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">10. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies to operate and improve the Platform, remember your preferences, analyse usage patterns and deliver relevant content. You can control cookie settings through your browser preferences; however, disabling certain cookies may affect the functionality of the Platform.</p>
              <p className="mt-2">We do not use tracking technologies to build detailed profiles for the purpose of selling such profiles to third parties.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">11. Children's Privacy</h2>
              <p>The Platform is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have inadvertently collected information from a minor, we will take steps to delete it promptly. If you believe a minor has provided us with their personal information, please contact us at <a href="mailto:contact@tripsure.com" className="text-[#0050FF] hover:underline">contact@tripsure.com</a>.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">12. Security</h2>
              <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, destruction or alteration. Payment data is processed through PCI-DSS compliant infrastructure. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.</p>
              <p className="mt-2">In the event of a personal data breach that is likely to result in harm to you, we will notify you and the relevant authorities as required under applicable law.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">13. Third-Party Websites and Services</h2>
              <p>The Platform may contain links to third-party websites or services. This Privacy Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party sites you visit, as we have no control over their content or data practices.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">14. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology or legal obligations. The "Last Updated" date at the top of this document will reflect the most recent revision. Where changes are material, we will take reasonable steps to bring them to your attention. Your continued use of the Platform following any update constitutes acceptance of the revised Policy.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">15. Grievance Officer</h2>
              <p className="mb-3">In accordance with applicable law, including the DPDP Act and the Information Technology Act, 2000, we have appointed a Grievance Officer to address complaints and queries relating to the processing of your personal data.</p>
              <div className="rounded-2xl border border-[#f1edff] bg-[#F7F3EC] p-5">
                <p className="font-semibold text-[#1A1A2E]">Grievance Officer</p>
                <p className="mt-1">Name: <strong className="text-[#1A1A2E]">Pankaj Sapela</strong></p>
                <p>Designation: Director</p>
                <p>Polaris Commerce Group Private Limited</p>
                <p>Email: <a href="mailto:grievances@tripsure.com" className="text-[#0050FF] hover:underline">grievances@tripsure.com</a></p>
                <p className="mt-2 text-xs">Grievances will be acknowledged and addressed within the timeframe prescribed under applicable law. If you are not satisfied with the resolution, you may escalate your complaint to the Data Protection Board of India, once constituted and operational under the DPDP Act.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-[#1A1A2E]">16. Contact Us</h2>
              <p className="mb-3">For general privacy-related queries or to exercise your rights, you may also reach us at:</p>
              <div className="rounded-2xl border border-[#f1edff] bg-[#F7F3EC] p-5">
                <p className="font-semibold text-[#1A1A2E]">Tripsure | Polaris Commerce Group Private Limited</p>
                <p className="mt-1">CIN: <span className="font-mono">U52291KA2026PTC217236</span></p>
                <p>Email: <a href="mailto:contact@tripsure.com" className="text-[#0050FF] hover:underline">contact@tripsure.com</a></p>
                <p>Phone: <a href="tel:+918792548484" className="text-[#0050FF] hover:underline">+91 87925 48484</a></p>
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
