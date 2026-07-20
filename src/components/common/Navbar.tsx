"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslate } from "../../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const { t } = useTranslate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "services", "portfolio", "team", "blog"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        {
          rootMargin: "-25% 0px -55% 0px", // triggers when section is in active view
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.portfolio"), href: "#portfolio" },
    { name: t("nav.team"), href: "#team" },
    { name: t("nav.blog"), href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-300">
      <nav
        className={`w-full flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "px-6 py-2.5 rounded-full bg-slate-50/80 dark:bg-[#0a0f1d]/85 backdrop-blur-md border border-slate-200/60 dark:border-[#1e293b]/70 shadow-xl dark:shadow-[0_8px_30px_rgba(6,182,212,0.06)]"
            : "px-4 py-3 bg-transparent border-transparent"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="ThinkXstudio Logo"
            className="h-7 md:h-8 w-auto object-contain group-hover:scale-[1.03] transition-transform duration-300 dark:invert dark:hue-rotate-180"
          />
        </Link>

        {/* Desktop Navigation Links with Active Highlights */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-black px-4 py-2 rounded-full border transition-all duration-500 ease-in-out ${
                  isActive
                    ? "text-[#FAB818] bg-zinc-100/90 dark:bg-zinc-900/60 border-zinc-200/40 dark:border-zinc-800/50 shadow-sm"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border-transparent hover:bg-zinc-100/40 dark:hover:bg-zinc-900/30"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelector />
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAB818] text-[#111322] text-xs font-black uppercase tracking-wider hover:bg-[#FFC94A] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-[#FAB818]/20"
          >
            Get a Quote
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSelector />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown Card with Active Highlights */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 max-w-sm ml-auto mr-0 bg-slate-50/95 dark:bg-[#0a0f1d]/95 backdrop-blur-xl border border-slate-200/50 dark:border-[#1e293b] px-6 py-6 rounded-2xl flex flex-col justify-between z-50 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-black uppercase tracking-wider border-b border-slate-200/55 dark:border-[#1e293b]/60 pb-2.5 transition-colors ${
                    isActive
                      ? "text-[#FAB818]"
                      : "text-zinc-650 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            {/* Mobile Get a Quote CTA */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FAB818] text-[#111322] text-xs font-black uppercase tracking-wider"
            >
              Get a Quote <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
