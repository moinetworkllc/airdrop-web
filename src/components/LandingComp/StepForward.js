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
    name: "MOI Guardians",
    description:
      "Run a MOI Pod to validate transactions and secure the MOI network",
    href: "#",
    icon: "moi-discover",
  },
  {
    name: "MOI Nation",
    description: "Perform small but crucial tasks as a CitZen to spread awareness about MOI",
    href: "#",
    icon: "moi-project",
  },
  {
    name: "MOI Ambassadors",
    description:
      "Nurture and support the MOI community by educating and connecting members",
    href: "#",
    icon: "moi-application",
  },
  {
    name: "Community Hangouts",
    description:
      "Dive into engaging discussions about MOI on our outreach channels",
    href: "#",
    icon: <Humanize />,
  },
];

const StepForward = () => {
    const [activeCard, setActiveCard] = useState(0);
    const [isExpanded, setIsExpanded] = React.useState(false);

  const handleHover = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="pb-[160px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-moi-purple-600 sm:text-4xl">
            Contribute to MOI
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          
          <div className="flex flex-col lg:flex-row justify-between w-full">
           
            {primaryFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className={`relative flex flex-col gap-y-16 justify-center h-[526px] px-6 bg-moi-project bg-no-repeat bg-cover rounded-3xl py-6 transition-all duration-500 ${activeCard === index ? 'w-full lg:w-[600px]' : 'w-[250px]' }`}
                onClick={()=> setActiveCard(index)}
                onMouseEnter={()=> setActiveCard(index)}
              >
                 {/* <img className="absolute w-full h-full" src="/image/discover.svg"/> */}
                <div id="fade-in-image" className={`items-center text-[40px] font-semibold text-moi-purple-700 ${activeCard === index ? "block" : "hidden"}`}>
                  <p className="flex-auto">{feature.description}</p>
                </div>
               
                   <div className={`border-black ${activeCard === index ? "border py-2 px-4 w-fit rounded-lg" : "rotate-[-90deg]"}`}>
                     <p className={`text-base font-semibold text-moi-purple-700`}>{feature.name}</p>
                  </div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepForward;
