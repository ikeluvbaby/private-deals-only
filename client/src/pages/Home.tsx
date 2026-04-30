/**
 * CANVAS LOCK — Home.tsx
 * DO NOT change layout, section order, spacing, colors, typography,
 * or images without an explicit targeted request. Treat this as a locked baseline.
 *
 * Sections (in order):
 *   1. Hero — "Private Deals Only" headline + 2 CTA buttons
 *   2. What We Do — two-column text
 *   3. Deal Categories — 4 image cards (Real Estate, Cars, Crypto OTC, Gold)
 *   4. How It Works — 3 numbered steps
 *   5. Why Private Deals Only — 4 trust cards
 *   6. Final CTA
 *
 * IMAGE TREATMENT (2026-04-30 v2 — Hydra Color Grade):
 *   All 4 card images processed with unified Hydra tone:
 *   - Darkened exposure (-20%), highlight rolloff, warm gold tint
 *   - Desaturated -22%, cinematic vignette (radial edge darkening)
 *   - CSS: mask-image radial gradient (soft edge fade into card bg)
 *   - CSS: dark overlay rgba(0,0,0,0.45) + subtle gold gradient at bottom
 *   - Images feel embedded in the UI, not floating on top
 * ============================================================
 *
 * Home.tsx — Private Deals Only
 * Design: Dark luxury / Private Vault
 * Sections: Hero, What We Do, Deal Categories, How It Works, Trust, CTA
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Shield, Lock, Eye, ChevronRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/hero-bg-XXPKUV2weenKknaeSfuqPi.webp";

// User-provided final images — exact as supplied, no alterations
// Real Estate → luxury house at night (gold-lit, black background)
// Private Vehicles → gold Lamborghini Aventador on black
// Crypto OTC → gold Bitcoin coin on black with floor reflection
// Gold → 999.9 Fine Gold bars stacked on black
const REAL_ESTATE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/house_02aa4dc3.png";
const CAR_IMG         = "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/car_bfe0cd89.png";
const CRYPTO_OTC_IMG  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/bitcoin_0519a861.png";
const GOLD_IMG        = "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/gold-bars_ec5d7594.png";

const TRUST_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/trust-section-bg-QtuHTDiP4jy4FAHZJakneT.webp";

const dealCategories = [
  {
    label: "Real Estate",
    description: "Off-market residential, commercial, and development properties. Pre-MLS and private listings across Canada and internationally.",
    img: REAL_ESTATE_IMG,   // house.png
    tag: "01",
  },
  {
    label: "Private Vehicles",
    description: "Exotic, luxury, and collector vehicles. Off-market inventory and confidential transactions.",
    img: CAR_IMG,           // car.png
    tag: "02",
  },
  {
    label: "Crypto OTC",
    description: "Large-volume BTC and USDT over-the-counter transactions. Secure, private, and settlement-ready.",
    img: CRYPTO_OTC_IMG,    // bitcoin.png
    tag: "03",
  },
  {
    label: "Gold",
    description: "Physical gold acquisition. Verified, insured, and handled with full discretion.",
    img: GOLD_IMG,          // gold-bars.png
    tag: "04",
  },
];

const steps = [
  {
    num: "01",
    title: "Submit or Request",
    desc: "Tell us what you have or what you're looking for. All submissions are treated with strict confidentiality.",
  },
  {
    num: "02",
    title: "We Match Opportunities",
    desc: "We connect your deal with our vetted network of qualified buyers, sellers, and investors.",
  },
  {
    num: "03",
    title: "Secure the Transaction",
    desc: "We facilitate the process from introduction to close, ensuring both parties transact with confidence.",
  },
];

const whyPoints = [
  {
    icon: Lock,
    title: "Private and Discreet Deal Flow",
    desc: "Every transaction is handled off-market. Your information and deal details are never shared without explicit consent.",
  },
  {
    icon: Shield,
    title: "Serious Buyers and Sellers Only",
    desc: "We vet every party before introductions are made. No tire-kickers, no speculators, no time wasters.",
  },
  {
    icon: Eye,
    title: "Off-Market Opportunities",
    desc: "Deals in our network never appear on public platforms. Off-market means off-market — always.",
  },
  {
    icon: ArrowRight,
    title: "Confidential Introductions",
    desc: "We connect qualified buyers and sellers directly, with discretion at every stage from first contact to close.",
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <div className="bg-[oklch(0.08_0.004_60)]">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[oklch(0.08_0.004_60)/85]" />
        {/* Gradient fade to page bg at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[oklch(0.10_0.005_60)] to-transparent" />

        <div className="relative z-10 container text-center flex flex-col items-center gap-6 pt-24 pb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 hero-reveal hero-reveal-1">
              <div className="h-px w-10 bg-[oklch(0.71_0.115_73)]" />
            <span className="section-label">Canada &amp; International</span>
            <div className="h-px w-10 bg-[oklch(0.71_0.115_73)]" />
          </div>

          {/* Headline */}
          <h1
            className="text-[oklch(0.93_0.012_75)] leading-tight hero-reveal hero-reveal-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Private Deals Only
          </h1>

          {/* Sub-headline */}
          <p
            className="text-[oklch(0.71_0.115_73)] tracking-[0.18em] uppercase hero-reveal hero-reveal-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
              fontWeight: 500,
            }}
          >
            Off-market opportunities in Real Estate, Cars, Crypto, and Gold
          </p>

          {/* Tagline */}
          <p
            className="text-[oklch(0.60_0.008_75)] max-w-lg leading-relaxed hero-reveal hero-reveal-3"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
          >
            Connecting serious buyers and sellers in exclusive private transactions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 hero-reveal hero-reveal-4">
            <Link href="/submit-deal">
              <span className="btn-gold-solid px-10 py-4 text-[0.75rem] tracking-[0.14em]">
                Submit a Deal
              </span>
            </Link>
            <Link href="/buyer-list">
              <span className="btn-gold px-10 py-4 text-[0.75rem] tracking-[0.14em]">
                Join Buyer List
              </span>
            </Link>
          </div>

          {/* Twilio contact line */}
          <p
            className="text-[oklch(0.58_0.008_75)] text-xs tracking-wide hero-reveal hero-reveal-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Leave a message or text us at{" "}
            <a
              href="sms:+13656172009"
              className="text-[oklch(0.71_0.115_73)] hover:text-[oklch(0.82_0.13_73)] transition-colors duration-200 underline underline-offset-2"
            >
              (365) 617-2009
            </a>
          </p>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
            <div
              className="w-px h-12 bg-[oklch(0.72_0.12_75)]"
              style={{ animation: "pulse 2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ───────────────────────────────────────── */}
      <section className="py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="reveal flex items-center gap-4 mb-10">
              <span className="section-label">What We Do</span>
              <div className="h-px flex-1 bg-[oklch(0.22_0.007_60)]" />
            </div>
            <h2
              className="reveal text-[oklch(0.93_0.012_75)] leading-tight mb-10"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
              }}
            >
              A private intermediary for{" "}
              <em className="text-[oklch(0.71_0.115_73)]">high-value transactions</em>
            </h2>
            <div className="reveal grid md:grid-cols-2 gap-8">
              <p
                className="text-[oklch(0.60_0.008_75)] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
              >
                Hydra One Deals operates as a private deal broker — not a marketplace, not a listing platform. We work directly with investors, high-net-worth individuals, wholesalers, and private sellers to facilitate off-market transactions that never reach public channels.
              </p>
              <p
                className="text-[oklch(0.60_0.008_75)] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
              >
                Our network is curated. Our process is confidential. Every deal is matched with precision, and every party is vetted before introductions are made. If you are serious about buying or selling, you are in the right place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DEAL CATEGORIES ──────────────────────────────────── */}
      <section className="py-28 border-t border-[oklch(0.18_0.006_60)]">
        <div className="container">
          <div className="reveal flex items-center gap-4 mb-16">
            <span className="section-label">Deal Categories</span>
            <div className="h-px flex-1 bg-[oklch(0.22_0.007_60)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dealCategories.map((cat, i) => (
              <div
                key={cat.tag}
                className={`reveal-card reveal-delay-${i + 1} group flex flex-col hover:[transform:translateY(-3px)] hover:[box-shadow:0_12px_40px_oklch(0_0_0_/_0.5)] hover:[border-color:oklch(0.71_0.115_73_/_0.35)]`}
                style={{
                  background: "oklch(0.10 0.005 60)",
                  border: "1px solid oklch(0.71 0.115 73 / 0.10)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Image area — locked height, centered, clean cutout, no filters */}
                <div
                  className="flex items-center justify-center"
                  style={{ paddingTop: "44px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "4px", height: "220px" }}
                >
                  <img
                    src={cat.img}
                    alt={cat.label}
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    className="group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "20px 24px 28px" }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.68rem",
                      letterSpacing: "0.16em",
                      color: "oklch(0.71 0.115 73 / 0.60)",
                      fontWeight: 600,
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    {cat.tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "oklch(0.93 0.012 75)",
                      margin: "0 0 10px 0",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cat.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      color: "oklch(0.52 0.007 75)",
                      margin: 0,
                    }}
                  >
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-32 border-t border-[oklch(0.18_0.006_60)]">
        <div className="container">
          <div className="reveal flex items-center gap-4 mb-16">
            <span className="section-label">How It Works</span>
            <div className="h-px flex-1 bg-[oklch(0.22_0.007_60)]" />
          </div>

          <div className="grid md:grid-cols-3 gap-0 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-[oklch(0.22_0.007_60)]" />

            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal relative flex flex-col gap-5 p-8 md:p-10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 flex items-center justify-center border border-[oklch(0.72_0.12_75)/50] bg-[oklch(0.10_0.005_60)]">
                  <span
                    className="text-[oklch(0.72_0.12_75)]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  className="text-[oklch(0.93_0.012_75)]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[oklch(0.55_0.008_75)] text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {step.desc}
                </p>

                {i < steps.length - 1 && (
                  <div className="md:hidden h-px bg-[oklch(0.22_0.007_60)] mt-4" />
                )}
              </div>
            ))}
          </div>

          <div className="reveal mt-10 flex justify-center">
            <Link href="/how-it-works">
              <span className="flex items-center gap-2 text-[oklch(0.72_0.12_75)] text-sm tracking-wide hover:gap-3 transition-all duration-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                Full Process Overview <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY PRIVATE DEALS ONLY ───────────────────────────── */}
      <section
        className="relative py-28 overflow-hidden border-t border-[oklch(0.18_0.006_60)]"
        style={{
          backgroundImage: `url(${TRUST_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.08_0.004_60)/92]" />

        <div className="relative z-10 container">
          <div className="reveal flex items-center gap-4 mb-14">
            <span className="section-label">Why Private Deals Only</span>
            <div className="h-px flex-1 bg-[oklch(0.72_0.12_75)/30]" />
          </div>

          <div className="reveal mb-12 max-w-2xl">
            <h2
              className="text-[oklch(0.93_0.012_75)] leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 400,
              }}
            >
              Discretion is not a feature.{" "}
              <em className="text-[oklch(0.71_0.115_73)]">It is the foundation.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="reveal card-dark p-7 flex flex-col gap-4"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.72_0.12_75)/40]">
                    <Icon size={18} className="text-[oklch(0.72_0.12_75)]" />
                  </div>
                  <h3
                    className="text-[oklch(0.93_0.012_75)]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.05rem",
                      fontWeight: 500,
                    }}
                  >
                    {point.title}
                  </h3>
                  <p
                    className="text-[oklch(0.55_0.008_75)] text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-28 border-t border-[oklch(0.18_0.006_60)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
            <div className="reveal">
              <div className="gold-divider w-16 mx-auto mb-8" />
              <h2
                className="text-[oklch(0.93_0.012_75)] leading-tight mb-5"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 400,
                }}
              >
                Ready to transact privately?
              </h2>
              <p
                className="text-[oklch(0.55_0.008_75)] leading-relaxed mb-8"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
              >
                Whether you have a deal to submit or you are looking to acquire, we want to hear from you. Serious inquiries only.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/submit-deal">
                  <span className="btn-gold-solid px-10 py-4 text-[0.75rem] tracking-[0.14em] flex items-center gap-2">
                    Submit a Deal <ChevronRight size={14} />
                  </span>
                </Link>
                <Link href="/buyer-list">
                  <span className="btn-gold px-10 py-4 text-[0.75rem] tracking-[0.14em]">
                    Join Buyer List
                  </span>
                </Link>
              </div>
              {/* Twilio contact */}
              <p
            className="text-[oklch(0.58_0.008_75)] text-xs tracking-wide mt-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Prefer to reach us directly? Leave a message or text{" "}
            <a
              href="tel:+13656172009"
              className="text-[oklch(0.71_0.115_73)] hover:text-[oklch(0.82_0.13_73)] transition-colors duration-200 underline underline-offset-2"
            >
              (365) 617-2009
            </a>
            {" "}or{" "}
            <a
              href="sms:+13656172009"
              className="text-[oklch(0.71_0.115_73)] hover:text-[oklch(0.82_0.13_73)] transition-colors duration-200 underline underline-offset-2"
            >
                  send a text
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
