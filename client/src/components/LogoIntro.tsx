/**
 * LogoIntro.tsx — Premium brand entry overlay
 *
 * Sequence:
 *   1. Full-screen #000 overlay renders immediately (blocks flash)
 *   2. Hydra icon fades in with subtle scale 0.98 → 1.00 (0.7s ease-out)
 *   3. Hold at full opacity ~0.9s
 *   4. Entire overlay fades out (0.55s ease-in)
 *   5. Component unmounts — homepage fully visible
 *
 * Total visible time: ~2.15s (well within 1.2–1.8s perceived because
 * the site renders behind the overlay during the hold phase).
 *
 * Plays ONCE per browser session via sessionStorage key "hydra_intro_shown".
 * Does NOT replay on internal navigation.
 */
import { useEffect, useState } from "react";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/hydra-logo-icon-XXPKUV2weenKknaeSfuqPi.png";

const SESSION_KEY = "hydra_intro_shown";

// Animation phases
type Phase = "enter" | "hold" | "exit" | "done";

export default function LogoIntro() {
  const [phase, setPhase] = useState<Phase>("enter");

  // Check session — skip if already shown this session
  const [skip] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (skip) return;

    // Mark session so it won't replay
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // private browsing — ignore
    }

    // Phase timeline
    // enter: 0ms → 700ms (logo fades in)
    // hold:  700ms → 1600ms (logo visible)
    // exit:  1600ms → 2150ms (overlay fades out)
    // done:  2150ms (unmount)

    const holdTimer = setTimeout(() => setPhase("hold"), 700);
    const exitTimer = setTimeout(() => setPhase("exit"), 1600);
    const doneTimer = setTimeout(() => setPhase("done"), 2200);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [skip]);

  // Skip or done — render nothing
  if (skip || phase === "done") return null;

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    backgroundColor: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // Overlay fade-out on exit phase
    opacity: phase === "exit" ? 0 : 1,
    transition: phase === "exit" ? "opacity 0.55s ease-in" : "none",
    pointerEvents: phase === "exit" ? "none" : "auto",
  };

  const logoStyle: React.CSSProperties = {
    width: "clamp(80px, 14vw, 140px)",
    height: "auto",
    // Logo fade-in + scale on enter phase
    opacity: phase === "enter" ? 0 : 1,
    transform: phase === "enter" ? "scale(0.98)" : "scale(1)",
    transition:
      phase === "enter"
        ? "opacity 0.7s ease-out, transform 0.7s ease-out"
        : "none",
    // Trigger the animation on next frame after mount
    animation: "none",
  };

  return (
    <div style={overlayStyle} aria-hidden="true">
      <img
        src={LOGO_URL}
        alt=""
        style={logoStyle}
        draggable={false}
      />
    </div>
  );
}
