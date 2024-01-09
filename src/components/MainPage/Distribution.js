import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Distribution = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl text-center">
          <p className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${isDarkMode ? "text-moi-purple-600" : "text-moi-white-100"}`}>
            State of Distribution
          </p>
        </div>

        <div className="grid grid-row-2 lg:grid-cols-2 gap-y-10 justify-items-center lg:justify-items-end items-center mt-10 lg:mt-20">
          <div className={`${isDarkMode ? "text-moi-purple-600" : "text-moi-white-100"}`}>
            <p className="text-xl font-bold tracking-tight lg:text-3xl pb-5">
              God IS(M) in the details
            </p>
            <div className="flex flex-col gap-y-7 text-base lg:text-md 2xl:text-lg">
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

          <div className="w-[250px] lg:w-[592px] h-full">
            {isDarkMode ? (
              <img src="images/light-circle.png" alt="Distribution" />
            ) : (
              <img src="images/dark-circle.png" alt="Distribution" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Distribution;
