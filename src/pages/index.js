import React from "react";
import MainSection from "../components/MainPage/MainSection";
import WhyMoi from "../components/MainPage/WhyMoi";
import CardSlides from "../components/MainPage/CardSlides";
import Distribution from "../components/MainPage/Distribution";

export default function Home({ data }) {

  return (
    <>
      <div>
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
