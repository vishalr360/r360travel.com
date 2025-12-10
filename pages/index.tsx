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
  Sparkles,
  TrendingUp,
  Clock,
  Link2,
  Server,
  Code2,
  Cpu,
  RefreshCw,
  Star,
  Award,
  Handshake,
  FileText,
  Lock,
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
        className="min-h-screen bg-white text-slate-800"
      >
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:h-16 md:px-6">
            <a href="#top" className="flex items-center gap-3">
              <img
                src="/r360_travel_logo.svg"
                alt="R360 Travel"
                className="h-8 w-auto"
              />
            </a>

            <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b-2 border-transparent pb-1 transition-colors hover:border-[#1D86FF] hover:text-[#1D86FF]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50"
              >
                Partner with us
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-lg border border-[#1D86FF]/30 bg-gradient-to-tr from-[#1D86FF] to-[#4A9FFF] px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(29,134,255,0.4)] hover:shadow-[0_6px_20px_rgba(29,134,255,0.5)] transition-shadow"
              >
                Explore hotels
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 md:hidden"
              aria-label="Toggle navigation"
            >
              <span className="relative block h-3 w-3">
                <span
                  className={`absolute block h-[2px] w-3 rounded-full bg-slate-600 transition-all ${
                    mobileOpen ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute block h-[2px] w-3 rounded-full bg-slate-600 transition-all ${
                    mobileOpen ? 'opacity-0' : 'top-1.5'
                  }`}
                />
                <span
                  className={`absolute block h-[2px] w-3 rounded-full bg-slate-600 transition-all ${
                    mobileOpen ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-slate-200 bg-white md:hidden">
              <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm text-slate-600">
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
                    className="inline-flex items-center justify-center rounded-lg border border-[#1D86FF]/40 bg-[#1D86FF]/5 px-3 py-1.5 text-xs font-medium text-[#1D86FF]"
                  >
                    Explore hotels
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center rounded-lg border border-[#1D86FF]/30 bg-gradient-to-tr from-[#1D86FF] to-[#4A9FFF] px-3 py-1.5 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(29,134,255,0.4)]"
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
          <section className="flex flex-col gap-8 pb-8 md:pb-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-lg border border-[#1D86FF]/20 bg-[#1D86FF]/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[#1D86FF] animate-fade-in-up">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#1D86FF] to-[#011568] text-[10px] font-extrabold text-white shadow-[0_0_15px_rgba(29,134,255,0.4)] animate-pulse">
                  <Sparkles className="h-3 w-3" />
                </span>
                <span>{hero.kicker}</span>
              </div>

              <h1 className="mt-5 text-[1.9rem] font-semibold leading-tight tracking-tight text-slate-900 md:text-[2.4rem] lg:text-[2.8rem] animate-fade-in-up animation-delay-100">
                {hero.title.split(hero.highlight)[0]}
                <span className="bg-gradient-to-tr from-[#1D86FF] via-[#1D86FF] to-[#011568] bg-clip-text text-transparent">
                  {hero.highlight}
                </span>
                {hero.title.split(hero.highlight)[1]}
              </h1>

              <p className="mt-4 mx-auto max-w-xl text-sm leading-relaxed text-slate-600 md:text-[0.95rem] animate-fade-in-up animation-delay-200">
                {hero.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs animate-fade-in-up animation-delay-300">
                <a
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center gap-2 justify-center rounded-lg border border-[#1D86FF]/30 bg-gradient-to-tr from-[#1D86FF] to-[#4A9FFF] px-5 py-2.5 font-semibold text-white shadow-[0_4px_14px_rgba(29,134,255,0.4)] hover:shadow-[0_6px_20px_rgba(29,134,255,0.5)] hover:scale-105 transition-all duration-300"
                >
                  <Hotel className="h-4 w-4" />
                  {hero.primaryCta.label}
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href={hero.tertiaryCta.href}
                  className="group inline-flex items-center gap-2 justify-center rounded-lg border border-[#1D86FF]/30 bg-[#1D86FF]/5 px-5 py-2.5 font-medium text-[#1D86FF] hover:border-[#1D86FF]/50 hover:bg-[#1D86FF]/10 hover:scale-105 transition-all duration-300"
                >
                  <Phone className="h-4 w-4 group-hover:animate-wiggle" />
                  {hero.tertiaryCta.label}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-8 text-[11px] text-slate-500 animate-fade-in-up animation-delay-400">
                {hero.meta.map((m, i) => {
                  const metaIcons = [TrendingUp, Globe, Clock];
                  const MetaIcon = metaIcons[i] || Star;
                  return (
                    <div key={m.label} className="flex flex-col items-center gap-1">
                      <MetaIcon className="h-4 w-4 text-[#1D86FF]/60 mb-1" />
                      <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        {m.label}
                      </span>
                      <span className="text-sm font-medium text-slate-800">{m.value}</span>
                    </div>
                  );
                })}
              </div>

              <a
                href="#why"
                className="mt-8 inline-flex items-center gap-3 text-[11px] text-slate-500 md:mt-10 hover:text-[#1D86FF] transition-colors duration-300"
              >
                <span className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-300 p-1">
                  <span className="mt-0.5 h-1.5 w-1 rounded-full bg-[#1D86FF] motion-safe:animate-bounce" />
                </span>
                <span>Scroll to see how it works</span>
              </a>
            </div>

            {/* Visual card */}
            <div className="relative mx-auto w-full max-w-4xl animate-fade-in-up animation-delay-500">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <div className="pointer-events-none absolute inset-[-60%] rounded-full bg-[radial-gradient(circle_at_0_0,rgba(29,134,255,0.08),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(1,21,104,0.08),transparent_60%)] opacity-70 mix-blend-multiply motion-safe:animate-spin" style={{ animationDuration: '20s' }} />

                <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="mb-4 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="inline-flex items-center gap-2 rounded-md border border-[#1D86FF]/30 bg-[#1D86FF]/5 px-3 py-1 text-[10px] text-[#1D86FF]">
                      <Server className="h-3 w-3" />
                      Multi-supplier rate engine
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Live search • &lt; 600ms
                    </span>
                  </div>

                  <div className="grid gap-3 text-[11px] sm:grid-cols-2 lg:grid-cols-4">
                    <div className="group rounded-xl border border-[#1D86FF]/20 bg-gradient-to-br from-[#1D86FF]/5 to-white p-4 transition-all duration-300 hover:shadow-lg hover:border-[#1D86FF]/40">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1D86FF]/10 group-hover:bg-[#1D86FF]/20 transition-colors">
                          <Link2 className="h-3.5 w-3.5 text-[#1D86FF]" />
                        </div>
                        Suppliers scanned
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">8+</div>
                      <div className="mt-1 text-[10px] text-slate-500">
                        Expedia, Agoda, Hotelbeds, TBO &amp; more
                      </div>
                    </div>
                    <div className="group rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:shadow-lg hover:border-[#1D86FF]/40">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1D86FF]/10 group-hover:bg-[#1D86FF]/20 transition-colors">
                          <Zap className="h-3.5 w-3.5 text-[#1D86FF]" />
                        </div>
                        Price optimization
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">Real-time</div>
                      <div className="mt-1 text-[10px] text-slate-500">
                        Best available deal, every search
                      </div>
                    </div>
                    <div className="group rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:shadow-lg hover:border-[#1D86FF]/40">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1D86FF]/10 group-hover:bg-[#1D86FF]/20 transition-colors">
                          <Globe className="h-3.5 w-3.5 text-[#1D86FF]" />
                        </div>
                        Coverage
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">Global</div>
                      <div className="mt-1 text-[10px] text-slate-500">
                        Domestic &amp; international properties
                      </div>
                    </div>
                    <div className="group rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:shadow-lg hover:border-[#1D86FF]/40">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1D86FF]/10 group-hover:bg-[#1D86FF]/20 transition-colors">
                          <HeadphonesIcon className="h-3.5 w-3.5 text-[#1D86FF]" />
                        </div>
                        Support
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">24×7</div>
                      <div className="mt-1 text-[10px] text-slate-500">
                        Bookings, changes, refunds &amp; more
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-600">
                    <RefreshCw className="h-3.5 w-3.5 text-[#1D86FF] animate-spin" style={{ animationDuration: '3s' }} />
                    <p className="font-medium">{hero.suppliersHeadline}</p>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">{hero.suppliers}</p>
                </div>
              </div>

              <div className="mt-5 text-center text-[11px] text-slate-500 animate-fade-in-up animation-delay-600">
                <span className="mr-2 text-slate-400">Trusted by</span>
                <span className="inline-flex flex-wrap justify-center gap-x-4 gap-y-1">
                  <span className="inline-flex items-center gap-1.5"><Building2 className="h-3 w-3 text-[#1D86FF]/60" />Banks &amp; enterprise partners</span>
                  <span className="inline-flex items-center gap-1.5"><Plane className="h-3 w-3 text-[#1D86FF]/60" />Travel agencies &amp; OTAs</span>
                  <span className="inline-flex items-center gap-1.5"><Users className="h-3 w-3 text-[#1D86FF]/60" />Corporate travel desks</span>
                </span>
              </div>
            </div>
          </section>

          {/* Why R360Travel */}
          <RevealSection id={whySection.id}>
            <div className="space-y-5">
              <div className="text-center">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {whySection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {whySection.title}
                </h2>
                <p className="mt-2 mx-auto max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
                  {whySection.description}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 text-[11px]">
                {whySection.pills.map((pill, i) => (
                  <span
                    key={pill}
                    className={`rounded-md border px-4 py-1.5 ${
                      i === 0
                        ? 'border-[#1D86FF]/40 bg-[#1D86FF]/5 text-[#1D86FF]'
                        : 'border-slate-200 bg-slate-50 text-slate-600'
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
                      className="group rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm md:text-[0.9rem] transition-all duration-300 hover:shadow-xl hover:border-[#1D86FF]/30 hover:-translate-y-1"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF] group-hover:bg-[#1D86FF] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-sm font-semibold text-slate-900">{card.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{card.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealSection>

          {/* Product / Technology */}
          <RevealSection id={productSection.id}>
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {productSection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {productSection.title}
                </h2>
                <p className="mt-2 mx-auto max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
                  {productSection.description}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="group rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1D86FF]/30 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF] group-hover:bg-[#1D86FF] group-hover:text-white transition-all duration-300">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                        {productSection.techCard.kicker}
                      </p>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {productSection.techCard.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-2 text-[13px] text-slate-600">
                    {productSection.techCard.items.map((item, idx) => {
                      const itemIcons = [Cpu, Server, Zap, Shield];
                      const ItemIcon = itemIcons[idx] || CheckCircle;
                      return (
                        <li key={item} className="flex items-start gap-2">
                          <ItemIcon className="h-4 w-4 text-[#1D86FF] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="group rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1D86FF]/30 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF] group-hover:bg-[#1D86FF] group-hover:text-white transition-all duration-300">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                        {productSection.experienceCard.kicker}
                      </p>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {productSection.experienceCard.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-2 space-y-2 text-[13px] text-slate-600">
                    {productSection.experienceCard.paragraphs.map((para) => (
                      <p key={para} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{para}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Partners */}
          <RevealSection id={partnerSection.id}>
            <div className="space-y-5">
              <div className="text-center">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {partnerSection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {partnerSection.title}
                </h2>
                <p className="mt-2 mx-auto max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
                  {partnerSection.description}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF]">
                    <Handshake className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">Connected suppliers</h3>
                </div>
                <div className="mt-2 flex flex-wrap gap-3 text-[13px] text-slate-700">
                  {partnerSection.suppliers.map((supplier) => (
                    <span key={supplier} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:border-[#1D86FF]/30 hover:bg-[#1D86FF]/5 transition-all duration-300">
                      <Award className="h-3.5 w-3.5 text-[#1D86FF]/60" />
                      {supplier}
                    </span>
                  ))}
                </div>
                <p className="mt-4 flex items-start gap-2 text-[13px] text-slate-600">
                  <Globe className="h-4 w-4 text-[#1D86FF] mt-0.5 flex-shrink-0" />
                  {partnerSection.extraText}
                </p>
              </div>
            </div>
          </RevealSection>

          {/* Technology */}
          <RevealSection id={technologySection.id}>
            <div className="space-y-5">
              <div className="text-center">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {technologySection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {technologySection.title}
                </h2>
                <p className="mt-2 mx-auto max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
                  {technologySection.description}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {technologySection.cards.map((card, i) => {
                  const icons = [Cpu, Shield, CheckCircle];
                  const Icon = icons[i] || Zap;
                  return (
                    <div
                      key={card.title}
                      className="group rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1D86FF]/30 hover:-translate-y-1"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF] group-hover:bg-[#1D86FF] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-sm font-semibold text-slate-900">{card.title}</h3>
                      <p className="text-[13px] text-slate-600 leading-relaxed">{card.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealSection>

          {/* Who we serve */}
          <RevealSection id={whoWeServeSection.id}>
            <div className="space-y-5">
              <div className="text-center">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {whoWeServeSection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {whoWeServeSection.title}
                </h2>
                <p className="mt-2 mx-auto max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
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
                      className="group relative rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1D86FF]/30 hover:-translate-y-1"
                    >
                      <span className="absolute -top-2.5 left-4 rounded-md border border-[#1D86FF]/30 bg-[#1D86FF]/5 px-3 py-0.5 text-[10px] font-medium text-[#1D86FF] group-hover:bg-[#1D86FF] group-hover:text-white group-hover:border-[#1D86FF] transition-all duration-300">
                        {card.label}
                      </span>
                      <div className="mb-3 mt-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF] group-hover:bg-[#1D86FF] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-sm font-semibold text-slate-900">{card.title}</h3>
                      <p className="text-[13px] text-slate-600 leading-relaxed">{card.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealSection>

          {/* Contact */}
          <RevealSection id={contactSection.id}>
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {contactSection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {contactSection.title}
                </h2>
                <p className="mt-2 mx-auto max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
                  {contactSection.description}
                </p>
              </div>

              <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1D86FF] to-[#011568] text-white animate-glow-pulse">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Get in touch
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{contactSection.officeText}</p>

                <div className="mt-6 space-y-4">
                  <a href={`mailto:${contactSection.email}`} className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-[#1D86FF]/5 transition-all duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF] group-hover:bg-[#1D86FF] group-hover:text-white transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Email us at</p>
                      <span className="font-medium text-[#1D86FF] group-hover:underline underline-offset-2">
                        {contactSection.email}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                  <a href="tel:+08065668688" className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-[#1D86FF]/5 transition-all duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF] group-hover:bg-[#1D86FF] group-hover:text-white transition-all duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Call us at</p>
                      <span className="font-medium text-slate-800 group-hover:text-[#1D86FF] transition-colors">
                        080 - 65668688
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                  <div className="group flex items-center gap-4 p-3 -mx-3 rounded-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Our offices</p>
                      <span className="text-slate-700">{contactSection.offices}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Legal */}
          <RevealSection className="pt-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-[13px] text-slate-600 shadow-sm md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-4 w-4 text-[#1D86FF]" />
                <h3 className="text-sm font-semibold text-slate-900">{legalSection.termsTitle}</h3>
              </div>
              <div className="mt-2 space-y-2 pl-6">
                {legalSection.terms.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-5 mb-3">
                <Lock className="h-4 w-4 text-[#1D86FF]" />
                <h3 className="text-sm font-semibold text-slate-900">
                  {legalSection.privacyTitle}
                </h3>
              </div>
              <div className="mt-2 space-y-2 pl-6">
                {legalSection.privacy.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>
          </RevealSection>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-slate-50 py-4 text-[11px] text-slate-500">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 md:flex-row md:px-6">
            <span>{footer.copyright}</span>
            <div className="flex flex-wrap gap-3">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#1D86FF] hover:underline hover:underline-offset-2"
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
