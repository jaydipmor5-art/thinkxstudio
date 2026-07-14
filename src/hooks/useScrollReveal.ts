"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "blur";

interface ScrollRevealOptions {
  /** Animation type. Default: "fadeUp" */
  type?: AnimationType;
  /** Delay before animation starts (seconds). Default: 0 */
  delay?: number;
  /** Animation duration (seconds). Default: 0.8 */
  duration?: number;
  /** Distance to travel (pixels). Default: 60 */
  distance?: number;
  /** When to trigger: 0-1 viewport ratio. Default: "top 85%" */
  trigger?: string;
  /** Whether to stagger child elements. Default: false */
  stagger?: boolean;
  /** Stagger delay between children (seconds). Default: 0.12 */
  staggerAmount?: number;
  /** Only animate once. Default: true */
  once?: boolean;
}

/**
 * Custom hook for GSAP ScrollTrigger reveal animations.
 * Attach the returned ref to any container element.
 *
 * Usage:
 * ```tsx
 * const ref = useScrollReveal({ type: "fadeUp", stagger: true });
 * return <div ref={ref}>...</div>;
 * ```
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    type = "fadeUp",
    delay = 0,
    duration = 0.8,
    distance = 60,
    trigger = "top 85%",
    stagger = false,
    staggerAmount = 0.12,
    once = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const targets = stagger ? el.children : el;

    // Build the "from" state based on animation type
    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration,
      delay,
      ease: "power3.out",
      ...(stagger && { stagger: staggerAmount }),
      scrollTrigger: {
        trigger: el,
        start: trigger,
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    };

    switch (type) {
      case "fadeUp":
        fromVars.y = distance;
        break;
      case "fadeDown":
        fromVars.y = -distance;
        break;
      case "fadeLeft":
        fromVars.x = -distance;
        break;
      case "fadeRight":
        fromVars.x = distance;
        break;
      case "scale":
        fromVars.scale = 0.9;
        fromVars.y = distance * 0.3;
        break;
      case "blur":
        fromVars.filter = "blur(12px)";
        fromVars.scale = 0.95;
        break;
    }

    const ctx = gsap.context(() => {
      gsap.from(targets, fromVars);
    }, el);

    return () => ctx.revert();
  }, [type, delay, duration, distance, trigger, stagger, staggerAmount, once]);

  return ref;
}

/**
 * Utility: Create a parallax scroll effect on an element.
 * The element moves at a different speed than the scroll.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed: number = 0.3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: () => speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}
