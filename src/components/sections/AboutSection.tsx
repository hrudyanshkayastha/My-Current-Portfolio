"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { PROFILE } from "@/data/profile";
import { Shield, Brain, Network, Terminal, CheckCircle2, Cpu, ArrowUpRight } from "lucide-react";
import { TechBadge } from "../ui/TechBadge";

export function AboutSection() {
  return (
    <section id="about" aria-label="About" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SectionHeader
        tag="Engineering Profile"
        title="Engineering Systems that Observe, Reason & Protect"
        subtitle="Bridging the gap between distributed systems telemetry, artificial intelligence, offensive security testing, and autonomous defensive response."
        theme="emerald"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans">
              The Architecture Behind the Engineer
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {PROFILE.fullBio}
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              My engineering philosophy revolves around deterministic verification, least-privilege architectures, and reducing signal-to-noise ratio in high-stakes environments. Whether auditing a multi-tier SaaS web application or architecting autonomous incident response loops, I focus on precision, security invariants, and real-world resilience.
            </p>
          </div>

          {/* Core Focus Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-200 text-sm">Offensive Security & Pentesting</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Authorized vulnerability assessments across Web & API layers. OWASP Top 10, access control flaws (BOLA/IDOR), injection, and business-logic verification.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-200 text-sm">Autonomous Cyber Defense</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Architecting ALCDP-X to automate the loop between telemetry ingestion, session correlation, MITRE ATT&CK mapping, and automated containment.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                  <Brain className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-200 text-sm">AI Research & Intelligence</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineering Agletras to harvest multi-source OSINT, extract semantic knowledge graphs, and discover strategic market patterns autonomously.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Terminal className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-200 text-sm">Linux & Security Automation</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Kernel-level telemetry, SSH hardening, system service isolation, and asynchronous Python automation pipelines for security operations.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Roles & Credentials HUD */}
        <div className="lg:col-span-5 space-y-6">
          {/* Current Roles */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Active Leadership & Founding
            </h4>

            {PROFILE.roles.map((r, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-200 text-sm sm:text-base">{r.title}</span>
                  <TechBadge variant={idx === 0 ? "emerald" : "indigo"}>{r.organization}</TechBadge>
                </div>
                <p className="text-xs text-slate-400">{r.focus}</p>
                <div className="font-mono text-[11px] text-slate-500">
                  <span>Flagship: </span>
                  <span className="text-slate-300 font-semibold">{r.flagship}</span> • <span>{r.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Education & Academic Rigor */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <Network className="w-4 h-4" /> Academic Specialization
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-sm font-bold text-slate-200">
                {PROFILE.education[0].institution}
              </div>
              <div className="text-xs text-emerald-400 font-mono">
                {PROFILE.education[0].degree} in {PROFILE.education[0].field}
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                {PROFILE.education[0].period}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
