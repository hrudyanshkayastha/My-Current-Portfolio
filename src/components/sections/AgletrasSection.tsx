"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { AGLETRAS_DATA } from "@/data/agletras";
import { TechBadge } from "../ui/TechBadge";
import { TrendingUp, Globe, Users, Sparkles, Database, Layers, ArrowRight } from "lucide-react";

export function AgletrasSection() {
  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
  };

  return (
    <section id="agletras" aria-label="Agletras" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SectionHeader
        tag="Research Intelligence Platform"
        title="Agletras • AI-Powered Intelligence & OSINT"
        subtitle="Co-Founding & Architecting an autonomous research platform that converts massive unstructured open-source web signals into actionable strategic intelligence."
        theme="indigo"
      />

      <div className="rounded-2xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-md overflow-hidden shadow-2xl mb-12">
        {/* Banner Bar */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-indigo-950/40 via-slate-900/80 to-purple-950/30 border-b border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-slate-100 font-mono tracking-tight">
                {AGLETRAS_DATA.name}
              </span>
              <TechBadge variant="indigo">CO-FOUNDER & TECH LEAD</TechBadge>
            </div>
            <p className="text-xs sm:text-sm text-indigo-400/90 font-mono mt-1">
              {AGLETRAS_DATA.subtitle} • {AGLETRAS_DATA.period}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-400">DOMAIN:</span>
            <span className="font-mono text-xs px-3 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 font-bold">
              RESEARCH INTELLIGENCE
            </span>
          </div>
        </div>

        {/* Narrative & Overview */}
        <div className="p-6 sm:p-8 space-y-8">
          <p className="max-w-4xl text-sm sm:text-base text-slate-300 leading-relaxed">
            {AGLETRAS_DATA.overview}
          </p>

          {/* 4 Core Intelligence Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AGLETRAS_DATA.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all duration-200 space-y-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 group-hover:scale-105 transition-transform">
                    {iconMap[pillar.iconName]}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {pillar.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  {pillar.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="text-indigo-400 font-mono">&gt;</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pipeline Workflow */}
          <div className="pt-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Autonomous Intelligence Pipeline
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AGLETRAS_DATA.architecture.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                  <span className="font-mono text-xs font-bold text-indigo-400">{step.step}</span>
                  <div className="text-sm font-semibold text-slate-200">{step.title}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Tech Stack Bar */}
        <div className="p-6 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-xs text-slate-400 mr-2">TECH:</span>
            {AGLETRAS_DATA.technologies.map((tech, idx) => (
              <TechBadge key={idx} variant="slate">
                {tech}
              </TechBadge>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-indigo-400 hover:text-indigo-300"
          >
            <span>DISCUSS RESEARCH SYSTEMS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
