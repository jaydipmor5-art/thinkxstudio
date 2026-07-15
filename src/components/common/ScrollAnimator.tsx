"use client";

import { useEffect } from "react";

/**
 * ScrollAnimator — lightweight, zero-dependency scroll reveal.
 * Uses IntersectionObserver to add `.is-visible` to any element
 * with a `scroll-reveal`, `scroll-reveal-left`, `scroll-reveal-right`,
 * or `scroll-reveal-scale` class.
 * No GSAP, no heavy JS. GPU-only CSS transitions.
 */
export default function ScrollAnimator() {
  useEffect(() => {
    const selectors = [
      ".scroll-reveal",
      ".scroll-reveal-left",
      ".scroll-reveal-right",
      ".scroll-reveal-scale",
    ];

    const elements = document.querySelectorAll<HTMLElement>(selectors.join(", "));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Once visible, stop watching to save CPU
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12, // trigger when 12% of element is visible
        rootMargin: "0px 0px -40px 0px", // slightly before bottom of viewport
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; // renders nothing, just runs the observer
}
