"use client";

import React, { useState } from "react";
import { useTranslate } from "../../context/LanguageContext";
import { Check, X, Shield, Star, Crown } from "lucide-react";

export default function Pricing() {
  const { t } = useTranslate();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      name: t("pricing.starter"),
      price: billingCycle === "yearly" ? 499 : 599,
      icon: <Shield className="text-accent-cyan" size={24} />,
      desc: "Perfect for high-conversion landing pages, portfolios, and brand identity projects.",
      features: [
        "Tailwind v4 / Next.js 15 UI",
        "SEO Optimization & Metadata",
        "Google Analytics Integration",
        "Standard Forms & Captcha",
        "3 Weeks Delivery Timeline",
      ],
      notIncluded: [
        "Supabase Database / PostgreSQL",
        "ThinkX OS Portal Client Login",
        "Live Project Workspace",
        "Gemini AI Assistant Integration",
        "Custom ERP / Lead CRM Features",
      ],
      cta: t("pricing.getStarted"),
      highlight: false,
      color: "border-zinc-800",
    },
    {
      name: t("pricing.professional"),
      price: billingCycle === "yearly" ? 1499 : 1799,
      icon: <Star className="text-accent-purple" size={24} />,
      desc: "For scaling startups needing custom databases, AI features, and payment flows.",
      features: [
        "All Starter Features Included",
        "Supabase Auth & Database Caching",
        "ThinkX OS Client Portal Login",
        "Live Project Workspace Tracking",
        "Gemini AI RAG Chatbot Integration",
        "Razorpay payment sandbox setup",
        "6 Weeks Delivery Timeline",
      ],
      notIncluded: [
        "Custom ERP / HRM System",
        "Super Admin RBAC Control Settings",
        "Dedicated Server/DevOps manager",
      ],
      cta: t("pricing.getStarted"),
      highlight: true,
      color: "border-accent-purple/60 shadow-lg shadow-accent-purple/5",
    },
    {
      name: t("pricing.enterprise"),
      price: "Custom",
      icon: <Crown className="text-accent-magenta" size={24} />,
      desc: "Complete custom operating systems, enterprise automation, and custom AI agents.",
      features: [
        "All Professional Features Included",
        "Custom Enterprise ERP / HRM / POS",
        "Multiple AI Agents (Voice, Mail, CRM)",
        "RBAC Super Admin Control Panel",
        "Google & Microsoft APIs sync",
        "Dedicated Project Delivery Lead",
        "Priority 24/7 SLA Support",
      ],
      notIncluded: [],
      cta: "Contact Enterprise Team",
      highlight: false,
      color: "border-zinc-800",
    },
  ];

  const compareFeatures = [
    { name: "Next.js 15 / React 19 Frontend", starter: true, pro: true, ent: true },
    { name: "Dynamic Metadata & Schema.org SEO", starter: true, pro: true, ent: true },
    { name: "Email Notifications (Resend API)", starter: "Standard", pro: "Transactional", ent: "Custom Templates" },
    { name: "Supabase PostgreSQL Database", starter: false, pro: "Standard Tier", ent: "Enterprise Dedicated" },
    { name: "ThinkX OS Client Dashboard", starter: false, pro: true, ent: true },
    { name: "Live Project Workspace Logs", starter: false, pro: true, ent: true },
    { name: "AI Proposal & Quotation tool", starter: false, pro: true, ent: true },
    { name: "Autonomous AI Agents sync", starter: false, pro: false, ent: true },
    { name: "RBAC (Super Admin/Employee roles)", starter: false, pro: false, ent: true },
    { name: "Custom Billing & ERP hooks", starter: false, pro: false, ent: true },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
            {t("pricing.title")}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-brand mx-auto rounded-full mb-8" />

          {/* Billing Cycle Toggle */}
          <div className="inline-flex bg-zinc-900/10 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase transition-colors ${
                billingCycle === "monthly" 
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 shadow-sm" 
                  : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase transition-colors flex items-center gap-1.5 ${
                billingCycle === "yearly" 
                  ? "bg-gradient-brand text-white" 
                  : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              <span>Yearly</span>
              <span className="text-[9px] bg-white text-black font-black px-1.5 py-0.5 rounded-full uppercase scale-90">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glassmorphism rounded-2xl p-8 border flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] ${plan.color}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-brand text-[10px] font-black uppercase tracking-widest text-white">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{plan.name}</h3>
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    {plan.icon}
                  </div>
                </div>

                <p className="text-xs text-zinc-650 dark:text-zinc-500 mb-6 leading-relaxed min-h-[40px]">{plan.desc}</p>

                {/* Price Display */}
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                    {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
                  </span>
                  {typeof plan.price === "number" && (
                    <span className="text-xs text-zinc-500 font-semibold font-mono">/ month</span>
                  )}
                </div>

                <div className="h-px bg-zinc-205 dark:bg-zinc-900 w-full mb-8" />

                {/* Features list */}
                <div className="flex flex-col gap-4">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 text-xs text-zinc-700 dark:text-zinc-300">
                      <Check size={14} className="text-emerald-500 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 text-xs text-zinc-400 dark:text-zinc-605">
                      <X size={14} className="text-zinc-400 dark:text-zinc-700 mt-0.5" />
                      <span className="line-through">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className={`mt-10 w-full py-4 rounded-xl text-xs font-black uppercase text-center tracking-widest transition-all ${
                  plan.highlight
                    ? "bg-gradient-brand text-white shadow-lg shadow-accent-purple/20 hover:opacity-95"
                    : "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-400 hover:text-zinc-950 hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16 glassmorphism rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 overflow-x-auto">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 text-center md:text-left flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent-cyan rounded-full" />
            Detailed Feature Comparison Matrix
          </h3>

          <table className="w-full min-w-[600px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 uppercase tracking-widest text-[10px] font-bold">
                <th className="py-4 font-bold">Features</th>
                <th className="py-4 px-4 font-bold text-center">Starter</th>
                <th className="py-4 px-4 font-bold text-center">Professional</th>
                <th className="py-4 px-4 font-bold text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {compareFeatures.map((row) => (
                <tr key={row.name} className="border-b border-zinc-200 dark:border-zinc-900/60 hover:bg-zinc-200/20 dark:hover:bg-zinc-900/10 transition-colors">
                  <td className="py-4 font-semibold text-zinc-700 dark:text-zinc-300">{row.name}</td>
                  
                  {/* Starter col */}
                  <td className="py-4 px-4 text-center">
                    {typeof row.starter === "boolean" ? (
                      row.starter ? (
                        <Check size={16} className="text-emerald-500 mx-auto" />
                      ) : (
                        <X size={16} className="text-zinc-400 dark:text-zinc-700 mx-auto" />
                      )
                    ) : (
                      <span className="text-zinc-650 dark:text-zinc-400 font-mono font-semibold">{row.starter}</span>
                    )}
                  </td>

                  {/* Pro col */}
                  <td className="py-4 px-4 text-center">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? (
                        <Check size={16} className="text-emerald-500 mx-auto" />
                      ) : (
                        <X size={16} className="text-zinc-400 dark:text-zinc-700 mx-auto" />
                      )
                    ) : (
                      <span className="text-accent-cyan font-mono font-semibold">{row.pro}</span>
                    )}
                  </td>

                  {/* Enterprise col */}
                  <td className="py-4 px-4 text-center">
                    {typeof row.ent === "boolean" ? (
                      row.ent ? (
                        <Check size={16} className="text-emerald-500 mx-auto" />
                      ) : (
                        <X size={16} className="text-zinc-400 dark:text-zinc-700 mx-auto" />
                      )
                    ) : (
                      <span className="text-accent-purple font-mono font-semibold">{row.ent}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
