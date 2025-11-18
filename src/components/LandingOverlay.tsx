import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface LandingOverlayProps {
  onEnter: () => void;
}

export const LandingOverlay = ({ onEnter }: LandingOverlayProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while overlay is visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  const handleEnter = () => {
    setIsVisible(false);
    setTimeout(onEnter, 600);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background animate-fade-in">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="inline-block px-4 py-2 rounded-full border border-accent-good/30 text-sm font-medium text-accent-good mb-4">
          Foresight Microsite
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-pulse-glow">
          The Future of Suffering
          <span className="block mt-2 gradient-text">
            Redefining Well-being in a Post-AI World
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          A guided journey to 2040 and back
        </p>

        <Button
          size="lg"
          onClick={handleEnter}
          className="group mt-8 bg-accent-good hover:bg-accent-good/90 text-background font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 glow-good"
        >
          Enter the Future
          <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};
