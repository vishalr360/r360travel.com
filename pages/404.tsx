import Head from 'next/head';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Page Not Found | Tripsure</title>
        <meta name="description" content="Sorry, this page doesn't exist. Find hotel search, technology info and more on Tripsure — AI-powered hotel technology platform." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header role="banner" className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-4">
            <Link href="/" aria-label="Tripsure — go to homepage">
              <img src="/tripsure_logo.svg" alt="Tripsure" className="h-[28px] w-auto" />
            </Link>
          </div>
        </header>

        {/* Main */}
        <main id="main-content" className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-lg">
            <p className="text-[120px] font-bold leading-none text-[#F1F3F7] select-none" aria-hidden="true">404</p>
            <h1 className="text-3xl font-bold text-[#1A1A2E] tracking-tight mt-2 mb-4">
              Page not found
            </h1>
            <p className="text-base text-[#64748B] leading-relaxed mb-8">
              Sorry, we couldn't find that page. You may have followed a broken link or the
              page may have moved. Head back to Tripsure — AI-powered hotel technology platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="bg-[#FF5B24] text-white px-6 py-3 rounded-[8px] font-medium hover:bg-[#E54E1B] transition-colors"
              >
                Go to homepage
              </Link>
              <Link
                href="/hotels"
                className="border border-gray-200 text-[#1A1A2E] px-6 py-3 rounded-[8px] font-medium hover:border-[#0050FF] hover:text-[#0050FF] transition-colors"
              >
                Book a hotel
              </Link>
              <Link
                href="/#contact"
                className="border border-gray-200 text-[#1A1A2E] px-6 py-3 rounded-[8px] font-medium hover:border-[#0050FF] hover:text-[#0050FF] transition-colors"
              >
                Contact us
              </Link>
            </div>

            <nav aria-label="Helpful links" className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#64748B]">
              <Link href="/#product" className="hover:text-[#0050FF] transition-colors">How It Works</Link>
              <Link href="/privacy" className="hover:text-[#0050FF] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#0050FF] transition-colors">Terms</Link>
              <Link href="/sitemap.xml" className="hover:text-[#0050FF] transition-colors">Sitemap</Link>
            </nav>
          </div>
        </main>

        {/* Footer */}
        <footer role="contentinfo" className="border-t border-gray-100 py-5 text-center text-xs text-[#64748B]">
          <p>© 2025 Polaris Commerce Pvt. Ltd. All rights reserved. Tripsure is a brand of Polaris Commerce Pvt. Ltd.</p>
        </footer>
      </div>
    </>
  );
}
