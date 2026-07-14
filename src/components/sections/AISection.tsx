"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles, Brain, Cpu, MessageSquare, ArrowRight } from "lucide-react";

export default function AISection() {
  const innerRef = useScrollReveal<HTMLDivElement>({ type: "scale" });
  const badgeRef = useScrollReveal<HTMLDivElement>({ type: "fadeDown", delay: 0.1 });
  const featuresRef = useScrollReveal<HTMLDivElement>({ type: "fadeUp", stagger: true, delay: 0.3 });
  const features = [
    { title: "Autonomous AI Agents", desc: "Agents that make decisions, query APIs, send custom invoices, and assign developer tasks.", icon: <Brain size={18} /> },
    { title: "Gemini API Integrations", desc: "Powering real-time chatbots, audit tools, and proposal generation dynamically.", icon: <Cpu size={18} /> },
    { title: "RAG Caching Networks", desc: "We embed custom files and portfolio indexes so AI answers represent your company exactly.", icon: <MessageSquare size={18} /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent border-y border-zinc-200/50">
      {/* Dynamic flowing mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.06),transparent_60%)] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.06),transparent_60%)] pointer-events-none -z-10" />

      <div ref={innerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ca5a27]/5 border border-[#ca5a27]/15 text-[11px] font-bold text-[#ca5a27] tracking-wider uppercase mb-6">
          <Sparkles size={12} />
          <span>The New Paradigm</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1c1917] mb-6 leading-none">
          AI Is Changing Everything.
        </h2>
        
        <p className="text-sm md:text-base text-zinc-500 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
          ThinkXstudio is not a standard agency. We configure and deploy automated LLM pipelines and autonomous agents to digitize your operations and grow your enterprise authority.
        </p>

        {/* Features Row */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 bg-white/70 border border-zinc-200/50 rounded-2xl hover:border-[#ca5a27]/30 hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-accent-magenta/5 border border-accent-magenta/15 flex items-center justify-center text-accent-magenta mb-4">
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-[#1c1917] mb-2">{f.title}</h3>
              <p className="text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <a
          href="#ai-studio"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-brand text-xs font-black uppercase text-white shadow-lg shadow-accent-purple/20 hover:scale-[1.01] transition-transform"
        >
          <span>Launch ThinkX AI Studio</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
