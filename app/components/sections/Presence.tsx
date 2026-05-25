import Image from "next/image";
import FadeIn from "../FadeIn";
import { bwPhotos } from "@/app/lib/photos";

// bw-02 — woman singing, eyes closed. Most intimate and contemplative.
const photo = bwPhotos[1];

export default function Presence() {
  return (
    <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
      {/* Full-bleed black-and-white image */}
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover object-[center_25%]"
        sizes="100vw"
      />

      {/* Dark overlay — heavier than hero to feel more interior, more still */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(15,14,13,0.52)" }}
      />

      {/* Soft edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 25%, rgba(15,14,13,0.65) 100%)",
        }}
      />

      {/* Centered scripture — no headline, just the word */}
      <FadeIn
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        y={10}
        duration={1.6}
      >
        <p
          className="text-3xl sm:text-4xl md:text-5xl font-light italic leading-[1.3] max-w-2xl"
          style={{
            color: "rgba(240,234,216,0.82)",
            fontFamily: "var(--font-cormorant)",
          }}
        >
          &ldquo;Where the Spirit of the Lord is,
          <br />
          there is freedom.&rdquo;
        </p>
        <p
          className="mt-6 text-xs tracking-[0.3em] uppercase"
          style={{
            color: "var(--accent)",
            fontFamily: "var(--font-inter)",
            opacity: 0.65,
          }}
        >
          2 Corinthians 3:17
        </p>
      </FadeIn>
    </section>
  );
}
