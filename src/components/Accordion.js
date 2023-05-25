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
                      <svg className="w-5 h-5 mr-1.5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                    ) : (
                      <svg className="w-5 h-5 mr-1.5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
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
              <ul className="max-w-md pl-14 space-y-1 list-disc list-outside">
                {item.dataPoints.map((data, index) => <li key={index} className="text-sm font-normal text-moi-white-300">
                    {data}
                  </li>
                )}
              </ul>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
