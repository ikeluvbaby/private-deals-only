/**
 * App.tsx — Hydra One Deals
 * Routes: Home, How It Works, Submit a Deal, Join Buyer List, Privacy, Terms, 404
 * Layout: Navbar (fixed) + page content + Footer + FloatingSMS button
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import SubmitDeal from "./pages/SubmitDeal";
import BuyerList from "./pages/BuyerList";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import LogoIntro from "./components/LogoIntro";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/submit-deal" component={SubmitDeal} />
      <Route path="/buyer-list" component={BuyerList} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfUse} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

/** Floating SMS pill — fixed bottom-right, gold accent, mobile optimized */
function FloatingSMS() {
  return (
    <a
      href="sms:+13656172009"
      aria-label="Text us at (365) 617-2009"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "0.45rem",
        padding: "0.55rem 1.1rem",
        background: "oklch(0.71 0.115 73)",
        color: "oklch(0.08 0.004 60)",
        borderRadius: "999px",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        textDecoration: "none",
        boxShadow: "0 4px 24px oklch(0.71 0.115 73 / 0.35), 0 2px 8px oklch(0 0 0 / 0.4)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          "0 8px 32px oklch(0.71 0.115 73 / 0.45), 0 4px 12px oklch(0 0 0 / 0.5)";
        (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.76 0.12 73)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          "0 4px 24px oklch(0.71 0.115 73 / 0.35), 0 2px 8px oklch(0 0 0 / 0.4)";
        (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.71 0.115 73)";
      }}
    >
      {/* SMS icon */}
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      Text Us
    </a>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <LogoIntro />
          <div className="min-h-screen flex flex-col bg-[oklch(0.08_0.004_60)]">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
            <FloatingSMS />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
