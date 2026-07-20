"use client";

import React, { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number; // base delay in ms
  wordDelay?: number; // delay between each word in ms
  once?: boolean; // only animate once (default: true)
}

/**
 * TextReveal — Premium word-by-word scroll reveal animation.
 * Splits text into words and reveals each word with a staggered delay
 * when the element scrolls into view. Zero dependencies, pure CSS + IntersectionObserver.
 */
export default function TextReveal({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  wordDelay = 60,
  once = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const words = text.split(" ");

  return (
    // @ts-ignore — dynamic tag
    <Tag ref={containerRef} className={`${className} overflow-hidden`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: "0.25em" }}
        >
          <span
            className="inline-block transition-all"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(110%)",
              opacity: isVisible ? 1 : 0,
              transitionDuration: "0.65s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${delay + i * wordDelay}ms`,
              transitionProperty: "transform, opacity",
              willChange: "transform, opacity",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
