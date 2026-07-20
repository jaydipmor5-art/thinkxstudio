"use client";

import React, { useState } from "react";
import { useTranslate } from "../../context/LanguageContext";
import { CheckCircle2, BookOpen, Compass, Target, ArrowRight, MapPin, Layers, Languages, ShieldCheck } from "lucide-react";

export default function About() {
  const { t, language } = useTranslate();
  const [activeTab, setActiveTab] = useState<"story" | "mission" | "vision">("story");
  const [expandedPointIdx, setExpandedPointIdx] = useState<number>(0);

  // Localized description mapping to solve placeholder duplication and add micro-badges
  const pointDetails = {
    en: [
      {
        title: "Interactive 3D Experiences & Elite Aesthetics",
        desc: "Immersive, CAD-grade WebGL scenes built to showcase product features with full responsive performance.",
        badge: "3D WebGL"
      },
      {
        title: "Next-generation AI Automation & Agent Workflows",
        desc: "Custom LLM integrations, autonomous RAG agents, and voice chatbots that automate customer operations 24/7.",
        badge: "AI Agents"
      },
      {
        title: "Transparent Real-time Live Project Workspaces",
        desc: "Real-time client sandboxes where you can monitor build stages and interact with your product while it is being coded.",
        badge: "Live Sync"
      },
      {
        title: "End-to-End Scalability & Enterprise-grade Security",
        desc: "Robust cloud deployments engineered to sync edge databases and scale to millions of concurrent sessions.",
        badge: "Edge Scale"
      }
    ],
    gu: [
      {
        title: "આકર્ષક 3D અનુભવો અને પ્રીમિયમ દેખાવ",
        desc: "ઉત્કૃષ્ટ WebGL ટેકનોલોજી દ્વારા પ્રોડક્ટ પ્રીવ્યુ જે યુઝર્સને અદભુત 3D વિઝ્યુઅલ ફીલ આપે છે.",
        badge: "3D WebGL"
      },
      {
        title: "નવી પેઢીનું AI ઓટોમેશન અને વર્કફ્લો",
        desc: "કસ્ટમ LLMs, ચેટબોટ્સ અને ઓટોમેશન એજન્ટ્સ જે તમારી ટીમના વર્કલોડને 24/7 સરળ બનાવે છે.",
        badge: "AI Agents"
      },
      {
        title: "પારદર્શક રીઅલ-ટાઇમ લાઇવ પ્રોજેક્ટ વર્કસ્પેસ",
        desc: "લાઈવ કલાયન્ટ સેન્ડબોક્સ જેથી પ્રોજેક્ટ ડેવલપમેન્ટ દરમિયાન તમે પ્રગતિ લાઈવ જોઈ શકો.",
        badge: "Live Sync"
      },
      {
        title: "એન્ટરપ્રાઇઝ-લેવલ સુરક્ષા અને સ્કેલેબિલિટી",
        desc: "લાખો યુઝર્સ એકસાથે ઓપરેટ કરી શકે તેવી સ્કેલેબલ ક્લાઉડ સિસ્ટમ અને મજબૂત સુરક્ષા.",
        badge: "Edge Scale"
      }
    ],
    hi: [
      {
        title: "शानदार 3D अनुभव और प्रीमियम लुक",
        desc: "उत्कृष्ट WebGL टेक्नोलॉजी द्वारा इमर्सिव 3D विजुअल्स जो यूजर्स को शानदार अनुभव प्रदान करते हैं.",
        badge: "3D WebGL"
      },
      {
        title: "अगली पीढ़ी का AI ऑटोमेशन और वर्कफ़्लो",
        desc: "कस्टम LLM इंटीग्रेशन और ऑटोमेशन एजेंट्स जो आपके व्यवसाय के काम को 24/7 स्वचालित करते हैं.",
        badge: "AI Agents"
      },
      {
        title: "पारदर्शी रियल-टाइम लाइव प्रोजेक्ट वर्कस्पेस",
        desc: "लाइव क्लाइंट सैंडबॉक्स ताकि प्रोजेक्ट के कोडिंग के दौरान आप लाइव अपडेट देख और अनुभव कर सकें.",
        badge: "Live Sync"
      },
      {
        title: "एंटरप्राइज-लेवल सुरक्षा और स्केलेबिलिटी",
        desc: "मजबूत क्लाउड इंफ्रास्ट्रक्चर जो लाखों उपयोगकर्ताओं को संभालने के लिए अत्यधिक स्केलेबल और सुरक्षित है.",
        badge: "Edge Scale"
      }
    ]
  };

  const currentPoints = pointDetails[language as keyof typeof pointDetails] || pointDetails.en;

  const tabsConfig = [
    {
      id: "story" as const,
      label: t("about.storyTitle"),
      icon: <BookOpen size={16} />,
      content: t("about.storyText"),
    },
    {
      id: "mission" as const,
      label: t("about.missionTitle"),
      icon: <Target size={16} />,
      content: t("about.missionText"),
    },
    {
      id: "vision" as const,
      label: t("about.visionTitle"),
      icon: <Compass size={16} />,
      content: t("about.visionText"),
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/10 scroll-reveal">
      {/* Background Orbs */}
      <div className="glow-orb w-[400px] h-[400px] bg-accent-purple/5 bottom-[-10%] left-[5%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-brand mx-auto rounded-full" />
        </div>

        {/* Story, Mission, Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Tabs Column */}
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-6">
            {/* Tab controls */}
            <div className="flex bg-zinc-900/5 dark:bg-zinc-900/40 border border-zinc-200/55 dark:border-zinc-800/40 p-1.5 rounded-xl backdrop-blur-md">
              {tabsConfig.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-brand text-white shadow-md border-transparent"
                      : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="glassmorphism glassmorphism-glow rounded-2xl p-8 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/20">
              <div className="animate-in fade-in slide-in-from-left-4 duration-300" key={activeTab}>
                <h3 className="text-xl font-black mb-4 text-[#111322] dark:text-zinc-100 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#FAB818] rounded-full shadow-sm shadow-[#FAB818]/50" />
                  {tabsConfig.find((t) => t.id === activeTab)?.label}
                </h3>
                <p className="text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed font-medium">
                  {tabsConfig.find((t) => t.id === activeTab)?.content}
                </p>
              </div>

              {/* Action */}
              <a
                href="#contact"
                className="relative group overflow-hidden inline-flex items-center gap-1.5 text-xs font-bold text-[#FAB818] hover:text-[#7C3AED] transition-colors mt-6 w-fit"
              >
                <span>Partner With Us</span>
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Why Choose Us Column */}
          <div className="col-span-1 lg:col-span-6 glassmorphism rounded-2xl p-8 lg:p-10 border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white mb-6">
              {t("about.whyChooseUs")}
            </h3>
            
            <div className="flex flex-col gap-4">
              {currentPoints.map((pt, idx) => {
                const isExpanded = expandedPointIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setExpandedPointIdx(idx)}
                    className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 relative overflow-hidden ${
                      isExpanded
                        ? "bg-white/90 dark:bg-zinc-900/90 border-[#ca5a27]/30 shadow-[0_8px_30px_rgba(202,90,39,0.06)] scale-[1.01]"
                        : "bg-white/40 dark:bg-zinc-900/30 border-zinc-200/60 dark:border-zinc-800/40 hover:bg-white/60 dark:hover:bg-zinc-900/50"
                    }`}
                  >
                    {/* Subtle glow highlight on hover/expanded */}
                    {isExpanded && (
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-brand" />
                    )}

                    <div className="flex items-start gap-4">
                      {/* Checkmark icon with ring */}
                      <div className={`mt-0.5 transition-transform duration-500 ${
                        isExpanded ? "text-[#FAB818] scale-110 rotate-12" : "text-zinc-400"
                      }`}>
                        <CheckCircle2 size={20} className={isExpanded ? "animate-pulse" : ""} />
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <h4 className={`text-sm font-bold transition-colors ${
                            isExpanded ? "text-[#111322] dark:text-white" : "text-zinc-700 dark:text-zinc-300"
                          }`}>
                            {pt.title}
                          </h4>
                          {isExpanded && (
                            <span className="px-2.5 py-0.5 rounded-full border border-[#FAB818]/30 text-[9px] text-[#FAB818] font-bold tracking-wider uppercase bg-[#FAB818]/5">
                              {pt.badge}
                            </span>
                          )}
                        </div>

                        {/* Expandable description block */}
                        <div className={`transition-all duration-300 overflow-hidden ${
                          isExpanded ? "max-h-24 opacity-100 mt-2.5" : "max-h-0 opacity-0"
                        }`}>
                          <p className="text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed font-medium">
                            {pt.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Agency Trust & Info Strip */}
        <div className="mt-16 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-200/40 dark:border-zinc-800/40">
            <div className="w-10 h-10 rounded-lg bg-[#FAB818]/10 text-[#FAB818] border border-[#FAB818]/20 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Location</div>
              <div className="text-xs font-black text-zinc-800 dark:text-zinc-200">Surat, Gujarat, IN</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-200/40 dark:border-zinc-800/40">
            <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 flex items-center justify-center flex-shrink-0">
              <Layers size={18} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Services</div>
              <div className="text-xs font-black text-zinc-800 dark:text-zinc-200">6 Core Verticals</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-200/40 dark:border-zinc-800/40">
            <div className="w-10 h-10 rounded-lg bg-accent-purple/10 text-accent-purple border border-accent-purple/20 flex items-center justify-center flex-shrink-0">
              <Languages size={18} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Languages</div>
              <div className="text-xs font-black text-zinc-800 dark:text-zinc-200">EN • GUJ • HI</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-200/40 dark:border-zinc-800/40">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Quality</div>
              <div className="text-xs font-black text-zinc-800 dark:text-zinc-200">ThinkX OS Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
