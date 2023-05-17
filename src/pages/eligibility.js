import React, { useEffect, useState, useContext } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { CheckMark } from "../components/SvgComponent";
import { ThemeContext } from "../context/ThemeContext";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";

export default function Eligibility() {
  const {
    isDarkMode,
    loginId,
    handleLogin,
    setMoiState,
    moiState,
    setModalOpen,
    isModalOpen,
    loginData
  } = useContext(ThemeContext);
  console.log("eligibility ", moiState.isMoid);
  let points_ = 0;
  if (moiState["isMoid"]) points_ = points_ + 1;

  if (moiState["email"]) points_ = points_ + 2;

  if (moiState["phone_no"]) points_ = points_ + 2;

  if (moiState["kyc"]) points_ = points_ + 5;

  if (moiState["validator_nodes"]) points_ = points_ + 10*moiState.validator_nodes;

  if (moiState["createdAvatar"]) points_ = points_ + 10;

  if (moiState["createdApp"]) points_ = points_ + 50;

  if (moiState["scannedAvatar"]) points_ = points_ + 5;

  points_ =
    moiState["telegram"] * 10 +
    moiState["discord"] * 10 +
    moiState["twitter"] * 10 +
    moiState["interactions"] * 5 +
    points_;

    useEffect(() => {
      if(loginData) {
        handleLogin(loginData.userName);
      }
    }, [loginData])

  return (
    <>
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
        className={`flex justify-center bg-moi-blur py-20 ${
          isDarkMode ? "bg-black" : "bg-moi-white"
        }`}
      >
        <Modal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
        <div
          className={`flex flex-col lg:flex-row max-w-5xl bg-eligibility-gradient border ${
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
              <p className="p-4">{`Your points: ${points_}`}</p>
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
                    console.log("logn")
                  }
                >
                  Log In
                </button>
              ) : (
                <p>{"0zAND1z"}</p>
              )}
            </div>
          </div>

          <div className="w-[60%] p-6 lg:p-10">
            <Accordion />
          </div>
        </div>
      </div>
    </>
  );
}
