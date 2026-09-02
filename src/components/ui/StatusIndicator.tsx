import React from "react";
import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status?: "online" | "active" | "defense" | "intelligence";
  label?: string;
  className?: string;
}

export function StatusIndicator({
  status = "online",
  label = "SYSTEM OPERATIONAL",
  className,
}: StatusIndicatorProps) {
  const dotColors = {
    online: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]",
    active: "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]",
    defense: "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]",
    intelligence: "bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md font-mono text-[11px] text-slate-300",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            dotColors[status]
          )}
        />
        <span
          className={cn("relative inline-flex rounded-full h-2 w-2", dotColors[status])}
        />
      </span>
      <span className="tracking-wider uppercase font-semibold">{label}</span>
    </div>
  );
}
