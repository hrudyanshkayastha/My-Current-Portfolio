"use client";

import React from "react";
import { PROFILE } from "@/data/profile";
import { Shield, ExternalLink, ArrowUp, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Statement */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-200 font-mono text-sm font-bold">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>HRUDYANSH KAYASTHA</span>
          </div>
          <p className="text-xs text-slate-500 font-mono max-w-md">
            AI & Cybersecurity Engineer • Founder @ Kerynth • Co-Founder @ Agletras
          </p>
          <p className="text-[11px] text-slate-600 font-mono">
            Security audits conducted strictly under explicit authorization and agreed scope.
          </p>
        </div>

        {/* Social Links & Direct Email & Back to top */}
        <div className="flex items-center gap-6 flex-wrap justify-center font-mono text-xs">
          <a
            href={PROFILE.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={PROFILE.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={`mailto:${PROFILE.email}`}
            className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>{PROFILE.email}</span>
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}