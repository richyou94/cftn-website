"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * FixedMusicPlayer — visual-only ambient music companion.
 *
 * No audio playback yet — this is a placeholder that holds space
 * for future original worship music or legally cleared media.
 *
 * Wire audio by:
 *   1. Setting AUDIO_SRC to a file path in /public/audio/
 *   2. Adding a useRef<HTMLAudioElement> and calling .play()/.pause()
 *      inside a useEffect on [playing]
 */

const TRACK_TITLE  = "Original worship coming soon";
const TRACK_ARTIST = "CFTN US";
const BAR_COUNT    = 4;
const BAR_HEIGHTS  = [14, 20, 10, 17]; // px — natural asymmetry

export default function FixedMusicPlayer() {
  const [playing,   setPlaying]   = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          key="music-player"
          role="region"
          aria-label="Music player"
          className="fixed bottom-0 left-0 right-0 z-50"
          style={{
            background: "rgba(11,11,11,0.82)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(242,240,235,0.055)",
          }}
          initial={{ y: 72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 72, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* ── Progress bar — top edge ── */}
          {/* Static placeholder. Replace width with live playback position when audio is wired. */}
          <div
            className="relative w-full overflow-hidden"
            style={{ height: "2px", background: "rgba(242,240,235,0.055)" }}
            aria-hidden="true"
          >
            {/* Placeholder fill — 0% (nothing playing yet) */}
            <div
              className="absolute left-0 top-0 h-full"
              style={{ width: "0%", background: "var(--accent)", opacity: 0.5 }}
            />
            {/* Knob — signals the track start position */}
            <div
              className="absolute top-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: "0%",
                width: "6px",
                height: "6px",
                background: "var(--accent)",
                opacity: 0.55,
                marginLeft: "-3px",
              }}
            />
          </div>

          {/* ── Main bar ── */}
          <div className="flex items-center gap-4 px-5 sm:px-8" style={{ height: "54px" }}>

            {/* Left — waveform + track info */}
            <div className="flex items-center gap-3 flex-1 min-w-0">

              {/* Waveform bars */}
              <div
                className="flex items-end gap-[3px] shrink-0"
                style={{ height: "20px" }}
                aria-hidden="true"
              >
                {BAR_HEIGHTS.map((h, i) => (
                  <motion.span
                    key={i}
                    className="block w-[2.5px] rounded-full"
                    style={{
                      background: "var(--accent)",
                      height: `${h}px`,
                      opacity: playing ? 0.75 : 0.2,
                      transformOrigin: "bottom",
                    }}
                    animate={
                      playing
                        ? {
                            scaleY: [0.25, 1, 0.45, 0.85, 0.3],
                          }
                        : { scaleY: 0.25 }
                    }
                    transition={
                      playing
                        ? {
                            duration: 0.75 + i * 0.18,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: i * 0.08,
                          }
                        : { duration: 0.4, ease: "easeOut" }
                    }
                  />
                ))}
              </div>

              {/* Track info */}
              <div className="min-w-0">
                <p
                  className="truncate font-light leading-none"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "var(--type-xs)",
                    color: "rgba(242,240,235,0.38)",
                    letterSpacing: "0.03em",
                  }}
                >
                  <span style={{ color: "rgba(242,240,235,0.55)" }}>{TRACK_ARTIST}</span>
                  <span style={{ margin: "0 0.35em", opacity: 0.4 }}>—</span>
                  {TRACK_TITLE}
                </p>
              </div>

            </div>

            {/* Center — Play / Pause */}
            <button
              aria-label={playing ? "Pause" : "Play"}
              onClick={() => setPlaying((p) => !p)}
              className="shrink-0 flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                width: "34px",
                height: "34px",
                border: "1px solid rgba(200,164,107,0.35)",
                background: playing ? "rgba(200,164,107,0.10)" : "transparent",
              }}
            >
              {playing ? (
                <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="4" width="4" height="16" rx="1" fill="var(--accent)" />
                  <rect x="15" y="4" width="4" height="16" rx="1" fill="var(--accent)" />
                </svg>
              ) : (
                <svg width="11" height="12" viewBox="0 0 24 24" aria-hidden="true" style={{ transform: "translateX(1px)" }}>
                  <path d="M5 3l14 9-14 9V3z" fill="var(--accent)" />
                </svg>
              )}
            </button>

            {/* Right — Dismiss */}
            <button
              aria-label="Dismiss music player"
              onClick={() => setDismissed(true)}
              className="shrink-0 flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
              style={{ width: "28px", height: "28px", opacity: 0.25 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="var(--foreground)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

