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

/** Flag for developers/testing – force-intro=true in query string */
const forcedIntro =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("force-intro") === "true";

export default function HomePage() {
  // If the user directly navigated to a sub-route, never show the intro.
  // We check this early so that /contact, /projects, etc. render immediately.
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  // If not on root path, render the main page immediately without intro.
  if (pathname !== "/") {
    return (
      <main className="relative min-h-screen bg-[#060910] text-slate-100 overflow-x-hidden">
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
    );
  }

  // Root-path visitors see the intro video before the portfolio.
  return (
    <div className="relative min-h-screen bg-[#060910] overflow-x-hidden">
      {/* Intro video – mounts first, then fades out to reveal the portfolio. */}
      <IntroVideo forced={forcedIntro} />

      {/* Main portfolio content – initially hidden, fades in after intro. */}
      <main
        className="relative min-h-screen bg-[#060910] text-slate-100 overflow-x-hidden opacity-0 transition-opacity duration-700"
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