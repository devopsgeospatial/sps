import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { ZoneAgent } from "@/components/site/ZoneAgent";
import { Story } from "@/components/site/Story";
import { Contact } from "@/components/site/Contact";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <ZoneAgent />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
