"use client";

import React, { useEffect, useState, useRef } from "react";

/**
 * CustomCursor — Sleek, modern precision cursor.
 * Uses hardware-accelerated translate3d with 0 text obstruction.
 */
export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

    // Event delegation to detect hover on interactive elements
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
    };
  }, [isVisible]);

  // Smooth trail animation
  useEffect(() => {
    if (isTouchDevice) return;

    const updateTrail = () => {
      const dx = mouseCoords.current.x - trailCoords.current.x;
      const dy = mouseCoords.current.y - trailCoords.current.y;

      trailCoords.current.x += dx * 0.22;
      trailCoords.current.y += dy * 0.22;

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

  return (
    <>
      {/* Outer Ring — Thin, elegant golden halo that expands softly on hover without hiding text */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 pointer-events-none z-[99998] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full border border-[#FAB818]/60 transition-all duration-300 ${
            isHovered
              ? "w-10 h-10 border-[#FAB818] bg-[#FAB818]/10 scale-110"
              : "w-7 h-7 bg-transparent"
          }`}
        />
      </div>

      {/* Inner Precision Center Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FAB818] pointer-events-none z-[99999] transition-all duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovered ? "scale-125 bg-[#FAB818]" : "scale-100"}`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
