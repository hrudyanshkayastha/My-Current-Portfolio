"use client";

import React, { useEffect, useState } from "react";
import { X, ShieldAlert, CheckCircle2, Terminal, Code2, Layers, ExternalLink, ArrowRight, ShieldCheck, Activity, Cpu, Zap, AlertTriangle } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { TechBadge } from "./TechBadge";
import { cn } from "@/lib/utils";

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

interface CaseStudyModalState {
  activeTab: "overview" | "attackFlow" | "telemetry" | "decision" | "response";
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "attackFlow" | "telemetry" | "decision" | "response">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setActiveTab("overview");
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // All projects in this portfolio are controlled lab assessments or
  // verified engineering implementations. No detailed case study data
  // is included for standard presentation.
  const hasDetailedStudy = false;

  const severityBadgeVariant = (sev: string) => {
    switch (sev) {
      case "CRITICAL":
        return "rose" as const;
      case "HIGH":
        return "amber" as const;
      case "MEDIUM":
        return "cyan" as const;
      default:
        return "slate" as const;
    }
  };

  

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-slate-800 bg-slate-900/60">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <TechBadge variant={project.isControlledLab ? "cyan" : "emerald"}>
                {project.isControlledLab ? "CONTROLLED LAB ASSESSMENT" : project.projectType}
              </TechBadge>
              <TechBadge variant={project.status === "ACTIVE" ? "emerald" : "slate"}>
                {project.status}
              </TechBadge>
              {hasDetailedStudy && (
                <TechBadge variant="emerald">DEEP-DIVE EVIDENCE CASE STUDY</TechBadge>
              )}
            </div>
            <h3 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-slate-100 font-sans">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mt-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 divide-y divide-slate-800/60">
          {/* Controlled Lab Notice */}
          {project.isControlledLab && (
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300">
                <span className="text-cyan-400 font-semibold font-mono uppercase">Controlled Laboratory Audit: </span>
                This assessment was conducted in an isolated, authorized laboratory staging environment for security research and vulnerability demonstration. It is not presented as a commercial client engagement.
              </div>
            </div>
          )}

          {/* Tab 1 / Standard: Overview */}
          {(activeTab === "overview") && (
            <div className="space-y-6">
              {/* Problem Statement */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Problem Statement & Objective
                </h4>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{project.problem}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{project.overview}</p>
              </div>

              {/* Scope */}
              <div className="space-y-3 pt-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Assessment Scope & Testing Vectors
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                      <span className="text-cyan-400 font-mono font-bold mt-0.5">0{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pipeline Workflow */}
              <div className="space-y-3 pt-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> Execution Pipeline & Methodology
                </h4>
                <div className="flex items-center gap-2 flex-wrap py-2">
                  {project.methodologyPipeline.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="font-mono text-xs px-3 py-1.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 font-bold">
                        {step}
                      </span>
                      {idx < project.methodologyPipeline.length - 1 && (
                        <span className="text-slate-600 font-mono">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <ul className="space-y-2 pt-2">
                  {project.methodology.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <ArrowRight className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 2: Attack Flow (Detailed Study Only) */}
          {hasDetailedStudy && activeTab === "attackFlow" && project.detailedCaseStudy && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-rose-400">
                  <ShieldAlert className="w-4 h-4" /> ADVERSARY INTRUSION SCENARIO
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.detailedCaseStudy.attackOverview}
                </p>
              </div>

              {/* Kill Chain Steps */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">
                  Adversary Progression Flow
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {[
                    { step: "01", name: "Initial Access", desc: "Password spraying against port 22" },
                    { step: "02", name: "Credential Abuse", desc: "Valid auth on 'deploy' account" },
                    { step: "03", name: "Privilege Escalation", desc: "CVE-2021-3156 sudo buffer overflow" },
                    { step: "04", name: "Persistence Setup", desc: "Hourly cron backdoor injected" },
                    { step: "05", name: "Egress C2 Beacon", desc: "Outbound socket to port 4444" },
                  ].map((s, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="font-mono text-xs font-bold text-rose-400">{s.step}. {s.name}</span>
                      <p className="text-[11px] text-slate-400 leading-tight">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Telemetry & Detection Rules (Detailed Study Only) */}
          {hasDetailedStudy && activeTab === "telemetry" && project.detailedCaseStudy && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Raw Ingested Linux Telemetry Stream
                </h4>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5 overflow-x-auto">
                  {project.detailedCaseStudy.telemetryLogs.map((log, idx) => (
                    <div key={idx} className="text-slate-400 hover:text-cyan-300 font-mono text-[11px] leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> Sigma Behavioral Detection Rule
                </h4>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre">
                  {project.detailedCaseStudy.detectionRule}
                </pre>
              </div>
            </div>
          )}

          {/* Tab 4: Session Correlation & Risk Engine (Detailed Study Only) */}
          {hasDetailedStudy && activeTab === "decision" && project.detailedCaseStudy && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Stateful Lineage & Session Correlation Logic
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  {project.detailedCaseStudy.correlationLogic}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-rose-400 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Risk Calculation & Containment Threshold
                </h4>
                <div className="p-4 rounded-xl bg-slate-950 border border-rose-500/30 font-mono text-xs text-slate-200 leading-relaxed">
                  {project.detailedCaseStudy.decisionEngine}
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: SOAR Action & Verification (Detailed Study Only) */}
          {hasDetailedStudy && activeTab === "response" && project.detailedCaseStudy && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Automated Containment Action (Executed in 68ms)
                </h4>
                <pre className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 font-mono text-xs text-emerald-300 overflow-x-auto whitespace-pre">
                  {project.detailedCaseStudy.automatedResponse}
                </pre>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Invariant Verification DSL Test
                </h4>
                <pre className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 font-mono text-xs text-cyan-300 overflow-x-auto whitespace-pre">
                  {project.detailedCaseStudy.verificationDSL}
                </pre>
              </div>
            </div>
          )}

          {/* Standard Findings Section */}
          {project.findings.length > 0 && activeTab === "overview" && (
            <div className="pt-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-rose-400 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Findings Breakdown & Code Remediation
              </h4>
              <div className="space-y-4">
                {project.findings.map((f, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span className="font-semibold text-sm sm:text-base text-slate-200">{f.title}</span>
                      <TechBadge variant={severityBadgeVariant(f.severity)}>
                        {f.severity} SEVERITY
                      </TechBadge>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{f.description}</p>
                    
                    {f.sanitizedSnippet && (
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                        <pre className="text-emerald-400 whitespace-pre font-mono text-[11px]">{f.sanitizedSnippet}</pre>
                      </div>
                    )}

                    <div className="p-3 rounded bg-slate-950/80 border border-slate-800/60 font-mono text-xs text-emerald-300">
                      <span className="text-slate-500 font-bold">REMEDIATION: </span>
                      {f.remediation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security Impact & Evidence */}
          <div className="pt-6 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Measurable Security Impact & Evidence
            </h4>
            <p className="text-sm text-slate-300 bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl">
              {project.securityImpact}
            </p>
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Verified Evidence:</span>
              {project.evidence.map((ev, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="text-emerald-400 font-mono">•</span>
                  <span>{ev}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="pt-6 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
              Technologies & Standards
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <TechBadge key={idx} variant="slate">
                  {t}
                </TechBadge>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs text-slate-500 font-mono">
            {project.isControlledLab
              ? "[!] Authorized Controlled Security Assessment Environment"
              : "[+] Verified Engineering Implementation"}
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
            >
              View on GitHub <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
