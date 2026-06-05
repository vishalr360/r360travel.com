# CHECKLIST.md — Technical SEO, Performance & AEO
Target: Lighthouse ≥ 90 on all categories.
Last updated: 2026-06-05

---

## Automated Checks (run on every deploy)

- [ ] Lighthouse score ≥ 90: Performance, Accessibility, SEO, Best Practices
  → Run: `npx lighthouse https://tripsure.com --output=html`
- [ ] All structured data validates
  → Check: https://validator.schema.org / https://search.google.com/test/rich-results
- [ ] robots.txt accessible at https://tripsure.com/robots.txt (returns 200)
- [ ] sitemap.xml accessible at https://tripsure.com/sitemap.xml (returns 200, valid XML)
- [ ] sitemap-index.xml accessible at https://tripsure.com/sitemap-index.xml
- [ ] llms.txt accessible at https://tripsure.com/llms.txt (returns 200, Content-Type: text/plain)
- [ ] llms-full.txt accessible at https://tripsure.com/llms-full.txt
- [ ] .well-known/security.txt accessible (returns 200)
- [ ] No broken internal links (run: `npx linkinator https://tripsure.com`)
- [ ] All pages return correct HTTP status: 200 for live, 404 for missing
- [ ] 404 page returns HTTP 404 (not a 200 with 404 content)
- [ ] All redirects return 301 (not 302): www → non-www
- [ ] Security headers present → check: https://securityheaders.com/?q=tripsure.com
- [ ] No console errors in production build (`npm run build` — no TypeScript errors)
- [ ] Open Graph tags present and correct on all pages
- [ ] Twitter Card tags present and correct on all pages
- [ ] Canonical URL present on all pages, pointing to https://tripsure.com/[path]
- [ ] hreflang en-in, en, x-default present on homepage

---

## SEO Checks

- [ ] `<html lang="en-IN">` on all pages
- [ ] One `<h1>` per page containing primary keyword
- [ ] Heading hierarchy h1 → h2 → h3, no skipped levels
- [ ] `<title>` unique on every page, ≤60 chars
- [ ] `<meta name="description">` unique on every page, 140-155 chars
- [ ] `<link rel="canonical">` present on every page
- [ ] JSON-LD: Organization schema present globally
- [ ] JSON-LD: WebSite schema with SearchAction
- [ ] JSON-LD: TravelAgency schema
- [ ] JSON-LD: FAQPage with 7+ questions
- [ ] JSON-LD: HowTo with 4-step earn flow
- [ ] FAQ section visible on homepage with matching schema
- [ ] Footer links include Sitemap link (/sitemap.xml)
- [ ] All external links have rel="noopener noreferrer"

---

## Accessibility Checks (WCAG 2.1 AA)

- [ ] Skip-to-content link as first focusable element
- [ ] `<main id="main-content">` landmark on every page
- [ ] `<header role="banner">` on every page
- [ ] `<footer role="contentinfo">` on every page
- [ ] `<nav aria-label="Main navigation">` on primary nav
- [ ] All images have descriptive `alt` text (decorative: `alt=""`)
- [ ] Focus ring visible on all interactive elements (:focus-visible)
- [ ] Touch targets ≥44×44px
- [ ] prefers-reduced-motion respected (all animations suppressed)
- [ ] Color contrast body text ≥4.5:1 (check: https://webaim.org/resources/contrastchecker/)
  - #1A1A2E on #FFFFFF: ✓ (verify: ~17.7:1)
  - #64748B on #FFFFFF: verify (target ≥4.5:1 for body text)
  - #FF5B24 on #FFFFFF: use for icons/CTAs ONLY (fails AA for body text)
- [ ] No information conveyed by color alone
- [ ] All form inputs have linked `<label>` elements
- [ ] Error messages linked via aria-describedby

---

## Performance Checks (Core Web Vitals)

- [ ] LCP < 2.5s (aim for < 1.5s for informational site)
- [ ] INP < 200ms
- [ ] CLS = 0 (no layout shifts)
- [ ] All images have explicit width/height attributes
- [ ] Hero image (if any): loading="eager" fetchpriority="high"
- [ ] All below-fold images: loading="lazy" decoding="async"
- [ ] Font `font-display: swap` on all @font-face rules
- [ ] Brotli compression enabled: `curl -I -H "Accept-Encoding: br" https://tripsure.com/`
  → Expected: `Content-Encoding: br`
- [ ] No render-blocking resources in `<head>` (max 1: critical CSS)
- [ ] JavaScript deferred: `<script defer>` or `<script async>` for non-critical
- [ ] Cache-Control headers correct: assets immutable 1yr, HTML max-age 1hr
- [ ] Image formats: WebP/AVIF served to supporting browsers

---

## AEO (Answer Engine Optimization) Checks

- [ ] /llms.txt accessible and factually correct
- [ ] /llms-full.txt accessible with full entity context
- [ ] Organization schema has sameAs with all social profiles
- [ ] FAQPage schema matches visible FAQ section on page
- [ ] Entity disambiguation text present: "Tripsure (tripsure.com) is operated by Polaris Commerce Pvt. Ltd., India. Distinct from TripSure travel insurance (UK)."
- [ ] Answer blocks with Schema.org itemprop="acceptedAnswer" present
- [ ] CIN number in body copy of at least one page (for entity anchoring)
- [ ] Parent company (Reward360) mentioned by full legal name in content
- [ ] llms.txt updated when new features/programmes launch

---

## Manual Steps After Deploy

- [ ] Submit sitemap to Google Search Console
  → https://search.google.com/search-console → Sitemaps → https://tripsure.com/sitemap-index.xml
- [ ] Submit sitemap to Bing Webmaster Tools
  → https://www.bing.com/webmasters/
- [ ] Add google-site-verification token in pages/_document.tsx (line ~64)
- [ ] Add msvalidate.01 (Bing) token in pages/_document.tsx (line ~65)
- [ ] Add GTM container ID in pages/_document.tsx (line ~70)
- [ ] Create og-image.png (1200×630) — wordmark on white/brand bg → save to /public/og-image.png
- [ ] Self-host Inter font: download inter-var.woff2 → /public/fonts/ → update _document.tsx
- [ ] Generate PWA icon sizes from tripsure-icon.png (72, 96, 128, 144, 152, 192, 384, 512)
- [ ] Create Wikidata entity for Tripsure → add to sameAs in Organization schema
- [ ] Create /press/ page for AEO citation sourcing
- [ ] Update security.txt Expires date annually
- [ ] Monitor Core Web Vitals in GSC after deploy

---

## Pre-Launch Checklist (Hotels)

- [ ] Replace /hotels/index.tsx placeholder with full booking UI
- [ ] Activate Product schema in _document.tsx (commented section)
- [ ] Add hotel city pages to sitemap.xml
- [ ] Activate sitemap-hotels.xml in sitemap-index.xml
- [ ] Update llms.txt with "Hotels: live" status
- [ ] Update JSON-LD Organization schema hasOfferCatalog with live hotel data
