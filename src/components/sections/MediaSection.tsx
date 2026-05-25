import Image from "next/image";
import FadeIn from "@/src/components/FadeIn";
import { worshipPhotos, bwPhotos } from "@/app/lib/photos";

/**
 * Three recorded-session cards.
 * Each uses a unique photo not seen anywhere else on the page.
 *
 * Card 1: worship-05 — wide-angle, single worshiper (Nashville)
 * Card 2: bw-06      — leadership group, wide-angle (Atlanta)
 * Card 3: worship-07 — woman at keyboard (Dallas)
 */
const cards = [
  {
    photo: worshipPhotos[4],
    title: "Nashville",
    subtitle: "February 2025",
    duration: "1h 42m",
  },
  {
    photo: bwPhotos[5],
    title: "Atlanta",
    subtitle: "April 2025",
    duration: "1h 18m",
  },
  {
    photo: worshipPhotos[6],
    title: "Dallas",
    subtitle: "June 2025",
    duration: "1h 55m",
  },
];

export default function MediaSection() {
  return (
    <section id="media" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <FadeIn className="mb-16 flex items-center gap-6">
          <div className="divider" />
          <p
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
          >
            Recorded sessions
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden cursor-pointer">

                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={card.photo.src}
                    alt={card.photo.alt}
                    fill
                    className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Bottom gradient for text legibility */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,14,13,0.88) 0%, rgba(15,14,13,0.15) 55%, transparent 100%)",
                    }}
                  />

                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ border: "1px solid rgba(184,151,90,0.5)", background: "rgba(15,14,13,0.6)" }}
                    >
                      <svg
                        className="w-5 h-5 translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        style={{ color: "var(--accent)" }}
                      >
                        <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p
                      className="text-2xl font-light italic mb-1"
                      style={{ color: "var(--foreground)", fontFamily: "var(--font-cormorant)" }}
                    >
                      {card.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <p
                        className="text-xs tracking-wide"
                        style={{ color: "var(--accent)", fontFamily: "var(--font-inter)", opacity: 0.75 }}
                      >
                        {card.subtitle}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "rgba(240,234,216,0.22)", fontFamily: "var(--font-inter)" }}
                      >
                        {card.duration}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
