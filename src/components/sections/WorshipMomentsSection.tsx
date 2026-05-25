import Image from "next/image";
import FadeIn from "@/src/components/FadeIn";
import { worshipPhotos, bwPhotos } from "@/app/lib/photos";

/**
 * Two images — colour vs. black-and-white.
 * Left:  worship-03 — transcendent light flooding through worship (cinematic)
 * Right: bw-05     — woman singing, surrendered, eyes closed (intimate)
 *
 * The contrast between them carries the section's emotional weight.
 * No text needed here — the photographs say it.
 */
const primary   = worshipPhotos[2]; // bright light, cinematic
const secondary = bwPhotos[4];      // girl singing, eyes closed, bw

export default function WorshipMomentsSection() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <FadeIn className="mb-16 flex items-center gap-6">
          <div className="divider" />
          <p
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
          >
            From the room
          </p>
        </FadeIn>

        {/* Editorial split — equal height, different aspect ratios */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:h-[540px]">

          {/* Primary — landscape, colour, light */}
          <FadeIn className="lg:col-span-3" delay={0.05}>
            <div className="relative aspect-[3/2] lg:aspect-auto lg:h-full overflow-hidden">
              <Image
                src={primary.src}
                alt={primary.alt}
                fill
                className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(15,14,13,0.28) 0%, transparent 45%)" }}
              />
            </div>
          </FadeIn>

          {/* Secondary — portrait, bw, intimate */}
          <FadeIn className="lg:col-span-2" delay={0.18}>
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full overflow-hidden">
              <Image
                src={secondary.src}
                alt={secondary.alt}
                fill
                className="object-cover object-[center_20%] transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(15,14,13,0.32) 0%, transparent 45%)" }}
              />
            </div>
          </FadeIn>
        </div>

        {/* Caption */}
        <FadeIn delay={0.2}>
          <p
            className="mt-5 text-xs font-light tracking-wide"
            style={{ color: "rgba(240,234,216,0.25)", fontFamily: "var(--font-inter)" }}
          >
            Gatherings across the US — 2025–2026
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
