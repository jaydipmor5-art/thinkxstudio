"use client";

import { useEffect } from "react";

/**
 * ScrollAnimator — Bi-directional scroll reveal & navigation section highlight.
 * Re-animates elements on both scroll down & scroll up,
 * and adds a golden spotlight pulse when clicking Navbar links.
 */
export default function ScrollAnimator() {
  useEffect(() => {
    const selectors = [
      ".scroll-reveal",
      ".scroll-reveal-left",
      ".scroll-reveal-right",
      ".scroll-reveal-scale",
      "section",
    ];

    const elements = document.querySelectorAll<HTMLElement>(selectors.join(", "));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            // Remove class when out of view so re-scrolling back triggers animation again
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Handle Navbar anchor clicks to add pulse animation on target section
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const secEl = document.querySelector(href);
        if (secEl) {
          secEl.classList.remove("section-highlight-pulse");
          // Force reflow
          void (secEl as HTMLElement).offsetWidth;
          secEl.classList.add("section-highlight-pulse");
          setTimeout(() => {
            secEl.classList.remove("section-highlight-pulse");
          }, 1500);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
