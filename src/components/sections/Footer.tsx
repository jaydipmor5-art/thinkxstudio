"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";
import { useTranslate } from "../../context/LanguageContext";
import { ArrowUpRight, Send } from "lucide-react";

export default function Footer() {
  const { t } = useTranslate();
  const globeContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = globeContainerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 150;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Shimmering Particle Core Sphere
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 130;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0; // Sphere radius
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xFAB818, // Brand Gold
      size: 0.08,
      transparent: true,
      opacity: 0.75,
    });
    const particleSphere = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSphere);

    // 2. Gyroscopic Orbital Ring 1 (Horizontal Golden Ring)
    const ringGeom1 = new THREE.RingGeometry(2.45, 2.48, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xFAB818, // Gold
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45
    });
    const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
    ring1.rotation.x = Math.PI / 2.8; // Tilt
    scene.add(ring1);

    // 3. Gyroscopic Orbital Ring 2 (Vertical Cyan Ring)
    const ringGeom2 = new THREE.RingGeometry(2.7, 2.73, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x06B6D4, // Cyan
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
    ring2.rotation.y = Math.PI / 4.2; // Different tilt
    scene.add(ring2);

    let animId: number;
    let isVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );
    observer.observe(container);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      // Rotate particle core
      particleSphere.rotation.y += 0.0035;
      particleSphere.rotation.x += 0.0018;

      // Interactive core breathing (pulse effect) using sine wave
      const time = Date.now() * 0.0012;
      const pulse = 1.0 + Math.sin(time * 2) * 0.07;
      particleSphere.scale.set(pulse, pulse, pulse);

      // Rotate orbital gyroscopic rings in opposite directions
      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.004;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 150;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      observer.unobserve(container);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      ringGeom1.dispose();
      ringMat1.dispose();
      ringGeom2.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <footer className="border-t border-zinc-800/60 bg-[#070912] relative overflow-hidden py-20">
      {/* Subtle tech grid background pattern matching the website's main style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />
      
      {/* Footer Custom Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes radar-pulse {
          0% { transform: translate(-50%, 40%) scale(0.7); opacity: 0; }
          50% { opacity: 0.12; }
          100% { transform: translate(-50%, 40%) scale(1.2); opacity: 0; }
        }
      `}} />

      {/* Concentric pulsing radar waves for high-end tech feel */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[300px] rounded-full border border-[#FAB818]/15 opacity-0 pointer-events-none -z-10 animate-[radar-pulse_8s_cubic-bezier(0.215,0.61,0.355,1)_infinite]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[300px] rounded-full border border-accent-cyan/10 opacity-0 pointer-events-none -z-10 animate-[radar-pulse_8s_cubic-bezier(0.215,0.61,0.355,1)_infinite_3.5s]" />

      {/* Branded Gold/Cyan Ambient Glow Spotlight (Rising from the bottom center) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[850px] h-[300px] rounded-full bg-[radial-gradient(ellipse_at_bottom,rgba(250,184,24,0.07)_0%,rgba(6,182,212,0.03)_50%,transparent_75%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Giant Typographic Brand Banner with Shimmering Liquid Gold Animation */}
        <div className="text-center w-full mb-16 select-none pointer-events-none">
          <h2 className="text-4xl sm:text-6xl md:text-7.5xl font-black tracking-tighter uppercase leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FAB818] via-zinc-350 to-white bg-[size:200%_auto] animate-[shimmer_6s_linear_infinite] opacity-90">
            Let's Shape The Future.
          </h2>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start mb-16 border-t border-zinc-800/40 pt-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* White Glass Capsule to keep Logo's original corporate colors visible on dark background */}
            <div className="bg-white/90 dark:bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-md border border-white/20 w-fit self-start hover:scale-[1.02] transition-all duration-300">
              <img
                src="/logo.png"
                alt="ThinkXstudio Logo"
                className="h-6.5 w-auto object-contain select-none"
              />
            </div>
            <p className="text-xs text-zinc-400/85 leading-relaxed max-w-sm font-semibold">
              Design • Develop • Automate • Scale. Your Complete Digital Growth Partner. Registered in Surat, Gujarat, India.
            </p>
            
            {/* Socials with custom brand-color hover transitions */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://github.com/thinkxstudio"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-full bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white hover:bg-zinc-800/50 transition-all duration-300"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a
                href="https://linkedin.com/company/thinkxstudio"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-full bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-all duration-300"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/thinkxstudio?igsh=MWYzdHlnM3ptNTNhYw=="
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-full bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-transparent hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-500 transition-all duration-300"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links (Colored with Brand Golden-Yellow) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-[#FAB818] uppercase tracking-widest mb-4">
              Quick Navigation
            </h4>
            <div className="flex flex-col gap-3 text-xs font-semibold text-zinc-400">
              <a href="#about" className="hover:text-white hover:translate-x-1 transition-all duration-300">About Us</a>
              <a href="#services" className="hover:text-white hover:translate-x-1 transition-all duration-300">Services</a>
              <a href="#portfolio" className="hover:text-white hover:translate-x-1 transition-all duration-300">Our Work</a>
              <a href="#team" className="hover:text-white hover:translate-x-1 transition-all duration-300">Our Team</a>
              <Link href="/careers" className="hover:text-white hover:translate-x-1 transition-all duration-300">Careers</Link>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-[#FAB818] uppercase tracking-widest mb-4">
              Digital Newsletter
            </h4>
            <p className="text-xs text-zinc-400/85 mb-4 leading-relaxed font-semibold">
              Get bi-weekly updates on Latest AI advancements and Business automation insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                required
                placeholder="Enter email address"
                className="w-full bg-[#111322] border border-zinc-800 rounded-xl py-3 pl-4 pr-12 text-xs text-zinc-300 outline-none focus:border-[#FAB818] focus:ring-1 focus:ring-[#FAB818]/25 placeholder:text-zinc-600 transition-all font-semibold"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-brand text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Send size={12} />
              </button>
            </form>
          </div>

          {/* Footer Globe Column with Gold aura */}
          <div className="lg:col-span-2 w-full h-[120px] flex items-center justify-center relative">
            <div className="absolute w-20 h-20 rounded-full bg-[#FAB818]/5 blur-xl pointer-events-none -z-10" />
            <div ref={globeContainerRef} className="w-full h-full min-h-[120px]" />
          </div>
        </div>

        {/* Bottom footer copyright */}
        <div className="border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-500 gap-4">
          <span>© 2026 ThinkXstudio. All rights reserved. Synced via ThinkX OS.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:underline hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
