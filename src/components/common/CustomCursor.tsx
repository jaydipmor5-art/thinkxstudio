"use client";

import React, { useEffect, useState, useRef } from "react";

/**
 * CustomCursor — High performance, zero-leak custom cursor.
 * Uses event delegation on document instead of attaching listeners to every element,
 * and uses GPU-accelerated transform3d inside requestAnimationFrame.
 */
export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseCoords = useRef({ x: -100, y: -100 });
  const trailCoords = useRef({ x: -100, y: -100 });
  const requestRef = useRef<number | null>(null);

  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Disable custom cursor on touch devices for maximum mobile performance
    if (typeof window === "undefined" || "ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
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

    // Event delegation for hoverable elements (0% memory overhead, zero listener spam)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('a, button, input, select, textarea, [role="button"], .hoverable')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
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

  // Smooth trail animation using direct GPU translate3d (No React state re-renders)
  useEffect(() => {
    if (isTouchDevice) return;

    const updateTrail = () => {
      const dx = mouseCoords.current.x - trailCoords.current.x;
      const dy = mouseCoords.current.y - trailCoords.current.y;

      trailCoords.current.x += dx * 0.2;
      trailCoords.current.y += dy * 0.2;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${trailCoords.current.x}px, ${trailCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseCoords.current.x}px, ${mouseCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  const strokeColor = isDarkMode ? "#ffffff" : "#111322";

  return (
    <>
      {/* Outer Ring with rotating ThinkX brand arc */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 pointer-events-none z-[99998] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`relative flex items-center justify-center transition-all duration-200 ${
            isHovered ? "w-12 h-12" : "w-8 h-8"
          }`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
            <path
              d="M 50,50 m -40,0 a 40,40 0 1,0 80,0"
              fill="none"
              stroke="#FAB818"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M 50,50 m 40,0 a 40,40 0 1,0 -80,0"
              fill="none"
              stroke={strokeColor}
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-70"
            />
          </svg>
        </div>
      </div>

      {/* Inner Precision Center Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovered ? "bg-[#FAB818] scale-150" : "bg-[#FAB818]"}`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
