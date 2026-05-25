import Image from "next/image";
import FadeIn from "@/src/components/FadeIn";

/**
 * MediaSection — four placeholder frames for future media.
 *
 * No video playback yet. These are visual placeholders that hold
 * space and communicate intent. Real content drops when it's ready.
 *
 * Photo backgrounds are heavily overlaid so they read as
 * dormant video thumbnails, not photo cards.
 */

type Card = {
  title: string;
  description: string;
  tag: string;
  src: string;
  alt: string;
};

const cards: Card[] = [
  {
    title: "Worship Sessions",
    description:
      "Full-length sets recorded live from gatherings across the US — unedited, unfiltered.",
    tag: "Sessions",
    src: "/images/worship/worship-05-wide_angle_one_guy_worshiping_behind_worship_circle.JPG",
    alt: "Wide-angle view of a worship gathering",
  },
  {
    title: "Live Moments",
    description:
      "Unplanned. Unrepeatable. The moments when the room becomes something holy.",
    tag: "Live",
    src: "/images/worship/worship-04-guy_playing_electric_guitar.JPEG",
    alt: "Electric guitar being played during a worship set",
  },
  {
    title: "Original Songs",
    description:
      "Songs born from within the gathering — written in presence, carried home.",
    tag: "Music",
    src: "/images/bw/bw-02-girl_singing_closed_eyes.JPEG",
    alt: "A vocalist singing with eyes closed in worship",
  },
  {
    title: "Future Releases",
    description:
      "Albums and recordings currently in preparation. The sound is being gathered.",
    tag: "Releases",
    src: "/images/worship/worship-06-guy_playing_acoustic_guitar.JPEG",
    alt: "Acoustic guitar during worship",
  },
];

export default function MediaSection() {
  return (
    <section id="media" className="section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <FadeIn className="mb-6 flex items-center gap-5">
          <div className="divider" />
          <p className="text-label" style={{ color: "rgba(200,164,107,0.60)" }}>
            Media
          </p>
        </FadeIn>

        {/* Section intro */}
        <FadeIn delay={0.05} className="mb-16">
          <p
            className="font-light italic"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              color: "rgba(242,240,235,0.38)",
              maxWidth: "36rem",
            }}
          >
            Sessions, songs, and live moments — being gathered and prepared for release.
          </p>
        </FadeIn>

        {/* 2 × 2 cinematic card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.09} y={18} duration={1.5}>
              <MediaCard card={card} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── MediaCard ────────────────────────────────────────────────────
// Cinematic 16/9 thumbnail.
// Default:  heavily overlaid photo, dimmed play icon, title/tag visible.
// Hover:    image brightens slightly, play icon gains a ghost ring,
//           description slides into view, overlay retreats from center.

function MediaCard({ card }: { card: Card }) {
  return (
    <article
      className="group relative overflow-hidden cursor-default"
      aria-label={card.title}
    >
      {/* ── Photo background ── */}
      <div className="relative aspect-[16/9] overflow-hidden" style={{ background: "var(--surface)" }}>

        <Image
          src={card.src}
          alt={card.alt}
          fill
          className="object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Heavy base overlay — keeps photo very dark (thumbnail state) */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ background: "rgba(11,11,11,0.74)" }}
        />

        {/* Hover: radial reveal — center lightens, edges stay dark */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(11,11,11,0.18) 0%, rgba(11,11,11,0.52) 100%)",
          }}
        />

        {/* Bottom gradient — always on, for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(11,11,11,0.92) 0%, transparent 52%)",
          }}
        />

        {/* ── Play icon — center ── */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{ width: "52px", height: "52px" }}
          >
            {/* Ghost circle ring — visible on hover only */}
            <span
              className="absolute inset-0 rounded-full border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ borderColor: "rgba(200,164,107,0.45)" }}
            />
            {/* Triangle */}
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 translate-x-px transition-opacity duration-500"
              style={{ opacity: 0.22 }}
              aria-hidden="true"
            >
              <path
                d="M5 3l14 9-14 9V3z"
                fill="var(--foreground)"
                className="group-hover:fill-accent transition-colors duration-500"
              />
            </svg>
          </div>
        </div>

        {/* ── Tag badge — top left ── */}
        <div className="absolute top-5 left-5">
          <span
            className="text-label"
            style={{ color: "rgba(200,164,107,0.45)" }}
          >
            {card.tag}
          </span>
        </div>

        {/* ── Coming soon badge — top right ── */}
        <div className="absolute top-5 right-5">
          <span
            className="text-label"
            style={{ color: "rgba(242,240,235,0.18)" }}
          >
            Coming soon
          </span>
        </div>

        {/* ── Text block — bottom ── */}
        <div className="absolute bottom-0 left-0 right-0 p-6">

          {/* Title — always visible */}
          <h3
            className="font-light italic mb-2 transition-colors duration-500"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)",
              lineHeight: 1.15,
              color: "rgba(242,240,235,0.82)",
            }}
          >
            {card.title}
          </h3>

          {/* Description — slides up and fades in on hover */}
          <p
            className="font-light leading-relaxed max-w-xs transition-all duration-500 ease-out translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "var(--type-xs)",
              color: "rgba(242,240,235,0.42)",
              letterSpacing: "0.02em",
            }}
          >
            {card.description}
          </p>

        </div>
      </div>
    </article>
  );
}

