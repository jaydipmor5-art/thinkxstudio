"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslate } from "../../context/LanguageContext";
import { ArrowUpRight, Zap, Target, CheckCircle2, Award, TrendingUp, Users, ShieldCheck, Sparkles } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  desc: string;
  perfScore: number;
  seoScore: number;
  tech: string[];
  gradient: string;
  glowColor: string;
  siteName: string;
  mockUrl: string;
  impactMetric: string;
  impactLabel: string;
  features: string[];
  isApp?: boolean;
}

// Interactive simulated CarePartner Portal Mockup
const SimulatedCarePartnerPortal = () => {
  return (
    <div className="w-full h-full bg-[#070b14] text-white p-3.5 flex flex-col justify-between select-none text-left font-sans">
      {/* Top Navbar */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 mb-2 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[8px] font-black text-emerald-400">
            CP
          </div>
          <span className="text-[10px] font-black tracking-wide">CarePartner<span className="text-emerald-400">.services</span></span>
          <span className="hidden sm:inline-block text-[8px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-bold">
            Live v2.4
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[8px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            99.9% Uptime
          </span>
          <div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[8px]">
            🩺
          </div>
        </div>
      </div>

      {/* Main Body Grid */}
      <div className="flex-grow flex flex-col gap-2">
        {/* Banner */}
        <div className="bg-gradient-to-r from-emerald-950/60 via-zinc-900 to-zinc-900 border border-emerald-500/20 rounded-xl p-2.5 flex items-center justify-between">
          <div>
            <span className="text-[7px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">Certified Medical Network</span>
            <h4 className="text-[11px] font-black text-white leading-tight">Find Verified Caregivers & Nurses</h4>
            <p className="text-[8px] text-zinc-400 mt-0.5">Automated matching across 12+ healthcare disciplines</p>
          </div>
          <div className="px-2.5 py-1.5 rounded-lg bg-emerald-500 text-black text-[9px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
            <span>Book Now</span>
            <span>→</span>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 flex flex-col">
            <span className="text-[7px] text-zinc-400 font-mono font-bold uppercase">Active Patients</span>
            <span className="text-xs font-black text-white mt-0.5">10,480+</span>
            <span className="text-[6px] text-emerald-400 font-bold mt-0.5">↑ 24% this mo</span>
          </div>
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 flex flex-col">
            <span className="text-[7px] text-zinc-400 font-mono font-bold uppercase">Nurses On-Duty</span>
            <span className="text-xs font-black text-emerald-400 mt-0.5">240+ Staff</span>
            <span className="text-[6px] text-zinc-400 font-bold mt-0.5">Instant Dispatch</span>
          </div>
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 flex flex-col">
            <span className="text-[7px] text-zinc-400 font-mono font-bold uppercase">Response Time</span>
            <span className="text-xs font-black text-white mt-0.5">&lt; 15 Mins</span>
            <span className="text-[6px] text-emerald-400 font-bold mt-0.5">99.4% CSAT</span>
          </div>
        </div>

        {/* Live Booking Queue Row */}
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-lg p-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
              👩‍⚕️
            </div>
            <div>
              <div className="text-[8px] font-bold text-white flex items-center gap-1">
                <span>ICU Home Care Booking</span>
                <span className="text-[6px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">CONFIRMED</span>
              </div>
              <span className="text-[7px] text-zinc-450">Caregiver assigned • Patient intake verified</span>
            </div>
          </div>
          <span className="text-[8px] font-mono text-zinc-400">Just now</span>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-zinc-800/80 pt-1.5 mt-1.5 flex items-center justify-between text-[7px] text-zinc-500 font-mono flex-shrink-0">
        <span>Powered by ThinkXstudio Cloud Architecture</span>
        <span className="text-emerald-400 font-bold">HIPAA Compliant</span>
      </div>
    </div>
  );
};

// Interactive simulated HDE Industrial Portal
const SimulatedHDEPortal = () => {
  return (
    <div className="w-full h-full bg-[#0a0c12] text-white p-3.5 flex flex-col justify-between select-none text-left font-sans">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-lg bg-[#FAB818]/20 border border-[#FAB818]/40 flex items-center justify-center text-[8px] font-black text-[#FAB818]">
            HDE
          </div>
          <span className="text-[10px] font-black tracking-wide">HDE Pvt Ltd <span className="text-zinc-500">| Industrial</span></span>
        </div>
        <span className="text-[7px] font-mono px-2 py-0.5 rounded-full bg-[#FAB818]/10 text-[#FAB818] border border-[#FAB818]/20 font-bold">
          50+ Active Infra Sites
        </span>
      </div>

      <div className="flex-grow flex flex-col gap-2">
        <div className="bg-gradient-to-r from-amber-950/40 via-zinc-900 to-zinc-900 border border-[#FAB818]/20 rounded-xl p-2.5 flex items-center justify-between">
          <div>
            <span className="text-[7px] font-mono uppercase tracking-wider text-[#FAB818] font-bold block">Engineering & Operations</span>
            <h4 className="text-[11px] font-black text-white leading-tight">Heavy Machinery & Structural Systems</h4>
            <p className="text-[8px] text-zinc-400 mt-0.5">Real-time inventory RFP and vendor procurement</p>
          </div>
          <div className="px-2.5 py-1.5 rounded-lg bg-[#FAB818] text-black text-[9px] font-black uppercase tracking-wider shadow-sm">
            RFP Portal →
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 flex flex-col">
            <span className="text-[7px] text-zinc-400 font-mono font-bold uppercase">Heavy Equipment</span>
            <span className="text-xs font-black text-white mt-0.5">140+ Units</span>
            <span className="text-[6px] text-[#FAB818] font-bold mt-0.5">Ready to Deploy</span>
          </div>
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 flex flex-col">
            <span className="text-[7px] text-zinc-400 font-mono font-bold uppercase">RFP Processing</span>
            <span className="text-xs font-black text-[#FAB818] mt-0.5">3x Faster</span>
            <span className="text-[6px] text-zinc-400 font-bold mt-0.5">Automated Matrix</span>
          </div>
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-2 flex flex-col">
            <span className="text-[7px] text-zinc-400 font-mono font-bold uppercase">Safety Compliance</span>
            <span className="text-xs font-black text-white mt-0.5">ISO 9001:2015</span>
            <span className="text-[6px] text-emerald-400 font-bold mt-0.5">Audit Passed</span>
          </div>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-lg p-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#FAB818]/20 text-[#FAB818] flex items-center justify-center text-[10px]">
              🏗️
            </div>
            <div>
              <div className="text-[8px] font-bold text-white flex items-center gap-1">
                <span>Surat Port Structural Steel Project</span>
                <span className="text-[6px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">STAGE 4 IN PROGRESS</span>
              </div>
              <span className="text-[7px] text-zinc-450">Telemetry synced • 45 Engineers on site</span>
            </div>
          </div>
          <span className="text-[8px] font-mono text-zinc-400">Phase 2</span>
        </div>
      </div>

      <div className="border-t border-zinc-800/80 pt-1.5 mt-1.5 flex items-center justify-between text-[7px] text-zinc-500 font-mono flex-shrink-0">
        <span>Architected by ThinkXstudio Engineering</span>
        <span className="text-[#FAB818] font-bold">100% On-Time Delivery</span>
      </div>
    </div>
  );
};

// Interactive simulated Health Hub Admin ERP
const SimulatedHealthHubPortal = () => {
  return (
    <div className="w-full h-full bg-[#080816] text-white p-3.5 flex flex-col justify-between select-none text-left font-sans">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[8px] font-black text-purple-400">
            HH
          </div>
          <span className="text-[10px] font-black tracking-wide">Health Hub <span className="text-purple-400">ERP & Clinic OS</span></span>
        </div>
        <span className="text-[7px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
          Admin Dashboard
        </span>
      </div>

      <div className="flex-grow flex flex-col gap-2">
        <div className="grid grid-cols-4 gap-1.5">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-lg p-1.5 flex flex-col">
            <span className="text-[6px] font-mono text-zinc-400 uppercase font-bold">Total In-Patients</span>
            <span className="text-[11px] font-black text-white">1,280</span>
            <span className="text-[5px] text-emerald-400 font-bold">↑ 8% Today</span>
          </div>
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-lg p-1.5 flex flex-col">
            <span className="text-[6px] font-mono text-zinc-400 uppercase font-bold">Consultations</span>
            <span className="text-[11px] font-black text-purple-400">342</span>
            <span className="text-[5px] text-purple-300 font-bold">18 in queue</span>
          </div>
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-lg p-1.5 flex flex-col">
            <span className="text-[6px] font-mono text-zinc-400 uppercase font-bold">Doc Availability</span>
            <span className="text-[11px] font-black text-white">48/52</span>
            <span className="text-[5px] text-emerald-400 font-bold">92% Ready</span>
          </div>
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-lg p-1.5 flex flex-col">
            <span className="text-[6px] font-mono text-zinc-400 uppercase font-bold">Revenue Today</span>
            <span className="text-[11px] font-black text-emerald-400">₹4.8L</span>
            <span className="text-[5px] text-zinc-400 font-bold">Auto Invoiced</span>
          </div>
        </div>

        {/* Live SVG Analytics Chart Simulation */}
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-2.5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[8px] font-black text-white uppercase tracking-wider">Hourly Patient Intake Velocity</span>
            <span className="text-[7px] font-mono text-purple-400">Real-time Stream</span>
          </div>
          <div className="h-12 w-full flex items-end gap-1.5 pt-1">
            {[35, 55, 40, 75, 90, 65, 80, 95, 70, 88, 100, 85].map((val, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className="w-full rounded-t-sm bg-gradient-to-t from-purple-600/40 to-purple-400 transition-all duration-500 hover:from-purple-500 hover:to-purple-300"
                  style={{ height: `${val}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800/80 pt-1.5 mt-1.5 flex items-center justify-between text-[7px] text-zinc-500 font-mono flex-shrink-0">
        <span>Engineered with Next.js 15 & Zustand State</span>
        <span className="text-purple-400 font-bold">Multi-tenant Ready</span>
      </div>
    </div>
  );
};

// Custom simulated screen for CarePartner City Mobile App
const SimulatedAppScreen = () => {
  return (
    <div className="w-full h-full bg-[#0a0f1d] text-white p-3 flex flex-col justify-between select-none text-left">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5 mb-1.5 flex-shrink-0">
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-full bg-gradient-brand flex items-center justify-center text-[6px] font-black text-white">CPC</span>
          <span className="text-[8px] font-black uppercase tracking-wider">CarePartner City</span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      </div>
      <div className="flex-grow flex flex-col gap-1.5">
        <div className="bg-zinc-900 border border-zinc-800 rounded-md p-1.5 flex items-center gap-1.5 text-[7px] text-zinc-500">
          <span>🔍</span>
          <span>Find caregivers near you...</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-zinc-900 border border-zinc-800 rounded-md p-1.5 flex flex-col gap-0.5 items-center justify-center text-center">
            <span className="text-xs">🏥</span>
            <span className="text-[6px] font-black uppercase tracking-wide">Home Nurse</span>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-md p-1.5 flex flex-col gap-0.5 items-center justify-center text-center">
            <span className="text-xs">👵</span>
            <span className="text-[6px] font-black uppercase tracking-wide">Elderly Care</span>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-md p-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px]">👩‍⚕️</span>
            <div>
              <h5 className="text-[7px] font-black">Sarah Connor, RN</h5>
              <p className="text-[5px] text-zinc-500 font-semibold">5.0 ★ | Nurse</p>
            </div>
          </div>
          <span className="px-1 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[5px] font-bold">Active</span>
        </div>
      </div>
      <div className="h-6 border-t border-zinc-800 flex items-center justify-around text-zinc-400 text-[8px] mt-1.5 flex-shrink-0 bg-[#05070d] -mx-3 -mb-3 px-3">
        <span className="font-bold text-[7px] text-accent-cyan">● Home</span>
        <span className="text-[7px]">📅 Bookings</span>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const { t, language } = useTranslate();

  const titleText = language === "gu" ? "અમારું કામ" : language === "hi" ? "हमारा काम" : "Our Work";
  const descText = language === "gu"
    ? "અમે બનાવેલા ઉત્કૃષ્ટ ઉત્પાદનો અને પ્લેટફોર્મ્સ જુઓ. ડિઝાઇન અને ડેવલપમેન્ટનું શ્રેષ્ઠ સંયોજન."
    : language === "hi"
    ? "हमारे द्वारा विकसित किए गए उत्कृष्ट उत्पादों और प्लेटफॉर्मों को देखें। डिज़ाइन और डेवलपमेंट का सर्वश्रेष्ठ कॉम्बिनेशन।"
    : "Explore the state-of-the-art platforms and digital products built by our studio. We engineer elite user experiences and bulletproof architectures.";

  const projects: Project[] = [
    {
      title: "CarePartner",
      tagline: "Healthcare & Carepartner Services Platform",
      desc: "A comprehensive service portal connecting certified caregivers, nurses, and medical professionals with patients. Fully localized backend, automated calendar schedules, and secure clinical booking pipelines.",
      perfScore: 99,
      seoScore: 100,
      tech: ["Next.js", "React", "Tailwind CSS", "Cloudflare DNS"],
      gradient: "from-emerald-500/20 via-zinc-950 to-zinc-950",
      glowColor: "bg-emerald-500/10",
      siteName: "carepartner.services",
      mockUrl: "https://carepartner.services/",
      impactMetric: "10,000+ Bookings",
      impactLabel: "99.9% Uptime Verified",
      features: [
        "Patient-Caregiver Matching Algorithm",
        "Automated Scheduling Engine",
        "Clinical Report Sync & PDF Generator"
      ]
    },
    {
      title: "HDE Pvt Ltd",
      tagline: "Heavy Industrial Engineering & Construction Portal",
      desc: "A heavy-duty corporate showcase and operations manager for HDE. Crafted to handle project timelines, corporate clients, heavy industrial product sheets, and vendor queries dynamically.",
      perfScore: 98,
      seoScore: 99,
      tech: ["React", "Tailwind CSS", "Vercel Hosting", "Framer Motion"],
      gradient: "from-[#FAB818]/15 via-zinc-950 to-zinc-950",
      glowColor: "bg-[#FAB818]/10",
      siteName: "hde-pvt-ltd.vercel.app",
      mockUrl: "https://hde-pvt-ltd.vercel.app/",
      impactMetric: "50+ Active Infra Sites",
      impactLabel: "3x Faster Procurement",
      features: [
        "Heavy Product Interactive Catalogs",
        "Vendor Proposal RFP Portal",
        "Corporate Lead Distribution System"
      ]
    },
    {
      title: "Health Hub Admin",
      tagline: "Clinical Operations & Patient Management ERP",
      desc: "An enterprise-grade administration workspace dashboard for medical clinics. Features real-time patient queue monitors, doctor schedule handlers, billing invoices, and interactive clinic metrics.",
      perfScore: 97,
      seoScore: 98,
      tech: ["React", "Tailwind CSS", "Recharts", "Zustand State"],
      gradient: "from-accent-purple/20 via-zinc-950 to-zinc-950",
      glowColor: "bg-accent-purple/10",
      siteName: "health-hub-admin-panel.vercel.app",
      mockUrl: "https://health-hub-admin-panel.vercel.app/",
      impactMetric: "40% Admin Time Saved",
      impactLabel: "Multi-Clinic Scaled",
      features: [
        "Interactive SVG Operations Dashboard",
        "Patient Intake & Booking Matrix",
        "Dynamic Clinic Revenue Analytics"
      ]
    },
    {
      title: "CarePartner City",
      tagline: "Mobile App for On-Demand Caregivers & Nursing",
      desc: "A fully responsive, lightning-fast native mobile application for Android and iOS. Built with location-based matching, real-time caregiver chat, and Razerpay sandbox checkouts.",
      perfScore: 99,
      seoScore: 98,
      tech: ["React Native", "Firebase Auth", "Google Maps SDK", "Play Store"],
      gradient: "from-rose-500/20 via-zinc-950 to-zinc-950",
      glowColor: "bg-rose-500/10",
      siteName: "play.google.com/store/apps",
      mockUrl: "https://play.google.com/store/apps/details?id=com.carepartnercity.app&pcampaignid=web_share",
      impactMetric: "4.9★ App Store Rating",
      impactLabel: "Android & iOS Deployed",
      isApp: true,
      features: [
        "Real-Time Geo-Location Tracking",
        "Push Notifications & Chat",
        "Razerpay Payment Sandbox integration"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-transparent scroll-reveal">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293705_1px,transparent_1px),linear-gradient(to_bottom,#1f293705_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold text-[#FAB818] tracking-widest uppercase mb-2 block">
            03 / Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
            {titleText}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-brand mx-auto rounded-full mb-6" />
          <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
            {descText}
          </p>
        </div>

        {/* Alternating Widescreen Showcase Blocks */}
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <PortfolioBlock
                key={project.title}
                project={project}
                index={index}
                isEven={isEven}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface PortfolioBlockProps {
  project: Project;
  index: number;
  isEven: boolean;
}

function PortfolioBlock({ project, index, isEven }: PortfolioBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = blockRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={blockRef}
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 text-left ${
        isEven ? "" : "lg:flex-row-reverse"
      } group`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s`,
      }}
    >
      {/* Left Side: Mockups Visual Container */}
      <div className="w-full lg:w-1/2 flex justify-center relative">
        {/* Backdrop Glow Orb */}
        <div className={`absolute w-[320px] h-[320px] rounded-full ${project.glowColor} blur-[100px] pointer-events-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
        
        {/* Main Container Frame */}
        <div className={`w-full max-w-[540px] aspect-[16/11] rounded-[2.5rem] border border-zinc-200/90 dark:border-zinc-800/80 bg-gradient-to-br ${project.gradient} p-4 sm:p-6 flex items-center justify-center relative overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:border-zinc-350 dark:group-hover:border-zinc-700`}>
          {project.isApp ? (
            <div className="w-[140px] sm:w-[155px] h-[255px] sm:h-[275px] bg-zinc-950 border-[5px] border-zinc-800 rounded-[28px] overflow-hidden relative shadow-2xl border-t-[8px] border-b-[8px] transform rotate-1 group-hover:scale-105 group-hover:rotate-0 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-zinc-800 rounded-b-md z-20" />
              <div className="w-full h-full pt-2.5 relative overflow-hidden">
                <SimulatedAppScreen />
              </div>
            </div>
          ) : (
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="w-full h-full bg-[#0a0f1d] rounded-2xl border border-zinc-200/20 dark:border-zinc-800/80 shadow-2xl overflow-hidden flex flex-col justify-between transform transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01]">
                {/* Browser Top Chrome */}
                <div className="bg-zinc-900 border-b border-zinc-800 py-1.5 px-3 flex items-center justify-between text-[7px] font-mono text-zinc-500 select-none flex-shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 truncate text-zinc-300 font-medium">{project.siteName}</span>
                  </div>
                  <span className="hidden sm:inline-block text-[7px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    ● SSL SECURED
                  </span>
                </div>

                {/* Inner High-Fidelity Interactive Screen Render */}
                <div className="flex-grow w-full relative overflow-hidden">
                  {project.title === "CarePartner" && <SimulatedCarePartnerPortal />}
                  {project.title === "HDE Pvt Ltd" && <SimulatedHDEPortal />}
                  {project.title === "Health Hub Admin" && <SimulatedHealthHubPortal />}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Side: Showcase Information */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 text-xs font-mono font-bold text-emerald-500">
            <Zap size={12} />
            <span>Peak Perf {project.perfScore}%</span>
          </div>
          <div className="flex items-center gap-1.5 bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/20 text-xs font-mono font-bold text-accent-cyan">
            <Target size={12} />
            <span>SEO {project.seoScore}%</span>
          </div>
          {/* Direct Impact Badge */}
          <div className="flex items-center gap-1.5 bg-[#FAB818]/10 px-3 py-1 rounded-full border border-[#FAB818]/30 text-xs font-mono font-bold text-[#FAB818]">
            <Award size={12} />
            <span>{project.impactMetric}</span>
          </div>
        </div>

        <h3 className="text-2xl md:text-4xl font-black tracking-tight text-zinc-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-[#FAB818] text-xs font-bold uppercase tracking-widest mb-4">
          {project.tagline} • <span className="text-zinc-400 normal-case font-medium">{project.impactLabel}</span>
        </p>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 max-w-lg">
          {project.desc}
        </p>

        {/* Feature List */}
        <div className="flex flex-col gap-2.5 mb-8">
          {project.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 font-bold">
              <CheckCircle2 size={14} className="text-accent-cyan flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Tags and Launch CTA */}
        <div className="flex flex-wrap gap-3 items-center border-t border-zinc-200/70 dark:border-zinc-800/70 pt-6">
          <div className="flex flex-wrap gap-1.5 flex-grow">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-600 dark:text-zinc-400 font-bold font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.mockUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-5 py-3 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-black text-xs uppercase tracking-wider transition-all hover:scale-[1.03] active:scale-[0.97] shadow-md hover:shadow-lg group/btn mt-2 sm:mt-0"
          >
            <span>{project.isApp ? "Launch App" : "Explore Live Site"}</span>
            <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
