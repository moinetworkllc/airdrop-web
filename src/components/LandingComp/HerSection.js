import React, { useContext, useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import Modal from "../Modal";
import { ThemeContext, LoginContext } from "../../context/ThemeContext";
import { classNames } from "../../utils/helpers";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const {
    isDarkMode,
    loginId,
    handleLogin,
    setModalOpen,
    isModalOpen,
    loginData,
  } = useContext(ThemeContext);

  useEffect(() => {
    if (loginData) {
      handleLogin(loginData.userName);
    }
  }, [loginData]);

  return (
    <>
      <div className="grid grid-row-2 lg:grid-cols-2 gap-x-8">
        <Modal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
        <div className="flex flex-col justify-center">
          <p className={`inline-block font-bold text-2xl lg:text-[38px] 2xl:text-[48px] text-left py-2 2xl:leading-[56px] ${isDarkMode ? "text-moi-purple-600" : "text-moi-white-100"}`}>
            The world's first context-aware peer-to-peer protocol and blockchain
            network built with ISM technology
          </p>
          <div className="py-5">
            {!loginId ? (
              <ButtonComponent
                variant="primary"
                className="px-2 py-2 lg:px-8 lg:py-2 text-sm lg:text-md"
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
        </div>
        <div>
          <img
            className="mx-auto bg-transperant"
            style={{ "background-size": "1000px" }}
            src={"/images/human.svg"}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
