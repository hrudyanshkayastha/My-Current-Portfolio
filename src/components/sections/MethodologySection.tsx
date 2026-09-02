"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { ShieldCheck, Search, Network, Terminal, CheckCircle2, AlertTriangle, FileText, RefreshCw, ArrowRight } from "lucide-react";

export function MethodologySection() {
  const steps = [
    {
      number: "01",
      title: "Scope & Authorization",
      subtitle: "Rules of engagement & legal boundary definition",
      description: "Signed authorization, testing window alignment, staging/production safety boundaries, and point-of-contact escalation channels.",
      icon: ShieldCheck,
      color: "emerald",
    },
    {
      number: "02",
      title: "Reconnaissance",
      subtitle: "Passive & active target fingerprinting",
      description: "Technology stack identification, exposed server headers, third-party integrations, and DNS/subdomain surface mapping.",
      icon: Search,
      color: "cyan",
    },
    {
      number: "03",
      title: "Attack Surface Mapping",
      subtitle: "Stateful endpoint & role transition cataloging",
      description: "Complete inventory of authenticated and unauthenticated endpoints, parameter trees, and multi-tenant permission boundaries.",
      icon: Network,
      color: "indigo",
    },
    {
      number: "04",
      title: "Manual + Automated Testing",
      subtitle: "Deep heuristic exploration & vulnerability discovery",
      description: "Manual business logic probing, BOLA/BFLA validation, injection testing, token tampering, and automated baseline fuzzing.",
      icon: Terminal,
      color: "emerald",
    },
    {
      number: "05",
      title: "Exploit Validation",
      subtitle: "Safe Proof-of-Concept verification",
      description: "Deterministic non-destructive exploit reproduction ensuring zero false positives and confirmed real-world impact.",
      icon: AlertTriangle,
      color: "amber",
    },
    {
      number: "06",
      title: "Risk Assessment",
      subtitle: "CVSS v3.1 & business impact scoring",
      description: "Context-aware threat modeling, data sensitivity analysis, and realistic likelihood vs severity calibration.",
      icon: CheckCircle2,
      color: "rose",
    },
    {
      number: "07",
      title: "Technical Reporting",
      subtitle: "Developer patches & executive briefings",
      description: "Clear vulnerability briefs with step-by-step cURL PoCs, framework-level code remediation diffs, and executive risk summaries.",
      icon: FileText,
      color: "indigo",
    },
    {
      number: "08",
      title: "Remediation Verification",
      subtitle: "Complimentary validation re-testing",
      description: "Direct re-testing of patched endpoints to ensure flaws are fully closed without introducing new regressions.",
      icon: RefreshCw,
      color: "emerald",
    },
  ];

  return (
    <section id="methodology" aria-label="Assessment Methodology" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SectionHeader
        tag="Rigorous Engineering Process"
        title="8-Stage Security Assessment Methodology"
        subtitle="A structured, systematic assessment lifecycle designed to identify critical architectural weaknesses without disrupting production uptime."
        theme="indigo"
      />

      {/* Grid of 8 steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                    PHASE {step.number}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors font-sans">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {step.subtitle}
                </p>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px] text-slate-500">
                <span>STAGE {step.number} OF 08</span>
                {idx < steps.length - 1 ? (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
