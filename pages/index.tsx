import Head from 'next/head';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  Globe,
  Zap,
  Shield,
  Users,
  Building2,
  Plane,
  Hotel,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import {
  meta,
  navLinks,
  hero,
  whySection,
  productSection,
  partnerSection,
  technologySection,
  whoWeServeSection,
  contactSection,
  legalSection,
  footer,
} from '../content/r360travel';

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const RevealSection = ({ children, className = '', id }: RevealSectionProps) => {
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-12 md:py-14 transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.ogImage} />
      </Head>

      <div
        id="top"
        className="min-h-screen bg-[radial-gradient(circle_at_top,_#161725_0,_#050609_52%)] text-slate-100"
      >
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:h-16 md:px-6">
            <a href="#top" className="flex items-center gap-3">
              <img
                src="/r360_travel_logo.svg"
                alt="R360 Travel"
                className="h-8 w-auto"
              />
            </a>

            <nav className="hidden items-center gap-6 text-xs text-slate-300 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b-2 border-transparent pb-1 transition-colors hover:border-[#1D86FF] hover:text-slate-50"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-sm hover:border-white/20 hover:bg-slate-800/80"
              >
                Partner with us
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-lg border border-[#1D86FF]/30 bg-gradient-to-tr from-[#1D86FF] to-[#4A9FFF] px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(29,134,255,0.4)] hover:shadow-[0_16px_40px_rgba(29,134,255,0.6)] transition-shadow"
              >
                Explore hotels
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-slate-300 md:hidden"
              aria-label="Toggle navigation"
            >
              <span className="relative block h-3 w-3">
                <span
                  className={`absolute block h-[2px] w-3 rounded-full bg-slate-300 transition-all ${
                    mobileOpen ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute block h-[2px] w-3 rounded-full bg-slate-300 transition-all ${
                    mobileOpen ? 'opacity-0' : 'top-1.5'
                  }`}
                />
                <span
                  className={`absolute block h-[2px] w-3 rounded-full bg-slate-300 transition-all ${
                    mobileOpen ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-white/5 bg-slate-950/95 md:hidden">
              <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm text-slate-300">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-0.5"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="#product"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center rounded-lg border border-[#1D86FF]/40 bg-[#1D86FF]/10 px-3 py-1.5 text-xs font-medium text-[#4A9FFF]"
                  >
                    Explore hotels
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center rounded-lg border border-[#1D86FF]/30 bg-gradient-to-tr from-[#1D86FF] to-[#4A9FFF] px-3 py-1.5 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(29,134,255,0.4)]"
                  >
                    Contact sales
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 md:pt-12">
          {/* Hero */}
          <section className="grid gap-8 pb-8 md:grid-cols-[1.1fr,1.05fr] md:pb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-[#1D86FF]/20 bg-[#011568]/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-slate-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#1D86FF] to-[#011568] text-[10px] font-extrabold text-white shadow-[0_0_25px_rgba(29,134,255,0.5)]">
                  ∞
                </span>
                <span>{hero.kicker}</span>
              </div>

              <h1 className="mt-5 text-[1.9rem] font-semibold leading-tight tracking-tight md:text-[2.4rem] lg:text-[2.8rem]">
                {hero.title.split(hero.highlight)[0]}
                <span className="bg-gradient-to-tr from-[#4A9FFF] via-[#1D86FF] to-[#011568] bg-clip-text text-transparent">
                  {hero.highlight}
                </span>
                {hero.title.split(hero.highlight)[1]}
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 md:text-[0.95rem]">
                {hero.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <a
                  href={hero.primaryCta.href}
                  className="inline-flex items-center gap-2 justify-center rounded-lg border border-[#1D86FF]/30 bg-gradient-to-tr from-[#1D86FF] to-[#4A9FFF] px-5 py-2.5 font-semibold text-white shadow-[0_10px_30px_rgba(29,134,255,0.4)] hover:shadow-[0_16px_40px_rgba(29,134,255,0.6)] transition-shadow"
                >
                  <Hotel className="h-4 w-4" />
                  {hero.primaryCta.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 justify-center rounded-lg border border-[#1D86FF]/20 bg-[#011568]/20 px-5 py-2.5 font-medium text-slate-100 hover:border-[#1D86FF]/40 hover:bg-[#011568]/30 transition-colors"
                >
                  <Users className="h-4 w-4" />
                  {hero.secondaryCta.label}
                </a>
                <a
                  href={hero.tertiaryCta.href}
                  className="inline-flex items-center gap-2 justify-center rounded-lg border border-[#1D86FF]/30 bg-[#1D86FF]/10 px-5 py-2.5 font-medium text-[#4A9FFF] hover:border-[#1D86FF]/50 hover:bg-[#1D86FF]/20 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {hero.tertiaryCta.label}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-8 text-[11px] text-slate-400">
                {hero.meta.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      {m.label}
                    </span>
                    <span className="text-sm font-medium text-slate-100">{m.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#why"
                className="mt-8 flex items-center gap-3 text-[11px] text-slate-400 md:mt-10"
              >
                <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1">
                  <span className="mt-0.5 h-1.5 w-1 rounded-full bg-slate-100 motion-safe:animate-bounce" />
                </span>
                <span>Scroll to see how it works</span>
              </a>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 via-slate-900 to-slate-950 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                <div className="pointer-events-none absolute inset-[-60%] rounded-full bg-[radial-gradient(circle_at_0_0,rgba(29,134,255,0.2),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(1,21,104,0.4),transparent_60%)] opacity-70 mix-blend-screen motion-safe:animate-spin" />

                <div className="relative rounded-2xl border border-white/5 bg-slate-950/90 p-3">
                  <div className="mb-4 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="rounded-md border border-[#1D86FF]/40 bg-[#1D86FF]/10 px-3 py-1 text-[10px] text-[#4A9FFF]">
                      Multi-supplier rate engine
                    </span>
                    <span className="text-[10px] text-slate-400">Live search • &lt; 600ms</span>
                  </div>

                  <div className="grid gap-3 text-[11px] sm:grid-cols-2">
                    <div className="rounded-xl border border-[#1D86FF]/20 bg-gradient-to-br from-[#1D86FF]/10 to-slate-900/80 p-4">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <Building2 className="h-3.5 w-3.5" />
                        Suppliers scanned
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-50">8+</div>
                      <div className="mt-1 text-[10px] text-slate-400">
                        Expedia, Agoda, Hotelbeds, TBO &amp; more
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <Zap className="h-3.5 w-3.5" />
                        Price optimization
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-50">Real-time</div>
                      <div className="mt-1 text-[10px] text-slate-400">
                        Best available deal, every search
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <Globe className="h-3.5 w-3.5" />
                        Coverage
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-50">Global</div>
                      <div className="mt-1 text-[10px] text-slate-400">
                        Domestic &amp; international properties
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <HeadphonesIcon className="h-3.5 w-3.5" />
                        Support
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-50">24×7</div>
                      <div className="mt-1 text-[10px] text-slate-400">
                        Bookings, changes, refunds &amp; more
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1 text-[11px] text-slate-300">
                    <p className="font-medium">{hero.suppliersHeadline}</p>
                    <p className="text-slate-400">{hero.suppliers}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 text-[11px] text-slate-400">
                <span className="mr-2 text-slate-500">Trusted by</span>
                <span className="inline-flex flex-wrap gap-x-3 gap-y-1">
                  <span>Banks &amp; enterprise partners</span>
                  <span>Travel agencies &amp; OTAs</span>
                  <span>Corporate travel desks</span>
                </span>
              </div>
            </div>
          </section>

          {/* Why R360Travel */}
          <RevealSection id={whySection.id}>
            <div className="space-y-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  {whySection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                  {whySection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400 md:text-[0.95rem]">
                  {whySection.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-[11px]">
                {whySection.pills.map((pill, i) => (
                  <span
                    key={pill}
                    className={`rounded-md border px-4 py-1.5 ${
                      i === 0
                        ? 'border-[#1D86FF]/40 bg-[#1D86FF]/10 text-[#4A9FFF]'
                        : 'border-white/10 bg-slate-900/80 text-slate-300'
                    }`}
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {whySection.cards.map((card, i) => {
                  const icons = [Globe, Zap, HeadphonesIcon, Shield, Users];
                  const Icon = icons[i] || Globe;
                  return (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-sm shadow-[0_12px_35px_rgba(0,0,0,0.7)] md:text-[0.9rem]"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#011568]/30 text-[#1D86FF]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-sm font-semibold text-slate-50">{card.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{card.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealSection>

          {/* Product / Technology */}
          <RevealSection id={productSection.id}>
            <div className="space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  {productSection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                  {productSection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400 md:text-[0.95rem]">
                  {productSection.description}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm shadow-[0_12px_35px_rgba(0,0,0,0.7)]">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                    {productSection.techCard.kicker}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50">
                    {productSection.techCard.title}
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-[13px] text-slate-400">
                    {productSection.techCard.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm shadow-[0_12px_35px_rgba(0,0,0,0.7)]">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                    {productSection.experienceCard.kicker}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50">
                    {productSection.experienceCard.title}
                  </h3>
                  <div className="mt-2 space-y-2 text-[13px] text-slate-400">
                    {productSection.experienceCard.paragraphs.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Partners */}
          <RevealSection id={partnerSection.id}>
            <div className="space-y-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  {partnerSection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                  {partnerSection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400 md:text-[0.95rem]">
                  {partnerSection.description}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
                <h3 className="text-sm font-semibold text-slate-50">Connected suppliers</h3>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-slate-200">
                  {partnerSection.suppliers.map((supplier) => (
                    <span key={supplier} className="opacity-80">
                      {supplier}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[13px] text-slate-400">{partnerSection.extraText}</p>
              </div>
            </div>
          </RevealSection>

          {/* Technology */}
          <RevealSection id={technologySection.id}>
            <div className="space-y-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  {technologySection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                  {technologySection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400 md:text-[0.95rem]">
                  {technologySection.description}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {technologySection.cards.map((card, i) => {
                  const icons = [Zap, Shield, CheckCircle];
                  const Icon = icons[i] || Zap;
                  return (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#011568]/30 text-[#1D86FF]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-sm font-semibold text-slate-50">{card.title}</h3>
                      <p className="text-[13px] text-slate-400 leading-relaxed">{card.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealSection>

          {/* Who we serve */}
          <RevealSection id={whoWeServeSection.id}>
            <div className="space-y-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  {whoWeServeSection.kicker}
                </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                  {whoWeServeSection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400 md:text-[0.95rem]">
                  {whoWeServeSection.description}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {whoWeServeSection.cards.map((card, i) => {
                  const icons = [Building2, Plane, Users];
                  const Icon = icons[i] || Building2;
                  return (
                    <div
                      key={card.title}
                      className="relative rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                    >
                      <span className="absolute -top-2.5 left-4 rounded-md border border-[#1D86FF]/40 bg-[#011568]/50 px-3 py-0.5 text-[10px] font-medium text-[#4A9FFF]">
                        {card.label}
                      </span>
                      <div className="mb-3 mt-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#011568]/30 text-[#1D86FF]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-sm font-semibold text-slate-50">{card.title}</h3>
                      <p className="text-[13px] text-slate-400 leading-relaxed">{card.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealSection>

          {/* Contact */}
          <RevealSection id={contactSection.id}>
            <div className="space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  {contactSection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                  {contactSection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400 md:text-[0.95rem]">
                  {contactSection.description}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-[1.15fr,0.9fr]">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
                  <form className="grid gap-3 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-slate-300" htmlFor="name">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#1D86FF] focus:outline-none focus:ring-1 focus:ring-[#1D86FF] transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-300" htmlFor="email">
                        Work email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#1D86FF] focus:outline-none focus:ring-1 focus:ring-[#1D86FF] transition-colors"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-300" htmlFor="company">
                        Company / Institution
                      </label>
                      <input
                        id="company"
                        name="company"
                        className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#1D86FF] focus:outline-none focus:ring-1 focus:ring-[#1D86FF] transition-colors"
                        placeholder="Your organisation name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-300" htmlFor="country">
                        Country / Region
                      </label>
                      <input
                        id="country"
                        name="country"
                        className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#1D86FF] focus:outline-none focus:ring-1 focus:ring-[#1D86FF] transition-colors"
                        placeholder="Where are you based?"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-300" htmlFor="message">
                        What would you like to talk about?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full min-h-[120px] rounded-xl border border-white/10 bg-slate-900/90 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#1D86FF] focus:outline-none focus:ring-1 focus:ring-[#1D86FF] transition-colors"
                        placeholder="Share your use case, integration needs, or target customer segment."
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center rounded-lg border border-[#1D86FF]/30 bg-gradient-to-tr from-[#1D86FF] to-[#4A9FFF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(29,134,255,0.4)] hover:shadow-[0_16px_40px_rgba(29,134,255,0.6)] transition-shadow"
                    >
                      Submit enquiry
                    </button>
                  </form>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-[13px] text-slate-400 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                  <h3 className="mb-4 text-base font-semibold text-slate-50">
                    Talk to the Reward360 team
                  </h3>
                  <p className="leading-relaxed">{contactSection.officeText}</p>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#011568]/30 text-[#1D86FF]">
                        <Mail className="h-4 w-4" />
                      </div>
                      <a
                        className="font-medium text-[#4A9FFF] underline-offset-2 hover:underline"
                        href={`mailto:${contactSection.email}`}
                      >
                        {contactSection.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#011568]/30 text-[#1D86FF]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span>{contactSection.offices}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
                    Prefer a direct integration discussion? We're happy to align with your technology,
                    partnerships or loyalty teams.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Legal */}
          <RevealSection className="pt-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-[13px] text-slate-400 shadow-[0_10px_30px_rgba(0,0,0,0.6)] md:p-6">
              <h3 className="text-sm font-semibold text-slate-50">{legalSection.termsTitle}</h3>
              <div className="mt-2 space-y-2">
                {legalSection.terms.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <h3 className="mt-5 text-sm font-semibold text-slate-50">
                {legalSection.privacyTitle}
              </h3>
              <div className="mt-2 space-y-2">
                {legalSection.privacy.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>
          </RevealSection>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-slate-950/90 py-4 text-[11px] text-slate-500">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 md:flex-row md:px-6">
            <span>{footer.copyright}</span>
            <div className="flex flex-wrap gap-3">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-slate-200 hover:underline hover:underline-offset-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
