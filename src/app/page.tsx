import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f7f3f2]">
      <Navigation />

      <Hero />

      <Skills />

      <Projects />

      <Contact />
    </div>
  );
}
