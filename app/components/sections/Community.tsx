import FadeIn from "../FadeIn";

const voices = [
  "Worship leaders searching for authentic community.",
  "Worship teams hungry for something beyond the weekend set.",
  "Believers from different churches who want to worship together.",
  "Artists, musicians, singers, and intercessors.",
  "Those drawn to sacred spaces across every tradition.",
];

export default function Community() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(184,151,90,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div>
          <FadeIn>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-8"
              style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
            >
              Who gathers
            </p>
            <h2
              className="text-5xl sm:text-6xl font-light italic leading-[1.1]"
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              You were made
              <br />
              for this room.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="divider mt-10 mb-10" />
            <p
              className="text-base leading-[1.9] font-light"
              style={{
                color: "rgba(240,234,216,0.55)",
                fontFamily: "var(--font-inter)",
              }}
            >
              CFTN exists for the ones who carry worship not as a profession,
              but as a calling. Across every denomination, style, and background
              — there is one Spirit, one sound.
            </p>
          </FadeIn>
        </div>

        {/* Right — voice list */}
        <div className="mt-0 md:mt-20">
          <ul className="space-y-0">
            {voices.map((voice, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.1}>
                <li
                  className="flex items-start gap-5 py-6"
                  style={{ borderBottom: "1px solid rgba(240,234,216,0.07)" }}
                >
                  <span
                    className="mt-1 shrink-0"
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      opacity: 0.6,
                      display: "block",
                      marginTop: 8,
                    }}
                  />
                  <span
                    className="text-base font-light leading-relaxed"
                    style={{
                      color: "rgba(240,234,216,0.65)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {voice}
                  </span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>

      {/* Full-width pull quote */}
      <FadeIn className="max-w-5xl mx-auto mt-32" delay={0.2} y={16}>
        <div
          className="py-16 px-10 text-center relative"
          style={{
            border: "1px solid rgba(184,151,90,0.12)",
          }}
        >
          <div
            className="absolute -top-px left-1/2 -translate-x-1/2 w-16 h-px"
            style={{ background: "var(--accent)", opacity: 0.4 }}
          />
          <p
            className="text-3xl sm:text-4xl md:text-5xl font-light italic leading-[1.2]"
            style={{
              color: "rgba(240,234,216,0.75)",
              fontFamily: "var(--font-cormorant)",
            }}
          >
            &ldquo;There is one body and one Spirit — just as you were called
            to one hope.&rdquo;
          </p>
          <p
            className="mt-6 text-xs tracking-[0.25em] uppercase"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-inter)",
              opacity: 0.6,
            }}
          >
            Ephesians 4:4
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
