"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * FixedMusicPlayer — ambient worship audio companion.
 *
 * UI-only for now. Wire an audio source by setting AUDIO_SRC below.
 * When dismissed, the component unmounts cleanly.
 */
const TRACK_TITLE   = "Ambient Worship";
const TRACK_ARTIST  = "CFTN US";
const AUDIO_SRC     = ""; // TODO: add audio file path, e.g. "/audio/ambient-worship.mp3"

const BAR_COUNT = 5;

export default function FixedMusicPlayer() {
  const [playing,   setPlaying]   = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="music-player"
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center px-5 sm:px-8 gap-5"
        style={{
          height: "56px",
          background: "rgba(15,14,13,0.90)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(240,234,216,0.06)",
        }}
        initial={{ y: 56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 56, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >

        {/* Left — waveform bars + track info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {/* Animated waveform */}
          <div className="flex items-end gap-[3px] h-5 shrink-0">
            {Array.from({ length: BAR_COUNT }).map((_, i) => (
              <motion.span
                key={i}
                className="block w-[3px] rounded-full"
                style={{ background: "var(--accent)", opacity: playing ? 0.85 : 0.25 }}
                animate={
                  playing
                    ? {
                        scaleY: [0.3, 1, 0.5, 0.9, 0.2, 0.7],
                        originY: "bottom",
                      }
                    : { scaleY: 0.25, originY: "bottom" }
                }
                transition={
                  playing
                    ? {
                        duration: 0.9 + i * 0.13,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: i * 0.1,
                      }
                    : { duration: 0.3 }
                }
                initial={{ scaleY: 0.25, height: "20px" }}
              />
            ))}
          </div>

          {/* Track info */}
          <div className="min-w-0">
            <p
              className="text-xs font-light leading-none truncate"
              style={{ color: "rgba(240,234,216,0.55)", fontFamily: "var(--font-inter)" }}
            >
              <span style={{ color: "rgba(240,234,216,0.75)" }}>{TRACK_ARTIST}</span>
              {" — "}
              {TRACK_TITLE}
            </p>
          </div>
        </div>

        {/* Center — Play / Pause */}
        <button
          aria-label={playing ? "Pause" : "Play ambient worship"}
          onClick={() => setPlaying((p) => !p)}
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300"
          style={{
            border: "1px solid rgba(184,151,90,0.45)",
            background: playing ? "rgba(184,151,90,0.12)" : "transparent",
          }}
        >
          {playing ? (
            /* Pause icon */
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="4" width="4" height="16" rx="1" fill="var(--accent)" />
              <rect x="15" y="4" width="4" height="16" rx="1" fill="var(--accent)" />
            </svg>
          ) : (
            /* Play icon */
            <svg className="w-3.5 h-3.5 translate-x-px" viewBox="0 0 24 24" fill="none">
              <path d="M5 3l14 9-14 9V3z" fill="var(--accent)" />
            </svg>
          )}
        </button>

        {AUDIO_SRC && (
          <audio
            src={AUDIO_SRC}
            loop
            autoPlay={false}
            // Controlled externally via playing state — requires a ref if you
            // want actual play/pause. Add: const audioRef = useRef<HTMLAudioElement>(null)
            // and call audioRef.current?.play() / .pause() in a useEffect on [playing].
          />
        )}

        {/* Right — Dismiss */}
        <button
          aria-label="Dismiss music player"
          onClick={() => setDismissed(true)}
          className="shrink-0 w-7 h-7 flex items-center justify-center transition-opacity duration-200"
          style={{ opacity: 0.3 }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.7")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.3")}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="var(--foreground)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

      </motion.div>
    </AnimatePresence>
  );
}
