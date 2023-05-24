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
    name: "Task scheduling",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: <NativeAssetIcon />,
  }
];
const WhyMoi = () => {
  return (
    <>
      <div className="mx-auto pb-22">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-moi-purple-700 sm:text-4xl">
            Together, we can transform web3
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-10 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {primaryFeatures.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col bg-moi-white rounded-3xl py-6"
              >
                <div className="flex flex-col gap-y-4 items-start px-6">
                  <div className="h-10 w-10 inline-flex">{feature.icon}</div>
                  <div className="text-base font-semibold leading-7 text-moi-purple-700">
                    {feature.name}
                  </div>
                </div>

                <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-moi-purple-700 px-6">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
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
