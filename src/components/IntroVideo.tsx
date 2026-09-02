"use client";

import { useEffect, useState, useRef } from "react";
import { SkipForward } from "lucide-react";

type IntroVideoProps = {
  onComplete?: () => void;
  forced?: boolean;
};

const INTRO_SEEN_KEY = "intro_seen";

export function IntroVideo({ onComplete, forced = false }: IntroVideoProps) {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);

    const isForced =
      forced ||
      (typeof window !== "undefined" &&
        new URLSearchParams(window.location.search).get("force-intro") === "true");

    const hasSeen =
      typeof window !== "undefined" &&
      sessionStorage.getItem(INTRO_SEEN_KEY) === "true";

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isForced && (hasSeen || prefersReducedMotion)) {
      setShowIntro(false);
      onComplete?.();
      return;
    }

    setShowIntro(true);
  }, [forced, onComplete]);

  const handleFinish = () => {
    setIsFadingOut(true);
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, "true");
    } catch {}

    setTimeout(() => {
      setShowIntro(false);
      onComplete?.();
    }, 700);
  };

  if (!mounted || !showIntro) {
    return null;
  }

  return (
    <div
      id="intro-root"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#060910] transition-opacity duration-700 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleFinish}
        onError={handleFinish}
        className="w-full h-full object-cover"
        preload="auto"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* Cyber Overlay Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />

      {/* Skip Button */}
      <button
        id="skip-intro-btn"
        onClick={handleFinish}
        className="fixed bottom-8 right-8 z-[101] flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 hover:bg-emerald-500/20 text-slate-200 hover:text-emerald-400 border border-slate-700/80 hover:border-emerald-500/50 backdrop-blur-md transition-all font-mono text-xs uppercase tracking-wider group focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-lg shadow-black/50"
      >
        <span>Skip Intro</span>
        <SkipForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Direct click to skip overlay */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={handleFinish}
        title="Click anywhere to skip intro"
      />
    </div>
  );
}