"use client";

import React from "react";
import { useTranslate } from "../../context/LanguageContext";
import { ArrowUpRight, Zap, Target, CheckCircle2, ChevronRight, HeartHandshake, Home, Clock, Car, Stethoscope, Baby, Sparkles, Box, PartyPopper, BellRing, Wallet, Calendar, Grid, User, Wifi, Battery, Signal } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

// Custom simulated screen for CarePartner City Mobile App (Light UI)
const SimulatedAppScreen = () => {
  const categories = [
    { name: "Personal Care", icon: HeartHandshake, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { name: "Domestic Care", icon: Home, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { name: "Priority Services", icon: Clock, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Travel Care", icon: Car, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Health Care", icon: Stethoscope, color: "text-rose-500", bg: "bg-rose-500/10" },
    { name: "Child Care", icon: Baby, color: "text-orange-500", bg: "bg-orange-500/10" },
    { name: "Deep Cleaning", icon: Sparkles, color: "text-cyan-500", bg: "bg-cyan-500/10" },
    { name: "Luggage shifting", icon: Box, color: "text-amber-500", bg: "bg-amber-500/10" },
    { name: "Festival cleaning", icon: PartyPopper, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
  ];

  return (
    <div className="w-full h-full bg-white text-zinc-900 flex flex-col justify-between select-none text-left overflow-hidden relative">
       {/* Status Bar */}
       <div className="h-4 w-full flex justify-between items-center px-3 pt-1 relative z-20 text-zinc-900">
         <span className="text-[5px] font-bold">10:55</span>
         <div className="flex gap-0.5 items-center">
           <Signal size={6} strokeWidth={3} />
           <Wifi size={6} strokeWidth={3} />
           <Battery size={7} strokeWidth={2} />
         </div>
       </div>

       {/* Scrollable content area */}
       <div className="flex-grow px-2.5 pb-2.5 flex flex-col gap-2.5 mt-1 overflow-hidden">
         {/* Header */}
         <div className="flex justify-between items-center">
           <h4 className="text-[11px] font-black tracking-tight text-[#111827]">Explore Categories</h4>
           <span className="text-[#E76F32] text-[6.5px] font-black tracking-wider flex items-center">View All <span className="ml-0.5">→</span></span>
         </div>
         
         {/* 3x3 Grid */}
         <div className="grid grid-cols-3 gap-y-2.5 gap-x-1.5 mt-0.5">
           {categories.map((cat, i) => (
             <div key={i} className="flex flex-col items-center gap-1">
               <div className={`w-10 h-10 rounded-[12px] ${cat.bg} flex items-center justify-center border border-zinc-100/80 shadow-sm relative overflow-hidden group/cat`}>
                 <cat.icon size={16} className={cat.color} />
               </div>
               <span className="text-[5px] font-bold text-center leading-tight whitespace-nowrap text-zinc-800">{cat.name}</span>
             </div>
           ))}
         </div>

         {/* Quick Actions Header */}
         <h4 className="text-[11px] font-black tracking-tight text-[#111827] mt-1.5">Quick Actions</h4>
         
         {/* Quick Actions Cards */}
         <div className="grid grid-cols-2 gap-2 mt-0.5">
           {/* Emergency */}
           <div className="bg-[#1e2b6a] text-white rounded-[12px] p-2.5 relative overflow-hidden h-[60px] shadow-sm">
             <div className="flex justify-between items-start mb-2.5">
               <span className="text-[9px] font-bold leading-[1.1]">Emergency<br/>Care</span>
               <BellRing size={12} className="text-[#E76F32]" />
             </div>
             <span className="text-[5px] text-indigo-200 uppercase tracking-[0.2em] font-black mt-auto block">Direct Helpline</span>
             <div className="absolute bottom-2 left-2.5 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
               <span className="text-[7px] font-black leading-none pb-[1px]">→</span>
             </div>
           </div>
           
           {/* Instant */}
           <div className="bg-[#f0f4fc] text-[#1e2b6a] rounded-[12px] p-2.5 relative overflow-hidden h-[60px] shadow-sm border border-blue-100/60">
             <div className="flex justify-between items-start mb-2.5">
               <span className="text-[9px] font-bold leading-[1.1]">Instant<br/>Cleaning</span>
               <div className="w-[14px] h-[14px] bg-white rounded flex items-center justify-center shadow-sm">
                 <Zap size={9} className="text-blue-500" />
               </div>
             </div>
             <span className="text-[5px] text-zinc-500 uppercase tracking-[0.2em] font-black mt-auto block">Book in 60 Sec</span>
             <div className="absolute bottom-2 left-2.5 w-4 h-4 rounded-full bg-white border border-indigo-100 flex items-center justify-center">
               <span className="text-[7px] text-[#1e2b6a] font-black leading-none pb-[1px]">→</span>
             </div>
           </div>
         </div>
         
         {/* Why Choose Section (Bottom) */}
         <div className="mt-2.5">
           <h4 className="text-[11px] font-black tracking-tight text-[#111827] mb-1">Why Choose Carepartner?</h4>
           <div className="bg-zinc-50 rounded-[12px] p-2 border border-zinc-100 flex items-center justify-between shadow-sm">
             <div className="flex gap-2 items-center">
               <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                 <CheckCircle2 size={10} className="text-emerald-500" />
               </div>
               <div className="flex flex-col">
                 <span className="text-[7px] font-bold text-zinc-800">Verified & Trained</span>
                 <span className="text-[5px] text-zinc-500">100% Background checked staff</span>
               </div>
             </div>
           </div>
         </div>
       </div>

       {/* Bottom Nav */}
       <div className="h-12 bg-white/95 backdrop-blur-md border-t border-zinc-100 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] flex items-center justify-around px-2 relative z-10 w-full pt-1 pb-2">
         <div className="flex flex-col items-center gap-[2px] text-zinc-400 cursor-pointer">
           <Wallet size={12} strokeWidth={2} />
           <span className="text-[5px] font-bold">Wallet</span>
         </div>
         <div className="flex flex-col items-center gap-[2px] text-zinc-400 cursor-pointer">
           <Calendar size={12} strokeWidth={2} />
           <span className="text-[5px] font-bold">Bookings</span>
         </div>
         
         {/* Active floating FAB style center button */}
         <div className="flex flex-col items-center justify-center -mt-7 cursor-pointer">
           <div className="w-11 h-11 rounded-full bg-[#4a3bc6] flex items-center justify-center shadow-[0_4px_12px_rgba(74,59,198,0.4)] border-[4px] border-white">
             <Home size={15} color="white" strokeWidth={2.5} />
           </div>
         </div>
         
         <div className="flex flex-col items-center gap-[2px] text-zinc-400 cursor-pointer">
           <Grid size={12} strokeWidth={2} />
           <span className="text-[5px] font-bold">Categories</span>
         </div>
         <div className="flex flex-col items-center gap-[2px] text-zinc-400 cursor-pointer">
           <User size={12} strokeWidth={2} />
           <span className="text-[5px] font-bold">Account</span>
         </div>
         
         {/* Home Indicator */}
         <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-zinc-300 rounded-full" />
       </div>
    </div>
  );
};

export default function Portfolio() {
  const { t, language } = useTranslate();
  const titleRef = useScrollReveal<HTMLDivElement>({ type: "fadeUp" });
  const projectsRef = useScrollReveal<HTMLDivElement>({ type: "fadeUp", stagger: true, delay: 0.15 });

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
    <section id="portfolio" className="py-24 relative overflow-hidden bg-transparent">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293705_1px,transparent_1px),linear-gradient(to_bottom,#1f293705_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
            {titleText}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-brand mx-auto rounded-full mb-6" />
          <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
            {descText}
          </p>
        </div>

        {/* Alternating Widescreen Showcase Blocks */}
        <div ref={projectsRef} className="flex flex-col gap-24">
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
                      <div className="w-[155px] h-[310px] bg-white border-[5px] border-zinc-900 rounded-[26px] overflow-hidden relative shadow-2xl border-t-[8px] border-b-[8px] transform rotate-1 group-hover:scale-[1.03] group-hover:rotate-0 transition-all duration-500">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[14px] bg-zinc-900 rounded-b-[10px] z-30" />
                        <div className="w-full h-full relative overflow-hidden bg-white">
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
