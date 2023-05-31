import React, { useEffect, useState, useContext } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { CheckMark } from "../components/SvgComponent";
import { ThemeContext } from "../context/ThemeContext";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";
import { getData } from "../components/claim";
import { useRouter } from 'next/router';
import JSConfetti from 'js-confetti'

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
    rewards,
    setPoints,
    points
  } = useContext(ThemeContext);
  const router = useRouter();
  const [confetti, setConfetti] = useState(false)
  const [totalPoints, setTotalPoints] = useState(0)

  useEffect(() => {
    const pointsEarned = Object.values(points).reduce((a, b) => { return a + b }, 0)
    console.log('pointsEarned', pointsEarned);
    setTotalPoints(pointsEarned)
  }, [points])

  points.rewards = rewards
  points.amount = totalPoints*100 + points.rewards
  console.log("Airdrop amount : ", points.amount)
  function Claim() {
    const data = getData(moiState, loginData, points, totalPoints);
    loginData.iome.wallet.sign(data).then((txn) => 
      setSignature(txn.signature)
    )   
    setConfetti(true)
  }
          
  useEffect(() => {
    if (confetti){
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti({
      emojis: ['💎', '💎', '✨', '💎', '💎', '💫'],
      
   })
   jsConfetti.addConfetti({
    confettiColors: [
      '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
    ],
  })
   jsConfetti.addConfetti().then()
      console.log('Confetti animation completed!') 
    }}
    );

  useEffect(() => {
    if (loginData) {
      handleLogin(loginData.userName);
    }
  }, [loginData]);

  useEffect(() => {
    !Object.keys(moiState["isMoid"]).length && router.push("/");
  }, [moiState["isMoid"]])

  return (
    <div className="py-20">
      <div className="absolute">
        {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_GJh4G3t17P.json"
          
          controls
          autoplay
        ></lottie-player> */}
        {/*  background="transparent"  speed="1"  style="width: 300px; height: 300px;" */}
      </div>
      <div className="flex justify-center">
        <Modal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
        <div
        id="container"
          className={`flex flex-col lg:flex-row max-w-5xl mx-6 lg:mx-0 font-semibold border ${
            isDarkMode ? "bg-moi-card-light backdrop-opacity-light border-moi-white-400 text-moi-purple-600" : "bg-moi-card-dark backdrop-opacity-dark border-moi-white-700 text-moi-white-100"
          } rounded-xl`}
        >
          <div
            className={`w-full lg:w-[40%] p-4 lg:p-10 lg:border-r ${
              isDarkMode ? "border-moi-white-400" : "border-moi-white-700"
            } `}
          >
            <p className="text-3xl font-bold">Ah shoot</p>
            <p className="py-8">
              Looks like this wallet isn’t eligible. No stress, you can still
              participate in the ecosystem and governance in several ways.
            </p>
            <div
              className={`bg-card-bg shadow border ${
                isDarkMode ? "border-moi-white-400" : "border-moi-white-700"
              } rounded-2xl`}
            >
              <p className="p-4">
                A minimum of 3 points total are required to be eligible. If you
                scored less than 3 points, all criteria will be crossed out.
              </p>
              <p className="p-4">{`Your points: ${totalPoints}`}</p>
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
              ) : totalPoints >= 3 ? (
                <ButtonComponent
                  onClick = {Claim}
                  variant="secondary"
                  className="my-8"
                >
                  Claim Tokens
                </ButtonComponent>
              ) : (
                <ButtonComponent
                  variant="secondary"
                  className="my-8"
                  spanClass=""
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
    </div>
  );
}
