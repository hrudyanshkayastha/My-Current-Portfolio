"use client";

import { useState, useEffect } from "react";
import { CyberWorldCanvas } from "@/components/3d/CyberWorldCanvas";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { KerynthSection } from "@/components/sections/KerynthSection";
import { AgletrasSection } from "@/components/sections/AgletrasSection";
import { TrustPrinciplesSection } from "@/components/sections/TrustPrinciplesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { IntroVideo } from "@/components/IntroVideo";

export default function HomePage() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // If sessionStorage already marked intro as seen, reveal immediately
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("intro_seen") === "true"
    ) {
      setIntroFinished(true);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#060910] overflow-x-hidden">
      {/* Intro video animation overlay */}
      <IntroVideo onComplete={() => setIntroFinished(true)} />

      {/* Main portfolio content – smoothly fades in */}
      <main
        className={`relative min-h-screen bg-[#060910] text-slate-100 overflow-x-hidden transition-opacity duration-1000 ${
          introFinished ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* 3D WebGL Background Scene */}
        <CyberWorldCanvas />

        {/* Floating HUD Navigation */}
        <Navbar />

        {/* Structured Content Sections */}
        <div className="relative z-10 flex flex-col space-y-12">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <MethodologySection />
          <ProjectsSection />
          <KerynthSection />
          <AgletrasSection />
          <TrustPrinciplesSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}