import FadeIn from "@/src/components/FadeIn";

/**
 * CitiesSection — six local expressions of one sound.
 *
 * Design intent: cities first, explanation after.
 * You see the names, feel the breadth, then the framing copy
 * crystallizes what you just read. Like a poem.
 *
 * No numbers. No dates. No venues.
 * Hierarchy would imply franchise. These are one movement.
 */

const cities = [
  { name: "Atlanta",     region: "Georgia"       },
  { name: "Boston",      region: "Massachusetts" },
  { name: "New York",    region: "New York"      },
  { name: "San Diego",   region: "California"    },
  { name: "Los Angeles", region: "California"    },
  { name: "Baltimore",   region: "Maryland"      },
];

export default function CitiesSection() {
  return (
    <section id="cities" className="section-padding">
      <div className="max-w-2xl mx-auto">

        {/* Label */}
        <FadeIn className="mb-16 flex items-center gap-5">
          <div className="divider" />
          <p className="text-label" style={{ color: "rgba(200,164,107,0.60)" }}>
            The gathering
          </p>
        </FadeIn>

        {/* ── City list — cities first, no metadata ───────── */}
        <ul>
          {cities.map((city, i) => (
            <FadeIn key={city.name} delay={i * 0.07} y={14} duration={1.4}>
              <li
                className="group relative flex items-baseline justify-between py-6 cursor-default"
                style={{ borderBottom: "1px solid rgba(242,240,235,0.055)" }}
              >
                {/* Left accent bar — grows from top on hover */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-[1.5px] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out"
                  style={{ background: "var(--accent)" }}
                  aria-hidden="true"
                />

                {/* City name */}
                <span
                  className="font-light italic transition-colors duration-500"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
                    lineHeight: 1.1,
                    color: "rgba(242,240,235,0.78)",
                    // Hover handled via group in sibling — use paddingLeft to avoid overlap with bar
                    paddingLeft: "0px",
                  }}
                >
                  {city.name}
                </span>

                {/* Region — appears on hover */}
                <span
                  className="text-label opacity-0 group-hover:opacity-100 transition-opacity duration-500 shrink-0 ml-4"
                  style={{ color: "rgba(200,164,107,0.50)" }}
                >
                  {city.region}
                </span>
              </li>
            </FadeIn>
          ))}
        </ul>

        {/* ── Framing copy — the closing reflection ────────── */}
        {/* Arrives after the cities, crystallising what you just read */}
        <FadeIn delay={0.5} y={12} duration={1.6}>
          <div
            className="mt-16 pt-14"
            style={{ borderTop: "1px solid rgba(242,240,235,0.055)" }}
          >
            {/* Thin vertical connector — visual breath before the words */}
            <div
              className="mb-10"
              style={{
                width: "1px",
                height: "44px",
                background: "rgba(200,164,107,0.18)",
              }}
            />

            <p
              className="font-light italic leading-[1.55]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                color: "rgba(242,240,235,0.52)",
              }}
            >
              Across cities, the gathering takes different forms —
              <br />
              but the sound remains one.
            </p>

            <p
              className="text-label mt-10"
              style={{ color: "rgba(200,164,107,0.28)" }}
            >
              More cities gathering. Stay close.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
