import React, { useContext, useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import Image from "next/image";
import Link from "next/link";
import {
  Humanize,
  Context,
  NativeAssetIcon,
  GlobalTruthIcon,
} from "../SvgComponent";
import { ThemeContext } from "../../context/ThemeContext";
const primaryFeatures = [
  {
    name: "Participant-centric consensus mechanism",
    description:
      "Dynamic state channels that boost performance & security using  network randomness",
    href: "#",
    icon: <Humanize />,
  },
  {
    name: "Context-oriented computation engines",
    description: "Protocol managed micro-interactions for improved security",
    href: "#",
    icon: <Context />,
  },
  {
    name: "Local finality, global truth",
    description: "Supporting billions of assets across millions of nodes",
    href: "#",
    icon: <NativeAssetIcon />,
  }
];
const WhyMoi = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="mx-auto pb-22">
        <div className="mx-auto max-w-2xl text-center">
        <p className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${isDarkMode ? "text-moi-purple-600" : "text-moi-white-100"}`}>
            Together, we can transform web3
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {primaryFeatures.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col bg-moi-white-200 shadow-5xl rounded-3xl py-6"
              >
                <div className="flex flex-col gap-y-4 items-start px-6">
                  <div className="h-10 w-10 inline-flex">{feature.icon}</div>
                  <div className="text-base lg:text-md font-semibold leading-7 text-moi-purple-700">
                    {feature.name}
                  </div>
                </div>

                <div className="mt-1 flex flex-auto flex-col text-moi-purple-700 px-6">
                  <p className="flex-auto text-sm lg:text-base leading-7">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyMoi;
