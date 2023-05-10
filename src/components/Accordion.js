import React, { useState, useContext } from "react";
import { ELIGIBILITY_CRITERIA } from "../utils/constants";
import { ThemeContext } from "../context/ThemeContext";

const Accordion = () => {
  const { isDarkMode, moiState } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState();

  const handleSetIndex = (index) =>
    activeIndex !== index ? setActiveIndex(index) : setActiveIndex();

  return (
    <>
      {ELIGIBILITY_CRITERIA.map((item, index) => {
        return (
          <div key={index}>
            <div
              key={index}
              onClick={() => handleSetIndex(index)}
              className="flex justify-between items-center transition-all duration-500 cursor-pointer"
            >
              <div>
                <div className="flex items-center py-4">
                  <div className="text-green-300 pr-3">
                    {!moiState[item.id] ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 147 147"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.7 147L0 132.3L58.8 73.5L0 14.7L14.7 0L73.5 58.8L132.3 0L147 14.7L88.2 73.5L147 132.3L132.3 147L73.5 88.2L14.7 147Z"
                          fill="#FF3434"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 175 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M56.0083 96.7417L148.442 4.30833C151.314 1.43611 154.969 0 159.408 0C163.847 0 167.503 1.43611 170.375 4.30833C173.247 7.18055 174.683 10.8361 174.683 15.275C174.683 19.7139 173.247 23.3694 170.375 26.2417L66.975 129.642C63.8417 132.775 60.1861 134.342 56.0083 134.342C51.8306 134.342 48.175 132.775 45.0417 129.642L4.30833 88.9083C1.43611 86.0361 0 82.3805 0 77.9417C0 73.5028 1.43611 69.8472 4.30833 66.975C7.18055 64.1028 10.8361 62.6667 15.275 62.6667C19.7139 62.6667 23.3694 64.1028 26.2417 66.975L56.0083 96.7417Z"
                          fill="#4D8E0B"
                        />
                      </svg>
                    )}
                  </div>
                  <div>{item.criteria}</div>
                </div>
              </div>
              <div>
                <button className="text-xl font-bold">
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
            </div>
            {activeIndex === index && (
              <div>
                <p className="px-4">expanded data </p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
