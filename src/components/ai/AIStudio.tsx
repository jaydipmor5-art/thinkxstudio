"use client";

import React, { useState } from "react";
import { Sparkles, Calendar, DollarSign, Download, MessageSquare, ArrowRight, Eye, RefreshCw } from "lucide-react";

interface StudioResult {
  companyName: string;
  colorPalette: string;
  primaryColor: string;
  secondaryColor: string;
  logoIdea: string;
  tagline: string;
  features: string[];
  timeline: { phase: string; duration: string }[];
  costs: { item: string; cost: number }[];
}

export default function AIStudio() {
  const [promptInput, setPromptInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StudioResult | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<"preview" | "invoice">("preview");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/ai/studio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptInput }),
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

  const calculateTotal = (costs: { cost: number }[]) => {
    return costs.reduce((sum, item) => sum + item.cost, 0);
  };

  // Dynamic proposal downloader
  const handleDownloadProposal = () => {
    if (!result) return;
    const total = calculateTotal(result.costs);

    const txtContent = `
============================================================
           THINKXSTUDIO DIGITAL INNOVATION PROPOSAL
============================================================
Generated via ThinkX AI Studio
Date: ${new Date().toLocaleDateString()}
------------------------------------------------------------

COMPANY MOCK: ${result.companyName}
LOGO CONCEPT: ${result.logoIdea}
TAGLINE: ${result.tagline}
PALETTE THEME: ${result.colorPalette}

TARGET FEATURES:
${result.features.map((f, i) => `  ${i + 1}. ${f}`).join("\n")}

ESTIMATED TIMELINE ROADMAP:
${result.timeline.map((t) => `  - ${t.phase}: ${t.duration}`).join("\n")}

COST ESTIMATE BREAKDOWN:
${result.costs.map((c) => `  - ${c.item}: $${c.cost}`).join("\n")}
------------------------------------------------------------
TOTAL PROJECT BUDGET: $${total}
============================================================
Partner with ThinkXstudio today to build your future!
Website: thinkxstudio.com | WhatsApp: +91 90237 00622
============================================================
`;

    const blob = new Blob([txtContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `ThinkX_Proposal_${result.logoIdea}.txt`;
    link.click();
  };

  return (
    <section id="ai-studio" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ca5a27]/5 border border-[#ca5a27]/15 text-[11px] font-bold text-[#ca5a27] tracking-wider uppercase mb-6">
            <Sparkles size={12} />
            <span>Killer Feature</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
            ThinkX AI Studio
          </h2>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
            Write your product concept (e.g. "I need an LED company portal"). AI will compile the layout preview, timeline, and quotes instantly.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleGenerate} className="relative max-w-xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              required
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              placeholder="Describe your company (e.g., website for my LED light company)..."
              className="w-full bg-zinc-100/50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-accent-purple rounded-xl py-4 pl-5 pr-32 text-xs text-zinc-800 dark:text-zinc-200 outline-none transition-all placeholder:text-zinc-500 font-medium"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-brand text-white px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 hover:opacity-90 disabled:opacity-40"
            >
              {loading ? (
                <>
                  <RefreshCw size={12} className="animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Sparkles size={12} />
                  <span>Build Mock</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Scanning state */}
        {loading && (
          <div className="glassmorphism rounded-2xl border border-zinc-850 p-16 text-center max-w-xl mx-auto flex flex-col items-center justify-center gap-6 animate-pulse">
            <div className="w-16 h-16 rounded-full border border-accent-purple/35 flex items-center justify-center text-accent-purple relative">
              <span className="w-12 h-12 rounded-full border-2 border-accent-purple border-t-transparent animate-spin absolute" />
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-200">Assembling Design Tokens</h4>
              <p className="text-[10px] text-zinc-500 font-mono mt-1">
                Parsing sitemap schema • evaluating cost indexes • generating palette styles
              </p>
            </div>
          </div>
        )}

        {/* Dynamic Studio Results Dashboard */}
        {result && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Control Column (Left) */}
            <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
              {/* Tab Selector */}
              <div className="flex bg-zinc-900/10 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1 rounded-xl">
                <button
                  onClick={() => setActiveSubTab("preview")}
                  className={`flex-1 py-3 rounded-lg text-xs font-bold uppercase transition-all ${
                    activeSubTab === "preview" 
                      ? "bg-white dark:bg-zinc-805 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 shadow-sm" 
                      : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                  }`}
                >
                  Homepage Preview
                </button>
                <button
                  onClick={() => setActiveSubTab("invoice")}
                  className={`flex-1 py-3 rounded-lg text-xs font-bold uppercase transition-all ${
                    activeSubTab === "invoice" 
                      ? "bg-white dark:bg-zinc-805 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 shadow-sm" 
                      : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                  }`}
                >
                  Timeline & Cost
                </button>
              </div>

              {/* Specs Box */}
              <div className="glassmorphism rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
                <h4 className="text-[10px] font-black text-accent-cyan uppercase tracking-widest mb-4">
                  Brand Aesthetics Generated
                </h4>
                
                <div className="flex flex-col gap-3 text-xs font-medium text-zinc-650 dark:text-zinc-400">
                  <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-900 pb-2">
                    <span className="text-zinc-500">Logo name:</span>
                    <span className="text-zinc-800 dark:text-zinc-200 font-bold font-mono">{result.logoIdea}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-900 pb-2">
                    <span className="text-zinc-500">Palette:</span>
                    <span className="text-zinc-800 dark:text-zinc-200">{result.colorPalette}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Primary Color:</span>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-800 dark:text-zinc-300">
                      <span className="w-3.5 h-3.5 rounded-full border border-zinc-200 dark:border-zinc-800" style={{ backgroundColor: result.primaryColor }} />
                      <span>{result.primaryColor}</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-zinc-200 dark:bg-zinc-900 w-full my-6" />

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleDownloadProposal}
                    className="w-full py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-xs font-bold text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download size={14} />
                    <span>Download Proposal</span>
                  </button>

                  <a
                    href={`https://wa.me/919023700622?text=Hi%20ThinkXstudio!%20I%20just%20generated%20a%2520proposal%20for%20${result.companyName}%20($${calculateTotal(result.costs)}%20total%20budget,%20timeline:%20${result.timeline.length}%20phases).%20Let's%20discuss!`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white flex items-center justify-center gap-2 transition-colors text-center"
                  >
                    <MessageSquare size={14} />
                    <span>Send to WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Display Column (Right) */}
            <div className="col-span-1 lg:col-span-8">
              {activeSubTab === "preview" ? (
                /* Dynamic Preview Mock Browser container - locked to dark for code block mockup clarity */
                <div className="border border-zinc-800 rounded-2xl bg-zinc-950 shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between">
                  {/* Browser Address details */}
                  <div className="bg-zinc-900/60 border-b border-zinc-900 py-2.5 px-4 flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="ml-4 truncate text-zinc-400">{result.companyName.toLowerCase().replace(/\s+/g, "")}.com</span>
                  </div>

                  {/* Browser Content */}
                  <div className="flex-grow p-6 flex flex-col justify-between text-zinc-300">
                    {/* Fake mockup navbar */}
                    <div className="flex justify-between items-center border-b border-zinc-900/60 pb-3 mb-6">
                      <span className="text-sm font-black font-mono" style={{ color: result.primaryColor }}>
                        {result.logoIdea}
                      </span>
                      <div className="flex gap-4 text-[9px] font-semibold text-zinc-500 uppercase">
                        <span>Solutions</span>
                        <span>Products</span>
                        <span>Contacts</span>
                      </div>
                    </div>

                    {/* Fake mockup hero */}
                    <div className="py-6 text-center max-w-lg mx-auto">
                      <h4 className="text-2xl font-black text-white leading-tight">
                        {result.companyName}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                        {result.tagline}
                      </p>
                      
                      <button
                        className="mt-6 px-6 py-2 rounded-lg text-xs font-bold text-white shadow-sm"
                        style={{ backgroundColor: result.primaryColor }}
                      >
                        Explore Innovations
                      </button>
                    </div>

                    {/* Fake mockup features grid */}
                    <div className="mt-8 pt-6 border-t border-zinc-900/60">
                      <p className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider mb-3">
                        Target Features Compiled
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {result.features.map((f, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 p-2.5 bg-zinc-900/40 rounded-lg border border-zinc-900 text-[10.5px]">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: result.primaryColor }} />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ) : (
                /* Invoice and Roadmap sheet */
                <div className="glassmorphism rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 flex flex-col gap-8">
                  {/* Timeline */}
                  <div>
                    <h4 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Calendar size={14} className="text-accent-cyan" />
                      <span>Proposed Development Roadmap</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {result.timeline.map((tItem, tIdx) => (
                        <div key={tIdx} className="p-4 bg-zinc-100/60 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-900 flex items-center justify-between text-xs">
                          <span className="font-semibold text-zinc-850 dark:text-zinc-300">{tItem.phase}</span>
                          <span className="font-mono text-accent-cyan font-bold">{tItem.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Costing breakdown */}
                  <div>
                    <h4 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <DollarSign size={14} className="text-accent-purple" />
                      <span>Custom Price Quotation Breakdown</span>
                    </h4>
                    
                    <div className="border border-zinc-200 dark:border-zinc-900 rounded-xl overflow-hidden bg-zinc-100/60 dark:bg-zinc-950/60">
                      <div className="grid grid-cols-4 gap-2 bg-zinc-200/50 dark:bg-zinc-900 p-3 text-[10px] font-black text-zinc-550 dark:text-zinc-500 uppercase tracking-wider font-mono">
                        <span className="col-span-3">Itemized Scope</span>
                        <span className="text-right">Price</span>
                      </div>
                      
                      {result.costs.map((cItem, cIdx) => (
                        <div key={cIdx} className="grid grid-cols-4 gap-2 p-3 border-b border-zinc-200 dark:border-zinc-900 text-xs font-medium">
                          <span className="col-span-3 text-zinc-700 dark:text-zinc-300">{cItem.item}</span>
                          <span className="text-right font-mono text-zinc-600 dark:text-zinc-400">${cItem.cost}</span>
                        </div>
                      ))}

                      {/* Total */}
                      <div className="grid grid-cols-4 gap-2 p-4 bg-zinc-200/40 dark:bg-zinc-900/60 text-xs font-bold border-t border-zinc-200 dark:border-zinc-900">
                        <span className="col-span-3 text-zinc-800 dark:text-zinc-200">Total Project Estimate</span>
                        <span className="text-right font-mono text-accent-magenta">${calculateTotal(result.costs)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
