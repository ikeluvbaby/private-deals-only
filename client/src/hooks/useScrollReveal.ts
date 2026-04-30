/**
 * useScrollReveal — triggers .reveal → .visible class on scroll
 * Used across all pages for entrance animations
 */
import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
