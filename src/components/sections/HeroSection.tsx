"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Lock, Terminal, Cpu, Globe } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { TechBadge } from "../ui/TechBadge";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Availability Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/40 backdrop-blur-md mb-6 shadow-lg shadow-emerald-950/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-mono text-xs text-emerald-300 font-semibold tracking-wider">
            AVAILABLE FOR AUTHORIZED SECURITY ASSESSMENTS
          </span>
        </div>

        {/* Supporting Founder Credibility Tag */}
        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-slate-400">
          <span>Founder @ Kerynth</span>
          <span className="text-emerald-500">•</span>
          <span>Technical Lead @ Agletras</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-100 font-sans leading-[1.05]">
          <span className="block">{PROFILE.name.toUpperCase()}</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            AI & CYBERSECURITY ENGINEER
          </span>
        </h1>

        {/* Clear Client-Facing Value Proposition */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans font-normal">
          I help startups and engineering teams <span className="text-emerald-400 font-semibold">identify critical security weaknesses</span>, secure <span className="text-cyan-400 font-semibold">web & API attack surfaces</span>, and automate defensive workflows so your team can remediate vulnerabilities before deployment.
        </p>

        {/* Primary Commercial CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="mailto:hrudyansh71@gmail.com?subject=Security%20Assessment%20Enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-emerald-950/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <span>REQUEST A SECURITY ASSESSMENT</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-mono text-sm font-semibold tracking-wider transition-all duration-200 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <span>VIEW AUDIT LABS & EVIDENCE</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        {/* Value Pillars HUD */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
          <a
            href="#services"
            className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/50 backdrop-blur-md transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-widest uppercase">
                PRIMARY SERVICE
              </span>
              <Lock className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-sm font-bold text-slate-200 group-hover:text-emerald-300 transition-colors">
              Web & API Security
            </h3>
            <p className="text-xs text-slate-400 mt-1">OWASP penetration testing & vulnerability audits</p>
          </a>

          <a
            href="#kerynth"
            className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-cyan-400 font-bold tracking-widest uppercase">
                DEFENSE CORE
              </span>
              <ShieldCheck className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
              Autonomous Defense
            </h3>
            <p className="text-xs text-slate-400 mt-1">ALCDP-X SOC telemetry & response engine</p>
          </a>

          <a
            href="#skills"
            className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/50 backdrop-blur-md transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-widest uppercase">
                AUTOMATION
              </span>
              <Cpu className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-sm font-bold text-slate-200 group-hover:text-emerald-300 transition-colors">
              Security Automation
            </h3>
            <p className="text-xs text-slate-400 mt-1">Python telemetry pipelines & Linux hardening</p>
          </a>

          <a
            href="#agletras"
            className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-md transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-indigo-400 font-bold tracking-widest uppercase">
                INTELLIGENCE
              </span>
              <Globe className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">
              Research Intelligence
            </h3>
            <p className="text-xs text-slate-400 mt-1">Agletras OSINT & market discovery systems</p>
          </a>
        </div>
      </div>
    </section>
  );
}
