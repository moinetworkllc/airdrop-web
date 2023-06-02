import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Accordion = () => {
  const { isDarkMode, moiState, points } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState();


  const ELIGIBILITY_CRITERIA = [
    {
      criteria: "You have a MOI ID",
      id: "isMoid",
      sucessMessage : [`Points earned: ${points.moid}`, "Description: You've have a MOI ID"],
      failureMessage : [`Points earned: 3`, "Description: You do not have a MOI ID"]
    },
    {
      criteria: "You have a verified phone number attached to your MOI ID",
      id: "phone_no",
      sucessMessage: [`Points earned: ${points.phone_no}`, "Description: You've have verified phone number"],
      failureMessage : ["Points earned: 0", "Description: You've not verified phone number"],
    },
    {
      criteria: "You have a verified email address attached to your MOI ID",
      id: "email",
      sucessMessage: [`Points earned: ${points.email}`, "Description: You've have verified email"],
      failureMessage : ["Points earned: 0", "Description: You've not verified email"],
    },
    {
      criteria: "You have performed KYC of your MOI ID",
      id: "kyc",
      sucessMessage: [`Points earned: ${points.kyc}`, "Description: You've have performed kyc"],
      failureMessage : ["Points earned: 0", "Description: You've not perfomred kyc"],
    },
    {
      criteria: "You have hosted a unique validator node through your MOI ID",
      id: "validator_nodes",
      sucessMessage: [`Points earned: ${points.validator_nodes}`, `Description: You have hosted ${points.validator_nodes / 10} unique nodes`],
      failureMessage : ["Points earned: 0", "Description: You've not hosted any nodes"],
    },
    {
      criteria: "You have hosted a unique validator node since May 2022",
      id: "validator_nodes_may",
      sucessMessage: [`Points earned: ${points.validator_nodes_may}`, `Description: You've have hosted ${points.validator_nodes / 10} unique nodes since May 2022`],
      failureMessage : ["Points earned: 0", "Description: You've not hosted nodes since May 2022"],
    },
    {
      criteria: "You have engaged with our Official Twitter account",
      id: "twitter",
      sucessMessage: [`Points earned: ${points.twitter}`, `Description: You've earned Level ${points.twitter / 10} staus in our Twitter Community`],
      failureMessage : ["Points earned: 0", "Description: You've not earned any level in our Twitter Community"],
    },
    {
      criteria: "You have engaged in our Official Telegram Community",
      id: "telegram",
      sucessMessage: [`Points earned: ${points.telegram}`, `Description: You've earned Level ${points.telegram / 10} staus in our Telegram Community`],
      failureMessage : ["Points earned: 0", "Description: You've not earned any level in our Telegram Community"],
      dataPoints : ["Telegram"]
    },
    {
      criteria: "You have engaged in our Official Discord Community",
      id: "discord",
      sucessMessage: [`Points earned: ${points.discord}`, `Description: You've earned Level ${points.discord / 10} staus in our Discord Community`],
      failureMessage : ["Points earned: 0", "Description: You've not earned any level in our Discord Community"],
      dataPoints : ["Discord"]
    },
    {
      criteria: "You have signed transactions on our INDUS Testnet",
      id: "interactions",
      sucessMessage: [`Points earned: ${points.interactions}`, `Description: You've made ${points.interactions / 5} interaction on our indus testnet`],
      failureMessage : ["Points earned: 0", "Description: You'v not made any interaction on our indus testnet"],
    },
    {
      criteria: "You have kramaID",
      id: "kramaId",
      sucessMessage: [`Points earned: ${points.kramaIds}`, `Description: You've have ${points.kramaIds / 10} Krama Ids`],
      failureMessage : ["Points earned: 0", "Description: You've 0 Krama Ids"],
      dataPoints : ["Krama ID"]
    },
    {
      criteria: "You have created an App",
      id: "createdApp",
      sucessMessage: [`Points earned: ${points.createdApp}`, "Description: You've created atleast one app"],
      failureMessage : ["Points earned: 0", "Description: You've not created any app"],
    },
    {
      criteria: "You are part of an App",
      id: "partApp",
      sucessMessage: [`Points earned: ${points.partApp}`, `Description: You've used ${points.partApp / 5} apps`],
      failureMessage : ["Points earned: 0", "Description: You've not used any app"],
    },
    {
      criteria: "You have created an Avatar",
      id: "createdAvatar",
      sucessMessage: [`Points earned: ${points.createdAvatar}`, `Description: You've created an ${points.createdAvatar / 10} avatar`],
      failureMessage : ["Points earned: 0", "Description: You've not created any avatar"],
    },
    {
      criteria: "Your Avatar has been scanned at least once",
      id: "scannedAvatar",
      sucessMessage: [`Points earned: ${points.scannedAvatar}`, "Description: Your avatar is scanned atleast once"],
      failureMessage : ["Points earned: 0", "Description: Your avatar is not scanned atleast once"],
    },
  ];

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
                { moiState[item.id] ? item.sucessMessage.map((data, index) => <li key={index} className={`text-[14px] font-normal ${isDarkMode ? 'text-moi-black-300' : 'text-moi-white-300'}`}>
                    {data}
                  </li>
                ):
                item.failureMessage.map((data, index) => <li key={index} className={`text-[14px] font-normal ${isDarkMode ? 'text-moi-black-300' : 'text-moi-white-300'}`}>
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
