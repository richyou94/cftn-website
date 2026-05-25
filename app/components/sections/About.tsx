import Image from "next/image";
import FadeIn from "../FadeIn";
import { worshipPhotos } from "@/app/lib/photos";

const featurePhoto = worshipPhotos[5]; // worship-06-acoustic_guitar — organic, intimate, quiet

export default function About() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Subtle background texture block */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(184,151,90,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left — large image placeholder */}
        <FadeIn delay={0.1}>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={featurePhoto.src}
              alt={featurePhoto.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Bottom gradient caption bar */}
            <div
              className="absolute inset-0 flex items-end p-8"
              style={{ background: "linear-gradient(to top, rgba(15,14,13,0.65) 0%, transparent 55%)" }}
            >
              <p
                className="text-xs tracking-[0.25em] uppercase"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-inter)",
                  opacity: 0.7,
                }}
              >
                Worship gathering — Nashville, TN
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Right — text */}
        <div className="flex flex-col gap-10">
          <FadeIn delay={0.25}>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--accent)", fontFamily: "var(--font-inter)" }}
            >
              What we are
            </p>
            <h2
              className="text-5xl sm:text-6xl font-light leading-[1.1] italic"
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Not a conference.
              <br />
              Not a church.
              <br />A room.
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="divider mb-8" />
            <p
              className="text-base leading-[1.9] font-light"
              style={{
                color: "rgba(240,234,216,0.6)",
                fontFamily: "var(--font-inter)",
              }}
            >
              Celebration for the Nations is a worship movement — not an event
              company. We gather worship leaders, teams, and hungry believers
              across denominational lines to encounter the presence of God
              together.
            </p>
          </FadeIn>

          <FadeIn delay={0.55}>
            <p
              className="text-base leading-[1.9] font-light"
              style={{
                color: "rgba(240,234,216,0.6)",
                fontFamily: "var(--font-inter)",
              }}
            >
              No headliners. No platform. Just worship — honest, unrushed, and
              deep.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
