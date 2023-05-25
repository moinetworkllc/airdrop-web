import React, { useEffect, useState, useContext } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { CheckMark } from "../components/SvgComponent";
import { ThemeContext } from "../context/ThemeContext";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";
import { getData } from "../components/claim";

export default function Eligibility() {
  const {
    isDarkMode,
    loginId,
    handleLogin,
    setMoiState,
    moiState,
    setModalOpen,
    isModalOpen,
    setSignature,
    signature,
    loginData,
  } = useContext(ThemeContext);
  console.log("eligibility ", moiState.isMoid);

  const points = {
    moid: 0,
    phone_no: 0,
    email: 0,
    kyc: 0,
    validator_nodes: 0,
    validator_nodes_may: 0,
    twitter: 0,
    telegram: 0,
    discord: 0,
    interactions: 0,
    createdApp: 0,
    partApp: 0,
    createdAvatar: 0,
    scannedAvatar: 0,
    total: 0
  }

  if (moiState["isMoid"]) points.moid = 1;

  if (moiState["email"]) points.email =  2;

  if (moiState["phone_no"]) points.phone_no = 2;

  if (moiState["kyc"]) points.kyc = 5;

  if (moiState["validator_nodes"])
    points.validator_nodes = 10 * moiState.validator_nodes;

  if (moiState["validator_nodes_may"])
    points.validator_nodes_may =  10 * moiState.validator_nodes_may;

  if (moiState["createdAvatar"])
    points.createdAvatar = 10 * moiState["createdAvatar"];

  if (moiState["createdApp"]) 
    points.createdApp = 50 * moiState["createdApp"];

  if (moiState["scannedAvatar"])
    points.scannedAvatar = 5 * moiState["scannedAvatar"];

  if (moiState["partApp"]) points.partApp = 5 * moiState["partApp"];

  points.telegram =  moiState["telegram"] * 10;
  points.discord = moiState["discord"] * 10;
  points.twitter = moiState["twitter"] * 10;
  points.interactions =   moiState["interactions"] * 5 ;
 
  points.total = Object.values(points).reduce((a, b) => 
                              { return a + b;
                              }, 0)

  console.log("Total pointa are : ",points.total)

  function Claim() {
    const data = getData(moiState,loginData,points);
    loginData.iome.wallet.sign(data).then((txn) => 
      setSignature(txn.signature)
      //console.log("Yay got the signature : ", txn.signature)
    )
     
    
    }
          
  

  useEffect(() => {
    if (loginData) {
      handleLogin(loginData.userName);
    }
  }, [loginData]);

  return (
    <>
      <div className="absolute">
        {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_GJh4G3t17P.json"
          
          controls
          autoplay
        ></lottie-player> */}
        {/*  background="transparent"  speed="1"  style="width: 300px; height: 300px;" */}
      </div>
      <div className="flex justify-center py-20">
        <Modal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
        <div
          className={`flex flex-col lg:flex-row max-w-5xl backdrop-blur-xl mx-6 lg:mx-0 font-semibold border ${
            isDarkMode ? "bg-moi-light border-moi-black-100 text-moi-purple-600" : "bg-moi-dark border-moi-purple-100 text-moi-white-100"
          } rounded-xl`}
        >
          <div
            className={`w-full lg:w-[40%] p-4 lg:p-10 lg:border-r ${
              isDarkMode ? "border-moi-black-100" : "border-moi-purple-100"
            } `}
          >
            <p className="text-3xl font-bold">Ah shoot</p>
            <p className="py-8">
              Looks like this wallet isn’t eligible. No stress, you can still
              participate in the ecosystem and governance in several ways.
            </p>
            <div
              className={`bg-card-bg border ${
                isDarkMode ? "border-moi-black-100" : "border-moi-purple-100"
              } rounded-2xl`}
            >
              <p className="p-4">
                A minimum of 3 points total are required to be eligible. If you
                scored less than 3 points, all criteria will be crossed out.
              </p>
              <p className="p-4">{`Your points: ${points.total}`}</p>
            </div>

            <div className="md:flex md:items-center">

              {!loginId ? (
                <ButtonComponent
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                  className="shadow !bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-8"
                >
                  Login Moi ID
                </ButtonComponent>
              ) : points.total >= 3 ? (
                <ButtonComponent
                  onClick = {Claim}
                  variant="secondary"
                  className="my-8"
                  spanClass="!text-sm !py-3 !px-3"
                >
                  Claim Tokens
                </ButtonComponent>
              ) : (
                <ButtonComponent
                  variant="secondary"
                  className="my-8"
                  spanClass="!text-sm !py-3 !px-3"
                >
                  Ineligible to claim Tokens
                </ButtonComponent>
              )}
            </div>
          </div>
          <div className="border border-white block lg:hidden"></div>
          <div className="w-full lg:w-[60%] p-6 lg:p-10">
            <Accordion />
          </div>
        </div>
      </div>
    </>
  );
}
