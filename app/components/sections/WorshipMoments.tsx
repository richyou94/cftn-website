import Image from "next/image";
import FadeIn from "../FadeIn";
import { worshipPhotos, bwPhotos } from "@/app/lib/photos";

/**
 * Two images only — editorial split, colour vs. black-and-white.
 *
 * Left:  worship-03 — transcendent light flooding through worship (color, cinematic)
 * Right: bw-05     — woman singing, eyes closed, surrendered (bw, intimate)
 *
 * The contrast between the two tells the full story: atmosphere + devotion.
 */
const primary   = worshipPhotos[2]; // worship-03 — bright light, cinematic
const secondary = bwPhotos[4];      // bw-05      — girl singing, eyes closed

export default function WorshipMoments() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <FadeIn className="mb-16 flex items-center gap-6">
          <div className="divider" />
          <p
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
          >
            From the room
          </p>
        </FadeIn>

        {/* Two-image editorial split — colour left, black-and-white right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:h-[540px]">
          {/* Left — primary, landscape, cinematic light */}
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
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,14,13,0.3) 0%, transparent 45%)",
                }}
              />
            </div>
          </FadeIn>

          {/* Right — secondary, portrait, intimate bw */}
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
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,14,13,0.35) 0%, transparent 45%)",
                }}
              />
            </div>
          </FadeIn>
        </div>

        {/* Caption line */}
        <FadeIn delay={0.2}>
          <p
            className="mt-5 text-xs font-light tracking-wide"
            style={{
              color: "rgba(240,234,216,0.28)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Gatherings across the US — 2025–2026
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
