"use client";

const navLinks = [
  { label: "Cities", href: "#cities" },
  { label: "Media", href: "#media" },
  { label: "Gather", href: "#invite" },
];

export default function Footer() {
  return (
    <footer
      className="py-16 px-6"
      style={{ borderTop: "1px solid rgba(240,234,216,0.06)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">

        {/* Brand */}
        <p
          className="text-xs tracking-[0.28em] uppercase"
          style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
        >
          Celebration for the Nations — US
        </p>

        {/* Nav */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: "rgba(240,234,216,0.28)", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "rgba(240,234,216,0.28)";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p
          className="text-xs"
          style={{ color: "rgba(240,234,216,0.14)", fontFamily: "var(--font-inter)" }}
        >
          &copy; {new Date().getFullYear()} CFTN US
        </p>

      </div>
    </footer>
  );
}
