import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Gatherings from "./components/sections/Gatherings";
import Community from "./components/sections/Community";
import Connect from "./components/sections/Connect";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="gatherings">
          <Gatherings />
        </section>
        <section id="community">
          <Community />
        </section>
        <section id="connect">
          <Connect />
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}

