"use client";

import React, { useState, useEffect } from "react";
import { Shield, Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { StatusIndicator } from "../ui/StatusIndicator";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "HOME", href: "#hero", id: "hero" },
  { name: "SERVICES", href: "#services", id: "services" },
  { name: "METHODOLOGY", href: "#methodology", id: "methodology" },
  { name: "PROJECTS", href: "#projects", id: "projects" },
  { name: "KERYNTH", href: "#kerynth", id: "kerynth" },
  { name: "AGLETRAS", href: "#agletras", id: "agletras" },
  { name: "EXPERIENCE", href: "#experience", id: "experience" },
  { name: "CONTACT", href: "#contact", id: "contact" },
];

export function Navbar() {
  const { activeSection } = useScrollProgress();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8",
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Telemetry */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
          >
            <div className="h-9 w-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-200">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors">
                HRUDYANSH.K
              </span>
              <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                AI & CYBERSECURITY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={cn(
                    "px-3 py-1 rounded-full font-mono text-xs tracking-wider transition-all duration-200",
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10 font-bold"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <StatusIndicator status="online" label="DEFENSE LIVE" />
            </div>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold transition-all duration-200 shadow-md shadow-emerald-950/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <span>ASSESSMENT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
        activeSection={activeSection}
      />
    </>
  );
}
