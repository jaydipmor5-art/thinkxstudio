"use client";

import React from "react";
import { useTranslate } from "../../context/LanguageContext";
import { ArrowUpRight, Zap, Target, CheckCircle2, ChevronRight } from "lucide-react";

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
  previewImg: string;
  mobilePreviewImg?: string;
  features: string[];
  isApp?: boolean;
}

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
      previewImg: "/carepartner_preview.png",
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
      previewImg: "/hde_preview.png",
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
      previewImg: "/healthhub_preview.png",
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
      previewImg: "",
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
        <div className="text-center max-w-3xl mx-auto mb-24">
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
              <div
                key={project.title}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 text-left ${
                  isEven ? "" : "lg:flex-row-reverse"
                } group`}
              >
                {/* Left Side: Mockups Visual Container */}
                <div className="w-full lg:w-1/2 flex justify-center relative">
                  {/* Backdrop Glow Orb */}
                  <div className={`absolute w-[280px] h-[280px] rounded-full ${project.glowColor} blur-[90px] pointer-events-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
                  
                  {/* Main Container Frame */}
                  <div className={`w-full max-w-[500px] aspect-[16/11] rounded-[2.5rem] border border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:border-zinc-350 dark:group-hover:border-zinc-700`}>
                    
                    {project.isApp ? (
                      /* Realistic Mobile Phone Viewport (Standalone) */
                      <div className="w-[130px] h-[240px] bg-zinc-950 border-[5px] border-zinc-800 rounded-[24px] overflow-hidden relative shadow-2xl border-t-[8px] border-b-[8px] transform rotate-1 group-hover:scale-105 group-hover:rotate-0 transition-all duration-500">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-zinc-800 rounded-b-md z-20" />
                        <div className="w-full h-full pt-2.5 relative overflow-hidden">
                          <SimulatedAppScreen />
                        </div>
                      </div>
                    ) : (
                      /* Clean Desktop Device Frame (No overlapping phone to prevent text crop) */
                      <div className="w-full h-full relative flex items-center justify-center">
                        {/* Desktop Browser Mockup */}
                        <div className="w-full h-full bg-[#0a0f1d] rounded-xl border border-zinc-200/10 shadow-2xl overflow-hidden flex flex-col justify-between transform transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01]">
                          {/* Browser bar */}
                          <div className="bg-zinc-900 border-b border-zinc-800 py-1.5 px-3 flex items-center gap-1 text-[7px] font-mono text-zinc-500 select-none flex-shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="ml-2 truncate text-zinc-400 font-medium">{project.siteName}</span>
                          </div>
                          {/* Live Webpage Iframe Viewport (Scrollbar-free & Scaled) */}
                          <div className="flex-grow w-full relative overflow-hidden bg-[#0a0f1d]">
                            <iframe
                              src={project.mockUrl}
                              title={project.title}
                              className="absolute top-0 left-0 border-0 bg-[#0a0f1d]"
                              style={{
                                width: "250%",
                                height: "250%",
                                transform: "scale(0.4)",
                                transformOrigin: "top left",
                                pointerEvents: "none",
                                overflow: "hidden"
                              }}
                              scrolling="no"
                              sandbox="allow-scripts allow-same-origin allow-popups"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Right Side: Showcase Information */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Performance badging */}
                    <div className="flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 text-xs font-mono font-bold text-emerald-500">
                      <Zap size={12} />
                      <span>Peak Perf</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/20 text-xs font-mono font-bold text-accent-cyan">
                      <Target size={12} />
                      <span>SEO Verified</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-black tracking-tight text-zinc-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#FAB818] text-xs font-bold uppercase tracking-widest mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 max-w-lg">
                    {project.desc}
                  </p>

                  {/* Core Features list */}
                  <div className="flex flex-col gap-2.5 mb-8">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 text-xs text-zinc-650 dark:text-zinc-300 font-bold">
                        <CheckCircle2 size={14} className="text-accent-cyan flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags and Call to Action */}
                  <div className="flex flex-wrap gap-2 items-center border-t border-zinc-200/50 dark:border-zinc-800/40 pt-6">
                    <div className="flex flex-wrap gap-1.5 flex-grow">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 text-[10px] text-zinc-550 dark:text-zinc-400 font-bold font-mono"
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
                      <span>{project.isApp ? "Launch App" : "Explore Site"}</span>
                      <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
