"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, Calendar, ArrowUp, Plus, X, MessageCircle } from "lucide-react";
import { useChatStore } from "../../store/chatStore";

export default function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isOpen: isChatOpen, setIsOpen: setIsChatOpen } = useChatStore();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Expanded Quick actions */}
      {isExpanded && (
        <div className="flex flex-col gap-2 mb-2 animate-in slide-in-from-bottom duration-300">
          
          {/* Scroll to Top */}
          {showScrollTop && (
            <button
              onClick={handleScrollTop}
              className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-xl"
              title="Scroll To Top"
            >
              <ArrowUp size={16} />
            </button>
          )}

          {/* Book Meeting */}
          <a
            href="#contact"
            onClick={() => setIsExpanded(false)}
            className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-xl"
            title="Book Meeting"
          >
            <Calendar size={16} />
          </a>

          {/* Direct Call */}
          <a
            href="tel:+919023700622"
            className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-xl"
            title="Call Support"
          >
            <Phone size={16} />
          </a>

          {/* WhatsApp Quick chat */}
          <a
            href="https://wa.me/919023700622?text=Hi%20ThinkXstudio%20team,%20I'm%2520interested%20in%20a%20project%20consulting%20session!"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 border border-emerald-500 text-white flex items-center justify-center transition-all shadow-xl"
            title="WhatsApp Inquiry"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      )}

      {/* Primary Toggle Action */}
      <div className="flex gap-2">
        {/* WhatsApp direct chat link */}
        <a
          href="https://wa.me/919023700622?text=Hi%20ThinkXstudio%20team!%20I'm%20interested%20in%20a%20project%20consulting%20session."
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-brand text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95"
          title="Chat on WhatsApp"
        >
          <MessageSquare size={20} />
        </a>

        {/* Floating expand toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95 ${
            isExpanded ? "rotate-45 text-accent-magenta border-accent-magenta/30" : ""
          }`}
        >
          <Plus size={20} />
        </button>
      </div>

    </div>
  );
}
