"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { SKILL_CATEGORIES } from "@/data/skills";
import { TechBadge } from "../ui/TechBadge";
import { ShieldAlert, Server, Cpu, Globe } from "lucide-react";

export function SkillsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldAlert: <ShieldAlert className="w-5 h-5" />,
    Server: <Server className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
  };

  return (
    <section id="skills" aria-label="Technical Capabilities" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SectionHeader
        tag="Technical Capabilities Matrix"
        title="Engineered for High-Assurance Environments"
        subtitle="Structured domain capabilities backed by real implementation and laboratory evidence • no percentage vanity charts."
        theme="emerald"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 backdrop-blur-md transition-all duration-200 space-y-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {iconMap[cat.iconName]}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-sans">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{cat.description}</p>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-slate-200">{skill.name}</span>
                      <TechBadge
                        variant={skill.level === "Advanced" ? "emerald" : "slate"}
                        size="sm"
                      >
                        {skill.level}
                      </TechBadge>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
