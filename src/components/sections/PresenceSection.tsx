import Image from "next/image";
import FadeIn from "@/src/components/FadeIn";
import { bwPhotos } from "@/app/lib/photos";

// bw-02 — woman singing, eyes closed. The quietest, most contemplative frame.
const photo = bwPhotos[1];

export default function PresenceSection() {
  return (
    <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover object-[center_25%]"
        sizes="100vw"
      />

      {/* Layered overlays for depth */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(15,14,13,0.50)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(15,14,13,0.65) 100%)",
        }}
      />

      {/* Scripture — centered, no decoration, just the word */}
      <FadeIn
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        y={10}
        duration={1.6}
      >
        <p
          className="text-3xl sm:text-4xl md:text-5xl font-light italic leading-[1.35] max-w-2xl"
          style={{ color: "rgba(240,234,216,0.82)", fontFamily: "var(--font-cormorant)" }}
        >
          &ldquo;Where the Spirit of the Lord is,
          <br />
          there is freedom.&rdquo;
        </p>
        <p
          className="mt-6 text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--accent)", fontFamily: "var(--font-inter)", opacity: 0.62 }}
        >
          2 Corinthians 3:17
        </p>
      </FadeIn>
    </section>
  );
}
