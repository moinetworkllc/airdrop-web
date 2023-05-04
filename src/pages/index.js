import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import { classNames } from '../utils/helpers';

export default function Home() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <div className={classNames(isDarkMode ? "bg-black" : "bg-gray-200")}>
        <div className="pt-24 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 min-h-screen">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p>Website</p>
          </div>

          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
            <p>MOI AIRDROP</p>
          </div>

          <div className="mb-32 grid lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
        </div>
      </div>
    </>
  );
}
