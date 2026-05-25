"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] overflow-hidden flex items-center justify-center"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y: imageY }}
      >
        {/* Placeholder: dark atmospheric gradient — replace with real worship photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, #2a2218 0%, #0f0e0d 70%)",
          }}
        />
        {/* Overlaid vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(15,14,13,0.8) 100%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="mb-6 tracking-[0.3em] uppercase text-xs"
          style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Celebration for the Nations — US
        </motion.p>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl font-light leading-[1.05] italic"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-cormorant)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          One stream.
          <br />
          Many voices.
        </motion.h1>

        <motion.div
          className="mt-8 mx-auto divider"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="mt-8 text-base sm:text-lg font-light leading-relaxed max-w-md mx-auto"
          style={{
            color: "rgba(240,234,216,0.55)",
            fontFamily: "var(--font-inter)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.6, ease: "easeOut" }}
        >
          Presence-centered worship gatherings
          <br />
          across churches, cities, and denominations.
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <motion.div
          className="w-px h-12 origin-top"
          style={{ background: "var(--accent)", opacity: 0.4 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
