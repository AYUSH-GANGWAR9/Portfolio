import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Achievements />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CodingProfiles />
      <Contact />
    </div>
  );
}
