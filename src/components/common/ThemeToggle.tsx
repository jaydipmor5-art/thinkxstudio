"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Laptop } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-zinc-900/60 dark:bg-zinc-950/60 border border-zinc-800 p-1 rounded-full backdrop-blur-md">
      <button
        onClick={() => setTheme("light")}
        className={`p-1.5 rounded-full transition-all duration-300 ${
          theme === "light"
            ? "bg-accent-cyan text-white shadow-lg shadow-accent-cyan/20"
            : "text-zinc-400 hover:text-zinc-200"
        }`}
        title="Light Mode"
        aria-label="Light Mode"
      >
        <Sun size={14} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-1.5 rounded-full transition-all duration-300 ${
          theme === "dark"
            ? "bg-accent-purple text-white shadow-lg shadow-accent-purple/20"
            : "text-zinc-400 hover:text-zinc-200"
        }`}
        title="Dark Mode"
        aria-label="Dark Mode"
      >
        <Moon size={14} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-1.5 rounded-full transition-all duration-300 ${
          theme === "system"
            ? "bg-zinc-800 text-zinc-100"
            : "text-zinc-400 hover:text-zinc-200"
        }`}
        title="System Default"
        aria-label="System Default"
      >
        <Laptop size={14} />
      </button>
    </div>
  );
}
