/**
 * Footer — minimal, typographic, no heavy structure.
 *
 * Three loose columns: brand + mission | gathering cities | connect.
 * Everything at low opacity — this is a whisper, not a billboard.
 */

const cities = [
  "Atlanta",
  "Boston",
  "New York",
  "San Diego",
  "Los Angeles",
  "Baltimore",
];

export default function Footer() {
  return (
    <footer
      className="px-6 pb-20 pt-16"
      style={{ borderTop: "1px solid rgba(242,240,235,0.055)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Three-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">

          {/* Column 1 — Brand + mission */}
          <div className="lg:max-w-xs">
            {/* Name */}
            <p
              className="font-light italic mb-1"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                color: "rgba(242,240,235,0.72)",
              }}
            >
              Celebration for the Nations
            </p>
            <p
              className="text-label mb-6"
              style={{ color: "rgba(200,164,107,0.45)" }}
            >
              United States
            </p>

            {/* Mission */}
            <p
              className="font-light leading-relaxed"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "var(--type-xs)",
                color: "rgba(242,240,235,0.28)",
                letterSpacing: "0.02em",
              }}
            >
              A worship movement gathering cities, churches, and hearts
              in the presence of Jesus.
            </p>
          </div>

          {/* Column 2 — Gathering cities */}
          <div>
            <p className="text-label mb-5" style={{ color: "rgba(200,164,107,0.4)" }}>
              Gathering in
            </p>
            <ul className="space-y-2.5">
              {cities.map((city) => (
                <li
                  key={city}
                  className="font-light"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "var(--type-xs)",
                    color: "rgba(242,240,235,0.28)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <p className="text-label mb-5" style={{ color: "rgba(200,164,107,0.4)" }}>
              Connect
            </p>
            <ul className="space-y-3">
              {/* Contact placeholder */}
              <li>
                <a
                  href="mailto:hello@cftn.us"
                  className="font-light transition-colors duration-300 hover:opacity-70"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "var(--type-xs)",
                    color: "rgba(242,240,235,0.28)",
                    letterSpacing: "0.03em",
                  }}
                >
                  hello@cftn.us
                </a>
              </li>

              {/* Divider */}
              <li aria-hidden="true" style={{ height: "1px", background: "rgba(242,240,235,0.06)", marginTop: "4px", marginBottom: "4px" }} />

              {/* Social placeholders */}
              {["Instagram", "YouTube"].map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    className="font-light transition-colors duration-300 hover:opacity-70"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "var(--type-xs)",
                      color: "rgba(242,240,235,0.22)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom row ── */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid rgba(242,240,235,0.04)" }}
        >
          <p
            className="font-light"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "var(--type-xs)",
              color: "rgba(242,240,235,0.14)",
              letterSpacing: "0.03em",
            }}
          >
            &copy; {new Date().getFullYear()} Celebration for the Nations — US
          </p>
          <p
            className="font-light italic"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "var(--type-xs)",
              color: "rgba(242,240,235,0.1)",
            }}
          >
            One sound. Many cities.
          </p>
        </div>

      </div>
    </footer>
  );
}

