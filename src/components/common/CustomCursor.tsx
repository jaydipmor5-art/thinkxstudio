"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseCoords = useRef({ x: -100, y: -100 });
  const trailCoords = useRef({ x: -100, y: -100 });
  const requestRef = useRef<number | null>(null);

  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || "ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };
    checkTheme();

    const themeObserver = new MutationObserver(checkTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      if (!isVisible) {
        setIsVisible(true);
        trailCoords.current.x = e.clientX;
        trailCoords.current.y = e.clientY;
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    // Event delegation (0% CPU overhead & zero memory leak)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check hoverable elements
      if (target.closest('a, button, input, select, textarea, [role="button"], .hoverable')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }

      // Check dark section detection
      if (target.closest("footer, #team, [data-theme='dark']")) {
        setIsOverDarkSection(true);
      } else {
        setIsOverDarkSection(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      themeObserver.disconnect();
    };
  }, [isVisible]);

  // Smooth trail effect using direct DOM translate3d
  useEffect(() => {
    if (isTouchDevice) return;

    const updateTrail = () => {
      const dx = mouseCoords.current.x - trailCoords.current.x;
      const dy = mouseCoords.current.y - trailCoords.current.y;

      const speed = 0.18;
      trailCoords.current.x += dx * speed;
      trailCoords.current.y += dy * speed;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${trailCoords.current.x}px, ${trailCoords.current.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.35 : 1})`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseCoords.current.x}px, ${mouseCoords.current.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 0.6 : 1})`;
      }

      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  const leftArcStroke = isDarkMode || isOverDarkSection ? "#ffffff" : "#111322";

  return (
    <>
      {/* Outer Ring (Smoothed Trail) - Designed exactly like the logo */}
      <div
        ref={cursorRingRef}
        className="fixed pointer-events-none z-[99998] hidden md:block transition-transform duration-100 ease-out"
        style={{
          left: 0,
          top: 0,
          width: "32px",
          height: "32px",
          transform: "translate3d(0px, 0px, 0px) translate(-50%, -50%)",
          willChange: "transform",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full transition-transform duration-300 ${
            isHovered ? "animate-spin-slow" : ""
          }`}
          style={{ transformOrigin: "center center" }}
        >
          {/* Left Navy/White Arcs */}
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

      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[99999] hidden md:block rounded-full bg-[#FAB818] shadow-[0_0_8px_rgba(250,184,24,0.4)]"
        style={{
          left: 0,
          top: 0,
          width: "6px",
          height: "6px",
          transform: "translate3d(0px, 0px, 0px) translate(-50%, -50%)",
          willChange: "transform",
        }}
      />
    </>
  );
}
