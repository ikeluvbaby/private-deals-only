/**
 * Privacy Policy — /privacy
 * CASL-compliant privacy disclosure for Hydra One Deals
 * Design: matches site dark luxury aesthetic — no layout changes
 */
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
            Privacy Policy
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
              Information We Collect
            </h2>
            <p>
              We collect information you voluntarily provide when submitting a deal or joining our buyer list,
              including your name, email address, and phone number. We may also collect details about the
              nature of the deal or asset you are submitting or seeking.
            </p>
          </section>

          <section>
            <h2
              className="text-[oklch(0.88_0.012_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 500 }}
            >
              How We Use Your Information
            </h2>
            <p className="mb-4">This information is used strictly to:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Review deal submissions",
                "Connect buyers and sellers",
                "Communicate regarding opportunities that match your profile",
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
              Data Sharing
            </h2>
            <p>
              We do not sell or share your personal information with third parties. Your information
              may be shared with a counterparty only when both parties have expressed mutual interest
              in a transaction, and only with your implicit consent through the submission process.
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
              All submissions are handled with strict confidentiality. We take reasonable measures
              to protect your personal information from unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2
              className="text-[oklch(0.88_0.012_75)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 500 }}
            >
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at
              any time by contacting us directly. We will respond to all reasonable requests within
              a reasonable timeframe in accordance with applicable Canadian privacy law (CASL/PIPEDA).
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
              For privacy-related inquiries, please contact us:
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
