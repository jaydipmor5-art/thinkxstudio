"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslate } from "../../context/LanguageContext";
import { Mail, Sparkles, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TeamMember {
  id: "jaydip" | "darshil";
  name: string;
  role: string;
  tagline: string;
  specialtyCode: string;
  photo: string;
  accentColor: string;
  glowColor: string;
  socials: {
    linkedin: string;
    instagram: string;
    email: string;
  };
  specialties: string[];
  systemSpecs: Record<string, string>;
  status: string;
  telemetryLogs: string[];
}

export default function Team() {
  const { t, language } = useTranslate();
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState<"jaydip" | "darshil">("jaydip");
  const [logIndex, setLogIndex] = useState(0);
  const titleRef = useScrollReveal<HTMLDivElement>({ type: "fadeUp" });
  const sidebarRef = useScrollReveal<HTMLDivElement>({ type: "fadeLeft", delay: 0.2 });
  const hudRef = useScrollReveal<HTMLDivElement>({ type: "fadeRight", delay: 0.3 });

  const systemLogs = [
    "[SECURE NETWORK] jaydip.mor initialized global client gateway...",
    "[KERNEL] darshal.thummar compiled 3D interactive layout modules...",
    "[SYSTEM] Surat central studio nodes fully synchronized.",
    "[AI ENGINE] training custom neural agents on React 19 fiber loop...",
    "[ROUTING] binding secure SSL keys to web portal core...",
    "[AUTOMATION] running client strategy analysis systems..."
  ];

  const teamMembers: TeamMember[] = [
    {
      id: "jaydip",
      name: "Jaydip Mor",
      role: "Client Relations & Management",
      tagline: "Steering global studio operations, creative collaborations, and brand strategy.",
      specialtyCode: "SYS_CORE // CR&M",
      photo: "/JAYDIP.png",
      glowColor: "rgba(250, 184, 24, 0.15)",
      accentColor: "#FAB818",
      socials: {
        linkedin: "https://www.linkedin.com/in/jaydip-mor-1459612a7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        instagram: "https://www.instagram.com/jaydip_ahir.05?igsh=MmQyYnA1cXA4a3Ay",
        email: "jaydipmor5@gmail.com"
      },
      specialties: [
        "Brand Strategy",
        "Client Relations",
        "Project Architecture",
        "Global Operations"
      ],
      systemSpecs: {
        "Node Type": "MANAGEMENT_CORE",
        "Direct Focus": "Client Operations",
        "Node Status": "ACTIVE // SECURE",
        "Clearance": "LEVEL_01_SYS_ADMIN"
      },
      status: "SECURE_NODE // PARTNER_01",
      telemetryLogs: [
        "Initializing secure channel link...",
        "Establishing handshake with global nodes...",
        "Synchronizing client portal databases...",
        "Connection stabilized. Latency: 4ms.",
        "Awaiting operational parameters..."
      ]
    },
    {
      id: "darshil",
      name: "Darshal Thummar",
      role: "Design & Development",
      tagline: "Sculpting visual systems, design systems, and highly refined interactive user journeys.",
      specialtyCode: "SYS_CORE // D&D",
      photo: "/DARSHIL.jpeg",
      glowColor: "rgba(6, 182, 212, 0.18)",
      accentColor: "#06B6D4",
      socials: {
        linkedin: "https://www.linkedin.com/in/darshalthummar-webdeveloper?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        instagram: "https://www.instagram.com/darshalthummar?igsh=OWN0eHF6OHJiY284",
        email: "darshalthummar@gmail.com"
      },
      specialties: [
        "UI/UX Design Systems",
        "Frontend Dev (Next.js)",
        "3D WebGL (Three.js)",
        "Workflow Automation"
      ],
      systemSpecs: {
        "Node Type": "DEVELOPMENT_CORE",
        "Direct Focus": "Design & Engineering",
        "Node Status": "ACTIVE // SECURE",
        "Clearance": "LEVEL_01_SYS_DEV"
      },
      status: "SECURE_NODE // PARTNER_02",
      telemetryLogs: [
        "Binding local render hooks...",
        "Injecting React 19 fibers into DOM...",
        "Compiling Three.js shader modules...",
        "3D WebGL engine active. FPS: 60.",
        "System fully optimized..."
      ]
    }
  ];

  const activeMember = teamMembers.find((m) => m.id === activeId) || teamMembers[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Telemetry logs switcher loop
  useEffect(() => {
    setLogIndex(0);
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % activeMember.telemetryLogs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeId]);

  const titleText = language === "gu" ? "અમારી ટીમને મળો" : language === "hi" ? "हमारी टीम से मिलें" : "Our Team";
  const descText = language === "gu" 
    ? "અમે સમર્પિત નિષ્ણાતોની ટીમ છીએ જેઓ UI/UX ડિઝાઇન, સોફ્ટવેર ડેવલપમેન્ટ, ક્લાઉડ સિસ્ટમ્સ અને ઓટોમેશન વર્કફ્લોમાં વિશેષતા ધરાવે છે." 
    : language === "hi"
    ? "हम समर्पित विशेषज्ञों की टीम हैं जो UI/UX डिज़ाइन, सॉफ़्टवेयर डेवलपमेंट, क्लाउड सिस्टम અને ઓટોમેશનમાં વિશેષતા રાખીએ છીએ।"
    : "We are a dedicated team of digital specialists specializing in UI/UX Design, custom software development, systems automation, and robust edge architectures.";

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-[#F9F6F0] dark:bg-[#070912] text-zinc-900 dark:text-white transition-colors duration-500">
      
      {/* Laser scan lines anim style */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `}} />

      {/* Floating Sparkle Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 1400,
                y: Math.random() * 800 + 400,
                opacity: Math.random() * 0.15 + 0.05,
                scale: Math.random() * 0.6 + 0.4
              }}
              animate={{
                y: -50,
                opacity: [0, 0.2, 0]
              }}
              transition={{
                duration: Math.random() * 18 + 12,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-1 h-1 rounded-full bg-zinc-400 dark:bg-white blur-[0.5px]"
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 select-none mb-4">
            <Sparkles size={10} className="animate-spin-slow" />
            <span>Meet Our Experts</span>
          </span>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
            {titleText}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-brand mx-auto rounded-full mb-6" />
          <p className="text-zinc-650 dark:text-zinc-400 text-xs max-w-xl mx-auto leading-relaxed font-medium">
            {descText}
          </p>
        </div>

        {/* Clean Cyber OS Split-Screen Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto relative z-20">
          
          {/* Column 1: Selector Panels List (5 Columns) */}
          <div ref={sidebarRef} className="col-span-1 lg:col-span-5 flex flex-col gap-4 justify-center">
            {teamMembers.map((member) => {
              const isActive = activeId === member.id;
              return (
                <button
                  key={member.id}
                  onClick={() => setActiveId(member.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 relative overflow-hidden group ${
                    isActive
                      ? "bg-white dark:bg-zinc-950/60 border-zinc-350 dark:border-zinc-800 shadow-md"
                      : "bg-white/40 dark:bg-zinc-950/20 border-zinc-200/60 dark:border-zinc-900/60 hover:bg-white/80 dark:hover:bg-zinc-950/40 hover:border-zinc-300 dark:hover:border-zinc-800"
                  }`}
                >
                  {/* Subtle active colored vertical indicator bar */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 rounded-r"
                      style={{ backgroundColor: member.accentColor }}
                    />
                  )}

                  {/* Thumbnail Avatar */}
                  <div 
                    className="w-12 h-12 rounded-full overflow-hidden border relative shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ borderColor: isActive ? member.accentColor : "transparent" }}
                  >
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>

                  {/* Text details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-black text-zinc-900 dark:text-white leading-none">
                        {member.name}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[8px] font-bold text-emerald-500 font-mono">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>ONLINE</span>
                      </span>
                    </div>
                    <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 mt-1.5">
                      {member.role}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Column 2: Holographic HUD bio spec panel (7 Columns) */}
          <div ref={hudRef} className="col-span-1 lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full bg-white/80 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/60 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative"
              >
                {/* Tech blueprint grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-3xl" />

                {/* Ambient glow spotlight overlay */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none transition-opacity duration-500 z-0 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at 80% 20%, ${activeMember.glowColor}, transparent 70%)`
                  }}
                />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Sub-Column 1: Biometric Photo Scan Frame (5 Columns) */}
                  <div className="md:col-span-5 flex flex-col gap-3">
                    <div 
                      className="w-full h-[290px] rounded-2xl border overflow-hidden relative shadow-sm transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-md"
                      style={{ borderColor: `${activeMember.accentColor}55` }}
                    >
                      <img 
                        src={activeMember.photo} 
                        alt={activeMember.name} 
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" 
                      />
                      
                      {/* Focus Reticle Corners (Contracts slightly on hover) */}
                      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 transition-all duration-300 pointer-events-none z-20 group-hover:top-2.5 group-hover:left-2.5" style={{ borderColor: activeMember.accentColor }} />
                      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 transition-all duration-300 pointer-events-none z-20 group-hover:top-2.5 group-hover:right-2.5" style={{ borderColor: activeMember.accentColor }} />
                      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 transition-all duration-300 pointer-events-none z-20 group-hover:bottom-2.5 group-hover:left-2.5" style={{ borderColor: activeMember.accentColor }} />
                      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 transition-all duration-300 pointer-events-none z-20 group-hover:bottom-2.5 group-hover:right-2.5" style={{ borderColor: activeMember.accentColor }} />

                      {/* Glass Shine sweep on hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-20" />
                      
                      {/* HUD overlay badges */}
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/65 border border-white/10 text-[7px] font-mono text-zinc-350 z-20">
                        {activeMember.specialtyCode}
                      </div>
                      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/20 text-[7px] font-mono text-emerald-400 z-20">
                        SECURE_NODE
                      </div>
                    </div>

                    {/* Social Connects */}
                    <div className="flex gap-2 w-full justify-center mt-1">
                      <a 
                        href={activeMember.socials.linkedin} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 py-2 rounded-xl bg-[#0077B5] hover:bg-[#006297] border border-[#0077B5] transition-all duration-300 flex items-center justify-center text-white shadow-[0_0_12px_rgba(0,119,181,0.25)] hover:scale-103"
                      >
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href={activeMember.socials.instagram} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 py-2 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 border border-transparent transition-all duration-300 flex items-center justify-center text-white shadow-[0_0_12px_rgba(220,39,67,0.25)] hover:scale-103"
                      >
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                      </a>
                      <a 
                        href={`mailto:${activeMember.socials.email}`} 
                        className="flex-1 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-800 border border-zinc-800 dark:border-zinc-800 transition-all duration-300 flex items-center justify-center text-white hover:scale-103"
                        style={{ boxShadow: `0 0 12px ${activeMember.accentColor}18` }}
                      >
                        <Mail size={13} style={{ color: activeMember.accentColor }} />
                      </a>
                    </div>
                  </div>

                  {/* Sub-Column 2: Specifications, Bios & Skill Ratings (7 Columns) */}
                  <div className="md:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-[8px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                          {activeMember.status}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[7px] font-bold text-emerald-500 font-mono">
                          <ShieldCheck size={9} />
                          <span>SECURE</span>
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black tracking-tight leading-none text-zinc-900 dark:text-white mb-2">
                        {activeMember.name}
                      </h3>
                      
                      <p 
                        className="text-[8px] font-mono font-black uppercase tracking-widest inline-block px-2.5 py-0.5 rounded-full border"
                        style={{ 
                          color: activeMember.accentColor, 
                          borderColor: `${activeMember.accentColor}30`, 
                          backgroundColor: `${activeMember.accentColor}08` 
                        }}
                      >
                        {activeMember.role}
                      </p>

                      <p className="text-[10px] text-zinc-550 dark:text-zinc-450 leading-relaxed font-semibold italic mt-3.5 mb-4">
                        "{activeMember.tagline}"
                      </p>

                      {/* Capabilities Pill Badges */}
                      <div className="mt-4">
                        <span className="font-mono text-[8px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-2 select-none">
                          // Core Specialties
                        </span>
                        <div className="flex flex-wrap gap-1.5 select-none">
                           {activeMember.specialties.map((spec, idx) => (
                             <span 
                               key={idx}
                               className="px-2.5 py-1 rounded-lg border text-[8px] font-mono font-bold uppercase tracking-wider bg-zinc-50/5 dark:bg-zinc-950/40 transition-all duration-300 hover:scale-103"
                               style={{ 
                                 borderColor: `${activeMember.accentColor}25`, 
                                 color: activeMember.accentColor,
                                 boxShadow: `0 0 8px ${activeMember.accentColor}03`
                               }}
                             >
                               ✦ {spec}
                             </span>
                           ))}
                        </div>
                      </div>

                      {/* Node Specifications Metadata Grid */}
                      <div className="mt-4 select-none">
                        <span className="font-mono text-[8px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-2">
                          // Node Parameters
                        </span>
                        <div className="grid grid-cols-2 gap-2 bg-zinc-100/30 dark:bg-zinc-950/30 border border-zinc-200/50 dark:border-zinc-900 rounded-xl p-3 font-mono text-[8px]">
                           {Object.entries(activeMember.systemSpecs).map(([key, val]) => (
                             <div key={key} className="flex flex-col gap-0.5">
                               <span className="text-zinc-400 dark:text-zinc-550 uppercase tracking-wider text-[6.5px]">{key}</span>
                               <span className="font-bold text-zinc-800 dark:text-zinc-300">{val}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                    </div>

                    {/* Node Telemetry Terminal Ticker */}
                    <div className="mt-5 bg-zinc-100/50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-900 rounded-xl p-3.5 font-mono text-[8px] text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-center gap-1 border-b border-zinc-200 dark:border-zinc-900 pb-1.5 mb-1.5 select-none font-bold text-zinc-450">
                        <Terminal size={9} />
                        <span>TELEMETRY_LOGS</span>
                        <span className="text-emerald-500 animate-pulse ml-auto">● LIVE_FEED</span>
                      </div>
                      <div className="h-[12px] overflow-hidden">
                        <motion.div
                          key={logIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-1 font-semibold text-zinc-800 dark:text-zinc-300"
                        >
                          <span style={{ color: activeMember.accentColor }}>&gt;&gt;</span>
                          <span>{activeMember.telemetryLogs[logIndex]}</span>
                        </motion.div>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Global Live Ticker Terminal (ThinkX Logs) */}
        {mounted && (
          <div className="mt-16 max-w-xl mx-auto rounded-xl border border-zinc-200/60 dark:border-zinc-850/50 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md p-3.5 shadow-sm font-mono text-[9px] text-zinc-500 dark:text-zinc-400 overflow-hidden relative z-20">
            <div className="flex items-center justify-between border-b border-zinc-200/50 dark:border-zinc-900 pb-2 mb-2 select-none">
              <div className="flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                <span className="ml-1 text-[8px] font-bold tracking-wider text-zinc-450 dark:text-zinc-500">THINKX_GLOBAL_OS</span>
              </div>
              <span className="text-[7px] text-zinc-450 uppercase animate-pulse">● Connected</span>
            </div>
            <div className="h-[28px] overflow-hidden relative">
              <motion.div
                key={logIndex + activeId}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 font-semibold"
              >
                <span className="text-[#FAB818]">&gt;</span>
                <span>{systemLogs[(logIndex + (activeId === "darshil" ? 2 : 0)) % systemLogs.length]}</span>
              </motion.div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
