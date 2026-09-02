import React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "cyan" | "indigo" | "amber" | "rose" | "slate";
  size?: "sm" | "md";
  className?: string;
}

export function TechBadge({
  children,
  variant = "slate",
  size = "sm",
  className,
}: TechBadgeProps) {
  const variantStyles = {
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    slate: "bg-slate-800/60 text-slate-300 border-slate-700/60",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wide",
    md: "text-xs px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono font-medium rounded border transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
