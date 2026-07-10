"use client";

import React, { useState } from "react";
import { Search, Sparkles, ShieldCheck, AlertCircle, RefreshCw } from "lucide-react";

interface AuditResult {
  url: string;
  metrics: { speed: number; seo: number; ui: number; mobile: number; performance: number };
  recommendations: { area: string; issue: string; fix: string }[];
  timestamp: string;
}

export default function AIAudit() {
  const [urlInput, setUrlInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/ai/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: urlInput }),
      });

      const data = await response.json();
      if (data.success) {
        setResult(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-audit" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-accent-cyan tracking-widest uppercase mb-2 block">
            Instant Diagnostics
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1c1917] tracking-tight mb-4">
            AI Website Auditor
          </h2>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
            Enter your current business website URL to audit SEO configuration, page speed rendering, and responsive UI.
          </p>
        </div>

        {/* Input Bar */}
        <form onSubmit={handleAudit} className="relative max-w-xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              required
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="E.g., www.mycompany.com..."
              className="w-full bg-zinc-100/50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-accent-cyan rounded-xl py-4 pl-5 pr-32 text-xs text-zinc-800 dark:text-zinc-200 outline-none transition-all placeholder:text-zinc-500 font-medium"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-brand text-white px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 hover:opacity-90 disabled:opacity-40"
            >
              {loading ? (
                <>
                  <RefreshCw size={12} className="animate-spin" />
                  <span>Auditing...</span>
                </>
              ) : (
                <>
                  <Sparkles size={12} />
                  <span>Audit Site</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Loading Scanning State */}
        {loading && (
          <div className="glassmorphism rounded-2xl border border-zinc-850 p-12 text-center max-w-xl mx-auto flex flex-col items-center justify-center gap-6 animate-pulse">
            <div className="w-16 h-16 rounded-full border border-accent-cyan/35 flex items-center justify-center text-accent-cyan relative">
              <span className="w-12 h-12 rounded-full border-2 border-accent-cyan border-t-transparent animate-spin absolute" />
              <Search size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-850 dark:text-zinc-200">Crawling Site Pages</h4>
              <p className="text-[10px] text-zinc-500 font-mono mt-1">
                Parsing HTML sitemap tags • analyzing content contrast indices
              </p>
            </div>
          </div>
        )}

        {/* Audit Results Dashboard */}
        {result && (
          <div className="glassmorphism rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 animate-in zoom-in-95 duration-300">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-b border-zinc-200 dark:border-zinc-900 pb-4 mb-8 gap-4">
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white truncate max-w-[280px]">URL: {result.url}</h3>
                <p className="text-[9px] text-zinc-500 font-mono">Audited on {result.timestamp} via ThinkX Audit Engine</p>
              </div>
              <span className="text-[10px] font-black font-mono text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest">
                Audit Completed
              </span>
            </div>

            {/* Metrics Circle Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center mb-8">
              {/* Performance */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-4 border-accent-purple flex items-center justify-center text-sm font-bold text-accent-purple font-mono bg-accent-purple/5 mb-2">
                  {result.metrics.performance}%
                </div>
                <span className="text-[10px] font-bold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider">Performance</span>
              </div>
              
              {/* Speed */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-4 border-accent-cyan flex items-center justify-center text-sm font-bold text-accent-cyan font-mono bg-accent-cyan/5 mb-2">
                  {result.metrics.speed}%
                </div>
                <span className="text-[10px] font-bold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider">Page Speed</span>
              </div>

              {/* SEO */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-4 border-accent-magenta flex items-center justify-center text-sm font-bold text-accent-magenta font-mono bg-accent-magenta/5 mb-2">
                  {result.metrics.seo}%
                </div>
                <span className="text-[10px] font-bold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider">SEO Audit</span>
              </div>

              {/* UI */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-4 border-amber-400 flex items-center justify-center text-sm font-bold text-amber-400 font-mono bg-amber-400/5 mb-2">
                  {result.metrics.ui}%
                </div>
                <span className="text-[10px] font-bold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider">UI Design</span>
              </div>

              {/* Mobile */}
              <div className="flex flex-col items-center col-span-2 md:col-span-1">
                <div className="w-16 h-16 rounded-full border-4 border-emerald-400 flex items-center justify-center text-sm font-bold text-emerald-400 font-mono bg-emerald-500/5 mb-2">
                  {result.metrics.mobile}%
                </div>
                <span className="text-[10px] font-bold text-zinc-650 dark:text-zinc-400 uppercase tracking-wider">Mobile Compliant</span>
              </div>
            </div>

            {/* Recommendations Section */}
            <div className="border-t border-zinc-200 dark:border-zinc-900 pt-6">
              <h4 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <AlertCircle size={14} className="text-accent-cyan" />
                <span>Actionable Recommendations</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.recommendations.map((rec, rIdx) => (
                  <div key={rIdx} className="p-4 bg-zinc-100/60 dark:bg-zinc-950/60 rounded-xl border border-zinc-200 dark:border-zinc-900 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-bold text-accent-purple uppercase tracking-wider font-mono">
                          {rec.area} Issue
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      </div>
                      <p className="text-[11px] font-bold text-zinc-800 dark:text-zinc-300 leading-tight mb-2">
                        {rec.issue}
                      </p>
                    </div>
                    
                    <div className="mt-3 pt-2 border-t border-zinc-200 dark:border-zinc-900/60 flex items-start gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                      <ShieldCheck size={12} className="flex-shrink-0 mt-0.5" />
                      <span>{`Fix: ${rec.fix}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit CTA redirect */}
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium">
              <p className="text-zinc-500">
                Want to fix these issues? ThinkXstudio Professional plan guarantees 99%+ performance scores.
              </p>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-xl bg-gradient-brand text-xs font-bold text-white shadow shadow-accent-purple/15 text-center"
              >
                Start Optimization Project
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
