"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslate } from "../../context/LanguageContext";
import InteractiveGlobe from "../three/InteractiveGlobe";
import { ArrowRight, Sparkles, Code, Cpu, Award, Rocket, Phone } from "lucide-react";

// Typing effect hook — cycles through phrases
function useTypingEffect(phrases: string[], typingSpeed = 60, pauseMs = 1800, deleteSpeed = 30) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), deleteSpeed);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((p) => (p + 1) % phrases.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, typingSpeed, pauseMs, deleteSpeed]);

  return displayed;
}

export default function Hero() {
  const { t } = useTranslate();

  const typingPhrases = [
    "Design. Develop. Automate. Scale.",
    "Web Apps. Mobile Apps. AI Systems.",
    "Built in Surat. Trusted Globally.",
    "Your Vision. Our Execution.",
  ];
  const typedText = useTypingEffect(typingPhrases);

  const brandLogos = [
    {
      name: "CarePartner",
      image: "/carepartner.png",
      metric: "10,000+ Patients",
      tag: "Hospital ERP",
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    },
    {
      name: "HDE Pvt Ltd",
      image: "/hde pvt ltd.png",
      metric: "50+ Infra Sites",
      tag: "Industrial CRM",
      color: "border-accent-cyan/30 text-accent-cyan bg-accent-cyan/10",
    },
    {
      name: "Health Hub",
      image: "/health_hub.png",
      metric: "99.9% Record Uptime",
      tag: "EHR Platform",
      color: "border-amber-400/30 text-amber-400 bg-amber-400/10",
    },
    {
      name: "CarePartner City",
      image: "/carepartner_city.png",
      metric: "4.9★ Verified App",
      tag: "Telehealth OS",
      color: "border-purple-400/30 text-purple-400 bg-purple-400/10",
    },
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Full-screen 3D particle background */}
      <InteractiveGlobe />
      {/* Background Grid & Glowing Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-20" />
      <div className="glow-orb w-[500px] h-[500px] bg-accent-cyan/10 top-[-10%] left-[-10%]" />
      <div className="glow-orb w-[600px] h-[600px] bg-accent-purple/10 top-[20%] right-[-15%]" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col lg:flex-row items-center justify-between gap-12 mt-8 lg:mt-0">
        {/* Text column */}
        <div className="flex-1 text-center lg:text-left z-10 max-w-2xl lg:max-w-none">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-semibold text-accent-cyan tracking-wider uppercase mb-6 animate-pulse">
            <Sparkles size={12} />
            <span>{t("brand.innovate")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] mb-6">
            {t("hero.title")}{" "}
            <span className="block text-multi-color-gradient mt-2 leading-[1.1]">
              {t("hero.titleAccent")}
            </span>
          </h1>

          {/* Typing Subtitle */}
          <h2 className="text-lg md:text-xl font-bold tracking-widest text-zinc-650 dark:text-zinc-400 uppercase mb-4 min-h-[2rem] flex items-center gap-0.5">
            <span>{typedText}</span>
            <span className="inline-block w-[2px] h-[1.1em] bg-[#FAB818] ml-0.5 animate-[blink_1s_step-end_infinite] align-middle" />
          </h2>

          <p className="text-sm md:text-base text-zinc-500 max-w-lg lg:max-w-md mb-8 leading-relaxed">
            {t("brand.subTagline")} {t("hero.subheading")}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-multi-color-gradient text-sm font-bold text-white shadow-lg shadow-[#a855f7]/20 hover:shadow-[#a855f7]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Rocket size={16} />
              <span>{t("hero.startProject")}</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#06b6d4]/10 via-[#a855f7]/10 to-[#ec4899]/10 border border-[#a855f7]/35 text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
            >
              <Phone size={16} />
              <span>{t("hero.consultation")}</span>
            </a>
          </div>

          {/* Subtext info badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 text-zinc-500 text-xs font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <Cpu size={14} className="text-accent-purple" />
              <span>Gemini AI Integrations</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award size={14} className="text-accent-magenta" />
              <span>ThinkX OS Portal Ready</span>
            </div>
          </div>
        </div>

        {/* Globe Spacer Column */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-none flex items-center justify-center pointer-events-none" />
      </div>

      {/* Infinite scrolling Client Logo Wall with Impact Metrics */}
      <div className="w-full border-y border-zinc-200/60 dark:border-zinc-800/60 bg-white/30 dark:bg-zinc-950/40 backdrop-blur-md py-5 mt-12 relative overflow-hidden pointer-events-auto">
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="animate-marquee gap-12 md:gap-16 px-4 items-center">
          {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center gap-4 px-5 py-2.5 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 select-none group cursor-pointer flex-shrink-0"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain dark:brightness-0 dark:invert group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col text-left border-l border-zinc-200 dark:border-zinc-800 pl-3">
                <span className="text-[11px] font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-none mb-1 group-hover:text-[#FAB818] transition-colors">
                  {logo.name}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-mono border ${logo.color}`}>
                    {logo.metric}
                  </span>
                  <span className="text-[9px] text-zinc-400 font-medium hidden sm:inline">
                    {logo.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
