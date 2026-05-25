"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroPhotos } from "@/app/lib/photos";

// hero-01 — wide-angle worship gathering, strongest cinematic opener
const photo = heroPhotos[0];

// Shared easing curve — slow settle, feels like a breath
const ease = [0.22, 1, 0.36, 1] as const;

// Stagger schedule (delay, duration in seconds)
const T = {
  eyebrow:  { delay: 0.30, duration: 1.4 },
  headline: { delay: 0.65, duration: 1.9 },
  divider:  { delay: 1.40, duration: 1.2 },
  sub:      { delay: 1.65, duration: 1.5 },
  buttons:  { delay: 2.10, duration: 1.2 },
  cue:      { delay: 3.00, duration: 1.0 },
} as const;

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  // Tie scroll progress to this section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax — image drifts up slower than the viewport scrolls
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  // Content — drifts up slightly and fades before section exits
  const contentY       = useTransform(scrollYProgress, [0, 1],    ["0%", "32%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.52], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100svh", minHeight: "620px" }}
    >

      {/* ── Background image — parallax ─────────────────── */}
      <motion.div
        className="absolute w-full h-[120%] -top-[10%]"
        style={{ y: imageY }}
        aria-hidden="true"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Overlay — two-layer cinematic gradient ───────── */}
      {/*   Layer 1: bottom-weighted linear gradient          */}
      {/*   Layer 2: radial vignette eating in from edges     */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: [
            "linear-gradient(to top, rgba(11,11,11,0.96) 0%, rgba(11,11,11,0.15) 38%, rgba(11,11,11,0.08) 62%, rgba(11,11,11,0.44) 100%)",
            "radial-gradient(ellipse at center, transparent 32%, rgba(11,11,11,0.58) 100%)",
          ].join(", "),
        }}
      />

      {/* ── Content ──────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ y: contentY, opacity: contentOpacity }}
      >

        {/* Eyebrow — tracked serif-body label */}
        <motion.p
          className="text-label mb-8"
          style={{ color: "rgba(200,164,107,0.70)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...T.eyebrow, ease }}
        >
          A presence-centered worship movement
        </motion.p>

        {/* Headline — Cormorant italic, fluid size */}
        <motion.h1
          className="font-light italic"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "var(--type-display)",
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...T.headline, ease }}
        >
          Celebration
          <br />
          for the Nations
        </motion.h1>

        {/* Gold divider — grows from center */}
        <motion.div
          className="mt-8 divider"
          style={{ transformOrigin: "center" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ ...T.divider, ease }}
        />

        {/* Subtitle */}
        <motion.p
          className="mt-8 font-light leading-[1.85] max-w-xs sm:max-w-sm"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "var(--type-sm)",
            color: "rgba(242,240,235,0.44)",
            letterSpacing: "0.02em",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...T.sub, ease: "easeOut" }}
        >
          A worship movement uniting cities, churches,
          <br className="hidden sm:block" />
          and hearts in the presence of Jesus.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...T.buttons, ease }}
        >
          {/* Primary — thin bordered ghost */}
          <HeroLink
            href="#cities"
            border
          >
            Experience the Movement
          </HeroLink>

          {/* Secondary — text only */}
          <HeroLink href="#invite">
            Connect With Us
          </HeroLink>
        </motion.div>

      </motion.div>

      {/* ── Scroll cue — breathing vertical line ─────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={T.cue}
        aria-hidden="true"
      >
        <motion.div
          className="w-px h-12 origin-top"
          style={{ background: "var(--accent)", opacity: 0.28 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

    </section>
  );
}

// ── Sub-component: minimal anchor link used for both buttons ──
function HeroLink({
  href,
  border = false,
  children,
}: {
  href: string;
  border?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-label transition-all duration-500 px-7 py-3"
      style={{
        color: border ? "rgba(242,240,235,0.72)" : "rgba(200,164,107,0.52)",
        border: border ? "1px solid rgba(200,164,107,0.28)" : "none",
        letterSpacing: "0.22em",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (border) {
          el.style.borderColor = "rgba(200,164,107,0.75)";
          el.style.color = "var(--foreground)";
        } else {
          el.style.color = "var(--accent)";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        if (border) {
          el.style.borderColor = "rgba(200,164,107,0.28)";
          el.style.color = "rgba(242,240,235,0.72)";
        } else {
          el.style.color = "rgba(200,164,107,0.52)";
        }
      }}
    >
      {children}
    </a>
  );
}

