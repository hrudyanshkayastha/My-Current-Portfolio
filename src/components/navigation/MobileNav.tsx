"use client";

import React, { useEffect } from "react";
import { X, Shield, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string; id: string }[];
  activeSection: string;
}

export function MobileNav({
  isOpen,
  onClose,
  links,
  activeSection,
}: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 lg:hidden flex justify-end bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xs h-full bg-slate-950 border-l border-slate-800 p-6 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="font-mono text-sm font-bold text-slate-100">
                NAVIGATION
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2 mt-6">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-lg font-mono text-sm tracking-wider transition-colors",
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10 font-bold border border-emerald-500/20"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
                  )}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer CTA */}
        <div className="pt-6 border-t border-slate-800">
          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-mono text-xs font-bold tracking-wider hover:bg-emerald-400 transition-colors"
          >
            REQUEST ASSESSMENT
          </a>
        </div>
      </div>
    </div>
  );
}
