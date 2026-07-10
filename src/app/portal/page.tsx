"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePortalStore, Role } from "../../store/portalStore";
import { Shield, Mail, Key, Sparkles, LogIn, Globe } from "lucide-react";
import Navbar from "../../components/common/Navbar";

export default function PortalLoginPage() {
  const { user, setUser } = usePortalStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpMode, setOtpMode] = useState(false);
  const [otp, setOtp] = useState("");

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Default to client if manual email login is used
    setUser({
      name: email.split("@")[0] || "John Doe",
      email: email,
      role: "client",
    });
  };

  const handleDemoLogin = (role: Role) => {
    if (role === "client") {
      setUser({ name: "John Doe (Client)", email: "client@carepath.com", role: "client" });
    } else if (role === "employee") {
      setUser({ name: "Aarav Patel (Developer)", email: "aarav@thinkx.com", role: "employee" });
    } else {
      setUser({ name: "Snehal Shah (Admin)", email: "snehal@thinkx.com", role: "admin" });
    }
  };

  // If user is logged in, we render the ThinkX OS Dashboard right on the page (or redirect).
  // Rendering the dashboard directly or managing tabs here is extremely clean and avoids Next.js router mismatch latency.
  // Let's implement the dashboard render logic directly or import it, which keeps compilation lightning-fast and bug-free!
  if (user) {
    return <DashboardContainer />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between">
      <Navbar />

      <div className="flex-grow flex items-center justify-center pt-32 pb-16 px-4">
        <div className="glow-orb w-[400px] h-[400px] bg-accent-purple/10 top-[20%] left-[20%]" />
        
        {/* Auth Box */}
        <div className="w-full max-w-md glassmorphism glassmorphism-glow rounded-2xl p-8 border border-zinc-800 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <img
              src="/logo.png"
              alt="ThinkXstudio Logo"
              className="h-10 w-auto object-contain mx-auto mb-4 invert hue-rotate-180"
            />
            <h2 className="text-2xl font-black text-white">Access ThinkX OS</h2>
            <p className="text-xs text-zinc-500 mt-1.5">
              Enter your credentials or launch sandbox demo instances.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleManualLogin} className="flex flex-col gap-4 mb-6">
            <div>
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-xs outline-none focus:border-accent-cyan text-zinc-200 font-medium"
                />
                <Mail size={14} className="absolute left-4.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              </div>
            </div>

            {!otpMode ? (
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-xs outline-none focus:border-accent-cyan text-zinc-200 font-medium"
                  />
                  <Key size={14} className="absolute left-4.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                  Enter OTP Code (Verification)
                </label>
                <input
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="123456"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-xs outline-none focus:border-accent-purple text-zinc-200 font-medium text-center tracking-[0.2em] font-mono"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-brand text-xs font-bold tracking-widest uppercase text-white flex items-center justify-center gap-2 hover:opacity-95"
            >
              <LogIn size={14} />
              <span>{otpMode ? "Verify Code" : "Log In"}</span>
            </button>
          </form>

          {/* Social Logins */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => handleDemoLogin("client")}
              className="flex-1 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub Auth
            </button>
            <button
              onClick={() => handleDemoLogin("client")}
              className="flex-1 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <Globe size={12} />
              Google Auth
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-900" /></div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest"><span className="bg-zinc-950 px-3 text-zinc-650">Demo Sandboxes</span></div>
          </div>

          {/* Demo Sandbox Toggles */}
          <div className="flex flex-col gap-2.5">
            <button
              onClick={() => handleDemoLogin("client")}
              className="w-full py-3 rounded-xl border border-emerald-500/20 hover:border-emerald-500 bg-emerald-500/5 text-xs font-bold text-emerald-400 flex items-center justify-center gap-2 transition-all"
            >
              <Sparkles size={12} />
              <span>Demo Login as Client</span>
            </button>
            <button
              onClick={() => handleDemoLogin("employee")}
              className="w-full py-3 rounded-xl border border-accent-purple/20 hover:border-accent-purple bg-accent-purple/5 text-xs font-bold text-accent-purple flex items-center justify-center gap-2 transition-all"
            >
              <Sparkles size={12} />
              <span>Demo Login as Employee</span>
            </button>
            <button
              onClick={() => handleDemoLogin("admin")}
              className="w-full py-3 rounded-xl border border-accent-magenta/20 hover:border-accent-magenta bg-accent-magenta/5 text-xs font-bold text-accent-magenta flex items-center justify-center gap-2 transition-all"
            >
              <Sparkles size={12} />
              <span>Demo Login as Admin</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

// Importing Dashboard UI directly to prevent routing latency
import DashboardContainer from "../../components/dashboard/DashboardContainer";
