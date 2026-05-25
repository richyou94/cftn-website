import Image from "next/image";
import FadeIn from "@/src/components/FadeIn";

/**
 * Five frames. Three rows. Nothing aligned the way you'd expect.
 *
 * Row 1: large landscape  +  tall portrait (pushed down)
 * Row 2: square  +  portrait   (shifted right, items aligned to base)
 * Row 3: wide cinematic solo   (right-anchored)
 *
 * Each image holds a caption that slides into full view on hover.
 */

type Frame = {
  src: string;
  alt: string;
  caption: string;
  aspect: string;
  pos?: string;
  sizes: string;
};

const frames: Frame[] = [
  {
    // Row 1 — left: the transcendent light moment — strongest single frame
    src: "/images/worship/worship-03-bright_light_middle_of_worship.JPEG",
    alt: "Transcendent light flooding a worship gathering",
    caption: "One sound across cities",
    aspect: "aspect-[3/2]",
    pos: "object-center",
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
  {
    // Row 1 — right: hands on keys — quiet documentary detail
    src: "/images/bw/bw-01-keyboard_with_hand.JPEG",
    alt: "Hands resting on a keyboard during worship",
    caption: "Gathered in worship",
    aspect: "aspect-[3/4]",
    pos: "object-[center_35%]",
    sizes: "(max-width: 1024px) 100vw, 38vw",
  },
  {
    // Row 2 — wide: the room itself — collective, documentary, closing
    src: "/images/bw/bw-03-far_angle_worshiping.JPEG",
    alt: "Wide-angle view of the congregation in worship",
    caption: "Carrying the fire home",
    aspect: "aspect-[16/9]",
    pos: "object-center",
    sizes: "(max-width: 1024px) 100vw, 68vw",
  },
];

export default function WorshipMomentsSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <FadeIn className="mb-16 flex items-center gap-5">
          <div className="divider" />
          <p className="text-label" style={{ color: "rgba(200,164,107,0.62)" }}>
            From the room
          </p>
        </FadeIn>

        {/* ── Row 1 ── large landscape + tall portrait (pushed down) ── */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-3 lg:gap-[18px]">

          {/* A — worship-03, landscape, dominant */}
          <div className="w-full lg:w-[58%]">
            <GalleryFrame frame={frames[0]} delay={0.05} />
          </div>

          {/* B — bw-01, portrait, intentionally lower */}
          <div className="w-full lg:w-[38%] lg:mt-14">
            <GalleryFrame frame={frames[1]} delay={0.16} />
          </div>

        </div>

        {/* ── Row 2 ── wide solo, anchored right — the room itself ── */}
        <div className="mt-3 lg:mt-[18px] lg:w-[68%] lg:ml-auto">
          <GalleryFrame frame={frames[2]} delay={0.14} />
        </div>

      </div>
    </section>
  );
}

// ── Frame component ──────────────────────────────────────────────
// Each frame: hover zooms the image, dims it slightly, and slides
// the caption into full legibility. No JS required — CSS group state.

function GalleryFrame({ frame, delay = 0 }: { frame: Frame; delay?: number }) {
  return (
    <FadeIn delay={delay} y={20} duration={1.5}>
      <figure className="group">
        <div className={`relative ${frame.aspect} overflow-hidden`} style={{ background: "var(--surface)" }}>

          <Image
            src={frame.src}
            alt={frame.alt}
            fill
            className={`object-cover ${frame.pos ?? "object-center"} transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]`}
            sizes={frame.sizes}
          />

          {/* Permanent bottom gradient — legible but not atmosphere-killing */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(11,11,11,0.62) 0%, rgba(11,11,11,0.04) 36%, transparent 52%)",
            }}
          />

          {/* Hover vignette — deepens the image on hover */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: "rgba(11,11,11,0.14)" }}
          />

          {/* Caption — slides up and brightens on hover */}
          <figcaption className="absolute bottom-0 left-0 right-0 px-5 pb-[18px]">
            <p
              className="text-label transition-all duration-500 ease-out translate-y-1 group-hover:translate-y-0"
              style={{ color: "rgba(242,240,235,0.30)" }}
            >
              {frame.caption}
            </p>
          </figcaption>

        </div>
      </figure>
    </FadeIn>
  );
}
