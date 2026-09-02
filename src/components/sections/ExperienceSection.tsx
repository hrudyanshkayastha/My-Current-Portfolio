"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { PROFILE } from "@/data/profile";
import { TechBadge } from "../ui/TechBadge";
import { Briefcase, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Experience & Career" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SectionHeader
        tag="Career & Education"
        title="Verified Professional Experience"
        subtitle="Real-world leadership, founding roles, technical engineering, and academic background."
        theme="emerald"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Experience Timeline (8 Cols) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-6">
            <Briefcase className="w-4 h-4" /> Professional Roles
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-10">
            {PROFILE.experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:scale-125 transition-transform" />

                <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 backdrop-blur-md transition-all duration-200 space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-emerald-400 font-mono mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                    <TechBadge variant={exp.type === "Founding" ? "emerald" : exp.type === "Leadership" ? "indigo" : "slate"}>
                      {exp.period}
                    </TechBadge>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((t, i) => (
                      <TechBadge key={i} variant="slate" size="sm">
                        {t}
                      </TechBadge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Proof Card (4 Cols) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-6">
            <GraduationCap className="w-4 h-4" /> Academic Foundation
          </div>

          {PROFILE.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-md space-y-4"
            >
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                {edu.period}
              </div>
              <h4 className="text-lg font-bold text-slate-100 font-sans">
                {edu.institution}
              </h4>
              <p className="text-sm font-semibold text-emerald-400 font-mono">
                {edu.degree} • {edu.field}
              </p>

              {edu.highlights && (
                <div className="space-y-2 pt-3 border-t border-slate-800/60">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-slate-400 leading-relaxed"> • {h}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Direct Verified Links */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-md space-y-4">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              Verified Profiles & Source
            </span>
            <div className="space-y-2.5">
              <a
                href={PROFILE.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 text-xs font-mono transition-colors group"
              >
                <span>GitHub / hrudyanshkayastha</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={PROFILE.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 text-xs font-mono transition-colors group"
              >
                <span>LinkedIn / hrudyansh-kayastha</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
