"use client";

import React from "react";
import {
  Stethoscope,
  GraduationCap,
  Utensils,
  Home,
  Factory,
  Plane,
  HeartPulse,
  Hammer,
  Hotel,
  Dumbbell,
  Scissors,
  Gem,
} from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Hospital", solution: "Patient Management & E-Health Records", icon: <Stethoscope size={20} /> },
    { name: "School", solution: "Student Information Systems & Virtual Classrooms", icon: <GraduationCap size={20} /> },
    { name: "Restaurant", solution: "QR Ordering, Booking & Kitchen POS Systems", icon: <Utensils size={20} /> },
    { name: "Real Estate", solution: "3D Virtual Property Showrooms & Lead CRM", icon: <Home size={20} /> },
    { name: "Manufacturing", solution: "ERP Inventory Sync & Predictive Analytics", icon: <Factory size={20} /> },
    { name: "Travel", solution: "AI Booking Assistants & Custom Itinerary Planners", icon: <Plane size={20} /> },
    { name: "Medical", solution: "Telemedicine Consultation & Pharmacy Sync", icon: <HeartPulse size={20} /> },
    { name: "Construction", solution: "Timeline Tracking & Site Resource Allocation", icon: <Hammer size={20} /> },
    { name: "Hotel", solution: "Guest Check-in portals & Booking engines", icon: <Hotel size={20} /> },
    { name: "Gym", solution: "Member Subscription, Workouts & RFID Access", icon: <Dumbbell size={20} /> },
    { name: "Salon", solution: "Calendly-style Booking & Service Payment Integrations", icon: <Scissors size={20} /> },
    { name: "Jewellery", solution: "Visual Virtual Try-On portals & Product Catalogs", icon: <Gem size={20} /> },
  ];

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-transparent scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-[#111322]">
            Industries We Innovate For
          </h2>
          <div className="h-1.5 w-24 bg-gradient-brand mx-auto rounded-full mb-6" />
          <p className="text-zinc-500 text-sm max-w-xl mx-auto font-medium">
            We deliver tailor-made software solutions representing the specific workflows of major industrial ecosystems.
          </p>
        </div>
      </div>

      {/* Scrolling Industry Rows */}
      <div className="w-full relative overflow-hidden py-4">
        {/* Marquee Row 1 */}
        <div className="animate-marquee gap-6 px-4 hover:[animation-play-state:paused] cursor-pointer flex">
          {[...industries, ...industries].map((ind, idx) => (
            <div
              key={`${ind.name}-${idx}`}
              className="flex items-center gap-4 w-[290px] p-4.5 bg-white/70 border border-zinc-200/50 rounded-2xl select-none hover:scale-[1.03] hover:border-[#FAB818]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAB818]/5 border border-[#FAB818]/15 flex items-center justify-center text-[#FAB818] flex-shrink-0">
                {ind.icon}
              </div>
              <div className="overflow-hidden text-left">
                <h4 className="text-sm font-bold text-[#111322] mb-0.5">{ind.name}</h4>
                <p className="text-[10px] text-zinc-500 truncate font-medium">{ind.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Industry Rows 2 */}
      <div className="w-full relative overflow-hidden py-4 mt-2">
        {/* Marquee Row 2 (reversing direction) */}
        <div className="animate-marquee gap-6 px-4 hover:[animation-play-state:paused] cursor-pointer flex" style={{ animationDirection: "reverse", animationDuration: "35s" }}>
          {[...industries.slice().reverse(), ...industries.slice().reverse()].map((ind, idx) => (
            <div
              key={`${ind.name}-${idx}`}
              className="flex items-center gap-4 w-[290px] p-4.5 bg-white/70 border border-zinc-200/50 rounded-2xl select-none hover:scale-[1.03] hover:border-[#7C3AED]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/5 border border-[#7C3AED]/15 flex items-center justify-center text-[#7C3AED] flex-shrink-0">
                {ind.icon}
              </div>
              <div className="overflow-hidden text-left">
                <h4 className="text-sm font-bold text-[#111322] mb-0.5">{ind.name}</h4>
                <p className="text-[10px] text-zinc-500 truncate font-medium">{ind.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
