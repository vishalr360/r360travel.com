import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics 4 — loads after hydration, never blocks React */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DSJJ1QQFXY"
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DSJJ1QQFXY');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
