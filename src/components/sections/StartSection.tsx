import { CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const StartSection = () => {
  return (
    <section id="start" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-0" />

      <div className="content-container relative z-10 grid lg:grid-cols-2 gap-12 items-center px-6">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            By 2040, AI will be everywhere.
            <span className="block mt-3 gradient-text">
              The question is: what happens to suffering?
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            This project explores how the universal integration of AI will reshape human suffering and well-being over the next 15 years. We move beyond traditional definitions to investigate emerging existential, psychological, and social challenges.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-accent-good mt-1 flex-shrink-0" size={20} />
              <p className="text-foreground">Explore two distinct worlds of 2040</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-accent-good mt-1 flex-shrink-0" size={20} />
              <p className="text-foreground">Discover the six forces driving these futures</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-accent-good mt-1 flex-shrink-0" size={20} />
              <p className="text-foreground">Decide how we respond today</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 animate-slide-up">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Your Journey</h3>
          {[
            { num: "01", label: "Why This Project", color: "accent-neutral" },
            { num: "02", label: "Signals Today", color: "accent-neutral" },
            { num: "03", label: "Six Drivers", color: "accent-neutral" },
            { num: "04", label: "Two Futures (2040)", color: "accent-good" },
            { num: "05", label: "What We Do Next", color: "accent-risk" },
            { num: "06", label: "About Foresight", color: "accent-neutral" },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:bg-card transition-colors"
            >
              <div className={`text-2xl font-bold text-${step.color}`}>
                {step.num}
              </div>
              <div className="text-foreground font-medium">{step.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
