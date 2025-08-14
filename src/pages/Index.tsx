// Portfolio page components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

// Layout and utility components
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import EasterEggs from "@/components/EasterEggs";

// Custom hooks and context
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProfileProvider } from "@/context/ProfileContext";

/**
 * Main portfolio page component
 * 
 * This component serves as the main entry point for the portfolio website.
 * It combines all portfolio sections into a single scrollable page with:
 * - Responsive navigation
 * - Theme switching capability
 * - Smooth scroll animations
 * - Easter egg functionality for fun interactions
 * 
 * The component is wrapped with ProfileProvider to provide portfolio data
 * to all child components through React Context.
 */
const Index = () => {
  // Initialize scroll-based animations for page sections
  useScrollAnimation();

  return (
    <ProfileProvider>
      <div className="min-h-screen">
        {/* Fixed navigation and controls */}
        <Navigation />
        <ThemeToggle />
        <EasterEggs />
        
        {/* Main portfolio sections */}
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
