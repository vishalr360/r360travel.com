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
          <section className="grid gap-8 pb-8 md:grid-cols-[1.1fr,1.05fr] md:pb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-[#1D86FF]/20 bg-[#1D86FF]/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[#1D86FF]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#1D86FF] to-[#011568] text-[10px] font-extrabold text-white shadow-[0_0_15px_rgba(29,134,255,0.4)]">
                  ∞
                </span>
                <span>{hero.kicker}</span>
              </div>

              <h1 className="mt-5 text-[1.9rem] font-semibold leading-tight tracking-tight text-slate-900 md:text-[2.4rem] lg:text-[2.8rem]">
                {hero.title.split(hero.highlight)[0]}
                <span className="bg-gradient-to-tr from-[#1D86FF] via-[#1D86FF] to-[#011568] bg-clip-text text-transparent">
                  {hero.highlight}
                </span>
                {hero.title.split(hero.highlight)[1]}
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">
                {hero.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <a
                  href={hero.primaryCta.href}
                  className="inline-flex items-center gap-2 justify-center rounded-lg border border-[#1D86FF]/30 bg-gradient-to-tr from-[#1D86FF] to-[#4A9FFF] px-5 py-2.5 font-semibold text-white shadow-[0_4px_14px_rgba(29,134,255,0.4)] hover:shadow-[0_6px_20px_rgba(29,134,255,0.5)] transition-shadow"
                >
                  <Hotel className="h-4 w-4" />
                  {hero.primaryCta.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={hero.tertiaryCta.href}
                  className="inline-flex items-center gap-2 justify-center rounded-lg border border-[#1D86FF]/30 bg-[#1D86FF]/5 px-5 py-2.5 font-medium text-[#1D86FF] hover:border-[#1D86FF]/50 hover:bg-[#1D86FF]/10 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {hero.tertiaryCta.label}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-8 text-[11px] text-slate-500">
                {hero.meta.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                      {m.label}
                    </span>
                    <span className="text-sm font-medium text-slate-800">{m.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#why"
                className="mt-8 flex items-center gap-3 text-[11px] text-slate-500 md:mt-10"
              >
                <span className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-300 p-1">
                  <span className="mt-0.5 h-1.5 w-1 rounded-full bg-[#1D86FF] motion-safe:animate-bounce" />
                </span>
                <span>Scroll to see how it works</span>
              </a>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <div className="pointer-events-none absolute inset-[-60%] rounded-full bg-[radial-gradient(circle_at_0_0,rgba(29,134,255,0.08),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(1,21,104,0.08),transparent_60%)] opacity-70 mix-blend-multiply motion-safe:animate-spin" />

                <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="mb-4 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="rounded-md border border-[#1D86FF]/30 bg-[#1D86FF]/5 px-3 py-1 text-[10px] text-[#1D86FF]">
                      Multi-supplier rate engine
                    </span>
                    <span className="text-[10px] text-slate-400">Live search • &lt; 600ms</span>
                  </div>

                  <div className="grid gap-3 text-[11px] sm:grid-cols-2">
                    <div className="rounded-xl border border-[#1D86FF]/20 bg-gradient-to-br from-[#1D86FF]/5 to-white p-4">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <Building2 className="h-3.5 w-3.5 text-[#1D86FF]" />
                        Suppliers scanned
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">8+</div>
                      <div className="mt-1 text-[10px] text-slate-500">
                        Expedia, Agoda, Hotelbeds, TBO &amp; more
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <Zap className="h-3.5 w-3.5 text-[#1D86FF]" />
                        Price optimization
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">Real-time</div>
                      <div className="mt-1 text-[10px] text-slate-500">
                        Best available deal, every search
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <Globe className="h-3.5 w-3.5 text-[#1D86FF]" />
                        Coverage
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">Global</div>
                      <div className="mt-1 text-[10px] text-slate-500">
                        Domestic &amp; international properties
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <HeadphonesIcon className="h-3.5 w-3.5 text-[#1D86FF]" />
                        Support
                      </div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">24×7</div>
                      <div className="mt-1 text-[10px] text-slate-500">
                        Bookings, changes, refunds &amp; more
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1 text-[11px] text-slate-600">
                    <p className="font-medium">{hero.suppliersHeadline}</p>
                    <p className="text-slate-500">{hero.suppliers}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 text-[11px] text-slate-500">
                <span className="mr-2 text-slate-400">Trusted by</span>
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
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {whySection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {whySection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
                  {whySection.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-[11px]">
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
                      className="rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm md:text-[0.9rem]"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF]">
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
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {productSection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {productSection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
                  {productSection.description}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                    {productSection.techCard.kicker}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">
                    {productSection.techCard.title}
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-[13px] text-slate-600">
                    {productSection.techCard.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                    {productSection.experienceCard.kicker}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">
                    {productSection.experienceCard.title}
                  </h3>
                  <div className="mt-2 space-y-2 text-[13px] text-slate-600">
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
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {partnerSection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {partnerSection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
                  {partnerSection.description}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">Connected suppliers</h3>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-slate-700">
                  {partnerSection.suppliers.map((supplier) => (
                    <span key={supplier} className="opacity-80">
                      {supplier}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[13px] text-slate-600">{partnerSection.extraText}</p>
              </div>
            </div>
          </RevealSection>

          {/* Technology */}
          <RevealSection id={technologySection.id}>
            <div className="space-y-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {technologySection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {technologySection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
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
                      className="rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF]">
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
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {whoWeServeSection.kicker}
                </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {whoWeServeSection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
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
                      className="relative rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm"
                    >
                      <span className="absolute -top-2.5 left-4 rounded-md border border-[#1D86FF]/30 bg-[#1D86FF]/5 px-3 py-0.5 text-[10px] font-medium text-[#1D86FF]">
                        {card.label}
                      </span>
                      <div className="mb-3 mt-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF]">
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
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#1D86FF]">
                  {contactSection.kicker}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {contactSection.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-[0.95rem]">
                  {contactSection.description}
                </p>
              </div>

              <div className="max-w-xl rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-sm">
                <h3 className="mb-4 text-base font-semibold text-slate-900">
                  Get in touch
                </h3>
                <p className="text-slate-600 leading-relaxed">{contactSection.officeText}</p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Email us at</p>
                      <a
                        className="font-medium text-[#1D86FF] underline-offset-2 hover:underline"
                        href={`mailto:${contactSection.email}`}
                      >
                        {contactSection.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D86FF]/10 text-[#1D86FF]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Call us at</p>
                      <a
                        className="font-medium text-slate-800 underline-offset-2 hover:underline"
                        href="tel:+08065668688"
                      >
                        080 - 65668688
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
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
              <h3 className="text-sm font-semibold text-slate-900">{legalSection.termsTitle}</h3>
              <div className="mt-2 space-y-2">
                {legalSection.terms.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <h3 className="mt-5 text-sm font-semibold text-slate-900">
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
