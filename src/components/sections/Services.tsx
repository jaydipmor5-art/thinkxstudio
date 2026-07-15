"use client";

import React, { useState } from "react";
import { useTranslate } from "../../context/LanguageContext";
import { Globe, Smartphone, Cpu, Shield, Brush, Video } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  items: string[];
  icon: React.ReactNode;
}

export default function Services() {
  const { t } = useTranslate();
  const [activeCategory, setActiveCategory] = useState<"all" | "tech" | "business" | "creatives">("all");

  const servicesData: (ServiceCardProps & { category: "tech" | "business" | "creatives" })[] = [
    {
      id: "web",
      title: t("services.web.title"),
      items: t("services.web.list"),
      icon: <Globe size={24} className="text-accent-cyan" />,
      category: "tech",
    },
    {
      id: "app",
      title: t("services.app.title"),
      items: t("services.app.list"),
      icon: <Smartphone size={24} className="text-accent-purple" />,
      category: "tech",
    },
    {
      id: "ai",
      title: t("services.ai.title"),
      items: t("services.ai.list"),
      icon: <Cpu size={24} className="text-accent-magenta" />,
      category: "tech",
    },
    {
      id: "business",
      title: t("services.business.title"),
      items: t("services.business.list"),
      icon: <Shield size={24} className="text-emerald-400" />,
      category: "business",
    },
    {
      id: "branding",
      title: t("services.branding.title"),
      items: t("services.branding.list"),
      icon: <Brush size={24} className="text-amber-400" />,
      category: "creatives",
    },
    {
      id: "content",
      title: t("services.content.title"),
      items: t("services.content.list"),
      icon: <Video size={24} className="text-rose-400" />,
      category: "creatives",
    },
  ];

  const filteredServices = servicesData.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-accent-cyan/5 top-[10%] right-[5%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
            {t("services.title")}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-brand mx-auto rounded-full mb-8" />

          {/* Filtering Tabs */}
          <div className="inline-flex bg-zinc-900/10 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 p-1 rounded-full">
            {(["all", "tech", "business", "creatives"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-brand text-white"
                    : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ id, title, items, icon }: ServiceCardProps) {
  return (
    <div
      className="relative glassmorphism rounded-2xl p-6 overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-accent-cyan/40 dark:hover:border-accent-cyan/40 hover:scale-[1.02] hover:shadow-[0_15px_45px_rgba(6,182,212,0.04)] dark:hover:shadow-[0_15px_45px_rgba(6,182,212,0.06)] min-h-[300px] flex flex-col justify-between group transition-all duration-500 cursor-pointer"
    >
      {/* Main Content View */}
      <div>
        <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-accent-cyan transition-colors">
          {title}
        </h3>
        
        <ul className="flex flex-col gap-2">
          {items.map((item, index) => (
            <li key={index} className="text-xs text-zinc-650 dark:text-zinc-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Tag */}
      <div className="pt-6 border-t border-zinc-200/50 dark:border-zinc-900/60 flex items-center justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-6">
        <span>Click for Quote</span>
        <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </div>
  );
}
