import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { Mail, Phone, Linkedin, Twitter, Instagram, ArrowUpRight, ChevronUp, Menu, X } from 'lucide-react';
import {
  meta,
  navLinks,
  hero,
  logoStrip,
  whySection,
  productSection,
  partnerSection,
  technologySection,
  whoWeServeSection,
  contactSection,
  company,
  footer,
} from '../content/r360travel';

/* ─── Scroll-reveal wrapper ─────────────────────────────────── */
function RevealSection({
  children,
  className = '',
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    if (typeof window === 'undefined' || !(window as any).IntersectionObserver) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}

/* ─── Gradient text helper ───────────────────────────────────── */
function GradientText({ children }: { children: ReactNode }) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage:
          'linear-gradient(90deg, #0050FF 0%, #FF5B24 100%)',
      }}
    >
      {children}
    </span>
  );
}

/* ─── Section heading ────────────────────────────────────────── */
function SectionHeading({ title, description, className = '' }: { title: string; description?: string; className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A2E] tracking-[-0.03em] leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-[#64748B] leading-[1.6] tracking-[-0.015em] max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

/* ─── "Learn More" button ────────────────────────────────────── */
function LearnMoreBtn({ href = '#' }: { href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 bg-[#393939] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors group"
    >
      Learn More
      <span className="bg-white text-[#393939] rounded-full p-0.5 group-hover:bg-gray-100 transition-colors">
        <ArrowUpRight className="h-3 w-3" />
      </span>
    </a>
  );
}

/* ─── Icon box ───────────────────────────────────────────────── */
function IconBox({ gradient, src }: { gradient: string; src?: string }) {
  return (
    <div
      className="w-16 h-16 rounded-full border border-[#f1edff] flex items-center justify-center shrink-0"
      style={{ backgroundImage: `linear-gradient(135deg, ${gradient})` }}
    >
      {src ? (
        <img src={src} alt="" className="w-8 h-8 object-contain" />
      ) : (
        <div className="w-6 h-6 bg-white/30 rounded-md" />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Head>
        {/* ── Title + Description ─────────────────────────────── */}
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content="Polaris Commerce Group Private Limited" />

        {/* ── Canonical ───────────────────────────────────────── */}
        <link rel="canonical" href={meta.url} />

        {/* ── Open Graph ──────────────────────────────────────── */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={meta.ogImageAlt} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:locale" content="en_IN" />

        {/* ── Twitter Card ────────────────────────────────────── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterSite} />
        <meta name="twitter:creator" content={meta.twitterSite} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.ogImage} />
        <meta name="twitter:image:alt" content={meta.ogImageAlt} />

        {/* ── Geo + Regional ──────────────────────────────────── */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru, India" />
        <meta name="language" content="English" />

        {/* ── Verification placeholders ────────────────────────── */}
        {/* <meta name="google-site-verification" content="ADD_YOUR_GSC_TOKEN" /> */}
      </Head>

      <div id="top" className="min-h-screen bg-white text-[#1A1A2E]">

        {/* ── NAVBAR ──────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 md:px-20 py-4 md:py-5">
            {/* Logo */}
            <a href="#top" className="shrink-0">
              <img src="/tripsure_logo.svg" alt="Tripsure" className="h-[32px] w-auto object-contain" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center rounded-full shadow-[0_9px_10px_0_rgba(11,15,27,0.02)]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-base text-[#1A1A2E] hover:text-[#0050FF] transition-colors whitespace-nowrap tracking-[-0.015em]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="flex items-center px-6 py-3 rounded-full border border-[#FF5B24] text-[#1A1A2E] text-base tracking-[-0.015em] hover:bg-orange-50 transition-colors shadow-[0_9px_10px_0_rgba(11,15,27,0.02)]"
              >
                Partner with us
              </a>
              <a
                href="#contact"
                className="bg-[#FF5B24] text-white px-6 py-3 rounded-[8px] text-base font-medium tracking-[-0.015em] hover:bg-[#E54E1B] transition-colors"
              >
                Get Early Access
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#1A1A2E]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base text-[#1A1A2E] hover:text-[#0050FF] border-b border-gray-50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-3">
                <a
                  href="#contact"
                  className="text-center py-3 rounded-full border border-[#FF5B24] text-[#1A1A2E] text-base"
                  onClick={() => setMobileOpen(false)}
                >
                  Partner with us
                </a>
                <a
                  href="#contact"
                  className="text-center py-3 rounded-[8px] bg-[#FF5B24] text-white text-base font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Early Access
                </a>
              </div>
            </div>
          )}
        </header>

        {/* ── HERO ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-white pt-16 pb-0">
          {/* Decorative background lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
              className="absolute left-0 top-0 h-full w-1/2 opacity-40"
              viewBox="0 0 680 755"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M-32 -77 Q200 200 160 702" stroke="#e5e7eb" strokeWidth="1" fill="none" />
              <path d="M-32 -77 Q300 300 200 755" stroke="#e5e7eb" strokeWidth="1" fill="none" />
              <path d="M150 -77 Q400 300 465 720" stroke="#e5e7eb" strokeWidth="1" fill="none" />
              <path d="M430 308 Q500 450 560 678" stroke="#e5e7eb" strokeWidth="1" fill="none" />
              <circle cx="163" cy="104" r="5" fill="#e5e7eb" />
              <circle cx="565" cy="466" r="4" fill="#e5e7eb" />
              <circle cx="77" cy="302" r="4" fill="#e5e7eb" />
              <rect x="143" y="370" width="22" height="22" rx="3" stroke="#ede9fe" strokeWidth="1.5" fill="none" />
              <rect x="271" y="472" width="22" height="22" rx="3" stroke="#ede9fe" strokeWidth="1.5" fill="none" />
            </svg>
            <svg
              className="absolute right-0 top-0 h-full w-1/2 opacity-40"
              viewBox="0 0 731 755"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M731 -77 Q500 200 570 702" stroke="#e5e7eb" strokeWidth="1" fill="none" />
              <path d="M731 -77 Q450 300 530 755" stroke="#e5e7eb" strokeWidth="1" fill="none" />
              <path d="M580 -77 Q330 300 265 720" stroke="#e5e7eb" strokeWidth="1" fill="none" />
              <path d="M300 308 Q230 450 170 678" stroke="#e5e7eb" strokeWidth="1" fill="none" />
              <circle cx="568" cy="104" r="5" fill="#e5e7eb" />
              <circle cx="165" cy="518" r="4" fill="#e5e7eb" />
              <circle cx="465" cy="302" r="4" fill="#e5e7eb" />
              <rect x="588" y="370" width="22" height="22" rx="3" stroke="#e5f7ff" strokeWidth="1.5" fill="none" />
              <rect x="458" y="472" width="22" height="22" rx="3" stroke="#e5f7ff" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          {/* Hero content */}
          <div className="relative mx-auto max-w-[1000px] px-4 flex flex-col items-center text-center gap-7">
            {/* Badge */}
            <div className="animate-fade-in-up flex items-center gap-2 px-5 py-2 rounded-full border border-[#cecece] bg-white text-base text-[#1A1A2E] tracking-[-0.015em] shadow-sm">
              <span>🏆</span>
              <span>{hero.kicker}</span>
            </div>

            {/* Heading */}
            <h1 className="animate-fade-in-up animation-delay-100 text-5xl md:text-[68px] lg:text-[72px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1A1A2E] max-w-[900px]">
              {(() => {
                const parts = hero.title.split(hero.highlight);
                return (
                  <>
                    {parts[0]}
                    <GradientText>{hero.highlight}</GradientText>
                    {parts[1]}
                  </>
                );
              })()}
            </h1>

            {/* Subtext */}
            <p className="animate-fade-in-up animation-delay-200 text-base text-[#64748B] leading-[1.6] tracking-[-0.015em] max-w-[600px]">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up animation-delay-300 flex flex-wrap justify-center gap-6 mt-1">
              <a
                href={hero.primaryCta.href}
                className="bg-[#FF5B24] text-white px-6 py-4 rounded-[8px] text-base font-medium tracking-[-0.015em] hover:bg-[#E54E1B] transition-colors"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="px-6 py-4 rounded-[8px] text-base font-medium tracking-[-0.015em] border border-[#FF5B24] text-[#1A1A2E] hover:bg-orange-50 transition-colors"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="animate-fade-in-up animation-delay-400 relative mx-auto max-w-[1100px] px-4 mt-16">
            <div
              className="rounded-t-[32px] border border-white/80 p-5"
              style={{ backgroundColor: '#FFF0E8' }}
            >
              <div
                className="rounded-t-2xl overflow-hidden"
                style={{ backgroundColor: '#fcfcfc' }}
              >
                {/* Browser-style header */}
                <div className="flex items-center justify-between px-[18px] py-3.5 border-b border-[#f1f1f4] bg-white h-[58px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4 bg-gray-100 rounded-full h-6 max-w-sm" />
                  <div />
                </div>

                {/* Stat widgets */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-[18px]">
                  {hero.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white border border-[#f1edff] rounded-xl shadow-[0_14px_14px_0_rgba(34,25,69,0.03)] p-4 flex flex-col justify-between"
                      style={{ minHeight: '100px' }}
                    >
                      <div>
                        <p className="text-[11px] font-medium text-[#64748B] tracking-[-0.01em] leading-[1.6]">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-semibold text-[#1A1A2E] tracking-[-0.03em] leading-[1.2] mt-1">
                          {stat.value}
                        </p>
                      </div>
                      <p className="text-[11px] text-[#64748B] leading-[1.6] tracking-[-0.01em]">
                        {stat.sub}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Suppliers line */}
                <div className="px-5 pb-5 pt-1 flex flex-col gap-1">
                  <p className="text-lg md:text-[20px] font-medium text-[#1A1A2E] tracking-[-0.06em] leading-[1.1]">
                    {hero.suppliersHeadline}
                  </p>
                  <p className="text-[13px] text-[#64748B] leading-[1.6] tracking-[-0.01em]">
                    {hero.suppliers}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOGO STRIP ──────────────────────────────────────── */}
        <section className="border-y border-gray-100 py-8 overflow-hidden bg-white">
          <div className="flex items-center gap-12 animate-scroll-left" style={{ width: 'max-content' }}>
            {[...logoStrip, ...logoStrip].map((name, i) => (
              <span
                key={i}
                className="text-gray-400 font-semibold text-base md:text-lg tracking-wide whitespace-nowrap select-none"
                style={{ filter: 'grayscale(1)' }}
              >
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* ── WHY SECTION ─────────────────────────────────────── */}
        <RevealSection id="why" className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-[1280px] px-4 md:px-8">
            <SectionHeading title={whySection.title} description={whySection.description} />

            {/* Bento cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Card 1 – More Inventory */}
              <div className="bg-white border-[1.5px] border-[#fcf3eb] rounded-[32px] overflow-hidden flex flex-col">
                <div className="relative h-[280px] bg-[#fcfcfc] rounded-[24px] m-4 overflow-hidden flex items-center justify-center">
                  {/* Flow diagram illustration */}
                  <svg viewBox="0 0 360 240" className="w-full h-full" fill="none">
                    {/* Left box – inventory */}
                    <rect x="20" y="80" width="80" height="80" rx="16" fill="#ffecd8" stroke="#ffa33e" strokeWidth="1.5"/>
                    <rect x="32" y="93" width="56" height="8" rx="4" fill="#ffa33e" opacity="0.5"/>
                    <rect x="32" y="107" width="40" height="6" rx="3" fill="#ffa33e" opacity="0.3"/>
                    <rect x="32" y="119" width="48" height="6" rx="3" fill="#ffa33e" opacity="0.3"/>
                    <rect x="32" y="131" width="32" height="6" rx="3" fill="#ffa33e" opacity="0.2"/>
                    {/* Center column – supplier icons */}
                    <rect x="140" y="50" width="80" height="44" rx="14" fill="#f1edff" stroke="#d2d4ff" strokeWidth="1.5"/>
                    <rect x="152" y="64" width="56" height="6" rx="3" fill="#7350ff" opacity="0.3"/>
                    <rect x="152" y="76" width="40" height="5" rx="2.5" fill="#7350ff" opacity="0.2"/>
                    <rect x="140" y="102" width="80" height="44" rx="14" fill="#f1edff" stroke="#d2d4ff" strokeWidth="1.5"/>
                    <rect x="152" y="116" width="56" height="6" rx="3" fill="#7350ff" opacity="0.3"/>
                    <rect x="152" y="128" width="40" height="5" rx="2.5" fill="#7350ff" opacity="0.2"/>
                    <rect x="140" y="154" width="80" height="44" rx="14" fill="#f1edff" stroke="#d2d4ff" strokeWidth="1.5"/>
                    <rect x="152" y="168" width="56" height="6" rx="3" fill="#7350ff" opacity="0.3"/>
                    <rect x="152" y="180" width="40" height="5" rx="2.5" fill="#7350ff" opacity="0.2"/>
                    {/* Right box – folder */}
                    <rect x="260" y="80" width="80" height="80" rx="16" fill="#fff3e0" stroke="#ffa33e" strokeWidth="1.5" opacity="0.8"/>
                    <path d="M278 108 L290 100 L322 100 L322 148 L278 148 Z" fill="#ffa33e" opacity="0.4"/>
                    <path d="M278 112 L322 112 L322 148 L278 148 Z" fill="#ffa33e" opacity="0.6"/>
                    {/* Connector lines */}
                    <line x1="100" y1="120" x2="140" y2="72" stroke="#ffa33e" strokeWidth="1" strokeDasharray="4 3" opacity="0.6"/>
                    <line x1="100" y1="120" x2="140" y2="124" stroke="#ffa33e" strokeWidth="1" strokeDasharray="4 3" opacity="0.6"/>
                    <line x1="100" y1="120" x2="140" y2="176" stroke="#ffa33e" strokeWidth="1" strokeDasharray="4 3" opacity="0.6"/>
                    <line x1="220" y1="72" x2="260" y2="110" stroke="#ffa33e" strokeWidth="1" strokeDasharray="4 3" opacity="0.6"/>
                    <line x1="220" y1="124" x2="260" y2="130" stroke="#ffa33e" strokeWidth="1" strokeDasharray="4 3" opacity="0.6"/>
                    <line x1="220" y1="176" x2="260" y2="150" stroke="#ffa33e" strokeWidth="1" strokeDasharray="4 3" opacity="0.6"/>
                  </svg>
                </div>
                <div className="px-6 pb-8 flex flex-col gap-3">
                  <h3 className="text-xl font-medium text-[#1A1A2E] tracking-[-0.02em] leading-[1.3]">{whySection.cards[0].title}</h3>
                  <p className="text-sm text-[#64748B] leading-[1.6] tracking-[-0.01em]">{whySection.cards[0].body}</p>
                </div>
              </div>

              {/* Card 2 – Human support */}
              <div className="bg-white border-[1.5px] border-[#fcf3eb] rounded-[32px] overflow-hidden flex flex-col">
                <div className="relative h-[280px] bg-[#fcfcfc] rounded-[24px] m-4 overflow-hidden flex items-center justify-center">
                  {/* Support / people illustration */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Person avatars – left */}
                    {[{x:'14%',y:'28%',s:52,c:'#e0d8ff'},{x:'8%',y:'58%',s:44,c:'#ffecd8'}].map((a,i)=>(
                      <div key={i} className="absolute rounded-[14px] flex items-center justify-center overflow-hidden"
                        style={{left:a.x,top:a.y,width:a.s,height:a.s,background:a.c,border:'1.5px solid #f1edff'}}>
                        <svg viewBox="0 0 40 40" width={a.s-8} height={a.s-8}><circle cx="20" cy="14" r="8" fill="#9580ff" opacity="0.5"/><ellipse cx="20" cy="34" rx="12" ry="8" fill="#9580ff" opacity="0.4"/></svg>
                      </div>
                    ))}
                    {/* Center phone card */}
                    <div className="relative z-10 w-[110px] h-[160px] rounded-[20px] flex flex-col items-center justify-center gap-2 overflow-hidden shadow-lg"
                      style={{background:'linear-gradient(135deg,#ffecd8 0%,#fef5f0 100%)',border:'1.5px solid #ffd4a8'}}>
                      <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
                        style={{background:'linear-gradient(135deg,#6471c1 0%,#ed4d3d 100%)'}}>
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M12 12c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zm0 3c-4 0-12 2-12 6v1h24v-1c0-4-8-6-12-6z"/></svg>
                      </div>
                      <div className="w-14 h-4 rounded-full opacity-70" style={{background:'linear-gradient(90deg,#FF5B24,#eda635)'}} />
                    </div>
                    {/* Person avatars – right */}
                    {[{x:'72%',y:'28%',s:52,c:'#ffecd8'},{x:'78%',y:'58%',s:44,c:'#e0d8ff'}].map((a,i)=>(
                      <div key={i} className="absolute rounded-[14px] flex items-center justify-center overflow-hidden"
                        style={{left:a.x,top:a.y,width:a.s,height:a.s,background:a.c,border:'1.5px solid #f1edff'}}>
                        <svg viewBox="0 0 40 40" width={a.s-8} height={a.s-8}><circle cx="20" cy="14" r="8" fill="#ed6e3a" opacity="0.5"/><ellipse cx="20" cy="34" rx="12" ry="8" fill="#ed6e3a" opacity="0.4"/></svg>
                      </div>
                    ))}
                    {/* Connector dots */}
                    {['40%','50%','60%'].map((t,i)=>(
                      <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-[#ffa33e] opacity-40" style={{left:'50%',top:t,transform:'translateX(-50%)'}}/>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-8 flex flex-col gap-3">
                  <h3 className="text-xl font-medium text-[#1A1A2E] tracking-[-0.02em] leading-[1.3]">{whySection.cards[1].title}</h3>
                  <p className="text-sm text-[#64748B] leading-[1.6] tracking-[-0.01em]">{whySection.cards[1].body}</p>
                </div>
              </div>

              {/* Card 3 – Better economics (downloaded background) */}
              <div className="bg-white border-[1.5px] border-[#fcf3eb] rounded-[32px] overflow-hidden flex flex-col">
                <div className="relative h-[280px] rounded-[24px] m-4 overflow-hidden bg-[#fcfcfc]">
                  <img
                    src="/why-card-3-bg.png"
                    alt=""
                    className="absolute w-[152%] h-full object-cover"
                    style={{ left: '-26%', top: '7%' }}
                  />
                </div>
                <div className="px-6 pb-8 flex flex-col gap-3">
                  <h3 className="text-xl font-medium text-[#1A1A2E] tracking-[-0.02em] leading-[1.3]">{whySection.cards[2].title}</h3>
                  <p className="text-sm text-[#64748B] leading-[1.6] tracking-[-0.01em]">{whySection.cards[2].body}</p>
                </div>
              </div>

            </div>
          </div>
        </RevealSection>

        {/* ── PRODUCT SECTION ─────────────────────────────────── */}
        <RevealSection id="product" className="py-20 md:py-28" style={{ backgroundColor: '#F7F3EC' }}>
          <div className="mx-auto max-w-[1100px] px-4">
            <SectionHeading
              title={productSection.title}
              description={productSection.description}
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Platform card */}
              <div className="bg-[#fcfcfc] rounded-[16px] border border-[#f1edff] p-8 flex flex-col gap-4 card-hover">
                <IconBox gradient="#FF5B24 0%, #FF8C5A 100%" src="/icon-platform.svg" />
                <p className="text-xs font-semibold tracking-widest text-[#ed8a38] uppercase">
                  {productSection.techCard.kicker}
                </p>
                <h3 className="text-2xl font-medium text-[#1A1A2E] tracking-[-0.03em] leading-[1.2]">
                  {productSection.techCard.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {productSection.techCard.items.map((item) => (
                    <li key={item} className="text-base text-[#64748B] leading-[1.6] tracking-[-0.015em]">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <LearnMoreBtn href="#contact" />
                </div>
              </div>

              {/* Business outcomes card */}
              <div className="bg-[#fcfcfc] rounded-[16px] border border-[#f1edff] p-8 flex flex-col gap-4 card-hover">
                <IconBox gradient="#0050FF 0%, #6B8FFF 100%" src="/icon-bank.svg" />
                <p className="text-xs font-semibold tracking-widest text-[#ed8a38] uppercase">
                  {productSection.experienceCard.kicker}
                </p>
                <h3 className="text-2xl font-medium text-[#1A1A2E] tracking-[-0.03em] leading-[1.2]">
                  {productSection.experienceCard.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {productSection.experienceCard.paragraphs.map((p) => (
                    <p key={p} className="text-base text-[#64748B] leading-[1.6] tracking-[-0.015em]">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="mt-auto pt-2">
                  <LearnMoreBtn href="#contact" />
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* ── PARTNERS SECTION ────────────────────────────────── */}
        <RevealSection id="partners" className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-[1100px] px-4">
            <SectionHeading
              title={partnerSection.title}
              description={partnerSection.description}
              className="mb-6"
            />

            {/* Badge */}
            <div className="flex justify-center mb-12">
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm text-[#1A1A2E] bg-white shadow-sm">
                <span>⚙️</span>
                {partnerSection.badge}
              </span>
            </div>

            {/* Concentric arc visualization */}
            <div className="relative flex justify-center overflow-hidden" style={{ height: '360px' }}>
              {/* Arcs */}
              {[
                { size: 680, color: '#ffecd8', opacity: '0.8' },
                { size: 500, color: '#fff5ee', opacity: '0.9' },
                { size: 340, color: '#fff9f5', opacity: '1' },
              ].map((arc, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full border-2 border-[#ffecd8]"
                  style={{
                    width: arc.size,
                    height: arc.size / 2,
                    backgroundColor: arc.color,
                    opacity: arc.opacity,
                  }}
                />
              ))}

              {/* Center logo */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-md border border-gray-100 px-5 py-3 z-10 flex items-center justify-center" style={{ width: '130px', height: '56px' }}>
                <img src="/tripsure_logo.svg" alt="Tripsure" className="h-[28px] w-auto object-contain" />
              </div>

              {/* Supplier pills positioned around arcs */}
              {[
                { name: 'Yatra', style: { bottom: '200px', left: 'calc(50% - 290px)' } },
                { name: 'Hotelbeds', style: { bottom: '280px', left: 'calc(50% - 170px)' } },
                { name: 'Expedia', style: { bottom: '310px', left: 'calc(50% + 30px)' } },
                { name: 'Ratehawk', style: { bottom: '240px', left: 'calc(50% + 160px)' } },
                { name: 'Smyrooms', style: { bottom: '150px', left: 'calc(50% + 260px)' } },
              ].map((supplier) => (
                <div
                  key={supplier.name}
                  className="absolute z-20 bg-white rounded-full shadow-md border border-gray-100 px-4 py-2 text-sm font-medium text-[#1A1A2E] tracking-[-0.01em]"
                  style={supplier.style as CSSProperties}
                >
                  {supplier.name}
                </div>
              ))}
            </div>

            {/* Bottom text */}
            <p className="mt-8 text-sm text-[#64748B] text-center leading-[1.6] tracking-[-0.01em] max-w-lg mx-auto">
              {partnerSection.extraText}
            </p>
          </div>
        </RevealSection>

        {/* ── TECHNOLOGY SECTION ──────────────────────────────── */}
        <RevealSection id="technology" className="py-20 md:py-28" style={{ backgroundColor: '#F7F3EC' }}>
          <div className="mx-auto max-w-[1280px] px-4 md:px-8">
            <SectionHeading
              title={technologySection.title}
              description={technologySection.description}
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Card 1 – API-first (downloaded illustration) */}
              <div className="bg-white border-[1.5px] border-[#fcf3eb] rounded-[32px] overflow-hidden flex flex-col">
                <div className="relative h-[280px] rounded-[24px] m-4 overflow-hidden bg-[#fcfcfc]">
                  <img
                    src="/tech-card-1.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <div className="px-6 pb-8 flex flex-col gap-3">
                  <h3 className="text-xl font-medium text-[#1A1A2E] tracking-[-0.02em] leading-[1.3]">{technologySection.cards[0].title}</h3>
                  <p className="text-sm text-[#64748B] leading-[1.6] tracking-[-0.01em]">{technologySection.cards[0].body}</p>
                </div>
              </div>

              {/* Card 2 – Configurable rules (downloaded illustration) */}
              <div className="bg-white border-[1.5px] border-[#fcf3eb] rounded-[32px] overflow-hidden flex flex-col">
                <div className="relative h-[280px] rounded-[24px] m-4 overflow-hidden bg-[#fcfcfc]">
                  <img
                    src="/tech-card-2.png"
                    alt=""
                    className="absolute w-[182%] h-[119%]"
                    style={{ left: '-41%', top: 0 }}
                  />
                </div>
                <div className="px-6 pb-8 flex flex-col gap-3">
                  <h3 className="text-xl font-medium text-[#1A1A2E] tracking-[-0.02em] leading-[1.3]">{technologySection.cards[1].title}</h3>
                  <p className="text-sm text-[#64748B] leading-[1.6] tracking-[-0.01em]">{technologySection.cards[1].body}</p>
                </div>
              </div>

              {/* Card 3 – Enterprise-grade (orbital diagram) */}
              <div className="bg-white border-[1.5px] border-[#fcf3eb] rounded-[32px] overflow-hidden flex flex-col">
                <div className="relative h-[280px] rounded-[24px] m-4 overflow-hidden bg-[#fcfcfc] flex items-center justify-center">
                  {/* Concentric orbital rings */}
                  <div className="relative w-[220px] h-[220px]">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border border-[#f1edff]" />
                    {/* Mid ring */}
                    <div className="absolute inset-[14%] rounded-full border border-[#e8e4ff]" />
                    {/* Inner ring */}
                    <div className="absolute inset-[28%] rounded-full border border-[#d2d4ff]" />
                    {/* Center node */}
                    <div className="absolute inset-[38%] rounded-full flex items-center justify-center shadow-md"
                      style={{background:'linear-gradient(135deg,#c535ed 0%,#eda635 100%)'}}>
                      <svg viewBox="0 0 20 20" width="16" height="16" fill="white"><path d="M10 1l2.5 5.5H18l-4.5 3.5 1.7 5.5L10 13l-5.2 2.5 1.7-5.5L2 6.5h5.5z"/></svg>
                    </div>
                    {/* Orbital badges */}
                    {[
                      {label:'PCI-DSS',angle:300,r:42},
                      {label:'GDPR',angle:190,r:42},
                      {label:'SOC2',angle:70,r:42},
                    ].map(({label,angle,r})=>{
                      const rad = (angle*Math.PI)/180;
                      return (
                        <div key={label}
                          className="absolute px-2 py-1 rounded-full text-[9px] font-semibold text-[#1A1A2E] shadow-sm backdrop-blur-sm"
                          style={{
                            background:'rgba(255,255,255,0.9)',
                            border:'1px solid #e8e4ff',
                            left:`calc(50% + ${r*Math.cos(rad)*2.1}px - 24px)`,
                            top:`calc(50% + ${r*Math.sin(rad)*2.1}px - 10px)`,
                          }}>
                          {label}
                        </div>
                      );
                    })}
                    {/* Side icon orbs */}
                    <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow"
                      style={{background:'linear-gradient(135deg,#7d6ba9,#d55353)'}}>
                      <svg viewBox="0 0 16 16" width="12" height="12" fill="white"><path d="M8 1a4 4 0 100 8A4 4 0 008 1zm0 10c-2.7 0-8 1.3-8 4v1h16v-1c0-2.7-5.3-4-8-4z"/></svg>
                    </div>
                    <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow"
                      style={{background:'linear-gradient(135deg,#c535ed,#eda635)'}}>
                      <svg viewBox="0 0 16 16" width="12" height="12" fill="white"><rect x="2" y="2" width="12" height="12" rx="3"/></svg>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-8 flex flex-col gap-3">
                  <h3 className="text-xl font-medium text-[#1A1A2E] tracking-[-0.02em] leading-[1.3]">{technologySection.cards[2].title}</h3>
                  <p className="text-sm text-[#64748B] leading-[1.6] tracking-[-0.01em]">{technologySection.cards[2].body}</p>
                </div>
              </div>

            </div>
          </div>
        </RevealSection>

        {/* ── WHO WE SERVE ────────────────────────────────────── */}
        <RevealSection id="who-we-serve" className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-[1100px] px-4">
            <SectionHeading
              title={whoWeServeSection.title}
              description={whoWeServeSection.description}
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whoWeServeSection.cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-[32px] border-[1.5px] border-[#fcf3eb] p-8 flex flex-col gap-4 card-hover"
                >
                  <IconBox gradient={card.gradient} />
                  <p className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: (card as any).accentColor ?? '#FF5B24' }}>
                    {card.label}
                  </p>
                  <h3 className="text-2xl font-medium text-[#1A1A2E] tracking-[-0.03em] leading-[1.2]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-[1.6] tracking-[-0.01em]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* ── CONTACT / CTA ────────────────────────────────────── */}
        <RevealSection id="contact" className="py-16 md:py-20 px-4 md:px-6">
          <div className="mx-auto max-w-[1100px]">
            <div
              className="relative overflow-hidden rounded-3xl border border-orange-100 px-8 md:px-16 py-16"
              style={{ backgroundColor: '#fef3ec' }}
            >
              {/* Gradient blobs */}
              <div
                className="absolute -top-16 -left-16 w-52 h-52 rounded-full opacity-40 blur-3xl"
                style={{ backgroundImage: 'radial-gradient(circle, #FF5B24, #eda635)' }}
              />
              <div
                className="absolute -top-16 -right-16 w-52 h-52 rounded-full opacity-30 blur-3xl"
                style={{ backgroundImage: 'radial-gradient(circle, #4299fe, #818cf8)' }}
              />

              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(#1A1A2E 1px, transparent 1px), linear-gradient(90deg, #1A1A2E 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A2E] tracking-[-0.03em] leading-[1.15] max-w-2xl mx-auto">
                  {contactSection.title}
                </h2>
                <p className="mt-4 text-base text-[#64748B] leading-[1.6] tracking-[-0.015em] max-w-xl mx-auto">
                  {contactSection.description}
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto text-left">
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#ede9fe] flex items-center justify-center shrink-0">
                        <Mail className="h-4 w-4 text-[#7c3aed]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A2E]">Email Us</p>
                        <p className="text-xs text-[#64748B]">Reach out to our team for quick assistance.</p>
                      </div>
                    </div>
                    <a
                      href={`mailto:${contactSection.email}`}
                      className="text-sm font-semibold text-[#1A1A2E] hover:text-[#0050FF] transition-colors pl-12"
                    >
                      {contactSection.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#ede9fe] flex items-center justify-center shrink-0">
                        <Phone className="h-4 w-4 text-[#7c3aed]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A2E]">Call Us</p>
                        <p className="text-xs text-[#64748B]">Drop us a message, and we'll get back to you soon.</p>
                      </div>
                    </div>
                    <a
                      href={`tel:${contactSection.phone}`}
                      className="text-sm font-semibold text-[#1A1A2E] hover:text-[#0050FF] transition-colors pl-12"
                    >
                      {contactSection.phone}
                    </a>
                    <a
                      href={`tel:${contactSection.phoneAlt}`}
                      className="text-sm font-semibold text-[#1A1A2E] hover:text-[#0050FF] transition-colors pl-12"
                    >
                      {contactSection.phoneAlt}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* ── FOOTER ──────────────────────────────────────────── */}
        <footer className="bg-white border-t border-gray-100 pt-14 pb-8">
          <div className="mx-auto max-w-[1100px] px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-10 md:gap-16 pb-10 border-b border-gray-100">
              {/* Brand */}
              <div className="max-w-xs">
                <a href="#top" className="inline-block mb-4">
                  <img src="/tripsure_logo.svg" alt="Tripsure" className="h-[42px] w-[157px] object-contain object-left" />
                </a>
                <p className="text-sm text-[#64748B] leading-[1.6] tracking-[-0.01em]">
                  {footer.tagline}
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={footer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-gray-200 text-[#64748B] hover:text-[#0050FF] hover:border-[#0050FF] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={footer.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-gray-200 text-[#64748B] hover:text-[#0050FF] hover:border-[#0050FF] transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={footer.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-gray-200 text-[#64748B] hover:text-[#0050FF] hover:border-[#0050FF] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Link columns */}
              {footer.columns.map((col) => (
                <div key={col.heading} className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-[#1A1A2E] tracking-[-0.01em]">
                    {col.heading}
                  </p>
                  {col.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-[#64748B] hover:text-[#1A1A2E] transition-colors tracking-[-0.01em] py-1 inline-block min-h-[44px] flex items-center"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pt-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-[#64748B] tracking-[-0.01em]">{footer.copyright}</p>
                <p className="text-xs text-[#64748B]/70 tracking-[-0.01em]">
                  {company.name} &nbsp;|&nbsp; {company.cinLabel}: <span className="font-mono select-all">{company.cin}</span>
                </p>
              </div>
              <a
                href="#top"
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#64748B] hover:text-[#1A1A2E] hover:border-gray-400 transition-colors self-start md:self-auto"
                aria-label="Back to top"
              >
                <ChevronUp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
