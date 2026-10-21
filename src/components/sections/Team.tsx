"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslate } from "../../context/LanguageContext";
import { Calendar, ArrowUpRight, Mail, Sparkles, CheckCircle2, Award, Briefcase, ChevronRight, ShieldCheck } from "lucide-react";
import TextReveal from "../common/TextReveal";

interface ExecutiveLeader {
  id: "jaydip" | "darshil";
  name: string;
  role: string;
  department: string;
  badge: string;
  photo: string;
  accentColor: string;
  glowColor: string;
  bioHeading: string;
  statement: string;
  keyAchievements: Array<{ label: string; value: string }>;
  coreExpertise: string[];
  socials: {
    linkedin: string;
    instagram: string;
    email: string;
  };
  bookingMsg: string;
}

export default function Team() {
  const { t, language } = useTranslate();
  const [activeId, setActiveId] = useState<"jaydip" | "darshil">("jaydip");

  const leaders: Record<"jaydip" | "darshil", ExecutiveLeader> = {
    jaydip: {
      id: "jaydip",
      name: "Jaydip Mor",
      role: "Founder & Managing Director",
      department: "Client Relations & Brand Strategy",
      badge: "Executive Leadership",
      photo: "/JAYDIP.png",
      accentColor: "#FAB818",
      glowColor: "rgba(250, 184, 24, 0.16)",
      bioHeading: "Driving Client Growth, Brand Vision & Studio Operations",
      statement:
        "At ThinkXstudio, we believe extraordinary software is born where strategic vision meets flawless execution. I lead our client advisory, global partnerships, and product lifecycle strategies to guarantee every client transforms their digital presence into a measurable competitive advantage.",
      keyAchievements: [
        { label: "Projects Spearheaded", value: "50+ Enterprise Deliveries" },
        { label: "Client CSAT", value: "99.4% Satisfaction" },
        { label: "Direct Focus", value: "Brand Strategy & Growth" },
      ],
      coreExpertise: [
        "Brand Identity Architecture",
        "Strategic Client Advisory",
        "Global Studio Operations",
        "Digital Transformation Roadmap",
      ],
      socials: {
        linkedin: "https://www.linkedin.com/in/jaydip-mor-1459612a7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        instagram: "https://www.instagram.com/jaydip_ahir.05?igsh=MmQyYnA1cXA4a3Ay",
        email: "jaydipmor5@gmail.com",
      },
      bookingMsg: "Hi Jaydip! I'd like to book a 15-min consulting session regarding our brand & web project.",
    },
    darshil: {
      id: "darshil",
      name: "Darshal Thummar",
      role: "Co-Founder & Tech Director",
      department: "Product Architecture & 3D WebGL",
      badge: "Technical Architecture",
      photo: "/DARSHIL.jpeg",
      accentColor: "#06B6D4",
      glowColor: "rgba(6, 182, 212, 0.16)",
      bioHeading: "Engineering Ultra-Fast Systems & Interactive 3D Web Experiences",
      statement:
        "We push web technology to its absolute limit. From micro-interactions and CAD-grade Three.js WebGL scenes to rock-solid Next.js 15 enterprise engines, my objective is to craft digital products that perform at sub-second speeds and captivate audiences globally.",
      keyAchievements: [
        { label: "Architecture", value: "Next.js 15 / React 19" },
        { label: "Delivery Record", value: "100% On-Time Deployment" },
        { label: "Specialty", value: "3D WebGL & Full-Stack" },
      ],
      coreExpertise: [
        "Full-Stack Web Architecture",
        "Interactive 3D WebGL (Three.js)",
        "Design Systems & UI/UX Engineering",
        "Enterprise API & Cloud Sync",
      ],
      socials: {
        linkedin: "https://www.linkedin.com/in/darshalthummar-webdeveloper?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        instagram: "https://www.instagram.com/darshalthummar?igsh=OWN0eHF6OHJiY284",
        email: "darshalthummar@gmail.com",
      },
      bookingMsg: "Hi Darshal! I'd like to book a 15-min technical session regarding UI/UX & web development.",
    },
  };

  const current = leaders[activeId];

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-transparent scroll-reveal">
      {/* Background Soft Ambient Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-700"
        style={{ backgroundColor: current.glowColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-[#FAB818] tracking-widest uppercase mb-2 block">
            04 / Leadership
          </span>
          <TextReveal
            text="Executive Leadership"
            as="h2"
            className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4"
            wordDelay={80}
          />
          <div className="h-1.5 w-24 bg-gradient-brand mx-auto rounded-full mb-6" />
          <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
            The founding partners directing design excellence, engineering mastery, and strategic growth at ThinkXstudio.
          </p>

          {/* Interactive Executive Switcher Tabs (Stripe / Apple Style) */}
          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 shadow-md mt-8">
            <button
              onClick={() => setActiveId("jaydip")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-black transition-all duration-300 ${
                activeId === "jaydip"
                  ? "bg-[#FAB818] text-[#111322] shadow-lg shadow-[#FAB818]/25 scale-[1.02]"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden border border-black/20 shrink-0">
                <img src="/JAYDIP.png" alt="Jaydip Mor" className="w-full h-full object-cover object-top" />
              </div>
              <span>Jaydip Mor</span>
              <span className="text-[10px] font-mono opacity-75 hidden sm:inline">• Managing Director</span>
            </button>

            <button
              onClick={() => setActiveId("darshil")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-black transition-all duration-300 ${
                activeId === "darshil"
                  ? "bg-[#06B6D4] text-white shadow-lg shadow-[#06B6D4]/25 scale-[1.02]"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20 shrink-0">
                <img src="/DARSHIL.jpeg" alt="Darshal Thummar" className="w-full h-full object-cover object-top" />
              </div>
              <span>Darshal Thummar</span>
              <span className="text-[10px] font-mono opacity-75 hidden sm:inline">• Tech Director</span>
            </button>
          </div>
        </div>

        {/* Executive Split Showcase Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl mx-auto bg-white/70 dark:bg-zinc-950/60 backdrop-blur-2xl border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative"
          >
            {/* Top Border Glow Accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
              style={{ backgroundColor: current.accentColor }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Portrait Studio Frame (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border-2 shadow-2xl group" style={{ borderColor: current.accentColor }}>
                  <img
                    src={current.photo}
                    alt={current.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Studio Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Verified Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-emerald-400" />
                    <span>Verified Founder</span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                    <div>
                      <h4 className="text-xs font-black">{current.name}</h4>
                      <p className="text-[10px] text-zinc-300 font-medium">{current.role}</p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">Surat HQ</span>
                  </div>
                </div>

                {/* 1-Click Call Booking Button */}
                <div className="w-full max-w-[340px] mt-4 flex flex-col gap-2.5">
                  <a
                    href={`https://wa.me/919023700622?text=${encodeURIComponent(current.bookingMsg)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      backgroundColor: current.accentColor,
                      color: current.id === "jaydip" ? "#111322" : "#FFFFFF",
                    }}
                  >
                    <Calendar size={15} />
                    <span>Book 15-min Session</span>
                    <ArrowUpRight size={14} />
                  </a>

                  {/* Social Profile Channels */}
                  <div className="flex items-center gap-2">
                    <a
                      href={current.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 rounded-xl bg-[#0077B5] hover:bg-[#006297] text-white flex items-center justify-center gap-1.5 text-xs font-bold transition-all shadow-sm hover:scale-[1.02]"
                      title="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={current.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center transition-all hover:scale-[1.05]"
                      title="Instagram"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </a>

                    <a
                      href={`mailto:${current.socials.email}`}
                      className="w-11 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 flex items-center justify-center transition-all hover:scale-[1.05]"
                      title="Direct Email"
                    >
                      <Mail size={15} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Leadership Statement & Core Impact (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500">
                      {current.badge}
                    </span>
                    <span className="text-xs font-mono font-bold" style={{ color: current.accentColor }}>
                      {current.department}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-white mb-4 leading-snug">
                    {current.bioHeading}
                  </h3>

                  {/* Leadership Quote Block */}
                  <blockquote className="relative p-5 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/40 border-l-4 border-zinc-300 dark:border-zinc-800 mb-6 text-xs sm:text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed font-medium italic" style={{ borderLeftColor: current.accentColor }}>
                    "{current.statement}"
                  </blockquote>

                  {/* 3 Key Track Record Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {current.keyAchievements.map((ach, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 flex flex-col">
                        <span className="text-[9px] font-mono text-zinc-400 font-bold uppercase tracking-wider">{ach.label}</span>
                        <span className="text-xs font-black text-zinc-900 dark:text-white mt-1">{ach.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Core Expertise Badges */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block mb-2.5">
                      Core Specializations & Authority
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {current.coreExpertise.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5"
                        >
                          <span style={{ color: current.accentColor }}>✦</span>
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
