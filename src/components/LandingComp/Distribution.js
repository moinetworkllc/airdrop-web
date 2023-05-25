import React, { useContext, useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "../../context/ThemeContext";

const Distribution = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-moi-purple-600 sm:text-4xl">
            State of Distribution
          </p>
        </div>

        <div className="grid grid-cols-2 justify-items-end items-center mt-20">
          <div>
            <p className="text-xl font-bold tracking-tight text-moi-purple-700 lg:text-3xl pb-5">
              God IS(M) in the details
            </p>
            <div className="flex flex-col text-moi-black-100 gap-y-7">
              <p>
                MOI uses participants as a key element of computation to
                realize a new era of "contextual computation".
              </p>
              <p>
                This subtle shift reorients technology to the needs of humans
                rather than applications, ensuring an equitable, democratic,
                simple, and sustainable future for our digital interactions.
              </p>
              <p>
                MOI leverages ISM (Interaction State Machine) technology to
                create a stateful Internet that is personalized, secure,
                sustainable, and user-friendly. ISM is a state machine
                replication technology designed for a digitally interconnected
                society. It associates the state of objects with participants
                and their preferences across the entire network. It uses a
                context-based approach to enable a practical messaging framework
                for value creation, discovery, and management, akin to the
                familiar TCP/IP protocol.
              </p>
            </div>
          </div>

          <div className="w-[592px] h-full">
            {isDarkMode ? (
              <img src="images/light-distribution.svg" alt="Distribution" />
            ) : (
              <img src="images/dark-distribution.svg" alt="Distribution" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Distribution;