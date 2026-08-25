import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Work from "@/components/Work";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Fx from "@/components/Fx";

export default function Home() {
  return (
    <>
      <Reveal />
      <Fx />
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Stats />
        <Process />
        <Work />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
