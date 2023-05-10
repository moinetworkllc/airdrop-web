import React, { useEffect, useState, useContext } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { CheckMark } from "../components/SvgComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/ThemeContext";
import Accordion from "../components/Accordion";

export default function Eligibility() {
  const { isDarkMode, loginId, handleLogin, setMoiState } =
    useContext(ThemeContext);

  const getEligibility = async () => {
    // let id = "0x9755aa020dB3784B15F286820CF4b6FC0075a712"
    let response = await fetch(`/api/moi?id=${loginId}`);
    let data = await response.json();
    console.log(data);
    //save these

    setMoiState((prevData) => ({
      ...prevData,
      validator_nodes: data.validator_nodes.length,
      twitter: data.twitter.data.level,
      telegram: data.telegram.data.level,
      discord: data.discord.data.level,
    }));
    console.log(data.validator_nodes.length);
    console.log(data.twitter.data.level);
    console.log(data.telegram.data.level);
    console.log(data.discord.data.level);
  };

  useEffect(() => {
    loginId && getEligibility();
  }, [loginId]);

  return (
    <>
      <Header />
      <div className="absolute">
        {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_GJh4G3t17P.json"
          loop
          controls
          autoplay
        ></lottie-player> */}
        {/*  background="transparent"  speed="1"  style="width: 300px; height: 300px;" */}
      </div>
      <div
        className={`flex justify-center py-20 ${
          isDarkMode ? "bg-black" : "bg-moi-white"
        }`}
      >
        <div
          className={`flex flex-col lg:flex-row max-w-5xl bg-card-bg border ${
            isDarkMode ? "border-white text-white" : "border-black text-black"
          } rounded-xl`}
        >
          <div
            className={`w-[40%] p-6 lg:p-10 lg:border-r ${
              isDarkMode ? "border-white" : "border-black"
            } `}
          >
            <p className="text-3xl font-bold">Ah shoot</p>
            <p className="py-8">
              Looks like this wallet isn’t eligible. No stress, you can still
              participate in the ecosystem and governance in several ways.
            </p>
            <div
              className={`bg-card-bg border ${
                isDarkMode ? "border-white" : "border-black"
              } rounded-2xl`}
            >
              <p className="p-4">
                A minimum of 3 points total are required to be eligible. If you
                scored less than 3 points, all criteria will be crossed out.
              </p>
            </div>
            <ButtonComponent
              variant="secondary"
              className="my-8"
              spanClass="!text-sm !py-3 !px-3"
            >
              Explore projects on MOI
            </ButtonComponent>
            <div className="md:flex md:items-center">
              {!loginId ? (
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    handleLogin("0x9755aa020dB3784B15F286820CF4b6FC0075a712")
                  }
                >
                  Log In
                </button>
              ) : (
                <p>{"0x975...5a712"}</p>
              )}
            </div>
          </div>

          <div className="w-[60%] p-6 lg:p-10">
            <Accordion />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
