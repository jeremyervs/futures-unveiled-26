import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tickerItems, TickerItem } from "@/data/tickerData";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NewsTickerProps {
  activeScenario: "baseline" | "transformation";
}

export const NewsTicker = ({ activeScenario }: NewsTickerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Map transformation to symbiotic for ticker items
  const scenarioType = activeScenario === "baseline" ? "baseline" : "symbiotic";

  // Prioritize headlines based on active scenario
  const sortedItems = [...tickerItems].sort((a, b) => {
    if (a.scenario === scenarioType && b.scenario !== scenarioType) return -1;
    if (a.scenario !== scenarioType && b.scenario === scenarioType) return 1;
    return 0;
  });

  const currentItem = sortedItems[currentIndex];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sortedItems.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, sortedItems.length]);

  const formatDriverTag = (driver: string) => {
    const driverMap: Record<string, string> = {
      labor: "AI & Labor",
      decisions: "AI Decisions",
      connection: "Human Connection",
      "info-integrity": "Info Integrity",
      healthcare: "Healthcare",
      governance: "Governance",
      purpose: "Purpose",
      sanctuaries: "Sanctuaries",
      wellbeing: "Well-being"
    };
    return driverMap[driver] || driver;
  };

  return (
    <TooltipProvider>
      <div
        className="fixed bottom-0 left-0 right-0 z-50 h-12 backdrop-blur-xl border-t transition-all duration-500"
        style={{
          backgroundColor:
            currentItem.scenario === "baseline"
              ? "hsl(var(--background) / 0.95)"
              : "hsl(var(--background) / 0.95)",
          borderTopColor:
            currentItem.scenario === "baseline"
              ? "hsl(var(--accent-risk) / 0.3)"
              : "hsl(var(--accent-good) / 0.3)",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="h-full flex items-center justify-center px-4 gap-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 flex-wrap justify-center"
            >
              {/* Scenario Badge */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge
                    className={`text-xs font-bold px-2 py-0.5 ${
                      currentItem.scenario === "baseline"
                        ? "bg-accent-risk/20 text-accent-risk border-accent-risk/30"
                        : "bg-accent-good/20 text-accent-good border-accent-good/30"
                    }`}
                  >
                    {currentItem.scenario === "baseline"
                      ? "BASELINE 2040"
                      : "SYMBIOTIC 2040"}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">
                    This is a plausible 2040 headline in the{" "}
                    {currentItem.scenario === "baseline" ? "Baseline" : "Symbiotic"}{" "}
                    world.
                  </p>
                </TooltipContent>
              </Tooltip>

              {/* Driver Tags */}
              {currentItem.drivers?.slice(0, 2).map((driver, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="text-xs px-2 py-0.5 bg-muted/50 text-muted-foreground"
                >
                  {formatDriverTag(driver)}
                </Badge>
              ))}

              {/* Headline Text */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-sm text-foreground max-w-4xl text-center leading-tight">
                    {currentItem.text}
                  </p>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">
                    This is a plausible 2040 headline in the{" "}
                    {currentItem.scenario === "baseline" ? "Baseline" : "Symbiotic"}{" "}
                    world.
                  </p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </TooltipProvider>
  );
};
