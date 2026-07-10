"use client";

import React from "react";
import Link from "next/link";
import { useTranslate } from "../../context/LanguageContext";
import InteractiveGlobe from "../three/InteractiveGlobe";
import { ArrowRight, Sparkles, Code, Cpu, Award, Rocket, Phone } from "lucide-react";

export default function Hero() {
  const { t } = useTranslate();

  const brandLogos: Array<{ name: string; image?: string; icon?: string }> = [
    { name: "CarePartner", image: "/carepartner.png" },
    { name: "HDE Pvt Ltd", image: "/hde pvt ltd.png" },
    { name: "Health Hub", image: "/health_hub.png" },
    { name: "CarePartner City", image: "/carepartner_city.png" },
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

          {/* Subtitle */}
          <h2 className="text-lg md:text-xl font-bold tracking-widest text-zinc-650 dark:text-zinc-400 uppercase mb-4">
            {t("brand.tagline")}
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

      {/* Infinite scrolling Client Logo Wall */}
      <div className="w-full border-y border-zinc-200/60 bg-white/20 py-8 mt-12 relative overflow-hidden pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="animate-marquee gap-16 md:gap-24 px-4 items-center">
          {/* Repeat list 4 times for seamless looping with fewer items */}
          {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center gap-2 select-none opacity-60 hover:opacity-85 transition-opacity"
            >
              {logo.image ? (
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-8 md:h-9 object-contain dark:brightness-0 dark:invert"
                />
              ) : (
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-500 font-bold tracking-widest text-lg md:text-xl uppercase">
                  <span className="w-8 h-8 rounded-full border border-zinc-300/60 flex items-center justify-center font-black text-xs bg-white/80 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 shadow-sm">
                    {logo.icon}
                  </span>
                  <span>{logo.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
