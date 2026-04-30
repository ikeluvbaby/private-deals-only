/**
 * HowItWorks.tsx — Hydra One Deals
 * Design: Dark luxury / Private Vault
 * Content: Process breakdown, confidentiality emphasis, serious inquiries only
 */
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Lock, UserCheck, Clock, ChevronRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/hero-bg-XXPKUV2weenKknaeSfuqPi.webp";
const TRUST_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/trust-section-bg-QtuHTDiP4jy4FAHZJakneT.webp";

const processSteps = [
  {
    num: "01",
    title: "Submit or Request",
    subtitle: "The first step is yours",
    desc: "Whether you are a seller with an off-market asset or a buyer looking for a specific opportunity, the process begins with a submission. Sellers complete our deal intake form. Buyers register on our buyer list with their acquisition criteria.",
    detail: "All information submitted is treated with strict confidentiality. We do not share your details with any third party without your explicit consent.",
  },
  {
    num: "02",
    title: "Vetting & Review",
    subtitle: "We qualify every party",
    desc: "Before any introduction is made, we review and verify each submission. This step ensures that every party in our network is serious, qualified, and capable of completing a transaction.",
    detail: "We do not work with time-wasters, speculators without capital, or parties who cannot demonstrate genuine intent. This protects the integrity of every deal in our network.",
  },
  {
    num: "03",
    title: "Matching",
    subtitle: "Precision over volume",
    desc: "Once qualified, we match your deal or acquisition criteria against our active network. We do not blast deals to everyone — we make targeted, confidential introductions between the right parties.",
    detail: "A match is only made when we are confident both parties are aligned on deal type, scale, and timeline.",
  },
  {
    num: "04",
    title: "Secure the Transaction",
    subtitle: "From introduction to close",
    desc: "We facilitate the introduction and support the transaction process. While we are not legal counsel or financial advisors, we guide both parties through the process and ensure the deal moves forward efficiently.",
    detail: "We work alongside your legal and financial teams to ensure a smooth, secure, and professional close.",
  },
];

const principles = [
  {
    icon: Lock,
    title: "Confidentiality First",
    desc: "Every submission, conversation, and introduction is handled with absolute discretion. We operate on a need-to-know basis.",
  },
  {
    icon: UserCheck,
    title: "Serious Parties Only",
    desc: "We do not entertain inquiries from unqualified parties. Our network is built on trust, and we protect it rigorously.",
  },
  {
    icon: Shield,
    title: "No Public Listings",
    desc: "Deals in our network never appear on public platforms. Off-market means off-market — always.",
  },
  {
    icon: Clock,
    title: "Efficient Process",
    desc: "We respect your time. Our process is designed to move quickly once both parties are qualified and aligned.",
  },
];

export default function HowItWorks() {
  useScrollReveal();

  return (
    <div className="bg-[oklch(0.10_0.005_60)] min-h-screen">
      {/* Page Header */}
      <div
        className="relative pt-36 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.08_0.004_60)/90]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.10_0.005_60)] to-transparent" />
        <div className="relative z-10 container">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[oklch(0.72_0.12_75)]" />
            <span className="section-label">The Process</span>
          </div>
          <h1
            className="text-[oklch(0.93_0.012_75)] leading-tight max-w-2xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 400,
            }}
          >
            How It Works
          </h1>
          <p
            className="mt-4 text-[oklch(0.55_0.008_75)] max-w-xl leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
          >
            A straightforward, confidential process designed for serious buyers and sellers of high-value assets.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container">
          <div className="reveal flex items-center gap-4 mb-16">
            <span className="section-label">The Four Steps</span>
            <div className="h-px flex-1 bg-[oklch(0.22_0.007_60)]" />
          </div>

          <div className="flex flex-col gap-0 max-w-4xl">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="reveal grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 pb-14 border-b border-[oklch(0.18_0.006_60)] mb-14 last:border-0 last:mb-0 last:pb-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Step number */}
                <div className="flex flex-col items-start md:items-center pt-1">
                  <div className="w-14 h-14 flex items-center justify-center border border-[oklch(0.72_0.12_75)/50]">
                    <span
                      className="text-[oklch(0.72_0.12_75)]"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <span className="section-label text-[0.65rem]">{step.subtitle}</span>
                  <h2
                    className="text-[oklch(0.93_0.012_75)]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.4rem, 3vw, 2rem)",
                      fontWeight: 400,
                    }}
                  >
                    {step.title}
                  </h2>
                  <p
                    className="text-[oklch(0.60_0.008_75)] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
                  >
                    {step.desc}
                  </p>
                  <div className="mt-2 pl-4 border-l border-[oklch(0.72_0.12_75)/30]">
                    <p
                      className="text-[oklch(0.45_0.008_75)] text-sm leading-relaxed italic"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section
        className="relative py-24 overflow-hidden border-t border-[oklch(0.18_0.006_60)]"
        style={{
          backgroundImage: `url(${TRUST_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.08_0.004_60)/92]" />
        <div className="relative z-10 container">
          <div className="reveal flex items-center gap-4 mb-14">
            <span className="section-label">Our Principles</span>
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
              Built on trust.{" "}
              <em className="text-[oklch(0.72_0.12_75)]">Operated with discretion.</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="reveal card-dark p-7 flex flex-col gap-4"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.72_0.12_75)/40]">
                    <Icon size={17} className="text-[oklch(0.72_0.12_75)]" />
                  </div>
                  <h3
                    className="text-[oklch(0.93_0.012_75)]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-[oklch(0.50_0.007_75)] text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 border-t border-[oklch(0.18_0.006_60)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="reveal card-dark p-10 border-l-2 border-l-[oklch(0.72_0.12_75)]">
              <h3
                className="text-[oklch(0.93_0.012_75)] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                }}
              >
                A note on serious inquiries
              </h3>
              <p
                className="text-[oklch(0.55_0.008_75)] leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
              >
                We are selective about who we work with. This is not a platform for browsing, speculating, or gathering market intelligence. Every party in our network has demonstrated genuine intent and the capacity to transact.
              </p>
              <p
                className="text-[oklch(0.45_0.008_75)] text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                If you are not ready to transact, we respectfully ask that you do not submit. Our time — and the time of our clients — is valuable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[oklch(0.18_0.006_60)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-7">
            <div className="reveal">
              <div className="gold-divider w-12 mx-auto mb-8" />
              <h2
                className="text-[oklch(0.93_0.012_75)] leading-tight mb-5"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 400,
                }}
              >
                Ready to proceed?
              </h2>
              <p
                className="text-[oklch(0.55_0.008_75)] leading-relaxed mb-8"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
              >
                Choose the path that applies to you. Both paths begin with a simple, confidential submission.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/submit-deal">
                  <span className="btn-gold-solid px-10 py-4 text-[0.75rem] tracking-[0.14em] flex items-center gap-2">
                    I Have a Deal to Submit <ChevronRight size={14} />
                  </span>
                </Link>
                <Link href="/buyer-list">
                  <span className="btn-gold px-10 py-4 text-[0.75rem] tracking-[0.14em]">
                    I'm Looking to Buy
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
