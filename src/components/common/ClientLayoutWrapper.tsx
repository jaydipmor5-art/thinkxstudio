"use client";

import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./CustomCursor";
import ScrollAnimator from "./ScrollAnimator";
import SmoothScroll from "../animations/SmoothScroll";
import { ThemeProvider } from "../../context/ThemeContext";
import { LanguageProvider } from "../../context/LanguageContext";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Disable scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <LanguageProvider>
      <ThemeProvider>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        <CustomCursor />
        <ScrollAnimator />
        <SmoothScroll>
          <div className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
            {children}
          </div>
        </SmoothScroll>
      </ThemeProvider>
    </LanguageProvider>
  );
}
