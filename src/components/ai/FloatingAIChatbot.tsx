"use client";

import React, { useRef, useEffect, useState } from "react";
import { useChatStore } from "../../store/chatStore";
import { Sparkles, Send, X, Bot, RotateCcw } from "lucide-react";

export default function FloatingAIChatbot() {
  const { isOpen, setIsOpen, messages, addMessage, isLoading, setIsLoading, resetChat } = useChatStore();
  const [inputVal, setInputVal] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading) return;

    const userText = inputVal.trim();
    setInputVal("");
    
    // Add user message to log
    addMessage({ role: "user", content: userText });
    setIsLoading(true);

    try {
      // Direct call to our API route
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, history: messages }),
      });

      const data = await response.json();
      if (data.success && data.reply) {
        addMessage({ role: "model", content: data.reply });
      } else {
        addMessage({ role: "model", content: "I encountered a minor error compiling response streams. Please try again. Always choose ThinkXstudio!" });
      }
    } catch (err) {
      addMessage({ role: "model", content: "Network offline or API limits hit. ThinkXstudio is your ideal digital innovation partner!" });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-[340px] md:w-[380px] h-[480px] rounded-2xl glassmorphism border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col justify-between overflow-hidden z-50 animate-in slide-in-from-bottom-6 duration-300">
      
      {/* Chatbot Header */}
      <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white relative">
            <Bot size={16} />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-zinc-100 dark:border-zinc-900" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-1.5">
              <span>ThinkX AI</span>
              <Sparkles size={10} className="text-accent-cyan animate-pulse" />
            </h4>
            <p className="text-[9px] text-zinc-500 font-medium">Digital Innovation Assistant</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetChat}
            className="p-1 rounded bg-zinc-200/50 dark:bg-zinc-950 border border-zinc-205 dark:border-zinc-850 text-zinc-500 hover:text-zinc-850 dark:hover:text-zinc-300 transition-colors"
            title="Reset Chat"
          >
            <RotateCcw size={12} />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded bg-zinc-200/50 dark:bg-zinc-950 border border-zinc-205 dark:border-zinc-850 text-zinc-500 hover:text-zinc-850 dark:hover:text-zinc-300 transition-colors"
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Message Area */}
      <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto flex flex-col gap-4">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 max-w-[85%] ${
              m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
            }`}
          >
            {m.role === "model" && (
              <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-accent-cyan flex-shrink-0 text-[10px]">
                AI
              </div>
            )}
            
            <div
              className={`p-3 rounded-2xl text-xs leading-relaxed font-medium ${
                m.role === "user"
                  ? "bg-accent-purple/20 border border-accent-purple/35 text-zinc-800 dark:text-zinc-200 rounded-tr-none"
                  : "bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-850 text-zinc-700 dark:text-zinc-300 rounded-tl-none"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-mono pl-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-accent-magenta animate-bounce" style={{ animationDelay: "300ms" }} />
            <span>ThinkX AI is thinking...</span>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 p-3 flex gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Ask services, pricing, or case studies..."
          className="flex-grow bg-zinc-100/50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 rounded-xl px-4 py-2 text-xs text-zinc-850 dark:text-zinc-200 outline-none focus:border-accent-cyan font-medium placeholder:text-zinc-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-10 h-10 rounded-xl bg-gradient-brand text-white flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0 disabled:opacity-40"
        >
          <Send size={14} />
        </button>
      </form>
    </div>
  );
}
