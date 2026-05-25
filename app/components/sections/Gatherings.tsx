import FadeIn from "../FadeIn";

const gatherings = [
  {
    city: "Nashville",
    state: "TN",
    venue: "The Mill Community Church",
    date: "September 12, 2026",
    status: "upcoming" as const,
  },
  {
    city: "Atlanta",
    state: "GA",
    venue: "Transformation Church",
    date: "October 4, 2026",
    status: "upcoming" as const,
  },
  {
    city: "Dallas",
    state: "TX",
    venue: "Gateway Worship Center",
    date: "November 8, 2026",
    status: "upcoming" as const,
  },
  {
    city: "Los Angeles",
    state: "CA",
    venue: "Mosaic",
    date: "December 6, 2026",
    status: "upcoming" as const,
  },
];

export default function Gatherings() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Faint horizontal rule at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(184,151,90,0.25), transparent)" }}
      />

      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-6 mb-20">
            <div className="divider" />
            <p
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
            >
              2026 Gatherings
            </p>
          </div>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-light italic leading-[1.1] max-w-lg"
            style={{
              color: "var(--foreground)",
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Come and
            <br />
            encounter.
          </h2>
        </FadeIn>

        {/* Gathering list */}
        <div className="mt-24 space-y-0">
          {gatherings.map((g, i) => (
            <FadeIn key={g.city} delay={i * 0.12}>
              <div
                className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-10 cursor-default"
                style={{
                  borderTop: "1px solid rgba(240,234,216,0.08)",
                }}
              >
                {/* Hover accent line */}
                <div
                  className="absolute left-0 top-0 h-px w-0 group-hover:w-16 transition-all duration-500 ease-out"
                  style={{ background: "var(--accent)" }}
                />

                <div className="flex items-baseline gap-5">
                  <span
                    className="text-4xl sm:text-5xl font-light italic leading-none"
                    style={{
                      color: "var(--foreground)",
                      fontFamily: "var(--font-cormorant)",
                    }}
                  >
                    {g.city}
                  </span>
                  <span
                    className="text-sm font-light"
                    style={{
                      color: "rgba(240,234,216,0.35)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {g.state}
                  </span>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <span
                    className="text-sm font-light"
                    style={{
                      color: "rgba(240,234,216,0.5)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {g.venue}
                  </span>
                  <span
                    className="text-xs tracking-wider"
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--font-inter)",
                      opacity: 0.75,
                    }}
                  >
                    {g.date}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}

          <div
            style={{ borderTop: "1px solid rgba(240,234,216,0.08)" }}
          />
        </div>

        <FadeIn delay={0.3}>
          <p
            className="mt-16 text-sm font-light tracking-wide"
            style={{
              color: "rgba(240,234,216,0.3)",
              fontFamily: "var(--font-inter)",
            }}
          >
            More cities being added. Stay connected below.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
