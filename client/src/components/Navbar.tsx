/**
 * CANVAS LOCK — Navbar.tsx
 * DO NOT change brand name, link order, colors, font sizes, or layout
 * without an explicit targeted request. Treat this as a locked baseline.
 *
 * Brand: "Private Deals Only" (primary) + "by Hydraone Deals" (sub-label)
 * Links: Home | How It Works | Submit a Deal | Join Buyer List
 * CTA button: "Submit a Deal" (btn-gold outline, top-right)
 * Colors: near-black bg, gold text/borders, off-white nav links
 * ============================================================
 *
 * Navbar.tsx — Private Deals Only
 * Design: Dark luxury, gold accents, minimal navigation
 * Fixed top bar with transparent-to-dark scroll behavior
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

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
          ? "bg-[oklch(0.10_0.005_60)/95] backdrop-blur-md border-b border-[oklch(0.22_0.007_60)]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex flex-col leading-none select-none">
              <span
                className="text-[oklch(0.93_0.012_75)] font-bold tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", letterSpacing: "0.02em" }}
              >
                Private Deals Only
              </span>
              <span
                className="text-[0.55rem] tracking-[0.18em] uppercase font-medium"
                style={{ fontFamily: "'Inter', sans-serif", color: "oklch(0.72 0.12 75)" }}
              >
                by Hydraone Deals
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-[0.75rem] tracking-[0.14em] uppercase font-medium transition-colors duration-200 ${
                    location === link.href
                      ? "text-[oklch(0.72_0.12_75)]"
                      : "text-[oklch(0.65_0.010_75)] hover:text-[oklch(0.93_0.012_75)]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
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
        <div className="md:hidden mobile-menu-enter border-t border-[oklch(0.22_0.007_60)] bg-[oklch(0.10_0.005_60)]">
          <div className="container py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block text-[0.8rem] tracking-[0.14em] uppercase font-medium transition-colors ${
                    location === link.href
                      ? "text-[oklch(0.72_0.12_75)]"
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
