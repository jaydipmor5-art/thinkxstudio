"use client";

import React, { useEffect, useState, useRef } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [slideAway, setSlideAway] = useState(false);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressIntervalRef.current!);
          // Hold at 100% briefly, then trigger slide up transition
          setTimeout(() => {
            setSlideAway(true);
            setTimeout(() => {
              onComplete();
            }, 850); // match transition duration
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 8;
        return Math.min(100, prev + increment);
      });
    }, 100);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [onComplete]);

  // Dynamic log message based on loading percentage
  const getStatusMessage = (val: number) => {
    if (val < 15) return "Initializing ThinkX OS kernel v1.0.4...";
    if (val < 30) return "Compiling design system tokens (Surat HQ)...";
    if (val < 48) return "Synchronizing project workspace databases...";
    if (val < 65) return "Generating sitemaps and indexing policies...";
    if (val < 80) return "Training RAG knowledge bases for AI agents...";
    if (val < 95) return "Binding React 19 fibers and WebGL contexts...";
    return "System online. Booting ThinkX workspace...";
  };

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#F4E8D0] text-[#111322] transition-transform duration-[850ms] cubic-bezier(0.85, 0, 0.15, 1) ${
        slideAway ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Subtle tech grid background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293703_1px,transparent_1px),linear-gradient(to_bottom,#1f293703_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none -z-10" />

      <div className="relative flex flex-col items-center justify-center text-center px-4 w-full max-w-md">
        {/* Logo Container with gold glow spotlight */}
        <div className="mb-6 relative">
          {/* Ambient Gold Halo Spotlight */}
          <div className="absolute inset-0 bg-[#FAB818]/10 blur-3xl rounded-full scale-150 animate-pulse -z-10" />
          
          <img
            src="/logo.png"
            alt="ThinkXstudio Logo"
            className="h-16 md:h-20 w-auto object-contain select-none"
          />
        </div>

        {/* Brand Label */}
        <p className="text-[#111322]/80 text-[9px] font-mono tracking-[0.45em] uppercase mb-12 ml-[0.45em]">
          Digital Innovation OS
        </p>

        {/* Progress Bar Track */}
        <div className="w-48 h-1 bg-zinc-300/80 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-brand transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Count (Monospace) */}
        <span className="text-[#111322] text-xs font-mono font-bold tracking-widest mt-4">
          {progress}%
        </span>

        {/* Real-time OS Initialization Status Log */}
        <div className="h-6 mt-8 flex items-center justify-center">
          <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider animate-pulse truncate max-w-[320px]">
            {getStatusMessage(progress)}
          </p>
        </div>
      </div>
    </div>
  );
}
