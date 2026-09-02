/* ---------------------------------------------------------------------------
 *  IntroVideo component
 *  Cinematic intro experience for the portfolio website.
 *  - Plays once per session from public/intro.mp4
 *  - Respects prefers-reduced-motion
 *  - SKIP INTRO button
 *  - Falls back gracefully if video fails
 *  - Transitions to main portfolio after completion
 * --------------------------------------------------------------------------- */

"use client";

import { useEffect, useState, useRef } from "react";

// --------------------------------------------------------
// useReducedMotion – simple hook using window.matchMedia.
// No external dependency needed.
// --------------------------------------------------------

function useReducedMotion(): { isReduceMotion: boolean } {
  const [isReduceMotion, setIsReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const matchMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduceMotion(matchMedia.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReduceMotion(e.matches);
    };
    matchMedia.addEventListener("change", handleChange);
    return () => matchMedia.removeEventListener("change", handleChange);
  }, []);

  return { isReduceMotion };
}

// --------------------------------------------------------
// IntroVideo component
// --------------------------------------------------------

/** Props. */
type IntroVideoProps = {
  /** If true, the intro is forced to show (used for testing/debugging). */
  forced?: boolean;
};

/**
 * IntroVideo – full-screen cinematic intro that plays once per session.
 *
 * Behaviour:
 *  - First visit to /  → shows intro.
 *  - Subsequent /  navigation during same session → skips intro.
 *  - Direct navigation to /contact, /projects, etc. → no intro.
 *  - prefers-reduced-motion → skips intro immediately.
 *  - Video failure → transitions to portfolio after short delay.
 *  - SKIP INTRO button → fades intro out and reveals portfolio.
 */
export function IntroVideo({ forced = false }: IntroVideoProps) {
  // If the user directly navigated to a sub-route, never show the intro.
  // We detect this by checking if pathname is not exactly "/".
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  // If the user is NOT on the root path, never show the intro.
  if (pathname !== "/") {
    return null;
  }

  // If not forced and already seen in this session, skip.
  if (!forced && hasSeenIntro()) {
    return null;
  }

  // Respect the user's reduced-motion preference.
  const { isReduceMotion } = useReducedMotion();
  if (isReduceMotion) {
    // Skip the cinematic animation and reveal the portfolio directly.
    markIntroSeen();
    return null;
  }

  // State
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  // When the video ends, transition to the portfolio.
  const handleVideoEnd = () => {
    setHasPlayed(true);
    markIntroSeen();
  };

  // If the video fails to load, transition after a short delay.
  const handleError = (e: React.SyntheticEvent) => {
    const target = e.currentTarget;
    const err =
      (target as any).error?.code?.toString() ||
      (target as any).error?.message ||
      "Video playback error";
    setError(err);
    // Fallback: transition after 1 second.
    const timer = setTimeout(() => {
      markIntroSeen();
    }, 1000);
    // Clear timer on unmount.
    return () => clearTimeout(timer);
  };

// --------------------------------------------------------
// Render
// --------------------------------------------------------

  // If there's an error or the video isn't ready yet, fade in the portfolio
  // after a brief delay so the user isn't left staring at a black screen.
  if (error || !isVideoReady) {
    // Brief delay before showing portfolio so the intro attempt is visible,
    // but don't block if the video can't play.
    setIsVideoReady(true); // allow fallback render
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]"
      >
        <p className="text-sm text-slate-400">
          Loading intake…
          {error ? (
            <span>
              Video playback failed.
              <a
                href="/contact"
                className="underline text-emerald-400 hover:text-emerald-300"
              >
                Skip intro
              </a>
            </span>
          ) : null}
        </p>
      </div>
    );
  }

  // If the video has played (or was skipped), render nothing and let the
  // main portfolio mount.
  if (hasPlayed || !hasSeenIntro()) {
    // After the intro plays once, mark it as seen so subsequent
    // navigations in this session don't replay it.
    // (If this is a forced re-run, we still mark it so the session
    //  behaviour is consistent.)
    markIntroSeen();
    return null;
  }

  // --------------------------------------------------
  // Full-screen intro render
  // --------------------------------------------------

  return (
    <div
      id="intro-root"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)] overflow-hidden"
      onClick={handleVideoEnd}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        onEnded={handleVideoEnd}
        onError={handleError}
        className="relative w-full h-full object-cover"
        preload="metadata"
      >
        <source src="/intro.mp4" type="video/mp4" />
        {/** Support WebM fallback if the mp4 source is unavailable. */}
        <source src="/intro.webm" type="video/webm" />
      </video>

      {/* Skip INTRO button – bottom-right, minimal dark translucent design. */}
      <button
        id="skip-intro-btn"
        className="fixed bottom-6 right-6 z-50 px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors bg-black/60 border border-white/20 text-white hover:bg-white/10 hover:transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-label="Skip intro"
        onClick={() => {
          markIntroSeen();
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
      >
        Skip intro
      </button>

      {/* The dark background on the container provides the cinematic feel. */}
    </div>
  );
}

/* ---------------------------------------------------------------------------
 *  Helpers
 * --------------------------------------------------------------------------- */

const INTRO_SEEN_KEY = "intro_seen";

const hasSeenIntro = (): boolean => {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(INTRO_SEEN_KEY) === "true";
};

const markIntroSeen = (): void => {
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, "true");
  } catch {
    // sessionStorage may be unavailable in some private/incognito modes;
    // don't crash the app.
  }
};