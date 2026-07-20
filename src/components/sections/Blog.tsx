"use client";

import React, { useState } from "react";
import { Search, Sparkles, ArrowRight, Eye, Calendar, User } from "lucide-react";
import TextReveal from "../common/TextReveal";

interface BlogPost {
  title: string;
  excerpt: string;
  category: "AI" | "Startup" | "Marketing" | "Development" | "SEO";
  date: string;
  author: string;
  readTime: string;
  views: number;
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState<{ title: string; link: string; matchType: string }[]>([]);

  const posts: BlogPost[] = [
    {
      title: "How Next.js 15 & React 19 Accelerate Enterprise ERP Speed",
      excerpt: "An in-depth breakdown of server actions, layout caching, and React Compiler optimizations in building lightning-fast internal dashboards.",
      category: "Development",
      date: "July 2, 2026",
      author: "Jaydip Mor",
      readTime: "5 min read",
      views: 1240,
    },
    {
      title: "RAG Caching: Standardizing Real-time Knowledge Bases for AI Agents",
      excerpt: "Learn how to feed custom company documentation, FAQs, and portfolio cases to Gemini API for precise customer consulting without hallucinations.",
      category: "AI",
      date: "June 28, 2026",
      author: "Jaydip Mor",
      readTime: "7 min read",
      views: 2310,
    },
    {
      title: "Why Startups Need a Live Project Workspace, Not Static Gantt Checklists",
      excerpt: "Building trust in digital agencies through transparency. Analyzing Git timelines, UI Figma stages, and testing status boards.",
      category: "Startup",
      date: "June 25, 2026",
      author: "Darshal",
      readTime: "4 min read",
      views: 940,
    },
    {
      title: "Maximizing SEO Authority via Structured JSON-LD & Dynamic OG Metadata",
      excerpt: "Step-by-step tutorial on search crawler optimization for Next.js app routing sitemaps and indexing policies.",
      category: "SEO",
      date: "June 20, 2026",
      author: "Jaydip Mor",
      readTime: "6 min read",
      views: 1580,
    },
    {
      title: "Automating B2B Lead Nurturing via Multi-agent email triggers",
      excerpt: "How to connect Supabase database hooks to autonomous email and WhatsApp reply bots to slash sales follow-up times to 2 minutes.",
      category: "Marketing",
      date: "June 14, 2026",
      author: "Darshal",
      readTime: "8 min read",
      views: 1890,
    },
  ];

  // AI search logic representing semantic retrieval
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length === 0) {
      setAiSuggestions([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const suggestions: { title: string; link: string; matchType: string }[] = [];

    // Semantic checks
    if (lowerQuery.includes("hospital") || lowerQuery.includes("medical") || lowerQuery.includes("clinic") || lowerQuery.includes("software")) {
      suggestions.push({
        title: "MedX Flow - Hospital ERP system (Live Workspace Demo)",
        link: "#portfolio",
        matchType: "Case Study Match",
      });
    }
    if (lowerQuery.includes("restaurant") || lowerQuery.includes("pos") || lowerQuery.includes("food") || lowerQuery.includes("qr")) {
      suggestions.push({
        title: "BiteSync - QR ordering POS (Live Workspace Demo)",
        link: "#portfolio",
        matchType: "Case Study Match",
      });
    }
    if (lowerQuery.includes("ai") || lowerQuery.includes("chatbot") || lowerQuery.includes("gemini") || lowerQuery.includes("automation")) {
      suggestions.push({
        title: "Try ThinkX AI Studio Generator (Landing page mock builder)",
        link: "#ai-studio",
        matchType: "AI Agent Suggestion",
      });
    }
    if (lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("plan")) {
      suggestions.push({
        title: "View transparent Pricing Packages compare table",
        link: "#pricing",
        matchType: "Pricing Redirect",
      });
    }

    // Keyword checks across blog posts
    posts.forEach((post) => {
      if (post.title.toLowerCase().includes(lowerQuery) || post.excerpt.toLowerCase().includes(lowerQuery)) {
        suggestions.push({
          title: `Blog: ${post.title}`,
          link: "#blog",
          matchType: "Blog Match",
        });
      }
    });

    setAiSuggestions(suggestions.slice(0, 3)); // Max 3 items
  };

  const filteredPosts = posts.filter(
    (post) => activeCategory === "all" || post.category === activeCategory
  );

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-transparent scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center lg:text-left">
            <TextReveal
              text="Latest Digital Insights"
              as="h2"
              className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4"
              wordDelay={80}
            />
            <div className="h-1.5 w-24 bg-gradient-brand mx-auto lg:mx-0 rounded-full" />
          </div>

          {/* AI Search Bar */}
          <div className="w-full max-w-md relative">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Try: 'I want hospital software' or 'AI'..."
                className="w-full bg-zinc-100/50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-accent-purple rounded-xl py-3.5 pl-11 pr-10 text-xs text-zinc-800 dark:text-zinc-200 outline-none transition-all placeholder:text-zinc-500 font-medium"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              
              {searchQuery && (
                <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-cyan animate-pulse" size={14} />
              )}
            </div>

            {/* AI Search Suggestions dropdown */}
            {aiSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-2xl z-30 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="text-[9px] font-black text-accent-cyan uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                  <Sparkles size={10} />
                  <span>ThinkX AI Search Suggestions</span>
                </div>
                <div className="flex flex-col gap-2">
                  {aiSuggestions.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.link}
                      onClick={() => {
                        setSearchQuery("");
                        setAiSuggestions([]);
                      }}
                      className="flex items-center justify-between p-2 rounded-lg bg-zinc-100/60 hover:bg-zinc-200 dark:bg-zinc-950/60 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
                    >
                      <span className="truncate max-w-[280px]">{s.title}</span>
                      <span className="text-[8px] font-black font-mono text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/40">
                        {s.matchType}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {["all", "AI", "Startup", "Marketing", "Development", "SEO"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-brand text-white"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => {
            // Define custom visual banner headers based on Category
            let visualHeader: React.ReactNode;
            let tagColorClass = "";
            let hoverBorderClass = "";

            if (post.category === "Development") {
              tagColorClass = "text-[#FAB818] bg-[#FAB818]/10 border-[#FAB818]/20";
              hoverBorderClass = "hover:border-[#FAB818]/45 hover:shadow-[0_8px_25px_rgba(250,184,24,0.05)]";
              visualHeader = (
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1d] to-[#0d1527] flex flex-col p-4 font-mono text-[9.5px] text-[#FAB818]/70 select-none">
                  <div className="flex items-center gap-1.5 border-b border-zinc-800/60 pb-2 mb-2 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-zinc-500 text-[8px] ml-1">next.config.js</span>
                  </div>
                  <div className="flex-grow flex flex-col justify-center gap-1.5 opacity-60 group-hover:opacity-100 transition-all duration-500">
                    <span>const nextConfig = &#123;</span>
                    <span className="pl-3 text-accent-cyan">compiler: &#123; removeConsole: true &#125;,</span>
                    <span className="pl-3 text-accent-purple">experimental: &#123; turbopack: true &#125;</span>
                    <span>&#125;;</span>
                  </div>
                </div>
              );
            } else if (post.category === "AI") {
              tagColorClass = "text-accent-purple bg-accent-purple/10 border-accent-purple/20";
              hoverBorderClass = "hover:border-accent-purple/45 hover:shadow-[0_8px_25px_rgba(168,85,247,0.06)]";
              visualHeader = (
                <div className="absolute inset-0 bg-gradient-to-br from-[#05070d] to-[#0e0719] flex items-center justify-center select-none overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-35 group-hover:opacity-75 transition-all duration-500 scale-102 group-hover:scale-106">
                    <circle cx="50" cy="50" r="3.5" fill="#7C3AED" className="animate-pulse" />
                    <circle cx="25" cy="40" r="2.5" fill="#FAB818" />
                    <circle cx="75" cy="40" r="2.5" fill="#FAB818" />
                    <circle cx="35" cy="70" r="2.5" fill="#06B6D4" />
                    <circle cx="65" cy="70" r="2.5" fill="#06B6D4" />
                    <line x1="50" y1="50" x2="25" y2="40" stroke="#7C3AED" strokeWidth="0.5" strokeDasharray="2" />
                    <line x1="50" y1="50" x2="75" y2="40" stroke="#7C3AED" strokeWidth="0.5" strokeDasharray="2" />
                    <line x1="50" y1="50" x2="35" y2="70" stroke="#06B6D4" strokeWidth="0.5" />
                    <line x1="50" y1="50" x2="65" y2="70" stroke="#06B6D4" strokeWidth="0.5" />
                    <line x1="25" y1="40" x2="35" y2="70" stroke="#FAB818" strokeWidth="0.4" />
                    <line x1="75" y1="40" x2="65" y2="70" stroke="#FAB818" strokeWidth="0.4" />
                  </svg>
                </div>
              );
            } else if (post.category === "Startup") {
              tagColorClass = "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20";
              hoverBorderClass = "hover:border-accent-cyan/45 hover:shadow-[0_8px_25px_rgba(6,182,212,0.06)]";
              visualHeader = (
                <div className="absolute inset-0 bg-gradient-to-br from-[#05070d] to-[#071317] flex items-center justify-center select-none overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-35 group-hover:opacity-75 transition-all duration-500 scale-102 group-hover:scale-106">
                    <path d="M10 80 Q 40 70, 60 40 T 90 10" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="10" y1="80" x2="90" y2="80" stroke="#374151" strokeWidth="0.5" />
                    <line x1="10" y1="20" x2="90" y2="20" stroke="#374151" strokeWidth="0.3" strokeDasharray="4" />
                    <circle cx="60" cy="40" r="3.5" fill="#FAB818" className="animate-ping" />
                    <circle cx="60" cy="40" r="3.5" fill="#FAB818" />
                  </svg>
                </div>
              );
            } else if (post.category === "SEO") {
              tagColorClass = "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
              hoverBorderClass = "hover:border-emerald-500/45 hover:shadow-[0_8px_25px_rgba(16,185,129,0.05)]";
              visualHeader = (
                <div className="absolute inset-0 bg-gradient-to-br from-[#05070d] to-[#0d161a] flex items-center justify-center select-none overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-40 group-hover:opacity-75 transition-all duration-500 scale-102 group-hover:scale-106">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#374151" strokeWidth="0.75" />
                    <circle cx="50" cy="50" r="22" fill="none" stroke="#06B6D4" strokeWidth="0.75" strokeDasharray="3" />
                    <circle cx="50" cy="50" r="10" fill="none" stroke="#FAB818" strokeWidth="1" />
                    <line x1="50" y1="5" x2="50" y2="95" stroke="#374151" strokeWidth="0.5" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#374151" strokeWidth="0.5" />
                  </svg>
                </div>
              );
            } else {
              tagColorClass = "text-rose-500 bg-rose-500/10 border-rose-500/20";
              hoverBorderClass = "hover:border-rose-500/45 hover:shadow-[0_8px_25px_rgba(244,63,94,0.05)]";
              visualHeader = (
                <div className="absolute inset-0 bg-[#05070d] flex flex-col p-4 justify-between font-mono text-[9px] text-zinc-500 select-none">
                  <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1.5 flex-shrink-0">
                    <span>Lead Trigger pipeline</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex items-center justify-around flex-grow opacity-60 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-zinc-900 border border-zinc-800 p-1.5 rounded text-accent-cyan">Form Hook</div>
                    <span className="text-[#FAB818]">&rarr;</span>
                    <div className="bg-zinc-900 border border-zinc-800 p-1.5 rounded text-accent-purple">AI Bot</div>
                    <span className="text-[#FAB818]">&rarr;</span>
                    <div className="bg-zinc-900 border border-zinc-800 p-1.5 rounded text-emerald-500">WhatsApp</div>
                  </div>
                </div>
              );
            }

            return (
              <article
                key={idx}
                className={`relative bg-gradient-to-br from-zinc-50/50 to-zinc-100/50 dark:from-zinc-950/40 dark:to-zinc-900/30 backdrop-blur-md border border-zinc-200/55 dark:border-zinc-800/50 rounded-3xl p-5 flex flex-col justify-between min-h-[410px] shadow-sm transition-all duration-500 hover:-translate-y-1.5 overflow-hidden group ${hoverBorderClass}`}
              >
                <div>
                  {/* Category Code-Art visual header */}
                  <div className="w-full h-36 rounded-2xl overflow-hidden mb-5 relative border border-zinc-200/10 shadow-inner">
                    {visualHeader}
                  </div>

                  {/* Meta details */}
                  <div className="flex items-center justify-between text-[10px] text-zinc-500 font-bold mb-3.5 px-1 relative z-10">
                    <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-black uppercase font-mono ${tagColorClass}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <Calendar size={11} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h3 className="text-base xl:text-lg font-black text-zinc-900 dark:text-white mb-2.5 px-1 leading-snug group-hover:text-[#FAB818] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 px-1">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author footer and Read Link */}
                <div className="border-t border-zinc-200/50 dark:border-zinc-900/60 pt-4 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 text-xs font-black">
                    <div className="w-6 h-6 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[9px] font-black text-zinc-800 dark:text-zinc-200 border border-zinc-250 dark:border-transparent select-none">
                      SS
                    </div>
                    <span>{post.author}</span>
                  </div>

                  {/* Read Article Slide Tag */}
                  <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-zinc-400 group-hover:text-[#FAB818] transition-colors cursor-pointer">
                    <span>Read Article</span>
                    <ArrowRight size={10} className="transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
