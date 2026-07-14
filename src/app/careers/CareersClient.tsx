"use client";

import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import { Briefcase, MapPin, DollarSign, Send, FileText, CheckCircle, Sparkles } from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "", portfolio: "" });
  const [appTrackerId, setAppTrackerId] = useState<string | null>(null);
  const [appStatus, setAppStatus] = useState<"applied" | "review" | "interview" | "offered">("applied");

  const jobs: Job[] = [
    {
      id: "ai-eng",
      title: "Senior AI Agent Developer",
      department: "AI Innovation Labs",
      location: "Remote (India)",
      salary: "₹18,00,000 - ₹28,00,000 / year",
      description: "We are seeking a developer expert in configuring autonomous agentic workflows using Gemini API, LangChain, and vector RAG indices.",
      requirements: [
        "Proven experience deploying agentic loops (LangGraph, Vercel AI SDK)",
        "Deep understanding of LLM parameters, context windows, and function calling",
        "Expertise in vector DB indexes and hybrid metadata querying",
      ],
    },
    {
      id: "ui-arch",
      title: "Lead Frontend UI Architect",
      department: "Creative Core",
      location: "Hybrid (Ahmedabad)",
      salary: "₹15,00,000 - ₹22,00,000 / year",
      description: "Scale our public interfaces and Macbook simulators. Responsible for GSAP timelines, Lenis parameters, and React 19 render loops.",
      requirements: [
        "Mastery of Tailwind v4, CSS-3D, and custom WebGL shaders",
        "Expertise in Next.js 15 routing, ISR caching, and React Suspense layouts",
        "A portfolio showcasing Apple-level visual interactions",
      ],
    },
    {
      id: "db-eng",
      title: "Full Stack Supabase Engineer",
      department: "Digital Architecture",
      location: "Remote (India)",
      salary: "₹14,00,000 - ₹20,00,000 / year",
      description: "Scale ThinkX OS databases. Optimize Row-Level Security, database channels, PostgreSQL cron sync triggers, and transaction rollbacks.",
      requirements: [
        "Expertise writing SQL procedures, triggers, and Row Level Security rules",
        "Deep understanding of Next.js 15 Server Components and Supabase client-server syncing",
        "Strong knowledge of security threat sanitizations (XSS, CSRF, Rate limits)",
      ],
    },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Simulate generating an application ID
    const randomId = "TX-APP-" + Math.floor(1000 + Math.random() * 9000);
    setAppTrackerId(randomId);
    setAppStatus("applied");

    // Simulate status transition over intervals
    setTimeout(() => setAppStatus("review"), 4000);
    setTimeout(() => setAppStatus("interview"), 9000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 w-full flex-grow">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-semibold text-accent-cyan tracking-wider uppercase mb-6 animate-pulse">
            <Sparkles size={12} />
            <span>Join ThinkXstudio Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            We're Hiring Digital Pioneers
          </h1>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto">
            Design. Develop. Automate. Scale. Join a company positioned at the frontier of AI integrations and WebGL designs.
          </p>
        </div>

        {/* Application Status Tracker (visible after applying) */}
        {appTrackerId && (
          <div className="mb-16 p-8 glassmorphism rounded-2xl border border-accent-purple/40 max-w-3xl mx-auto animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
              <div>
                <h4 className="text-sm font-bold text-white">Application ID: {appTrackerId}</h4>
                <p className="text-[10px] text-zinc-500 font-mono">Real-time Recruiter Sync Status</p>
              </div>
              <span className="text-[10px] font-black font-mono text-accent-cyan uppercase px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                ACTIVE PIPELINE
              </span>
            </div>

            {/* Timeline steps */}
            <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold uppercase tracking-wider">
              <div className={appStatus === "applied" || appStatus === "review" || appStatus === "interview" ? "text-accent-cyan" : "text-zinc-700"}>
                <CheckCircle size={16} className="mx-auto mb-2" />
                Applied
              </div>
              <div className={appStatus === "review" || appStatus === "interview" ? "text-accent-purple" : "text-zinc-700"}>
                <CheckCircle size={16} className="mx-auto mb-2" />
                Resume Screen
              </div>
              <div className={appStatus === "interview" ? "text-accent-magenta" : "text-zinc-700"}>
                <CheckCircle size={16} className="mx-auto mb-2" />
                Interviews
              </div>
              <div className="text-zinc-700">
                <CheckCircle size={16} className="mx-auto mb-2" />
                Offer Rollout
              </div>
            </div>
            
            <p className="text-center text-xs text-zinc-400 mt-6 font-medium italic">
              {appStatus === "applied" && "Recruiting agents have logged your application logs..."}
              {appStatus === "review" && "Screening team is auditing your portfolio links..."}
              {appStatus === "interview" && "Interviews loaded. Check your inbox for Google Meet link."}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Vacancies List */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent-cyan rounded-full" />
              Open Positions ({jobs.length})
            </h3>

            {jobs.map((job) => (
              <div
                key={job.id}
                onClick={() => {
                  setSelectedJob(job);
                  setAppTrackerId(null);
                }}
                className={`glassmorphism rounded-2xl p-6 border transition-all cursor-pointer ${
                  selectedJob?.id === job.id ? "border-accent-cyan/60" : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">{job.title}</h4>
                  <span className="text-[10px] font-bold text-accent-cyan bg-accent-cyan/5 px-2 py-0.5 rounded border border-accent-cyan/10">
                    {job.department}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-zinc-500 mb-4 font-medium">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono">
                    <DollarSign size={12} />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">{job.description}</p>
                
                <span className="text-[10px] font-bold text-accent-purple hover:underline">
                  Click to View & Apply &rarr;
                </span>
              </div>
            ))}
          </div>

          {/* Application Form panel */}
          <div className="col-span-1 lg:col-span-5">
            <div className="glassmorphism rounded-2xl p-8 border border-zinc-800 sticky top-28">
              {selectedJob ? (
                <>
                  <h3 className="text-lg font-bold text-white mb-2">Apply for Position</h3>
                  <p className="text-xs text-zinc-400 mb-6 font-semibold">{selectedJob.title}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-[10px] font-black text-accent-cyan uppercase tracking-widest mb-2.5">
                      Role Requirements
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {selectedJob.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="text-[10.5px] text-zinc-500 leading-relaxed flex items-start gap-2 font-medium">
                          <Briefcase size={12} className="text-accent-purple mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <form onSubmit={handleApply} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-xs outline-none focus:border-accent-cyan text-zinc-200 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-xs outline-none focus:border-accent-cyan text-zinc-200 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                        Mock Resume Link or Upload File (Simulation)
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.resume}
                          onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                          placeholder="https://drive.google.com/..."
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 pl-10 text-xs outline-none focus:border-accent-cyan text-zinc-200 font-medium"
                        />
                        <FileText size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                        Portfolio or GitHub link
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://github.com/..."
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-xs outline-none focus:border-accent-cyan text-zinc-200 font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-brand text-xs font-bold tracking-widest uppercase text-white flex items-center justify-center gap-2 hover:opacity-95 shadow-md shadow-accent-purple/10"
                    >
                      <Send size={14} />
                      <span>Submit Application</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <Briefcase size={36} className="mx-auto text-zinc-700 mb-4 animate-bounce" />
                  <h4 className="text-sm font-bold text-zinc-400 mb-1">Select a vacancy</h4>
                  <p className="text-[10px] text-zinc-500 max-w-xs mx-auto leading-relaxed">
                    Select any active role on the left to see the requirements and access the application form.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
