"use client";

import React, { useState } from "react";
import { useTranslate } from "../../context/LanguageContext";
import { Mail, Calendar, ArrowUpRight, Award, CheckCircle2, Sparkles, UserCheck } from "lucide-react";
import TextReveal from "../common/TextReveal";

interface LeaderMember {
  id: string;
  name: string;
  role: string;
  subtitle: string;
  quote: string;
  photo: string;
  impactBadge: string;
  accentColor: string;
  glowColor: string;
  btnGradient: string;
  skills: string[];
  stats: Array<{ label: string; value: string }>;
  socials: {
    linkedin: string;
    instagram: string;
    email: string;
  };
  bookingMsg: string;
}

export default function Team() {
  const { t } = useTranslate();
  const [activeMember, setActiveMember] = useState<string>("jaydip");

  const leaders: LeaderMember[] = [
    {
      id: "jaydip",
      name: "Jaydip Mor",
      role: "Founder & Managing Director",
      subtitle: "Client Relations & Brand Strategy",
      quote: "Steering global studio operations, creative collaborations, and brand strategy for enterprise clients.",
      photo: "/JAYDIP.png",
      impactBadge: "50+ Client Projects Spearheaded",
      accentColor: "#FAB818",
      glowColor: "rgba(250, 184, 24, 0.12)",
      btnGradient: "bg-[#FAB818] text-[#111322] hover:bg-[#FFC94A]",
      skills: ["Brand Strategy", "Client Advisory", "Global Operations", "Project Architecture"],
      stats: [
        { label: "Client Satisfaction", value: "99.4%" },
        { label: "Active Operations", value: "Surat HQ" },
        { label: "Focus", value: "Enterprise Growth" },
      ],
      socials: {
        linkedin: "https://www.linkedin.com/in/jaydip-mor-1459612a7",
        instagram: "https://www.instagram.com/jaydip_ahir.05",
        email: "jaydipmor5@gmail.com",
      },
      bookingMsg: "Hi Jaydip! I'd like to book a 15-min consulting call regarding our brand & web project.",
    },
    {
      id: "darshal",
      name: "Darshal Thummar",
      role: "Co-Founder & Tech Director",
      subtitle: "Product Architecture & 3D WebGL",
      quote: "Sculpting visual systems, Next.js 15 architectures, and highly refined interactive 3D WebGL user journeys.",
      photo: "/DARSHIL.jpeg",
      impactBadge: "100% On-Time System Delivery",
      accentColor: "#06B6D4",
      glowColor: "rgba(6, 182, 212, 0.12)",
      btnGradient: "bg-[#06B6D4] text-white hover:bg-[#22D3EE]",
      skills: ["Next.js Architecture", "UI/UX Design Systems", "3D WebGL", "AI Workflows"],
      stats: [
        { label: "Code Quality", value: "A+ Verified" },
        { label: "Tech Stack", value: "React 19 / Next.js" },
        { label: "Focus", value: "Product Engineering" },
      ],
      socials: {
        linkedin: "https://www.linkedin.com/in/darshalthummar-webdeveloper",
        instagram: "https://www.instagram.com/darshalthummar",
        email: "darshalthummar@gmail.com",
      },
      bookingMsg: "Hi Darshal! I'd like to book a 15-min technical call regarding UI/UX & web development.",
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-transparent scroll-reveal">
      {/* Ambient Glow Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#FAB818]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#FAB818] tracking-widest uppercase mb-2 block">
            04 / Leadership
          </span>
          <TextReveal
            text="Meet The Founders"
            as="h2"
            className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4"
            wordDelay={80}
          />
          <div className="h-1.5 w-24 bg-gradient-brand mx-auto rounded-full mb-6" />
          <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed font-medium">
            The visionary team driving design, development, and strategic execution at ThinkXstudio.
          </p>
        </div>

        {/* Widescreen Executive Member Showcase (Grid of 2 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="relative bg-white/70 dark:bg-zinc-950/60 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Subtle background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(circle at 80% 20%, ${leader.glowColor}, transparent 65%)`,
                }}
              />

              <div>
                {/* Top Row: Avatar & Status Badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  {/* Avatar Photo Frame */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-500" style={{ borderColor: leader.accentColor }}>
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Impact & Verification Badges */}
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] font-bold">
                      <UserCheck size={12} />
                      <span>Verified Founder</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      {leader.impactBadge}
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white leading-none mb-1 group-hover:text-[#FAB818] transition-colors">
                  {leader.name}
                </h3>
                <p className="text-xs font-mono font-bold uppercase tracking-wider mb-4" style={{ color: leader.accentColor }}>
                  {leader.role} • <span className="text-zinc-400 font-semibold">{leader.subtitle}</span>
                </p>

                {/* Quote */}
                <p className="text-xs text-zinc-650 dark:text-zinc-400 italic leading-relaxed font-semibold mb-6">
                  "{leader.quote}"
                </p>

                {/* Core Expertise Badges */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2 font-bold">
                    Core Focus & Expertise
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {leader.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold text-zinc-700 dark:text-zinc-300"
                      >
                        ✦ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 text-center mb-6">
                  {leader.stats.map((st, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase font-bold">{st.label}</span>
                      <span className="text-xs font-black text-zinc-900 dark:text-white mt-0.5">{st.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTAs */}
              <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-900 flex flex-col sm:flex-row items-center gap-3">
                {/* 1-Click WhatsApp Booking */}
                <a
                  href={`https://wa.me/919023700622?text=${encodeURIComponent(leader.bookingMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${leader.btnGradient}`}
                >
                  <Calendar size={14} />
                  <span>Book 15-min Call</span>
                  <ArrowUpRight size={13} />
                </a>

                {/* Social Buttons */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                  <a
                    href={leader.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-[#0077B5] text-zinc-400 hover:text-white border border-zinc-800 flex items-center justify-center transition-all shadow-sm"
                    title="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href={`mailto:${leader.socials.email}`}
                    className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 flex items-center justify-center transition-all shadow-sm"
                    title="Email Direct"
                  >
                    <Mail size={15} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
