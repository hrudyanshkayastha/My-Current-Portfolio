"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { SERVICES_DATA } from "@/data/services";
import { TechBadge } from "../ui/TechBadge";
import { ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, FileText, Clock, Users, Terminal, Award } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" aria-label="Security Services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SectionHeader
        tag="Commercial Security Services"
        title="Authorized Security Assessments & Engineering"
        subtitle="Independent, deep-dive vulnerability assessments and custom security automation with verifiable evidence, reproducible methods, and actionable developer deliverables."
        theme="cyan"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, idx) => (
          <div
            key={service.id}
            className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:-translate-y-1"
          >
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <TechBadge variant={idx === 0 ? "emerald" : idx === 1 ? "cyan" : "indigo"}>
                    {service.badge}
                  </TechBadge>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{service.timeframe}</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>

              {/* Target Customer */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                  <Users className="w-3.5 h-3.5" /> Ideal For:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.targetAudience}
                </p>
              </div>

              {/* Compact Evidence -> Method -> Deliverable -> Outcome Model */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-3 shadow-inner">
                <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5 pb-1 border-b border-slate-800">
                  <Award className="w-3.5 h-3.5" /> Technical Engagement Model
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase block">Evidence:</span>
                    <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">{service.evidenceModel.evidence}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase block">Method:</span>
                    <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">{service.evidenceModel.method}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-indigo-400 font-bold uppercase block">Deliverable:</span>
                    <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">{service.evidenceModel.deliverable}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-emerald-300 font-bold uppercase block">Outcome:</span>
                    <p className="text-slate-200 text-[11px] font-medium mt-0.5 leading-relaxed">{service.evidenceModel.outcome}</p>
                  </div>
                </div>
              </div>

              {/* What I Assess */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block font-semibold">
                  Assessment Scope:
                </span>
                <ul className="space-y-1.5">
                  {service.assessmentScope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 font-mono mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="space-y-2 pt-2 border-t border-slate-800/60">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                  <FileText className="w-3.5 h-3.5" /> Client Deliverables:
                </span>
                <ul className="space-y-1.5">
                  {service.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-slate-800/80">
              <a
                href="mailto:hrudyansh71@gmail.com?subject=Security%20Assessment%20Enquiry"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold tracking-wider transition-all duration-200 shadow-md shadow-emerald-950/40 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <span>REQUEST A SECURITY ASSESSMENT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
