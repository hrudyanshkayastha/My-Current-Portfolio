"use client";

import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { ALCDPX_DATA } from "@/data/alcdpx";
import { TechBadge } from "../ui/TechBadge";
import { Shield, Cpu, Activity, Zap, CheckCircle2, Clock, GitBranch, ArrowRight, BarChart3, Database } from "lucide-react";
import { cn } from "@/lib/utils";

export function KerynthSection() {
  const [activeTab, setActiveTab] = useState<"loop" | "implemented" | "inDevelopment" | "research">("loop");

  return (
    <section id="kerynth" aria-label="Kerynth & ALCDP-X" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <SectionHeader
        tag="Cybersecurity Company & Flagship Platform"
        title="Kerynth • Autonomous Cyber Defense"
        subtitle="Engineering ALCDP-X: An autonomous Linux defense platform that bridges real-time telemetry ingestion, session correlation, automated threat triage, and deterministic containment."
        theme="emerald"
      />

      {/* Hard Reproducible Benchmark Metrics Grid */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider uppercase">
            Reproducible Engineering Benchmarks & Validation
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {ALCDPX_DATA.reproducibleMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-emerald-500/40 backdrop-blur-md transition-colors space-y-2 group"
            >
              <div className="font-mono text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {metric.value}
              </div>
              <div className="font-mono text-xs font-bold text-slate-200">
                {metric.label}
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Kerynth Card */}
      <div className="rounded-2xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-md overflow-hidden shadow-2xl mb-12">
        {/* Banner Bar */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-cyan-950/30 border-b border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-slate-100 font-mono tracking-tight">
                {ALCDPX_DATA.name}
              </span>
              <TechBadge variant="emerald">FLAGSHIP PLATFORM</TechBadge>
            </div>
            <p className="text-xs sm:text-sm text-emerald-400/90 font-mono mt-1">
              {ALCDPX_DATA.subtitle} • {ALCDPX_DATA.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-400">STATUS:</span>
            <span className="font-mono text-xs px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
              ACTIVE ENGINEERING
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800/80 bg-slate-900/50 overflow-x-auto">
          <button
            onClick={() => setActiveTab("loop")}
            className={cn(
              "px-6 py-3.5 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-colors whitespace-nowrap border-b-2",
              activeTab === "loop"
                ? "text-emerald-400 border-emerald-400 bg-emerald-950/30"
                : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/40"
            )}
          >
            01. AUTONOMOUS DEFENSE LOOP
          </button>
          <button
            onClick={() => setActiveTab("implemented")}
            className={cn(
              "px-6 py-3.5 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-colors whitespace-nowrap border-b-2",
              activeTab === "implemented"
                ? "text-emerald-400 border-emerald-400 bg-emerald-950/30"
                : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/40"
            )}
          >
            02. IMPLEMENTED ({ALCDPX_DATA.statusBreakdown.implemented.length})
          </button>
          <button
            onClick={() => setActiveTab("inDevelopment")}
            className={cn(
              "px-6 py-3.5 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-colors whitespace-nowrap border-b-2",
              activeTab === "inDevelopment"
                ? "text-cyan-400 border-cyan-400 bg-cyan-950/30"
                : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/40"
            )}
          >
            03. IN DEVELOPMENT ({ALCDPX_DATA.statusBreakdown.inDevelopment.length})
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={cn(
              "px-6 py-3.5 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-colors whitespace-nowrap border-b-2",
              activeTab === "research"
                ? "text-indigo-400 border-indigo-400 bg-indigo-950/30"
                : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/40"
            )}
          >
            04. RESEARCH & FUTURE ({ALCDPX_DATA.statusBreakdown.research.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8">
          {activeTab === "loop" && (
            <div className="space-y-6">
              <div className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
                {ALCDPX_DATA.overview}
              </div>

              {/* 5 Stage Visual Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4">
                {ALCDPX_DATA.loop.map((item, idx) => (
                  <div
                    key={item.stage}
                    className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between space-y-4 hover:border-emerald-500/50 transition-all duration-200 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                          STAGE 0{idx + 1}
                        </span>
                        <span className="font-mono text-[10px] text-slate-500 font-bold">
                          {item.stage}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/60 font-mono text-[11px] text-emerald-400/90">
                      {item.metrics}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "implemented" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" /> Fully Implemented & Tested in Active Codebase
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ALCDPX_DATA.statusBreakdown.implemented.map((comp, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm sm:text-base font-bold text-slate-200">{comp.name}</h4>
                      <TechBadge variant="emerald">IMPLEMENTED</TechBadge>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{comp.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {comp.tech.map((t, i) => (
                        <TechBadge key={i} variant="slate" size="sm">
                          {t}
                        </TechBadge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "inDevelopment" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" /> Actively in Development & Pipeline Integration
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ALCDPX_DATA.statusBreakdown.inDevelopment.map((comp, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm sm:text-base font-bold text-slate-200">{comp.name}</h4>
                      <TechBadge variant="cyan">IN DEVELOPMENT</TechBadge>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{comp.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {comp.tech.map((t, i) => (
                        <TechBadge key={i} variant="slate" size="sm">
                          {t}
                        </TechBadge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "research" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2">
                <GitBranch className="w-4 h-4" /> Research Phase & Formal Invariant Modeling
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ALCDPX_DATA.statusBreakdown.research.map((comp, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm sm:text-base font-bold text-slate-200">{comp.name}</h4>
                      <TechBadge variant="indigo">RESEARCH</TechBadge>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{comp.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {comp.tech.map((t, i) => (
                        <TechBadge key={i} variant="slate" size="sm">
                          {t}
                        </TechBadge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Tech Stack Bar */}
        <div className="p-6 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-xs text-slate-400 mr-2">STACK:</span>
            {ALCDPX_DATA.technologies.map((tech, idx) => (
              <TechBadge key={idx} variant="slate">
                {tech}
              </TechBadge>
            ))}
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 hover:text-emerald-300"
          >
            <span>VIEW CASE STUDY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
