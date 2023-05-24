import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { classNames } from "../utils/helpers";
import LandingPage from "../components/LandingPage";

export default function Home({ data }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div 
      // className={classNames(isDarkMode ? "bg-black" : "bg-[#F5F2FF]")}
      >
        <div className="pt-14 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 min-h-screen">
          <LandingPage />
        </div>
      </div>
    </>
  );
}
