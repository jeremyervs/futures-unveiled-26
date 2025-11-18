import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "start", label: "Start" },
  { id: "why", label: "Why This Project" },
  { id: "signals", label: "Signals Today" },
  { id: "drivers", label: "Six Drivers" },
  { id: "futures", label: "Two Futures (2040)" },
  { id: "next", label: "What We Do Next" },
  { id: "process", label: "About Foresight" },
];

export const NavBar = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("start");

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progressPercent = (scrolled / scrollHeight) * 100;
      setProgress(progressPercent);

      // Update active section based on scroll position
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.find((el, idx) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom > 200;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-lg gradient-text">The Future of Suffering</div>
        
        <div className="hidden lg:flex items-center gap-1">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(section.id)}
              className={`transition-colors ${
                activeSection === section.id
                  ? "text-accent-good"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {section.label}
            </Button>
          ))}
        </div>

        <div className="px-3 py-1.5 rounded-full border border-border text-xs font-medium">
          Foresight Microsite
        </div>
      </div>
      
      <div
        className="h-0.5 bg-gradient-to-r from-accent-good via-accent-neutral to-accent-risk transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </nav>
  );
};
