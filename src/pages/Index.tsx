import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { LandingOverlay } from "@/components/LandingOverlay";
import { StartSection } from "@/components/sections/StartSection";
import { WhySection } from "@/components/sections/WhySection";
import { SignalsSection } from "@/components/sections/SignalsSection";
import { DriversSection } from "@/components/sections/DriversSection";
import { FuturesSection } from "@/components/sections/FuturesSection";
import { NextStepsSection } from "@/components/sections/NextStepsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

const Index = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <>
      {showOverlay && <LandingOverlay onEnter={() => setShowOverlay(false)} />}
      <NavBar />
      <div className="pt-16">
        <StartSection />
        <WhySection />
        <SignalsSection />
        <DriversSection />
        <FuturesSection />
        <NextStepsSection />
        <ProcessSection />
      </div>
    </>
  );
};

export default Index;
