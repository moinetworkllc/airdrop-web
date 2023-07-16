import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { classNames } from "../utils/helpers";
import MainSection from "../components/LandingComp/MainSection";
import WhyMoi from "../components/LandingComp/WhyMoi";
import CardSlides from "../components/LandingComp/CardSlides";
import Distribution from "../components/LandingComp/Distribution";

export default function Home({ data }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div
      // className={classNames(isDarkMode ? "bg-black" : "bg-[#F5F2FF]")}
      >
        <div className="px-0 py-6 lg:pt-12 lg:px-4 lg:p-auto flex flex-col gap-y-28 2xl:max-w-screen-2xl mx-5 md:mx-[64px] 2xl:mx-auto">
          <MainSection />
          <WhyMoi />
          <Distribution />
          <CardSlides />
        </div>
      </div>
    </>
  );
}
