"use client";

import React, { useState } from "react";
import { useTranslate } from "../../context/LanguageContext";
import { Language } from "../../constants/translations";
import { Globe } from "lucide-react";

export default function LanguageSelector() {
  const { language, setLanguage } = useTranslate();
  const [isOpen, setIsOpen] = useState(false);

  const languagesList: { code: Language; name: string; label: string }[] = [
    { code: "en", name: "English", label: "EN" },
    { code: "gu", name: "ગુજરાતી", label: "ગુ" },
    { code: "hi", name: "हिन्दी", label: "हि" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-xs font-medium"
      >
        <Globe size={14} className="text-accent-cyan" />
        <span>{languagesList.find((l) => l.code === language)?.label || "EN"}</span>
      </button>

      {isOpen && (
        <>
          {/* Transparent click overlay to close dropdown */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-32 rounded-lg bg-zinc-900 border border-zinc-800 shadow-2xl py-1 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
            {languagesList.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                  language === lang.code
                    ? "text-accent-cyan bg-accent-cyan/5"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
