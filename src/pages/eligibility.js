import React, { useEffect, useState, useContext, useCallback, useRef } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { CheckMark } from "../components/SvgComponent";
import { ThemeContext } from "../context/ThemeContext";
import Accordion from "../components/Accordion";
import IOMEModal from "../components/IOMEModal";
import { getData } from "../components/claim";
import { getCid } from "../components/pinata";
import { useRouter } from "next/router";
import PopoverModal from "../components/PopoverModal";
import ReactCanvasConfetti from "react-canvas-confetti";
import { Loader } from '../components/SvgComponent'

const contract = require("../artifacts/contract.json");
const { Network, Alchemy } = require("alchemy-sdk");
const settings = {
  apiKey: process.env.NEXT_PUBLIC_API, // Replace with your Alchemy API Key.
  network: Network.ETH_SEPOLIA, // Replace with your network.
};
const alchemy = new Alchemy(settings);
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
    proof,
    kycNationality
  } = useContext(ThemeContext);
  const router = useRouter();
  const [totalPoints, setTotalPoints] = useState(0);
  const [data, setData] = useState("");
  const [cid, setCid] = useState("");
  const [claimModal, setClaimModal] = useState(false);
  const [checkedCitizen, setCheckedCitizen] = useState(false);
  const [claimTokens, setClaimTokens] = useState(false);
  const [txModal, setTxModal] = useState(false);
  const [hash, setHash] = useState("");
  const [txnHash, setTxnHash] = useState();

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
          kramaIds, 
          checkedCitizen,
          kycNationality
        )
      );
      loginData.iome.wallet
        .sign(data)
        .then((txn) => setSignature(txn.signature));
    }
  }, [claimTokens]);

  function Claim() {
    setClaimModal(true);
    moiState["kyc"] && setClaimTokens(true);
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
        if (proof.includes(result)){
          console.log("Already claimed")
        }
        else {
          setCid(result);
        }   
        });
      
    }
  }, [signature]);

  useEffect(() => {
    if (cid) {
      const address = "0x0Be68caD700DA3Cc1a9135ef5C50843940e4b886";
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
            gasLimit: 10000000,
            gasPrice: 20000000000,
          }
        );
        setHash(txn.hash);
        for (var i = 0; i < 100; i++) {
          let tx = await alchemy.core.getTransactionReceipt(txn.hash);
          if (!tx) {
            console.log("Pending or Unknown Transaction");
            continue;
          } else if (tx.status === 1) {
            console.log("Transaction was successful!");
            setClaimTokens(false);
            setTxnHash(true);
            setTxModal(true);
            break;
          } else {
            setClaimTokens(false);
            setTxnHash(false);
            setTxModal(true);
            setCheckedCitizen(false);
            setSignature("");
            console.log("Transaction failed!");
            // give notification transaction failed
            break;
          }
        }
      })();
    }
  }, [cid]);

  useEffect(() => {
    if (loginData) {
      handleLogin(loginData.userName);
    }
  }, [loginData]);

  useEffect(() => {
    !Object.keys(moiState["isMoid"]).length && router.push("/");
  }, [moiState["isMoid"]]);

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
          <span className="flex items-center">
            {isDarkMode ? (
              <span className="w-6 h-6 rounded-full animate-spin border-2 border-solid border-t-transparent mr-2 border-moi-white-100"></span>
            ) : (
              <span className="w-6 h-6 rounded-full animate-spin border-2 border-solid border-t-transparent mr-2 border-moi-purple-600"></span>
            )}
            <span>Claiming....</span>
          </span>
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
        proof.length ? <ButtonComponent variant="secondary" disabled={true} className="my-8 !cursor-not-allowed">
          Claimed tokens
        </ButtonComponent> : 
        <div class="group flex relative">
          <ButtonComponent onClick={Claim} variant="secondary" disabled={kycNationality === 'The United States of America'} className="my-8 disabled:cursor-not-allowed">
            {kycNationality === 'The United States of America' ? 'Unable to claim tokens': 'Claim tokens'}
          </ButtonComponent>
          {kycNationality === 'The United States of America' && <span class="group-hover:opacity-100 transition-opacity bg-moi-white-600 px-2 py-1 text-sm text-moi-dark bottom-[10px] rounded-md absolute left-[100px] -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">US citizen cannot claim</span>}
        </div>
      );
    } else {
      return (
        <ButtonComponent variant="secondary" className="my-8" spanClass="">
          Explore MOI Ecosystem
        </ButtonComponent>
      );
    }
  }, [txnHash, totalPoints, claimTokens, loginId]);

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const canvasStyles = {
    position: "absolute",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };
  
  function getAnimationSettings(originXA, originXB) {
    return {
      startVelocity: 10,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 15,
      origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2
      }
    };
  }
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  useEffect(() => {
    setInterval(nextTickAnimation, 700);
  }, [nextTickAnimation]);

  return (
    <div className="py-20">
      <div className="relative flex justify-center">
        <PopoverModal logoutModal={txModal} setLogoutModal={setTxModal}>
          {txnHash ? (
            <>
              <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
              <div className="w-full flex flex-col px-4 py-4 justify-center items-center">
                <img src="/images/moi-claim.png" className="w-24 h-24" />
                <p className="text-moi-dark text-lg font-semibold pt-2">
                  Transaction Successful
                </p>
                <a
                  className="text-moi-purple-400 text-sm underline pt-1"
                  target="_blank"
                  href={`https://sepolia.etherscan.io/tx/${hash}`}
                >
                  View Transaction on explorer
                </a>
              </div>
            </>
          ) : (
            <div className="w-full flex flex-col px-4 pt-0 pb-4 justify-center items-center">
              <svg width="80" height="80" viewBox="0 0 921 809" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M904.653 690.176L529.869 47.104C512.461 16.384 487.885 0 460.237 0C433.613 0 408.013 16.384 390.605 47.104L14.7968 690.176C-2.6112 719.872 -4.6592 749.568 8.6528 773.12C21.9648 796.672 48.5888 808.96 83.4048 808.96H837.069C871.885 808.96 898.509 795.648 911.821 773.12C925.133 749.568 922.061 719.872 904.653 690.176ZM875.981 752.64C869.837 762.88 856.525 768 837.069 768H83.4048C63.9488 768 49.6128 761.856 44.4928 752.64C38.3488 742.4 40.3968 727.04 50.6368 710.656L427.469 67.584C437.709 50.176 449.997 40.96 461.261 40.96C472.525 40.96 485.837 51.2 495.053 67.584L869.837 710.656C879.053 727.04 882.125 742.4 875.981 752.64ZM490.957 604.16C490.957 621.568 477.645 634.88 460.237 634.88C442.829 634.88 429.517 621.568 429.517 604.16C429.517 586.752 442.829 573.44 460.237 573.44C477.645 573.44 490.957 586.752 490.957 604.16ZM490.957 307.2V501.76C490.957 519.168 477.645 532.48 460.237 532.48C442.829 532.48 429.517 519.168 429.517 501.76V307.2C429.517 289.792 442.829 276.48 460.237 276.48C477.645 276.48 490.957 289.792 490.957 307.2Z" fill="#BA1F1F"/>
              </svg>
              <p className="text-moi-dark text-lg font-semibold pt-2">
                Transaction Failed
              </p>
            </div>
          )}
        </PopoverModal>
        {!moiState["kyc"] && <PopoverModal logoutModal={claimModal} setLogoutModal={setClaimModal}>
          <div className="text-black px-4 py-4">
            <div className="flex items-center pb-6">
              <button
                className=""
                onClick={() => setCheckedCitizen(!checkedCitizen)}
              >
                {checkedCitizen ? (
                  <svg
                    className="h-6 w-6 flex-none fill-moi-white-500 stroke-moi-purple-900 stroke-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 flex-none fill-moi-white-500 stroke-moi-purple-900 stroke-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                  </svg>
                )}
              </button>
              <p className="ml-4">I am not a U.S. Citizen</p>
            </div>
            <ButtonComponent
              variant="primary"
              disabled={!checkedCitizen}
              className="mx-0 px-2 py-2 lg:px-8 lg:py-2 !text-sm lg:!text-lg w-full disabled:cursor-not-allowed"
              onClick={() => {
                setClaimTokens(true);
                setClaimModal(false);
              }}
            >
              Confirm
            </ButtonComponent>
          </div>
        </PopoverModal>}
        <IOMEModal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
        {loading ? (
          <div><Loader fillColor={!isDarkMode ? "#F5F2FF" : "#4d2bb9"}/></div>
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
