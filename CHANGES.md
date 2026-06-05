# CHANGES.md — Technical SEO, Performance & AEO Implementation
Generated: 2026-06-05

---

## public/robots.txt (NEW)
**Section:** 3.2  
**Changes:** AI-friendly robots.txt with explicit Allow for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot, YouBot, cohere-ai. Disallow /api/, /_next/, UTM/ref params. Sitemap references.  
**Manual steps:** None.

## public/sitemap.xml (NEW)
**Section:** 3.1  
**Changes:** Full URL set with hreflang, changefreq, priority. All current pages + placeholder coming-soon pages. Scaffold comments for hotel/flight city pages on launch.  
**Manual steps:** Update `<lastmod>` dates on each deploy. Add hotel/flight pages on launch.

## public/sitemap-index.xml (NEW)
**Section:** 3.1  
**Changes:** Scalable sitemap index pointing to sitemap.xml. Commented stubs for sitemap-hotels.xml, sitemap-flights.xml.  
**Manual steps:** Activate stubs on hotel/flight launch.

## public/llms.txt (NEW)
**Section:** 8.1  
**Changes:** AI agent context file per llmstxt.org standard. Covers: entity disambiguation, key facts, product details, loyalty programmes, bank partnerships, contact, canonical pages.  
**Manual steps:** Update when new programmes or features launch.

## public/llms-full.txt (NEW)
**Section:** 8.2  
**Changes:** Extended version for deep AI crawl. Full loyalty programme list (Phase 1 + 2), BIN detection explanation, FAQ in Q&A format, company background, legal details.  
**Manual steps:** Update when new features launch.

## public/.well-known/security.txt (NEW)
**Section:** 3.3  
**Changes:** RFC 9116 compliant. Contact, expiry, language, policy URL.  
**Manual steps:** Update Expires date annually.

## public/humans.txt (NEW)
**Section:** 3.4  
**Changes:** Team, technology stack, attributions.  
**Manual steps:** Update as stack evolves.

## next.config.ts (UPDATED)
**Section:** 5.5, 5.6, 10.1  
**Changes:**
- Security headers: HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-Content-Type-Options
- www → non-www 301 redirect (canonical domain)
- Legacy path redirects: /home, /index, /index.html → /
- Aggressive caching: fonts/assets immutable 1yr, HTML 1hr, llms.txt 1hr
- Next.js image optimisation: AVIF + WebP formats, full device size array
- compress: true (Brotli/Gzip)
- trailingSlash: false for URL consistency  
**Manual steps:** Verify CSP allows your GTM container after adding GTM ID.

## pages/_document.tsx (UPDATED)
**Section:** 1.8, 2.1–2.6, 4.1  
**Changes:**
- `<html lang="en-IN">` for India locale
- DNS prefetch for GTM, Analytics, Fonts
- Full favicon chain: SVG → PNG 32px/192px → ICO → Apple Touch Icon 180px
- site.webmanifest link, theme-color, msapplication
- GTM placeholder (commented) with correct async pattern
- Skip-to-content link as first focusable element (WCAG 2.4.1)
- JSON-LD schemas: Organization, WebSite (SearchAction), TravelAgency, FAQPage (7 Q&As), HowTo (4-step earn flow)
- Product schema stub commented for hotel launch  
**Manual steps:**
- `INSERT_GSC_TOKEN` in google-site-verification meta
- `INSERT_BING_TOKEN` in msvalidate.01 meta
- `GTM-XXXXXXX` with real GTM container ID
- Submit sitemap to GSC: https://search.google.com/search-console
- Submit sitemap to Bing Webmaster Tools

## content/r360travel.ts (UPDATED)
**Section:** 1.2, 1.3, 7.3, 8.4  
**Changes:**
- meta.title: 'Tripsure — Book Hotels & Flights, Earn Points | India' (B2C, primary keyword first)
- meta.description: loyalty-native, 140-155 chars, action keywords
- meta.url: https://tripsure.com (canonical, no www)
- meta.keywords: 10 B2C keyword clusters
- hero.title (H1): 'Book Hotels & Flights. Earn Loyalty Points.'
- hero.subtitle: B2C — loyalty programmes, BIN detection
- hero.stats: loyalty programme count, BIN detection, global coverage
- logoStrip: loyalty programme names (not supplier names)
- whySection: BIN detection, programme choice, Access Perks (B2C)
- productSection: 4-step HowTo matching schema
- partnerSection: loyalty programmes + bank platforms
- technologySection: BIN intelligence, rate aggregation, Access Perks
- whoWeServeSection: credit card holders + loyalty members (B2C)
- faqSection: 7 FAQ items matching FAQPage JSON-LD schema
- contactSection: B2C early access CTA
- footer.tagline: 'Book travel. Earn points. Every time.'
- footer.columns: added Hotels, Flights, Tripsure+, Sitemap links

## pages/index.tsx (UPDATED)
**Section:** 1.4, 1.5, 1.6, 6.1, 6.2, 7.2, 8.4  
**Changes:**
- Import faqSection from content
- hreflang: en-in, en, x-default (Section 1.4)
- header role="banner", nav aria-label="Main navigation" (WCAG 4.1.2)
- `<main id="main-content">` landmark (WCAG 1.3.1)
- H1 id="hero-heading" for aria-labelledby on section
- FAQ section with `<details>` accordion + Schema.org itemScope microdata
- AEO answer block with explicit Q&A itemprop for featured snippets
- footer role="contentinfo"
- Descriptive alt text on logo images
- hreflang uses hrefLang (React camelCase)  
**Manual steps:** None.

## styles/globals.css (UPDATED)
**Section:** 5.7, 6.3, 6.6  
**Changes:**
- :focus-visible 3px brand-blue ring (WCAG 2.4.7, replaces existing 2px)
- Skip-link visually hidden until focused (WCAG 2.4.1 complement)
- prefers-reduced-motion media query disabling all animations (WCAG 2.3.3)
- CSS containment on .hero-section for layout performance  
**Manual steps:** None.

## pages/404.tsx (NEW)
**Section:** 10.2  
**Changes:** Custom 404 page with HTTP 404 status (Next.js default for pages/404.tsx), helpful links, same branding, ARIA landmarks.  
**Manual steps:** None.

## pages/hotels/index.tsx (NEW)
**Section:** 11.1  
**Changes:** "Book Hotels, Earn Loyalty Points" placeholder with feature list, email capture CTA. Unique title/description/canonical, OG tags.  
**Manual steps:** Replace with full booking UI on hotel launch.

## pages/flights/index.tsx (NEW)
**Section:** 11.1  
**Changes:** "Book Flights, Earn Miles" placeholder with feature list. Unique title/description/canonical, OG tags.  
**Manual steps:** Replace with full booking UI on flight launch.

## pages/tripsure-plus/index.tsx (NEW)
**Section:** 11.1  
**Changes:** Tripsure+ subscription coming-soon page. ₹3,999/yr pricing, feature cards. SEO-optimised title/description.  
**Manual steps:** Replace with subscription flow on Tripsure+ launch.

## pages/whatsapp-booking/index.tsx (NEW)
**Section:** 11.1  
**Changes:** WhatsApp hotel booking coming-soon page. 5-step HowTo content. SEO-optimised.  
**Manual steps:** Replace with live WhatsApp flow on launch.

## public/site.webmanifest (UPDATED)
**Section:** 4.1  
**Changes:** PWA manifest with lang=en-IN, categories, shortcuts for Hotels/Flights, maskable icon, proper icon chain.  
**Manual steps:** Generate proper icon sizes (72, 96, 128, 144, 152, 192, 384, 512) from tripsure-icon.png.

---

## Items Still Required (Manual)

| Item | Priority | Notes |
|------|----------|-------|
| Insert GTM container ID | HIGH | Replace GTM-XXXXXXX in _document.tsx |
| Insert GSC verification token | HIGH | Replace INSERT_GSC_TOKEN in _document.tsx |
| Insert Bing verification token | MEDIUM | Replace INSERT_BING_TOKEN in _document.tsx |
| Create og-image.png (1200×630) | HIGH | Needed for social sharing previews |
| Submit sitemap to GSC | HIGH | After deploy: Search Console → Sitemaps |
| Submit sitemap to Bing | MEDIUM | Bing Webmaster Tools |
| Self-host Inter font woff2 | MEDIUM | Section 5.2: eliminate Google Fonts DNS lookup |
| Generate PWA icon sizes | LOW | 72, 96, 144, 192, 384, 512px from tripsure-icon.png |
| Create Wikidata entity | MEDIUM | Entity disambiguation for Knowledge Graph |
| Create Google Business Profile | LOW | If applicable for local presence |
| Security.txt annual update | LOW | Update Expires yearly |
| Activate hotel city sitemaps | FUTURE | On hotel launch |
| Activate Product schema | FUTURE | On hotel launch |
| Create /press/ page | MEDIUM | Section 8.7: AEO citation source |
