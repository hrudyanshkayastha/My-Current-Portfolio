"use client";

import React from "react";
import { Shield, Lock, FileCheck, EyeOff, CheckCircle2, AlertCircle } from "lucide-react";

export function TrustPrinciplesSection() {
  const principles = [
    {
      title: "Explicit Written Authorization",
      description: "Testing is initiated solely upon mutual execution of a formal Scope of Work (SOW) and written authorization sign-off.",
      icon: FileCheck,
    },
    {
      title: "Non-Destructive Testing Policy",
      description: "All exploit proofs-of-concept are executed using benign, non-destructive payloads designed to prevent system downtime or data corruption.",
      icon: Shield,
    },
    {
      title: "Confidentiality & Data Protection",
      description: "Findings, architecture details, and vulnerability data are protected under strict NDA and encrypted at rest with zero third-party disclosure.",
      icon: Lock,
    },
    {
      title: "No Credential or Secret Harvesting",
      description: "Assessment intake and testing procedures strictly forbid storing client credentials, API tokens, or production private keys.",
      icon: EyeOff,
    },
  ];

  return (
    <section id="trust" aria-label="Trust and Testing Principles" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="p-8 sm:p-10 rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md space-y-8 shadow-2xl">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              Engagement Integrity & Ethics
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 font-sans mt-1">
              Security Testing Principles & Rules of Engagement
            </h3>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 font-mono text-xs text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>ETHICAL SECURITY COMMITMENT</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="space-y-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-200">{p.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
