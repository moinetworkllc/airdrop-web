import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { classNames } from '../utils/helpers';
import LandingPage from '../components/LandingPage'

export default function Home() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <Header/>
      <div className={classNames(isDarkMode ? "bg-black" : "bg-moi-white")}>
        <div className="pt-14 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 min-h-screen">
          <LandingPage/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
