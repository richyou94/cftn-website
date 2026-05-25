"use client";

import { useState } from "react";
import FadeIn from "../FadeIn";

export default function Connect() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to mailing list provider (Mailchimp, ConvertKit, etc.)
    setSubmitted(true);
  }

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Faint center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(184,151,90,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
          >
            Stay connected
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-light italic leading-[1.1]"
            style={{
              color: "var(--foreground)",
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Be the first to know
            <br />
            when we gather.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="divider mx-auto mt-10 mb-10" />
          <p
            className="text-base font-light leading-relaxed mb-12"
            style={{
              color: "rgba(240,234,216,0.5)",
              fontFamily: "var(--font-inter)",
            }}
          >
            New gatherings, cities, and ways to be part of the stream.
            <br />
            No noise — only what matters.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          {submitted ? (
            <p
              className="text-base font-light italic"
              style={{
                color: "rgba(240,234,216,0.6)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              You&apos;re in. We&apos;ll be in touch.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-5 py-4 text-sm font-light outline-none placeholder-opacity-30 transition-all duration-300"
                style={{
                  border: "1px solid rgba(240,234,216,0.15)",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-inter)",
                  borderRadius: 0,
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(184,151,90,0.5)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(240,234,216,0.15)")
                }
              />
              <button
                type="submit"
                className="px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 cursor-pointer"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(184,151,90,0.4)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-inter)",
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(184,151,90,0.1)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(184,151,90,0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(184,151,90,0.4)";
                }}
              >
                Join
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
