"use client";

import { useState } from "react";
import FadeIn from "@/src/components/FadeIn";

export default function InvitationSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: wire to email service
    setSubmitted(true);
  }

  return (
    <section id="invite" className="py-40 px-6">
      <div className="max-w-lg mx-auto text-center">

        {/* Label */}
        <FadeIn className="mb-16 flex items-center justify-center gap-6">
          <div className="divider" />
          <p
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
          >
            The gathering is open
          </p>
          <div className="divider" />
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-light italic leading-[1.1] mb-12"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-cormorant)" }}
          >
            Come as you are.
            <br />
            Stay as long
            <br />
            as He leads.
          </h2>
        </FadeIn>

        {/* Subtext */}
        <FadeIn delay={0.2}>
          <p
            className="text-sm font-light leading-relaxed mb-16"
            style={{ color: "rgba(240,234,216,0.42)", fontFamily: "var(--font-inter)" }}
          >
            New gatherings, new cities.
            <br />
            We&rsquo;ll let you know when we&rsquo;re near.
          </p>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.3}>
          {submitted ? (
            <p
              className="text-sm font-light py-4"
              style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
            >
              You&rsquo;re on the list. See you in the room.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 text-sm bg-transparent outline-none"
                style={{
                  color: "var(--foreground)",
                  border: "1px solid rgba(240,234,216,0.14)",
                  fontFamily: "var(--font-inter)",
                  caretColor: "var(--accent)",
                }}
              />
              <button
                type="submit"
                className="px-7 py-3.5 text-xs tracking-[0.22em] uppercase transition-colors duration-300"
                style={{
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-inter)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = "var(--accent)";
                  (e.target as HTMLButtonElement).style.color = "#0f0e0d";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = "transparent";
                  (e.target as HTMLButtonElement).style.color = "var(--accent)";
                }}
              >
                Stay close
              </button>
            </form>
          )}
        </FadeIn>

        {/* Footnote */}
        <FadeIn delay={0.45}>
          <p
            className="mt-8 text-xs"
            style={{ color: "rgba(240,234,216,0.18)", fontFamily: "var(--font-inter)" }}
          >
            No announcements — only presence.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
