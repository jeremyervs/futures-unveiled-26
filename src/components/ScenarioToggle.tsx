import { motion } from "framer-motion";

interface ScenarioToggleProps {
  active: "baseline" | "transformation";
  onChange: (scenario: "baseline" | "transformation") => void;
}

export const ScenarioToggle = ({ active, onChange }: ScenarioToggleProps) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="relative inline-flex rounded-full bg-secondary p-1 border border-border">
        <motion.div
          className="absolute top-1 bottom-1 rounded-full"
          style={{
            width: "calc(50% - 8px)",
            backgroundColor: active === "baseline" ? "hsl(var(--accent-risk))" : "hsl(var(--accent-good))",
            boxShadow: active === "baseline" ? "var(--glow-risk)" : "var(--glow-good)",
          }}
          animate={{
            left: active === "baseline" ? "4px" : "calc(50% + 4px)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        
        <button
          onClick={() => onChange("baseline")}
          className={`relative z-10 w-[140px] sm:w-[180px] md:w-[200px] py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300 text-center ${
            active === "baseline" ? "text-background" : "text-muted-foreground"
          }`}
        >
          Baseline World
        </button>
        
        <button
          onClick={() => onChange("transformation")}
          className={`relative z-10 w-[140px] sm:w-[180px] md:w-[200px] py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300 text-center ${
            active === "transformation" ? "text-background" : "text-muted-foreground"
          }`}
        >
          Transformation World
        </button>
      </div>
    </div>
  );
};
