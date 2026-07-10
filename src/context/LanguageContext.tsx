"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, translations } from "../constants/translations";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("thinkx-lang") as Language | null;
    if (savedLang && (savedLang === "en" || savedLang === "gu" || savedLang === "hi")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("thinkx-lang", lang);
  };

  const t = (path: string): any => {
    const keys = path.split(".");
    let result: any = translations[language];

    for (const key of keys) {
      if (result && typeof result === "object" && key in result) {
        result = result[key];
      } else {
        // Fallback to English if translation is missing
        let englishResult: any = translations["en"];
        for (const engKey of keys) {
          if (englishResult && typeof englishResult === "object" && engKey in englishResult) {
            englishResult = englishResult[engKey];
          } else {
            englishResult = path; // Return path as string literal if nothing found
            break;
          }
        }
        return englishResult;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslate() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslate must be used within a LanguageProvider");
  }
  return context;
}
