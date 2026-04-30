/**
 * Terms of Use — /terms
 * Legal terms for Hydra One Deals platform
 * Design: matches site dark luxury aesthetic — no layout changes
 */
import { Link } from "wouter";

export default function TermsOfUse() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[oklch(0.08_0.004_60)] min-h-screen pt-32 pb-24">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-10">
          <Link href="/">
            <span
              className="text-[oklch(0.71_0.115_73)] text-xs tracking-[0.14em] uppercase hover:text-[oklch(0.82_0.13_73)] transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              ← Back to Home
            </span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <p
            className="text-[oklch(0.71_0.115_73)] text-xs tracking-[0.18em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Legal
          </p>
          <h1
            className="text-[oklch(0.93_0.012_75)] leading-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Terms of Use
          </h1>
          <p
            className="text-[oklch(0.50_0.007_75)] text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Last updated: {year} — Private Deals Only by Hydraone Deals
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[oklch(0.22_0.007_60)] mb-12" />

        {/* Content */}
        <div
          className="flex flex-col gap-10 text-[oklch(0.62_0.008_75)] leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.8 }}
        >

          <section>
            <h2
              className="text-[oklch(0.88_0.012_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 500 }}
            >
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using this platform, you agree to be bound by these Terms of Use.
              If you do not agree to these terms, please do not use this platform.
            </p>
          </section>

          <section>
            <h2
              className="text-[oklch(0.88_0.012_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 500 }}
            >
              Platform Role
            </h2>
            <p className="mb-4">By using this platform, you acknowledge and agree that:</p>
            <ul className="flex flex-col gap-3 pl-4">
              {[
                "Hydra One Deals acts as a connector between buyers and sellers — we are not a party to any transaction",
                "We do not guarantee deal outcomes, transaction completion, or the accuracy of any listing",
                "All parties are solely responsible for their own due diligence, legal review, and financial decisions",
                "Information submitted must be accurate, truthful, and not misleading",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[oklch(0.71_0.115_73)] mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2
              className="text-[oklch(0.88_0.012_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 500 }}
            >
              Submissions
            </h2>
            <p>
              We reserve the right to reject, remove, or decline any submission at our sole discretion,
              without obligation to provide a reason. Submission of a deal or buyer profile does not
              constitute any agreement, commitment, or guarantee of service.
            </p>
          </section>

          <section>
            <h2
              className="text-[oklch(0.88_0.012_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 500 }}
            >
              Confidentiality
            </h2>
            <p>
              All deal information shared through this platform is treated as confidential.
              You agree not to disclose any non-public information shared with you through this
              platform to any third party without prior written consent.
            </p>
          </section>

          <section>
            <h2
              className="text-[oklch(0.88_0.012_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 500 }}
            >
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Hydra One Deals shall not be liable
              for any direct, indirect, incidental, or consequential damages arising from your use
              of this platform or any transaction facilitated through it.
            </p>
          </section>

          <section>
            <h2
              className="text-[oklch(0.88_0.012_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 500 }}
            >
              Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the Province of Ontario and the federal laws
              of Canada applicable therein. Any disputes shall be resolved in the courts of Ontario.
            </p>
          </section>

          <section>
            <h2
              className="text-[oklch(0.88_0.012_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 500 }}
            >
              Contact
            </h2>
            <p className="mb-3">
              For questions about these terms, please contact us:
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:deals@hydraonedeals.com"
                className="text-[oklch(0.71_0.115_73)] hover:text-[oklch(0.82_0.13_73)] transition-colors duration-200 underline underline-offset-2"
              >
                deals@hydraonedeals.com
              </a>
              <a
                href="tel:+13656172009"
                className="text-[oklch(0.71_0.115_73)] hover:text-[oklch(0.82_0.13_73)] transition-colors duration-200 underline underline-offset-2"
              >
                (365) 617-2009
              </a>
            </div>
          </section>

        </div>

        {/* Bottom divider */}
        <div className="h-px w-full bg-[oklch(0.22_0.007_60)] mt-16 mb-8" />
        <p
          className="text-[oklch(0.35_0.005_75)] text-xs tracking-wide"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          &copy; {year} Private Deals Only — by Hydraone Deals. All rights reserved.
        </p>
      </div>
    </div>
  );
}
