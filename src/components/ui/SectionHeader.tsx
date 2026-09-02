import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "emerald" | "cyan" | "indigo";
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "left",
  theme = "emerald",
  className,
}: SectionHeaderProps) {
  const tagThemes = {
    emerald: "text-emerald-400 border-emerald-500/30 bg-emerald-950/40",
    cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-950/40",
    indigo: "text-indigo-400 border-indigo-500/30 bg-indigo-950/40",
  };

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded border font-mono text-xs font-semibold uppercase tracking-widest mb-4",
          tagThemes[theme]
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
        {tag}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100 font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
