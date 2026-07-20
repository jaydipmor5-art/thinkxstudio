"use client";

import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/sections/Hero";
import StatsCounter from "../components/sections/StatsCounter";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Industries from "../components/sections/Industries";
import Portfolio from "../components/sections/Portfolio";
import Team from "../components/sections/Team";
import Testimonials from "../components/sections/Testimonials";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import FloatingCTA from "../components/common/FloatingCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        <Hero />
        <StatsCounter />
        <About />
        <Services />
        <Industries />
        <Portfolio />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating widgets for Chat and contact shortcuts */}
      <FloatingCTA />
    </div>
  );
}
