import React, { useContext, useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import IOMEModal from "../IOMEModal";
import { ThemeContext, LoginContext } from "../../context/ThemeContext";
import { classNames } from "../../utils/helpers";
import Image from "next/image";
import Link from "next/link";

const MainSection = () => {
  const {
    isDarkMode,
    moiState,
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
        <IOMEModal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
        <div className="flex flex-col justify-center">
          <p className={`inline-block font-bold text-2xl lg:text-[38px] 2xl:text-[48px] text-left py-2 2xl:leading-[56px] ${isDarkMode ? "text-moi-purple-600" : "text-moi-white-100"}`}>
            The world's first context-aware peer-to-peer protocol and blockchain
            network built with ISM technology
          </p>
          <div className="py-5">
            {!moiState["isMoid"].user?.userID ? (
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
                  isDarkMode ? "border-2 border-moi-purple-800" : "border-2 border-moi-grey",
                  "rounded-3xl p-[2px] mx-4 w-fit"
                )}
              >
                <Link
                  href="/eligibility"
                  className={classNames(
                    isDarkMode
                      ? "bg-moi-white-600 text-moi-purple-200"
                      : "bg-moi-purple-dark text-moi-white-100",
                    "flex h-full items-center justify-center rounded-3xl px-2 py-2 lg:px-8 lg:py-2 text-sm lg:text-md font-semibold"
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
            className="mx-auto bg-transperant w-full h-full"
            src={`/images/${isDarkMode ? 'light-header.png' : 'dark-header.png'}`}
          />
        </div>
      </div>
    </>
  );
};

export default MainSection;
