/**
 * CANVAS LOCK — Footer.tsx
 * DO NOT change brand placement, column layout, link order, or colors
 * without an explicit targeted request.
 *
 * Structure: 3-column grid (Brand | Navigation | Contact)
 * Brand: Hydra icon logo + "Private Deals Only" + "by Hydraone Deals"
 * Contact: Twilio (365) 617-2009 — tel: + sms: links
 * Copyright: "© [year] Private Deals Only — by Hydraone Deals"
 * ============================================================
 *
 * LOGO SPEC (2026-04-30 v4 — Logo Pack Rebuild):
 * - Asset: hydra-logo-icon.png — icon-only variant, 20% padding built in
 *   Full gold Hydra emblem, all three heads visible, transparent background
 * - Size: 52px × 52px (icon has 20% padding built in = ~35px visible mark)
 * - No filter, no background box — gold dragon floats on dark footer
 * ============================================================
 *
 * Footer.tsx — Private Deals Only
 * Design: Dark luxury, minimal, gold accents
 */
import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";

// Logo pack — icon-only variant: emblem centered with 20% padding built in
const LOGO_ICON =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/hydra-logo-icon_f38dc9fd.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.08_0.004_60)] border-t border-[oklch(0.22_0.007_60)]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/*
               * Footer logo — icon-only variant
               * 20% padding built into asset — no extra CSS padding needed
               * No filter, no background — gold dragon on dark footer
               */}
              <img
                src={LOGO_ICON}
                alt="Private Deals Only — Hydra"
                style={{
                  width: "52px",
                  height: "52px",
                  objectFit: "contain",
                  flexShrink: 0,
                  background: "none",
                  display: "block",
                }}
              />
              <div className="flex flex-col leading-none">
                <span
                  className="text-[oklch(0.93_0.012_75)] font-bold tracking-wide"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", letterSpacing: "0.02em" }}
                >
                  Private Deals Only
                </span>
                <span
                  className="text-[0.55rem] tracking-[0.18em] uppercase font-medium"
                  style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.71 0.115 73)" }}
                >
                  by Hydraone Deals
                </span>
              </div>
            </div>
            <p
              className="text-[oklch(0.55_0.008_75)] text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Private deal brokerage for serious buyers and sellers. Real Estate, Luxury Cars, Crypto &amp; Gold. Canada &amp; International.
            </p>

          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="section-label">Navigation</span>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Submit a Deal", href: "/submit-deal" },
                { label: "Join Buyer List", href: "/buyer-list" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-[oklch(0.58_0.008_75)] hover:text-[oklch(0.71_0.115_73)] text-sm transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="section-label">Contact</span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:deals@hydraonedeals.com"
                className="flex items-center gap-2 text-[oklch(0.58_0.008_75)] hover:text-[oklch(0.71_0.115_73)] text-sm transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Mail size={14} className="shrink-0" />
                deals@hydraonedeals.com
              </a>
              <a
                href="tel:+13656172009"
                className="flex items-center gap-2 text-[oklch(0.58_0.008_75)] hover:text-[oklch(0.71_0.115_73)] text-sm transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Phone size={14} className="shrink-0" />
                (365) 617-2009
              </a>
              <a
                href="sms:+13656172009"
                className="flex items-center gap-2 text-[oklch(0.58_0.008_75)] hover:text-[oklch(0.71_0.115_73)] text-xs transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Phone size={12} className="shrink-0" />
                Text us at (365) 617-2009
              </a>
            </div>
            <div className="mt-2">
              <p
                className="text-[oklch(0.40_0.006_75)] text-xs leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                All inquiries are treated with strict confidentiality. Serious parties only.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mt-12 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-[oklch(0.35_0.005_75)] text-xs tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            &copy; {year} Private Deals Only — by Hydraone Deals. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy">
              <span
                className="text-[oklch(0.38_0.005_75)] hover:text-[oklch(0.71_0.115_73)] text-xs tracking-wide transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Privacy Policy
              </span>
            </Link>
            <span className="text-[oklch(0.28_0.004_75)] text-xs">&bull;</span>
            <Link href="/terms">
              <span
                className="text-[oklch(0.38_0.005_75)] hover:text-[oklch(0.71_0.115_73)] text-xs tracking-wide transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Terms of Use
              </span>
            </Link>
            <span className="text-[oklch(0.28_0.004_75)] text-xs hidden md:inline">&bull;</span>
            <p
              className="text-[oklch(0.35_0.005_75)] text-xs tracking-wide hidden md:block"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Private &bull; Confidential &bull; Exclusive
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
