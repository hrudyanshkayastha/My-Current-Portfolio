"use client";

import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { PROFILE } from "@/data/profile";
import { Mail, Shield, CheckCircle2, Lock, ArrowUpRight, Send, AlertCircle, ShieldAlert, Clock, RefreshCw } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    appUrl: "",
    assessmentType: "Web Application Security Assessment",
    message: "",
    website_hp: "", // Honeypot field for bot trapping
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [submissionResult, setSubmissionResult] = useState<{ referenceId: string; message: string; sla: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/assessment-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit assessment inquiry.");
        return;
      }

      setSubmissionResult({
        referenceId: data.referenceId,
        message: data.message,
        sla: data.sla || "24 business hours",
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error connecting to assessment API. You can also reach out directly via email.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      appUrl: "",
      assessmentType: "Web Application Security Assessment",
      message: "",
      website_hp: "",
    });
    setStatus("idle");
    setSubmissionResult(null);
  };

  return (
    <section id="contact" aria-label="Contact and Assessment Inquiry" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SectionHeader
        tag="Direct Client Engagement"
        title="Secure Your Application Before Attackers Find the Gaps"
        subtitle="If you are preparing to launch, onboarding enterprise clients, or need an independent vulnerability assessment for your web application or API, get in touch to discuss scope and timelines."
        theme="emerald"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-md space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans">
                Direct Engineering Inquiries
              </h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Reach out to define testing scope, request a sample report format, or schedule an assessment kickoff.
              </p>
            </div>

            {/* Quick Service Summary */}
            <div className="font-mono text-xs text-slate-300 space-y-1.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-emerald-400 font-semibold block uppercase tracking-wider">Services Offered:</span>
              <div className="text-slate-400">• Web Application Security Assessment</div>
              <div className="text-slate-400">• API Security Assessment (REST & GraphQL)</div>
              <div className="text-slate-400">• Security Automation & Telemetry Engineering</div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <a
                href={"mailto:" + PROFILE.email}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-slate-500 block">Direct Work Email</span>
                  <span className="font-mono text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">
                    {PROFILE.email}
                  </span>
                </div>
              </a>

              <a
                href={PROFILE.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:scale-105 transition-transform">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-slate-500 block">LinkedIn Direct Message</span>
                    <span className="font-mono text-sm text-slate-200 group-hover:text-cyan-400 transition-colors">
                      in/hrudyansh-kayastha
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
              </a>
            </div>

            {/* Mandatory Compliance Statement Box */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400">
                <Shield className="w-4 h-4" /> AUTHORIZED TESTING COMPLIANCE
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Security testing is performed <span className="text-emerald-300 font-semibold">only with explicit written authorization</span> and strictly within an agreed scope of work.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          {status === "success" && submissionResult ? (
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-950/90 border border-emerald-500/40 backdrop-blur-md space-y-6 shadow-2xl animate-fadeIn">
              <div className="flex items-center gap-3 text-emerald-400">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-100 font-sans">Assessment Inquiry Received</h4>
                  <p className="text-xs font-mono text-emerald-300">Reference ID: {submissionResult.referenceId}</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Service:</span>
                  <span className="text-slate-200 font-bold">{formData.assessmentType}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Target Contact:</span>
                  <span className="text-slate-200">{formData.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" /> SLA Response Time:
                  </span>
                  <span className="text-emerald-400 font-bold">{submissionResult.sla}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Thank you. Your assessment parameters have been recorded in the security queue. We will review your scope and provide a preliminary testing timeline and rules of engagement draft.
              </p>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs font-semibold tracking-wider transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>SUBMIT ANOTHER INQUIRY</span>
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-slate-800 backdrop-blur-md space-y-5 shadow-2xl"
            >
              {/* Honeypot hidden input */}
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* No Secrets Warning Banner */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-200/90 leading-relaxed">
                  <span className="font-bold text-amber-400 font-mono uppercase">Intake Security Notice: </span>
                  Do <span className="font-semibold underline">not</span> submit live credentials, API keys, passwords, or private keys. All sensitive credentials are exchanged via secure encrypted channels post-authorization.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-300 mb-1.5">
                    YOUR NAME <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 mb-1.5">
                    WORK EMAIL <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-300 mb-1.5">
                    COMPANY / PRODUCT
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Cloud Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 mb-1.5">
                    APPLICATION OR API URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://app.example.com"
                    value={formData.appUrl}
                    onChange={(e) => setFormData({ ...formData, appUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-300 mb-1.5">
                  ASSESSMENT TYPE
                </label>
                <select
                  value={formData.assessmentType}
                  onChange={(e) => setFormData({ ...formData, assessmentType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="Web Application Security Assessment">Web Application Security Assessment</option>
                  <option value="API Security Assessment">API Security Assessment</option>
                  <option value="Security Automation & Telemetry">Security Automation & Telemetry</option>
                  <option value="Other / General Security Inquiry">Other / Custom Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-300 mb-1.5">
                  PROJECT SCOPE, TECH STACK & TIMELINE <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your tech stack, target timeline, key areas of concern, and scope boundaries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-start gap-2 p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage || "Please fill out all required fields."}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>RECORDING ASSESSMENT INQUIRY...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>REQUEST A SECURITY ASSESSMENT</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}