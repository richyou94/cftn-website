import Image from "next/image";
import FadeIn from "../FadeIn";
import { worshipPhotos, bwPhotos } from "@/app/lib/photos";

/**
 * Photo-based placeholders for future worship recordings and releases.
 * Each card represents an upcoming or recent recorded session.
 */
const sessions = [
  {
    photo: worshipPhotos[4],   // worship-05 — wide cinematic, solitary worshiper
    title: "Nashville Session",
    label: "Gathered — September 2026",
    status: "Recorded",
  },
  {
    photo: bwPhotos[5],        // bw-06 — leadership group, documentary
    title: "Atlanta Session",
    label: "Gathered — October 2026",
    status: "Coming Soon",
  },
  {
    photo: worshipPhotos[6],   // worship-07-keyboard — devotional, focused (not reused elsewhere)
    title: "Dallas Session",
    label: "Gathered — November 2026",
    status: "Coming Soon",
  },
];

function PlayIcon() {
  return (
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
      style={{
        border: "1px solid rgba(184,151,90,0.5)",
        background: "rgba(15,14,13,0.5)",
      }}
    >
      {/* Triangle */}
      <div
        style={{
          width: 0,
          height: 0,
          borderTop: "7px solid transparent",
          borderBottom: "7px solid transparent",
          borderLeft: "12px solid rgba(184,151,90,0.85)",
          marginLeft: 3,
        }}
      />
    </div>
  );
}

export default function Media() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Label + heading */}
        <FadeIn className="mb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
          >
            From the gatherings
          </p>
          <h2
            className="text-5xl sm:text-6xl font-light italic leading-[1.1] max-w-md"
            style={{
              color: "var(--foreground)",
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Recordings
            <br />
            &amp; sessions.
          </h2>
        </FadeIn>

        {/* Session cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sessions.map((session, i) => (
            <FadeIn key={session.title} delay={i * 0.12}>
              <div className="group relative cursor-default">
                {/* Photo thumbnail */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={session.photo.src}
                    alt={session.photo.alt}
                    fill
                    className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />

                  {/* Dark overlay — deepens on hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
                    style={{ background: "rgba(15,14,13,0.45)" }}
                  />

                  {/* Bottom text bar */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,14,13,0.85) 0%, transparent 55%)",
                    }}
                  >
                    {/* Status badge */}
                    <span
                      className="mb-4 self-start text-[10px] tracking-[0.25em] uppercase px-3 py-1"
                      style={{
                        border: "1px solid rgba(184,151,90,0.35)",
                        color: "var(--accent)",
                        fontFamily: "var(--font-inter)",
                        opacity: 0.85,
                      }}
                    >
                      {session.status}
                    </span>
                    <p
                      className="text-xl font-light italic leading-tight"
                      style={{
                        color: "var(--foreground)",
                        fontFamily: "var(--font-cormorant)",
                      }}
                    >
                      {session.title}
                    </p>
                    <p
                      className="mt-1 text-xs font-light"
                      style={{
                        color: "rgba(240,234,216,0.45)",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {session.label}
                    </p>
                  </div>

                  {/* Play icon — centered, fades in on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <PlayIcon />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p
            className="mt-10 text-sm font-light"
            style={{
              color: "rgba(240,234,216,0.25)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Full recordings will be made available after each gathering.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
