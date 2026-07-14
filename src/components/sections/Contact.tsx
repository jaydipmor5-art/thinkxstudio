"use client";

import React, { useState } from "react";
import { useTranslate } from "../../context/LanguageContext";
import { Mail, Phone, MapPin, CheckCircle, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const { t } = useTranslate();
  const [step, setStep] = useState<"details" | "success">("details");

  const titleRef = useScrollReveal<HTMLDivElement>({ type: "fadeUp" });
  const infoRef = useScrollReveal<HTMLDivElement>({ type: "fadeLeft", delay: 0.15 });
  const formRef = useScrollReveal<HTMLDivElement>({ type: "fadeRight", delay: 0.2 });
  
  // States
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    desc: "", 
    budget: "pro",
    projectType: "website" 
  });

  const budgets = [
    { id: "below50", label: "Below ₹50k" },
    { id: "starter", label: "₹50k - ₹2L" },
    { id: "pro", label: "₹2L - ₹10L" },
    { id: "ent", label: "₹10L+" },
  ];

  const projectTypes = [
    { id: "website", label: "Website" },
    { id: "app", label: "Mobile App" },
    { id: "ai", label: "AI Automation" },
    { id: "other", label: "Others" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.desc) return;

    // Get selected budget label
    const selectedBudget = budgets.find((b) => b.id === formData.budget)?.label || formData.budget;

    // Get selected project type label
    const selectedType = projectTypes.find((t) => t.id === formData.projectType)?.label || formData.projectType;

    // Format WhatsApp message text
    const waMessage = `Hello ThinkXstudio! I'd like to book a strategy session:\n\n` +
      `*Client Name:* ${formData.name}\n` +
      `*Email Address:* ${formData.email}\n` +
      `*Project Type:* ${selectedType}\n` +
      `*Project Scope:* ${formData.desc}\n` +
      `*Estimated Budget:* ${selectedBudget}`;

    // Encode message and create link pointing to Surat corporate WhatsApp line
    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/919023700622?text=${encodedMessage}`;

    // Open WhatsApp Web/App in a new window
    window.open(waUrl, "_blank");

    // Transition to success screen
    setStep("success");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      <div className="glow-orb w-[600px] h-[600px] bg-accent-magenta/5 bottom-[-15%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Card Column */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between min-h-[450px]">
            <div ref={titleRef}>
              <span className="text-xs font-bold text-accent-cyan tracking-widest uppercase mb-2 block">
                Let's Build The Future
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
                Partner With ThinkXstudio
              </h2>
              <div className="h-1.5 w-24 bg-gradient-brand rounded-full mb-8" />
              <p className="text-zinc-650 dark:text-zinc-500 text-sm leading-relaxed mb-8">
                Initialize custom database channels, AI assistant modules, and custom client dashboards with our team of elite developers.
              </p>
            </div>

            {/* Quick Contact links */}
            <div ref={infoRef} className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/5 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email Inquiry</h4>
                  <a href="mailto:thinkxstudio77@gmail.com" className="text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 hover:underline dark:hover:text-white">
                    thinkxstudio77@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/5 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Call Center</h4>
                  <a href="tel:+919023700622" className="text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 hover:underline dark:hover:text-white">
                    +91 90237 00622
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/5 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-accent-magenta/10 flex items-center justify-center text-accent-magenta">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Corporate Hub</h4>
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-300">
                    Surat, Gujarat, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Booking Form Column */}
          <div ref={formRef} className="col-span-1 lg:col-span-7">
            <div className="glassmorphism rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 min-h-[480px] flex flex-col justify-between">
              
              {/* Form Navigation Header */}
              <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-900 pb-4 mb-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-5 bg-gradient-brand rounded" />
                  Strategy Booking Portal
                </h3>
                <span className="font-mono text-[8px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                  [ WhatsApp Inquiry Channel ]
                </span>
              </div>

              {/* Step 1: Details form */}
              {step === "details" && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                        Client Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-zinc-100/50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 px-4 text-xs outline-none focus:border-accent-cyan text-zinc-800 dark:text-zinc-200 font-medium"
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
                        className="w-full bg-zinc-100/50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 px-4 text-xs outline-none focus:border-accent-cyan text-zinc-800 dark:text-zinc-200 font-medium"
                      />
                    </div>
                  </div>

                  {/* Project Type Selectors (New!) */}
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {projectTypes.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: t.id })}
                          className={`py-2.5 px-3 rounded-xl border text-[10px] font-bold text-center transition-all ${
                            formData.projectType === t.id
                              ? "bg-white dark:bg-zinc-805 border-accent-cyan text-zinc-900 dark:text-white shadow-sm"
                              : "bg-zinc-100/50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-850 text-zinc-650 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700"
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                      Target Project Scope
                    </label>
                    <textarea
                      required
                      value={formData.desc}
                      onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                      placeholder="Tell us about the features (e.g. Website, AI automation, custom ERP needed)..."
                      rows={3}
                      className="w-full bg-zinc-100/50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 px-4 text-xs outline-none focus:border-accent-cyan text-zinc-800 dark:text-zinc-200 font-medium resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {budgets.map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b.id })}
                          className={`py-3 px-4 rounded-xl border text-[10px] font-bold text-center transition-all ${
                            formData.budget === b.id
                              ? "bg-white dark:bg-zinc-805 border-accent-cyan text-zinc-900 dark:text-white shadow-sm"
                              : "bg-zinc-100/50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-850 text-zinc-650 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700"
                          }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-4 rounded-xl bg-gradient-brand text-xs font-black tracking-widest uppercase text-white flex items-center justify-center gap-2 hover:opacity-95"
                  >
                    <span>Submit via WhatsApp</span>
                    <Send size={12} />
                  </button>
                </form>
              )}

              {/* Step 2: Success confirmation */}
              {step === "success" && (
                <div className="flex flex-col gap-6 text-center py-6 animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 mb-2">
                    <CheckCircle size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 dark:text-white">Request Sent!</h4>
                    <p className="text-xs text-zinc-550 dark:text-zinc-500 mt-1 max-w-xs mx-auto">
                      Your details have been compiled and sent to our WhatsApp business line. We will get back to you shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setStep("details");
                      setFormData({ name: "", email: "", desc: "", budget: "pro", projectType: "website" });
                    }}
                    className="py-3 px-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-xs font-bold uppercase text-zinc-650 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white max-w-xs mx-auto w-full"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
