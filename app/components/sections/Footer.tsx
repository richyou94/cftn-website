"use client";

export default function Footer() {
  return (
    <footer
      className="relative px-6 py-20 overflow-hidden"
      style={{ borderTop: "1px solid rgba(240,234,216,0.07)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
        {/* Identity */}
        <div>
          <p
            className="text-sm tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-inter)" }}
          >
            CFTN — US
          </p>
          <p
            className="mt-1 text-xs font-light"
            style={{
              color: "rgba(240,234,216,0.3)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Celebration for the Nations
          </p>
        </div>

        {/* Nav */}
        <nav className="flex gap-8">
          {["Gatherings", "Community", "Connect"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{
                color: "rgba(240,234,216,0.35)",
                fontFamily: "var(--font-inter)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(240,234,216,0.35)")
              }
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p
          className="text-xs font-light"
          style={{
            color: "rgba(240,234,216,0.2)",
            fontFamily: "var(--font-inter)",
          }}
        >
          © {new Date().getFullYear()} CFTN US
        </p>
      </div>
    </footer>
  );
}
