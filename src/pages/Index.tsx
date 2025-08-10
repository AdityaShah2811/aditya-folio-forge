import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import EasterEggs from "@/components/EasterEggs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProfileProvider } from "@/context/ProfileContext";

const Index = () => {
  useScrollAnimation();

  return (
    <ProfileProvider>
      <div className="min-h-screen">
        <Navigation />
        <ThemeToggle />
        <EasterEggs />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </ProfileProvider>
  );
};

export default Index;
