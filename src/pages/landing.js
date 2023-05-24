import React from "react";
import HeroSection from "../components/LandingComp/HerSection";
import WhyMoi from "../components/LandingComp/WhyMoi";
import StepForward from "../components/LandingComp/StepForward";
import Distribution from "../components/LandingComp/Distribution";

const LandingPage = () => {
  return (
    <>
      <div className="p-4 lg:p-auto mx-[64px] flex flex-col gap-y-28 2xl:max-w-screen-2xl 2xl:mx-auto">
        <HeroSection />
        <WhyMoi />
        <Distribution />
        <StepForward />
      </div>
    </>
  );
};

export default LandingPage;
