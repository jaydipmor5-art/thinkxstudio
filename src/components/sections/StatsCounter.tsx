"use client";

import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Calendar, Zap } from "lucide-react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatCard({ stat, started, index }: { stat: Stat; started: boolean; index: number }) {
  const count = useCountUp(stat.value, 1800 + index * 200, started);

  return (
    <div
      className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/50 hover:border-[#FAB818]/40 hover:shadow-[0_8px_40px_rgba(250,184,24,0.08)] transition-all duration-500 group overflow-hidden"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
      }}
    >
      {/* Subtle glow bg */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${stat.glowColor}`} />

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.color} border border-current/20 transition-transform duration-300 group-hover:scale-110`}>
        {stat.icon}
      </div>

      {/* Animated Number */}
      <div className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-none mb-1 tabular-nums">
        {count}
        <span className="text-[#FAB818]">{stat.suffix}</span>
      </div>

      {/* Label */}
      <div className="text-sm font-black text-zinc-700 dark:text-zinc-200 uppercase tracking-widest mt-2">
        {stat.label}
      </div>

      {/* Sublabel */}
      <div className="text-xs text-zinc-400 font-medium mt-1">
        {stat.sublabel}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  const stats: Stat[] = [
    {
      value: 50,
      suffix: "+",
      label: "Projects",
      sublabel: "Delivered successfully",
      icon: <TrendingUp size={22} />,
      color: "text-[#FAB818] bg-[#FAB818]/10",
      glowColor: "bg-[radial-gradient(ellipse_at_center,rgba(250,184,24,0.04),transparent_70%)]",
    },
    {
      value: 30,
      suffix: "+",
      label: "Clients",
      sublabel: "Across India & globally",
      icon: <Users size={22} />,
      color: "text-accent-purple bg-accent-purple/10",
      glowColor: "bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.04),transparent_70%)]",
    },
    {
      value: 3,
      suffix: "+",
      label: "Years",
      sublabel: "Building digital experiences",
      icon: <Calendar size={22} />,
      color: "text-accent-cyan bg-accent-cyan/10",
      glowColor: "bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_70%)]",
    },
    {
      value: 99,
      suffix: ".9%",
      label: "Uptime",
      sublabel: "Client systems availability",
      icon: <Zap size={22} />,
      color: "text-emerald-500 bg-emerald-500/10",
      glowColor: "bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.04),transparent_70%)]",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden bg-transparent">
      {/* Subtle divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FAB818]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-300/30 dark:via-zinc-800/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold text-[#FAB818] tracking-widest uppercase">
            ◆ ThinkXstudio in Numbers
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} started={started} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
