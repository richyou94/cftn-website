import FadeIn from "@/src/components/FadeIn";

const gatherings = [
  {
    city: "Nashville",
    state: "TN",
    venue: "TBD",
    date: "Spring 2026",
  },
  {
    city: "Atlanta",
    state: "GA",
    venue: "TBD",
    date: "Summer 2026",
  },
  {
    city: "Dallas",
    state: "TX",
    venue: "TBD",
    date: "Summer 2026",
  },
  {
    city: "Los Angeles",
    state: "CA",
    venue: "TBD",
    date: "Fall 2026",
  },
];

export default function CitiesSection() {
  return (
    <section id="cities" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Label */}
        <FadeIn className="mb-16 flex items-center gap-6">
          <div className="divider" />
          <p
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
          >
            Gatherings
          </p>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.05}>
          <h2
            className="text-5xl sm:text-6xl font-light italic mb-20 leading-tight"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-cormorant)" }}
          >
            Coming to
            <br />
            your city.
          </h2>
        </FadeIn>

        {/* City list */}
        <ol className="space-y-0">
          {gatherings.map((g, i) => (
            <FadeIn key={g.city} delay={0.1 + i * 0.08}>
              <div
                className="group relative py-7 flex items-baseline gap-6 cursor-default"
                style={{ borderBottom: "1px solid rgba(240,234,216,0.07)" }}
              >
                {/* Hover accent line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
                  style={{ background: "var(--accent)" }}
                />

                {/* Index */}
                <span
                  className="text-xs font-light w-6 shrink-0"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-inter)", opacity: 0.6 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* City + state */}
                <span
                  className="text-2xl sm:text-3xl font-light flex-1"
                  style={{ color: "var(--foreground)", fontFamily: "var(--font-cormorant)" }}
                >
                  {g.city}
                  <span
                    className="ml-2 text-base"
                    style={{ color: "rgba(240,234,216,0.3)", fontFamily: "var(--font-inter)" }}
                  >
                    {g.state}
                  </span>
                </span>

                {/* Date */}
                <span
                  className="text-xs tracking-wide shrink-0"
                  style={{ color: "rgba(240,234,216,0.28)", fontFamily: "var(--font-inter)" }}
                >
                  {g.date}
                </span>
              </div>
            </FadeIn>
          ))}
        </ol>

        {/* Footer note */}
        <FadeIn delay={0.4}>
          <p
            className="mt-12 text-xs font-light leading-relaxed"
            style={{ color: "rgba(240,234,216,0.22)", fontFamily: "var(--font-inter)" }}
          >
            More cities announced soon.
            <br />
            Sign up below to be notified.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
