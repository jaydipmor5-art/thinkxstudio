"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };
    checkTheme();

    // Observe class updates on html element
    const themeObserver = new MutationObserver(checkTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Hover logic for dark sections in light mode
    const handleDarkEnter = () => setIsOverDarkSection(true);
    const handleDarkLeave = () => setIsOverDarkSection(false);

    const updateDarkTriggers = () => {
      const darkElements = document.querySelectorAll("footer, #team, [data-theme='dark']");
      darkElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleDarkEnter);
        el.removeEventListener("mouseleave", handleDarkLeave);
        el.addEventListener("mouseenter", handleDarkEnter);
        el.addEventListener("mouseleave", handleDarkLeave);
      });
    };
    updateDarkTriggers();

    const domObserver = new MutationObserver(updateDarkTriggers);
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      themeObserver.disconnect();
      domObserver.disconnect();
    };
  }, []);

  const leftArcStroke = isDarkMode || isOverDarkSection ? "#ffffff" : "#111322";

  const mouseCoords = useRef({ x: 0, y: 0 });
  const trailCoords = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      if (!isVisible) {
        setIsVisible(true);
        // Sync trail position immediately on first entry to avoid sliding from (0,0)
        trailCoords.current.x = e.clientX;
        trailCoords.current.y = e.clientY;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Track hoverable elements
    const updateHoverState = () => {
      const hoverables = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .hoverable');
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    // Initial setup
    updateHoverState();

    // Re-run setup on DOM changes to catch new elements
    const observer = new MutationObserver(updateHoverState);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [isVisible]);

  // Smooth trail effect using direct DOM translate3d (No React state trigger for 0% CPU overhead)
  useEffect(() => {
    const updateTrail = () => {
      const dx = mouseCoords.current.x - trailCoords.current.x;
      const dy = mouseCoords.current.y - trailCoords.current.y;
      
      // Speed factor for smooth spring effect
      const speed = 0.16;
      trailCoords.current.x += dx * speed;
      trailCoords.current.y += dy * speed;

      // Update positions directly on the style properties bypassing React fiber loop
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${trailCoords.current.x}px, ${trailCoords.current.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.35 : 1})`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseCoords.current.x}px, ${mouseCoords.current.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 0.5 : 1})`;
      }

      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring (Smoothed Trail) - Designed exactly like the logo */}
      <div
        ref={cursorRingRef}
        className="fixed pointer-events-none z-[9999] hidden md:block transition-transform duration-100 ease-out"
        style={{
          left: 0,
          top: 0,
          width: "28px",
          height: "28px",
          transform: "translate3d(0px, 0px, 0px) translate(-50%, -50%)",
          willChange: "transform"
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full transition-transform duration-300 ${
            isHovered ? "animate-spin-slow" : ""
          }`}
          style={{ transformOrigin: "center center" }}
        >
          {/* Left Navy/White Arcs (Dynamically toggles color based on backdrop theme) */}
          <path
            d="M 50 8 A 42 42 0 0 0 50 92"
            fill="none"
            stroke={leftArcStroke}
            strokeWidth="5"
            strokeLinecap="round"
            className="transition-colors duration-250"
          />
          <path
            d="M 50 18 A 32 32 0 0 0 50 82"
            fill="none"
            stroke={leftArcStroke}
            strokeWidth="3.5"
            strokeLinecap="round"
            className="opacity-70 transition-colors duration-250"
          />

          {/* Right Gold Arcs */}
          <path
            d="M 50 8 A 42 42 0 0 1 50 92"
            fill="none"
            stroke="#FAB818"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 50 18 A 32 32 0 0 1 50 82"
            fill="none"
            stroke="#FAB818"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="opacity-70"
          />
        </svg>
      </div>

      {/* Inner Dot (Instant Response for Click Accuracy) */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[10000] hidden md:block rounded-full bg-[#FAB818] shadow-[0_0_8px_rgba(250,184,24,0.4)]"
        style={{
          left: 0,
          top: 0,
          width: "6px",
          height: "6px",
          transform: "translate3d(0px, 0px, 0px) translate(-50%, -50%)",
          willChange: "transform"
        }}
      />
    </>
  );
}
