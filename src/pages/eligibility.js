import React, { useEffect, useState, useContext } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { CheckMark } from "../components/SvgComponent";
import { ThemeContext } from "../context/ThemeContext";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";
import { getData } from "../components/claim";
import { getCid} from "../components/pinata"
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
    points,
    kramaIds,
    loading
  } = useContext(ThemeContext);
  const router = useRouter();
  const [confetti, setConfetti] = useState(false)
  const [totalPoints, setTotalPoints] = useState(0)
  const [data, setData] = useState("")

  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);

  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);

  useEffect(() => {
    console.log(moiState);
    const pointsEarned = Object.values(points).reduce((a, b) => {
      return a + b;
    }, 0);
    setTotalPoints(pointsEarned);
  }, [points]);

  const amount = totalPoints * 100 + rewards;
  console.log("Airdrop amount : ", amount);

  function Claim() {
    setData(
      getData(
        moiState,
        loginData,
        points,
        totalPoints,
        rewards,
        amount,
        kramaIds
      )
    );
    console.log(data);
    loginData.iome.wallet.sign(data).then((txn) => setSignature(txn.signature));
    console.log(signature);
    setConfetti(true);
  }
  // useEffect(() => {
  //   const details =  JSON.parse(data)
  //   details["signature"] = signature
  //   data = JSON.stringify(details)
  //   console.log(data)
  //   const cid =  getCid(data)
  //   console.log("CID = ", cid)

  // }, [signature])
  useEffect(() => {
    if (confetti) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ["💎", "💎", "✨", "💎", "💎", "💫"],
      });
      jsConfetti.addConfetti({
        confettiColors: [
          "#ff0a54",
          "#ff477e",
          "#ff7096",
          "#ff85a1",
          "#fbb1bd",
          "#f9bec7",
        ],
      });
      jsConfetti.addConfetti().then();
      console.log("Confetti animation completed!");
    }
  });

  useEffect(() => {
    if (loginData) {
      handleLogin(loginData.userName);
    }
  }, [loginData]);

  useEffect(() => {
    !Object.keys(moiState["isMoid"]).length && router.push("/");
  }, [moiState["isMoid"]]);

  console.log('rewards', rewards);

  return (
    <div className="py-20">
      <div className="flex justify-center">
        <Modal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
        {loading ? (
          <p className="text-black text-bold text-xl">Loding.......</p>
        ) : (
          <div
            id="container"
            className={`flex flex-col lg:flex-row max-w-5xl mx-6 lg:mx-0 font-semibold border ${
              isDarkMode
                ? "bg-moi-card-light backdrop-opacity-light border-moi-white-400 text-moi-purple-600"
                : "bg-moi-card-dark backdrop-opacity-dark border-moi-white-700 text-moi-white-100"
            } rounded-xl`}
          >
            <div
              className={`w-full lg:w-[40%] p-4 lg:p-10 lg:border-r ${
                isDarkMode ? "border-moi-white-400" : "border-moi-white-700"
              } `}
            >
              {totalPoints >= 6 ? (
                <>
                  <p className="text-3xl font-bold">Congrats! 🥳</p>
                  <p className="py-8">
                    We want to thank you for all your support and early
                    participation at MOI. Go ahead and claim your benefits
                    rightaway!
                  </p>
                  <div
                    className={`bg-card-bg shadow border ${
                      isDarkMode
                        ? "border-moi-white-400"
                        : "border-moi-white-700"
                    } rounded-2xl`}
                  >
                    <p className="p-4">
                      A minimum of 6 points in total are required to be eligible
                      for the airdrop.
                    </p>
                    <p className="p-4">{`You can claim ${amount} MOI tokens`}</p>
                    <p className="p-4">{`Your points: ${totalPoints}`}</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-3xl font-bold">Ah shoot !</p>
                  <p className="py-8">
                    Looks like you are not eligible for now. No sweat, you may
                    become eligible in the future rounds by exploring the
                    ecosystem, host nodes, fulfil bounties and start using apps.
                  </p>
                  <div
                    className={`bg-card-bg shadow border ${
                      isDarkMode
                        ? "border-moi-white-400"
                        : "border-moi-white-700"
                    } rounded-2xl`}
                  >
                    <p className="p-4">
                      A minimum of 6 points in total are required to be eligible
                      for the airdrop.
                    </p>
                    <p className="p-4">{`Your points: ${totalPoints}`}</p>
                  </div>
                </>
              )}

              <div className="md:flex md:items-center">
                {!loginId ? (
                  <ButtonComponent
                    onClick={() => setModalOpen(true)}
                    variant="primary"
                    className="shadow !bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-8"
                  >
                    Login Moi ID
                  </ButtonComponent>
                ) : totalPoints >= 6 ? (
                  <ButtonComponent
                    onClick={Claim}
                    variant="secondary"
                    className="my-8"
                  >
                    Claim tokens
                  </ButtonComponent>
                ) : (
                  <ButtonComponent
                    variant="secondary"
                    className="my-8"
                    spanClass=""
                  >
                    Explore MOI Ecosystem
                  </ButtonComponent>
                )}
              </div>
            </div>
            <div className="border border-white block lg:hidden"></div>
            <div className="w-full lg:w-[60%] p-6 lg:p-10">
              <Accordion/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
