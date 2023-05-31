import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CardContent } from "../../utils/constants";
import { classNames } from "../../utils/helpers";
import { ThemeContext, LoginContext } from "../../context/ThemeContext";
import ButtonComponent from "../ButtonComponent";
import Modal from "../Modal";

const LandingPage = () => {
  const { isDarkMode, loginId, handleLogin, setModalOpen, isModalOpen, loginData } =
    useContext(ThemeContext);

    useEffect(() => {
      if(loginData) {
        handleLogin(loginData.userName);
      }
    }, [loginData])

  return (
    <>
      <div className="p-4 lg:p-auto">
        <Modal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
        <div className="flex flex-col justify-center items-center">
          <p className="bg-moi-gradient inline-block text-transparent text-4xl lg:text-[71px] bg-clip-text text-center py-2">
            Personalized Internet
          </p>
          <p
            className={classNames(
              isDarkMode ? "text-moi-snowfall" : "text-moi-purple-400",
              "font-semibold text-xl lg:text-4xl pt-0 lg:pt-4"
            )}
          >
            Your Network. Your Way.
          </p>
          <p
            className={classNames(
              isDarkMode ? "text-moi-snowfall" : "text-moi-black-100",
              "w-full lg:w-[600px] pt-2 text-center text-md lg:text-lg"
            )}
          >
            MOI is a transformational p2p protocol and an open network that
            empowers its users to dynamically control their identity, storage
            and digital assets based on their unique needs.
          </p>
        </div>
        <div className="flex justify-center py-5">
          {!loginId ? (
            <ButtonComponent
              variant="primary"
              className="px-2 py-2 lg:px-4 lg:py-3 text-sm lg:text-lg"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              LogIn MOI ID
            </ButtonComponent>
          ) : (
            <div
              className={classNames(
                isDarkMode ? "bg-black" : "bg-button-gradient",
                "rounded-[40px] p-[2px] mx-4"
              )}
            >
              <Link
                href="/eligibility"
                className={classNames(
                  isDarkMode
                    ? "bg-moi-purple-grad text-white"
                    : "bg-white text-black",
                  "flex h-full items-center justify-center rounded-[40px] px-2 py-2 lg:px-4 lg:py-3 text-sm lg:text-lg"
                )}
              >
                {" "}
                Check your eligilbilty
              </Link>
            </div>
          )}
        </div>

        <img
          className="mx-auto pb-[80px] lg:pb-[200px] bg-moi-blur"
          style={{ "backgroundSize": "1000px" }}
          src={"/images/moiBg.svg"}
        />
        <div className="p-auto flex flex-col justify-start gap-y-[80px] lg:gap-y-[130px]">
          <div className="flex flex-col justify-center bg-moi-ball-bg">
            <p
              className={classNames(
                isDarkMode ? "text-moi-snowfall" : "text-moi-purple-400",
                "mt-4 text-2xl lg:text-[32px] text-center font-semibold not-italic leading-[145%] pb-10 lg:pb-[72px]"
              )}
            >
              Airdrop Phase 1
            </p>
            <div className="flex flex-col lg:flex-row items-center lg:justify-around">
              {isDarkMode ? (
                <img
                  src="images/dark-lock.svg"
                  alt="lock"
                  className="w-[200px] lg:w-[315px] pb-10 lg:pb-0"
                />
              ) : (
                <img
                  src="images/light-lock.svg"
                  alt="lock"
                  className="w-[200px] lg:w-[315px] pb-10 lg:pb-0"
                />
              )}
              <div
                className={classNames(
                  isDarkMode ? "text-moi-snowfall" : "text-moi-purple-400",
                  "max-w-[443px] px-6 lg:px-12 py-8 dark:bg-card-gradient rounded-lg shadow bg-first-text dark:border-gray-700"
                )}
              >
                <a href="#">
                  <p className="mb-2 text-2xl font-semibold">
                    We must decentralize
                  </p>
                </a>
                <p className="mb-2 lg:mb-6 font-light text-md lg:text-[22.64px] leading-[145%]">
                  Human Interactions are primarily Personalized Value Transfers.
                  Today's digital networks treat value transfers as information
                  transfers and a employ a programmatic way of value discovery
                  resulting in a systemic and unsustainable model for the
                  Internet of Value.{" "}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-7 py-[9px] text-md lg:text-2xl text-moi-snowfall font-medium text-center bg-button-gradient rounded-md mt-5"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p
              className={classNames(
                isDarkMode ? "text-moi-snowfall" : "text-moi-purple-400",
                "mt-4 text-[32px] font-semibold not-italic leading-[145%] pb-[72px]"
              )}
            >
              Distribution
            </p>
            {isDarkMode ? (
              <img src="images/distribution.svg" alt="Distribution" />
            ) : (
              <img src="images/light-distribution.svg" alt="Distribution" />
            )}
          </div>
          <div className="flex flex-col justify-center items-center pb-[80px] lg:pb-[130px]">
            <p
              className={classNames(
                isDarkMode ? "text-moi-snowfall" : "text-moi-purple-400",
                "mt-4 text-[32px] font-semibold not-italic leading-[145%] pb-[72px]"
              )}
            >
              Step Forward
            </p>
            <div className="flex flex-col lg:flex-row w-full items-center lg:items-stretch justify-between">
              {CardContent.map((item, index) => {
                return (
                  <div
                    className={`border w-[305px] border-black bg-card-gradient p-8 mb-8 lg:my-0 ${
                      isDarkMode ? "text-moi-snowfall" : "text-moi-black-100"
                    }`}
                    key={index}
                  >
                    <p className="text-xs">
                      <span
                        className={`border p-1 ${
                          isDarkMode ? "border-moi-white-200" : "border-moi-black-100"
                        }`}
                      >
                        {item.header}
                      </span>
                    </p>
                    <p className="text-2xl font-bold py-10">{item.text}</p>
                    <div className="flex justify-center items-center">
                      <Image src={item.image} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

export async function getStaticPaths() {
  return {
    paths: ["/", "/eligibility"],
    fallback: false,
  };
}
