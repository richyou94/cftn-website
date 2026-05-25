import FadeIn from "@/src/components/FadeIn";

/**
 * PresenceSection — a typographic pause.
 *
 * Placed immediately after the cinematic hero, this section asks the image
 * to recede and lets only words hold the room. Three staggered stanzas
 * build toward the pivot line, then settle into the declaration.
 *
 * No photo. No decoration. Just the statement.
 */
export default function PresenceSection() {
  return (
    <section
      className="section-padding"
      style={{
        // Radial warmth: imperceptibly lighter at center, pure dark at edges
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, var(--bg-alt) 0%, var(--bg-base) 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">

        {/* Label */}
        <FadeIn>
          <p
            className="text-label"
            style={{ color: "rgba(200,164,107,0.50)" }}
          >
            On the nature of our gathering
          </p>
        </FadeIn>

        {/* Thin rule — breathes after label */}
        <FadeIn delay={0.05}>
          <div
            className="mx-auto mt-10 mb-16"
            style={{ width: "1px", height: "48px", background: "rgba(200,164,107,0.18)" }}
          />
        </FadeIn>

        {/* ── Stanza 1 — what we don't gather around ───── */}
        {/* Muted — sets up the contrast */}
        <FadeIn delay={0.1} duration={1.7} y={18}>
          <p
            className="font-light italic leading-[1.45]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)",
              color: "rgba(242,240,235,0.48)",
            }}
          >
            We gather not around a name,
            <br />
            a stage, or a personality —
          </p>
        </FadeIn>

        {/* ── Stanza 2 — the pivot ──────────────────────── */}
        {/* Full brightness. "the presence of Jesus" in gold. */}
        <FadeIn delay={0.35} duration={1.8} y={18}>
          <p
            className="mt-10 font-light italic leading-[1.45]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
              color: "rgba(242,240,235,0.90)",
            }}
          >
            but around{" "}
            <span style={{ color: "var(--accent)" }}>
              the presence of Jesus
            </span>
            {" "}—
          </p>
        </FadeIn>

        {/* ── Stanza 3 — the declaration ───────────────── */}
        {/* Muted again, mirroring stanza 1 */}
        <FadeIn delay={0.60} duration={1.7} y={18}>
          <p
            className="mt-10 font-light italic leading-[1.45]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)",
              color: "rgba(242,240,235,0.48)",
            }}
          >
            one sound rising from many churches,
            <br />
            cultures, and cities.
          </p>
        </FadeIn>

        {/* Closing — thin rule + attribution */}
        <FadeIn delay={0.85} duration={1.4}>
          <div
            className="mx-auto mt-16 mb-10"
            style={{ width: "1px", height: "48px", background: "rgba(200,164,107,0.18)" }}
          />
          <p
            className="text-label"
            style={{ color: "rgba(200,164,107,0.32)" }}
          >
            CFTN US
          </p>
        </FadeIn>

      </div>
    </section>
  );
}

