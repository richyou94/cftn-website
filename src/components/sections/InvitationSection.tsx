import FadeIn from "@/src/components/FadeIn";

/**
 * InvitationSection — a quiet closing invitation.
 *
 * One sentence. One button. No pitch.
 * This is the last section before the footer, so it should
 * feel like a gentle door held open, not a conversion funnel.
 */

export default function InvitationSection() {
  return (
    <section
      id="invite"
      className="relative section-padding overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Warm radial glow — centered, very low opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 60%, rgba(200,164,107,0.055) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto text-center px-6">

        {/* Label */}
        <FadeIn className="mb-14 flex items-center justify-center gap-5">
          <div className="divider" />
          <p className="text-label" style={{ color: "rgba(200,164,107,0.55)" }}>
            The gathering is open
          </p>
          <div className="divider" />
        </FadeIn>

        {/* Main invitation copy */}
        <FadeIn delay={0.1}>
          <p
            className="font-light italic leading-snug mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.65rem, 3.5vw, 2.4rem)",
              color: "rgba(242,240,235,0.88)",
            }}
          >
            Come worship with us.
          </p>
        </FadeIn>

        <FadeIn delay={0.22}>
          <p
            className="font-light italic leading-snug"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.65rem, 3.5vw, 2.4rem)",
              color: "rgba(242,240,235,0.48)",
            }}
          >
            Carry the fire back to your city
            <br className="hidden sm:block" />
            {" "}and your church.
          </p>
        </FadeIn>

        {/* Thin separator */}
        <FadeIn delay={0.38}>
          <div
            className="mx-auto my-12"
            aria-hidden="true"
            style={{
              width: "1px",
              height: "44px",
              background: "linear-gradient(to bottom, rgba(200,164,107,0.18), transparent)",
            }}
          />
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.48}>
          <a
            href="#"
            className="group inline-block px-9 py-3.5 text-label transition-all duration-300 hover:border-opacity-80"
            style={{
              border: "1px solid rgba(200,164,107,0.35)",
              color: "rgba(242,240,235,0.62)",
            }}
          >
            <span className="transition-colors duration-300 group-hover:text-[rgba(200,164,107,0.9)]">
              Get Connected
            </span>
          </a>
        </FadeIn>

        {/* Closing note */}
        <FadeIn delay={0.6}>
          <p
            className="mt-10 font-light"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "var(--type-xs)",
              color: "rgba(242,240,235,0.16)",
              letterSpacing: "0.04em",
            }}
          >
            No announcements. No platform. Only presence.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
