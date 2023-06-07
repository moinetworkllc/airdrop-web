import React, { useEffect, useState, useContext, useCallback } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { CheckMark } from "../components/SvgComponent";
import { ThemeContext } from "../context/ThemeContext";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";
import { getData } from "../components/claim";
import { getCid } from "../components/pinata";
import { useRouter } from "next/router";
import JSConfetti from 'js-confetti'
import PopoverModal from '../components/PopoverModal'
const contract = require("../components/contract.json");
require("dotenv").config();
const { ethers } = require("ethers");

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
    loading,
  } = useContext(ThemeContext);
  const router = useRouter();
  const [totalPoints, setTotalPoints] = useState(0);
  const [data, setData] = useState("");
  const [cid, setCid] = useState("");
  const [confetti, setConfetti] = useState(false)
  const [claimModal, setClaimModal] = useState(false);
  const [checkedCitizen, setCheckedCitizen] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [claimTokens, setClaimTokens] = useState(false);
  const [txModal, setTxModal] = useState(false);
  const [txnHash, setTxnHash] = useState("");

  useEffect(() => {
    const pointsEarned = Object.values(points).reduce((a, b) => {
      return a + b;
    }, 0);
    setTotalPoints(pointsEarned);
  }, [points]);

  const amount = totalPoints * 100 + rewards;

  useEffect(() => {
    if (checkedCitizen) {
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
      loginData.iome.wallet
        .sign(data)
        .then((txn) => setSignature(txn.signature));
    }
  }, [claimTokens]);

  function Claim() {
    setClaimModal(true);
  }
  useEffect(() => {
    if (loginData && data) {
      loginData.iome.wallet
        .sign(data)
        .then((txn) => setSignature(txn.signature));
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const details = JSON.parse(data);
      details["signature"] = signature;
      let data_ = JSON.stringify(details);

      let cid_ = getCid(data_);

      cid_.then((result) => {
        setCid(result);
      });
    }
  }, [signature]);

  useEffect(() => {
    if (cid) {
      const address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_SEPOLIA_URL
      );
      const signer1 = new ethers.Wallet(
        process.env.NEXT_PUBLIC_PRIV_KEY,
        provider
      );
      const moiContract = new ethers.Contract(
        address,
        contract["abi"],
        signer1
      );
      (async () => {
        const txn = await moiContract.allocate(
          0x00,
          [loginData.userid],
          [amount],
          cid,
          {
            gasLimit: 100000,
            gasPrice: 20000000000,
          }
        );
        setClaimTokens(false);
        setTxnHash(txn.hash);
        setTxModal(true);
      })();
    }
  }, [cid]);

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

  useEffect(() => {
    if (isExploding) {
      !loading && setIsExploding(true);
    } else {
      setIsExploding(false);
    }
  }, [loading]);

  const confettiProps = {
    force: 0.8,
    duration: 9000,
    particleCount: 300,
    width: 1600,
    colors: ["#9120C7", "#F5F2FF", "#4B17E5", "#9d1fca"],
  };

  useEffect(() => {
    setCheckedCitizen(false);
  }, [claimModal]);

  const renderbutton = useCallback(() => {
    if (!loginId) {
      return (
        <ButtonComponent
          onClick={() => setModalOpen(true)}
          variant="primary"
          className="my-8 px-2 py-2 lg:px-8 lg:py-2 text-sm lg:text-md"
        >
          Login Moi ID
        </ButtonComponent>
      );
    } else if (claimTokens) {
      return (
        <ButtonComponent variant="secondary" disabled={true} className="my-8">
          {checkedCitizen ? "Claiming......" : "Ineligibale to claim tokens"}
        </ButtonComponent>
      );
    } else if (txnHash) {
      return (
        <ButtonComponent variant="secondary" disabled={true} className="my-8">
          Claimed tokens
        </ButtonComponent>
      );
    } else if (totalPoints >= 6) {
      return (
        <ButtonComponent onClick={Claim} variant="secondary" className="my-8">
          Claim tokens
        </ButtonComponent>
      );
    } else {
      return (
        <ButtonComponent variant="secondary" className="my-8" spanClass="">
          Explore MOI Ecosystem
        </ButtonComponent>
      );
    }
  }, [txnHash, totalPoints, claimTokens, loginId]);

  return (
    <div className="py-20">
      <div className="relative flex justify-center">
        <div className="absolute">
          {isExploding && <ConfettiExplosion {...confettiProps} />}
        </div>
        {txnHash && (
          <PopoverModal logoutModal={txModal} setLogoutModal={setTxModal}>
            <div className="w-full flex flex-col px-4 py-4 justify-center items-center">
              <img src="/images/moi-claim.png" className="w-24 h-24"/>
              <p className="text-moi-dark text-lg font-semibold pt-2">Transaction Successful</p>
              <a
                className="text-moi-purple-400 text-sm underline pt-1"
                target="_blank"
                href={`https://sepolia.etherscan.io/tx/${txnHash}`}
              >
                View Transaction on explorer
              </a>
            </div>
          </PopoverModal>
        )}
        <PopoverModal logoutModal={claimModal} setLogoutModal={setClaimModal}>
          <div className="text-black px-4 py-4">
            <div className="flex items-center pb-6">
              <button
                className=""
                onClick={() => setCheckedCitizen(!checkedCitizen)}
              >
                {checkedCitizen ? (
                  <svg
                    class="h-6 w-6 flex-none fill-moi-white-500 stroke-moi-purple-900 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                ) : (
                  <svg
                    class="h-6 w-6 flex-none fill-moi-white-500 stroke-moi-purple-900 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                  </svg>
                )}
              </button>
              <p class="ml-4">I am not a U.S. Citizen</p>
            </div>
            <ButtonComponent
              variant="primary"
              className="mx-0 px-2 py-2 lg:px-8 lg:py-2 text-sm lg:text-lg"
              onClick={() => {
                setClaimTokens(true);
                setClaimModal(false);
              }}
            >
              Confirm
            </ButtonComponent>
          </div>
        </PopoverModal>
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
                    <p className="p-4">{`Your points: ${totalPoints}`}</p>
                    <p className="p-4">{`You can claim ${amount} MOI tokens`}</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-3xl font-bold">Ah shoot ! 🙁</p>
                  <p className="py-8">
                    Looks like you are not eligible for now. No sweat, you may
                    become eligible in the future rounds. Start exploring the
                    ecosystem now.
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
                    <p className="p-4">{`You can't claim any MOI tokens as of now`}</p>
                  </div>
                </>
              )}
              {renderbutton()}
            </div>
            <div className="border border-white block lg:hidden"></div>
            <div className="w-full lg:w-[60%] p-6 lg:p-10">
              <Accordion />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
