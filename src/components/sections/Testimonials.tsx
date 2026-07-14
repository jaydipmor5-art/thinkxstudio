"use client";

import React, { useState } from "react";
import { Star, Play, X, ShieldCheck, Heart, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TestimonialCard {
  name: string;
  role: string;
  company: string;
  source: "google" | "linkedin" | "video";
  quote: string;
  stars?: number;
  videoUrl?: string;
  logoSvg: React.ReactNode;
  brandColor: string;
}

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const titleRef = useScrollReveal<HTMLDivElement>({ type: "fadeUp" });
  const videoRef = useScrollReveal<HTMLDivElement>({ type: "fadeUp", stagger: true, delay: 0.15 });
  const reviewsRef = useScrollReveal<HTMLDivElement>({ type: "fadeUp", stagger: true, delay: 0.3 });

  // Styled SVG Logos matching each corporate entity
  const reviews: TestimonialCard[] = [
    {
      name: "Rohan Patel",
      role: "Founder & CTO",
      company: "Aura LED Lights",
      source: "video",
      quote: "ThinkX OS completely transformed how we track development. Seeing active Git commits and UI progress directly in our dashboard built so much trust. Simply outstanding!",
      videoUrl: "Aura LED Lights Testimonial",
      brandColor: "text-[#FAB818] bg-[#FAB818]/10 border-[#FAB818]/25",
      logoSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6M10 22h4" />
        </svg>
      )
    },
    {
      name: "Vikram Rathod",
      role: "General Manager",
      company: "Prime Buildcon",
      source: "video",
      quote: "Their CRM integration and live client operating system are industry-defining. We manage 12 site timelines inside our portal with ease. Outstanding automation pipelines.",
      videoUrl: "Prime Buildcon Project Wrap",
      brandColor: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/25",
      logoSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      )
    },
    {
      name: "Jessica Miller",
      role: "Operations Director",
      company: "CarePath Hospitals",
      source: "google",
      stars: 5,
      quote: "The hospital ERP software they built resolved our record latency issues. The AI proposal generator was incredibly accurate on pricing and timeline, and they hit every milestone.",
      brandColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/25",
      logoSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      name: "Amit Shah",
      role: "Managing Director",
      company: "GlowJewels",
      source: "linkedin",
      quote: "We commissioned Estate3D virtual showrooms for our jewelry catalog. Sales increased by 140% in our offshore markets. Highly recommend the ThinkXstudio team!",
      brandColor: "text-accent-purple bg-accent-purple/10 border-accent-purple/25",
      logoSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M11 3 8 9l3 12M13 3l3 9-3 9" />
        </svg>
      )
    },
    {
      name: "Sarah Jenkins",
      role: "Marketing VP",
      company: "TasteCloud Restaurants",
      source: "google",
      stars: 5,
      quote: "Implemented QR ordering and kitchen monitors for all 8 locations. Order error refunds plummeted by 85%. The dashboard invoice system is super clean.",
      brandColor: "text-rose-500 bg-rose-500/10 border-rose-500/25",
      logoSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
          <path d="M12 21a9 9 0 1 0-9-9c0 1.66 1.34 3 3 3h6a3 3 0 0 1 3 3c0 1.66-1.34 3-3 3z" />
          <circle cx="7.5" cy="10.5" r=".5" />
          <circle cx="11.5" cy="7.5" r=".5" />
          <circle cx="16.5" cy="9.5" r=".5" />
        </svg>
      )
    },
    {
      name: "Sneha Mehta",
      role: "Principal Editor",
      company: "CreativeCorp Content",
      source: "linkedin",
      quote: "They handles our video reels and graphic design assets with elite GSAP animations. Outstanding brand identity work, fast communications.",
      brandColor: "text-accent-magenta bg-accent-magenta/10 border-accent-magenta/25",
      logoSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background radial spotlight */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-slate-500/5 dark:bg-[#ca5a27]/2 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold text-[#FAB818] tracking-widest uppercase mb-2 block">
            05 / Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
            Validated Client Reviews
          </h2>
          <div className="h-1.5 w-24 bg-gradient-brand mx-auto rounded-full mb-6" />
          <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
            See what founders and enterprise operations directors say about their ThinkX OS integrations and custom platform deployments.
          </p>
        </div>

        {/* Video Testimonials Showcase (Row of 2 Widescreen Cards) */}
        <div ref={videoRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviews
            .filter((r) => r.source === "video")
            .map((card, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-zinc-50/50 to-zinc-100/50 dark:from-zinc-950/40 dark:to-zinc-900/30 backdrop-blur-md border border-zinc-200/55 dark:border-zinc-800/50 rounded-3xl p-8 flex flex-col justify-between min-h-[260px] group shadow-sm hover:shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-700/60 transition-all duration-500 overflow-hidden"
              >
                {/* Large Background Quote Glyph */}
                <span className="absolute top-4 left-6 text-zinc-200/50 dark:text-zinc-800/20 text-8xl font-serif font-black select-none pointer-events-none z-0">
                  “
                </span>

                {/* Top header row */}
                <div className="flex items-start justify-between w-full relative z-10">
                  <div className="flex flex-col gap-2">
                    <span className="px-3 py-1 rounded-full text-[9px] font-black tracking-wider uppercase bg-[#FAB818]/10 text-[#FAB818] border border-[#FAB818]/25 select-none w-fit">
                      Video Case Study
                    </span>
                  </div>

                  {/* Elegant Video Play Controller */}
                  <button
                    onClick={() => setActiveVideo(card.videoUrl || "")}
                    className="w-11 h-11 rounded-full bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200/70 dark:border-zinc-800/80 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-[#FAB818] dark:hover:text-[#FAB818] hover:border-[#FAB818]/30 dark:hover:border-[#FAB818]/30 hover:scale-105 active:scale-95 transition-all shadow-md z-25"
                    aria-label="Play video testimonial"
                  >
                    <Play size={15} className="fill-current ml-0.5" />
                  </button>
                </div>

                {/* Quote details */}
                <div className="relative z-10 mt-6 mb-8 pr-8">
                  <blockquote className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-bold tracking-tight">
                    "{card.quote}"
                  </blockquote>
                </div>

                {/* Footer details */}
                <div className="relative z-10 flex items-center justify-between border-t border-zinc-200/50 dark:border-zinc-900/60 pt-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${card.brandColor}`}>
                      {card.logoSvg}
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-zinc-900 dark:text-zinc-100 leading-none mb-1">{card.name}</h4>
                      <p className="text-[10px] text-zinc-500 font-medium">
                        {card.role} • {card.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[9px] font-bold">
                    <ShieldCheck size={11} />
                    <span>Verified</span>
                  </div>
                </div>

              </div>
            ))}
        </div>

        {/* Google & LinkedIn Reviews Grid (Row of 4 Cards) */}
        <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews
            .filter((r) => r.source !== "video")
            .map((card, idx) => {
              // Extract border glow class based on source and brand colors
              const isGoogle = card.source === "google";
              const hoverGlowClass = card.company === "CarePath Hospitals" 
                ? "hover:border-emerald-500/40 hover:shadow-[0_8px_25px_rgba(16,185,129,0.06)]"
                : card.company === "GlowJewels"
                ? "hover:border-accent-purple/50 hover:shadow-[0_8px_25px_rgba(168,85,247,0.08)]"
                : card.company === "TasteCloud Restaurants"
                ? "hover:border-rose-500/40 hover:shadow-[0_8px_25px_rgba(244,63,94,0.06)]"
                : "hover:border-accent-magenta/40 hover:shadow-[0_8px_25px_rgba(236,72,153,0.06)]";

              return (
                <div
                  key={idx}
                  className={`relative bg-gradient-to-br from-zinc-50/40 to-zinc-100/45 dark:from-zinc-950/20 dark:to-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-850/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[230px] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden group ${hoverGlowClass}`}
                >
                  {/* Background quote glyph */}
                  <span className="absolute top-2 left-4 text-zinc-200/30 dark:text-zinc-800/10 text-6.5xl font-serif font-black select-none pointer-events-none z-0">
                    “
                  </span>

                  {/* Rating / Source header */}
                  <div className="relative z-10 flex items-center justify-between mb-5 w-full">
                    {isGoogle ? (
                      <div className="flex items-center gap-0.5 filter drop-shadow-[0_0_3px_rgba(251,191,36,0.3)]">
                        {[...Array(card.stars || 5)].map((_, starIdx) => (
                          <Star key={starIdx} size={11} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    ) : (
                      <span className="text-[9px] text-[#0A66C2] font-black tracking-widest font-mono uppercase">
                        LinkedIn Verify
                      </span>
                    )}

                    {/* Official Source Brand Logo */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-105/90 dark:bg-zinc-900/75 border border-zinc-200/50 dark:border-zinc-800/60 shadow-sm text-[8px] font-mono font-bold text-zinc-550 dark:text-zinc-400">
                      {isGoogle ? (
                        <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#0A66C2] flex-shrink-0">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )}
                      <span className="capitalize">{card.source}</span>
                    </div>
                  </div>

                  {/* Body Quote */}
                  <div className="relative z-10 mb-6">
                    <p className="text-xs text-zinc-650 dark:text-zinc-450 leading-relaxed italic">
                      "{card.quote}"
                    </p>
                  </div>

                  {/* Author footer with rotating brand logo */}
                  <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-zinc-200/50 dark:border-zinc-900/60 w-full">
                    <div className={`w-8.5 h-8.5 rounded-lg border flex items-center justify-center flex-shrink-0 transition-transform duration-350 group-hover:scale-106 group-hover:rotate-3 ${card.brandColor}`}>
                      {card.logoSvg}
                    </div>
                    <div className="overflow-hidden">
                      <h5 className="text-[10px] font-black text-zinc-850 dark:text-zinc-200 truncate leading-none mb-1 group-hover:text-[#FAB818] transition-colors">{card.name}</h5>
                      <p className="text-[9px] text-zinc-500 truncate font-semibold">
                        {card.company}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
        </div>
      </div>

      {/* Video Modal Simulator */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center p-4 z-[99999] backdrop-blur-md">
          <div className="relative w-full max-w-[640px] aspect-video bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden flex flex-col justify-between p-8">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close video player"
            >
              <X size={16} />
            </button>
            
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <span className="w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/40 flex items-center justify-center mb-6 animate-pulse">
                <Play size={24} className="text-accent-cyan ml-1" />
              </span>
              <h4 className="text-lg font-bold text-zinc-100 mb-2">
                Simulated Video Stream: {activeVideo}
              </h4>
              <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                Loading production logs from Supabase CDN... Direct video media is sandboxed in mock mode.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-zinc-900 pt-4 text-[10px] font-mono text-zinc-500">
              <span>0:00 / 2:34</span>
              <span>HD 1080p stream</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
