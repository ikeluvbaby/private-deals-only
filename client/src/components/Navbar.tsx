/**
 * CANVAS LOCK — Navbar.tsx
 * DO NOT change brand name, link order, colors, font sizes, or layout
 * without an explicit targeted request. Treat this as a locked baseline.
 *
 * Brand: Official Hydra three-headed dragon logo + "Private Deals Only" (primary) + "by Hydraone Deals" (sub-label)
 * Links: Home | How It Works | Submit a Deal | Join Buyer List
 * CTA button: "Submit a Deal" (btn-gold outline, top-right)
 * Colors: near-black bg, gold text/borders, off-white nav links
 *
 * LOGO SPEC (2026-04-30 v4 — Logo Pack Rebuild):
 * - Asset: hydra-logo-horizontal.png — full logo pack variant with icon + text baked in
 *   Built with 20% padding on all sides. All three dragon heads fully visible.
 *   Text "Private Deals Only / BY HYDRAONE DEALS" rendered in Playfair Display + Inter.
 * - Size: auto width, 72px desktop / 56px mobile height
 * - Container: overflow:visible, NO background, NO border, NO border-radius
 * - object-fit: contain, aspect ratio always preserved
 * - flex-shrink: 0 — never compressed by siblings
 * ============================================================
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

// Logo pack — horizontal variant: icon + text side by side, 20% padding built in
const LOGO_HORIZONTAL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/hydra-logo-horizontal_98bba8eb.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Submit a Deal", href: "/submit-deal" },
  { label: "Join Buyer List", href: "/buyer-list" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[oklch(0.08_0.004_60)/96] backdrop-blur-md border-b border-[oklch(0.22_0.007_60)]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        {/* Header row — 76px desktop / 68px mobile */}
        <div
          className="flex items-center justify-between"
          style={{ height: "76px" }}
        >

          {/* ── Logo lockup ─────────────────────────────────────────── */}
          <Link href="/">
            <div
              className="flex items-center select-none"
              style={{ overflow: "visible" }}
            >
              {/*
               * Logo wrapper:
               * - NO background color — logo floats on header
               * - NO border, NO border-radius, NO box-shadow
               * - overflow: visible — dragon horns/wings never clipped
               * - The horizontal PNG has icon + text baked in with 20% padding
               * - flex-shrink: 0 — never compressed
               */}
              <div
                style={{
                  flexShrink: 0,
                  overflow: "visible",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "none",
                  border: "none",
                }}
              >
                <img
                  src={LOGO_HORIZONTAL}
                  alt="Private Deals Only — Hydra One Deals"
                  style={{
                    display: "block",
                    objectFit: "contain",
                    objectPosition: "left center",
                    flexShrink: 0,
                    background: "none",
                    /* Horizontal variant: auto width, fixed height */
                    /* 20% padding is built into the asset — no extra CSS padding needed */
                    height: "56px",
                    width: "auto",
                  }}
                  className="h-[56px] md:h-[68px]"
                />
              </div>
            </div>
          </Link>
          {/* ── /Logo lockup ─────────────────────────────────────────── */}

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`relative text-[0.75rem] tracking-[0.14em] uppercase font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[oklch(0.71_0.115_73)]"
                        : "text-[oklch(0.65_0.010_75)] hover:text-[oklch(0.93_0.012_75)]"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-4px",
                          left: 0,
                          right: 0,
                          height: "1.5px",
                          background: "oklch(0.71 0.115 73 / 0.70)",
                          borderRadius: "2px",
                        }}
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/submit-deal">
              <span className="btn-gold text-[0.7rem]">Submit a Deal</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[oklch(0.93_0.012_75)] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mobile-menu-enter border-t border-[oklch(0.22_0.007_60)] bg-[oklch(0.08_0.004_60)]">
          <div className="container py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block text-[0.8rem] tracking-[0.14em] uppercase font-medium transition-colors ${
                    location === link.href
                      ? "text-[oklch(0.71_0.115_73)]"
                      : "text-[oklch(0.75_0.010_75)]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="gold-divider my-1" />
            <Link href="/submit-deal">
              <span className="btn-gold-solid w-full text-center block text-[0.75rem]">
                Submit a Deal
              </span>
            </Link>
            <Link href="/buyer-list">
              <span className="btn-gold w-full text-center block text-[0.75rem]">
                Join Buyer List
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
