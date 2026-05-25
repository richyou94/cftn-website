import SmoothScroll from "@/src/components/SmoothScroll";
import HeroSection from "@/src/components/sections/HeroSection";
import PresenceSection from "@/src/components/sections/PresenceSection";
import WorshipMomentsSection from "@/src/components/sections/WorshipMomentsSection";
import CitiesSection from "@/src/components/sections/CitiesSection";
import MediaSection from "@/src/components/sections/MediaSection";
import InvitationSection from "@/src/components/sections/InvitationSection";
import Footer from "@/src/components/sections/Footer";
import FixedMusicPlayer from "@/src/components/media/FixedMusicPlayer";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <main className="pb-14">
          <HeroSection />
          <PresenceSection />
          <WorshipMomentsSection />
          <CitiesSection />
          <MediaSection />
          <InvitationSection />
          <Footer />
        </main>
      </SmoothScroll>
      <FixedMusicPlayer />
    </>
  );
}

