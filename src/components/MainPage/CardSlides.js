import React, { useContext, useState } from "react";
import Link from "next/link";
import { ThemeContext } from "../../context/ThemeContext";
const primaryFeatures = [
  {
    name: "MOI Guardians",
    description:
      "Run a MOI Pod to validate transactions and secure the MOI network",
    href: "https://voyage.moi.technology/",
    target: "_blank",
    lightImage: "light-guardians",
    darkImage: "dark-guardians",
  },
  {
    name: "MOI Nation",
    description: "Perform small but crucial tasks as a CitZen to spread awareness about MOI",
    href: "https://moination.com/",
    target: "_blank",
    lightImage: "light-nation",
    darkImage: "dark-nation"
  },
  {
    name: "MOI Ambassadors",
    description:
      "Nurture and support the MOI community by educating and connecting members",
    href: "https://medium.com/moi-technology/introducing-the-moi-ambassador-program-towards-the-million-nodes-billion-interactions-1513521ece54",
    target: "_blank",
    lightImage: "light-ambassadors",
    darkImage: "dark-ambassadors"
  },
  {
    name: "Community Hangouts",
    description:
      "Dive into engaging discussions about MOI on our outreach channels",
    href: "",
    target: "",
    lightImage: "light-community",
    darkImage: "dark-community"
  },
];

const CardSlides = () => {
    const [activeCard, setActiveCard] = useState(0);
    const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="pb-[160px]">
        <div className="mx-auto max-w-2xl text-center">
        <p className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${isDarkMode ? "text-moi-purple-600" : "text-moi-white-100"}`}>
            Contribute to MOI
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          
          <div className="w-full flex flex-col md:flex-col overflow-hidden overflow-x-auto lg:flex-row justify-between gap-y-10 lg:gap-x-10">
           
            {primaryFeatures.map((feature, index) => (
              feature?.target ? <Link key={index} href={feature.href} target={feature.target}>
                <div
                  key={feature.name}
                  className={`relative overflow-hidden flex flex-col gap-y-16 justify-center h-fit bg-moi-white-100 lg:h-[526px] px-6 rounded-3xl py-6 transition-all duration-500 shadow-5xl ${activeCard === index ? 'lg:w-[550px] 2xl:w-[600px]' : 'lg:w-[200px] 2xl:w-[250px]' }`}
                  onClick={()=> setActiveCard(index)}
                  onMouseEnter={()=> setActiveCard(index)}
                >
                  <img className={`absolute z-0 h-auto lg:h-[500px] w-[200px] right-0 ${activeCard === index ? 'opacity-25 lg:opacity-90': 'opacity-25'}`} src={`/images/${isDarkMode ? feature.lightImage : feature.darkImage}.png`}/>
                  <div id="fade-in-image" className={`items-center z-50 text-xl lg:text-[30px] 2xl:text-[40px] 2xl:leading-[40px] font-semibold text-moi-purple-700 ${activeCard === index ? "block" : "lg:hidden"}`}>
                    <p className="flex-auto w-[70%]">{feature.description}</p>
                  </div>
                  <div className={`border-black bg-white ${activeCard === index ? "border py-2 px-4 w-fit rounded-lg" : "border py-2 px-4 w-fit rounded-lg lg:rotate-[-90deg]"}`}>
                    <p className={`text-base text-center font-semibold text-moi-purple-700 lg:w-[170px]`}>{feature.name}</p>
                  </div> 
                </div>
              </Link> : <div
                  key={feature.name}
                  className={`relative overflow-hidden flex flex-col gap-y-16 justify-center h-fit bg-moi-white-100 lg:h-[526px] px-6  rounded-3xl py-6 transition-all duration-500 shadow-5xl ${activeCard === index ? 'lg:w-[550px] 2xl:w-[600px]' : 'lg:w-[200px] 2xl:w-[250px]' }`}
                  onClick={()=> setActiveCard(index)}
                  onMouseEnter={()=> setActiveCard(index)}
                >
                  <img className={`absolute z-0 h-auto lg:h-[500px] w-[200px] right-0 ${activeCard === index ? 'opacity-25 lg:opacity-90': 'opacity-25'}`} src={`/images/${isDarkMode ? feature.lightImage : feature.darkImage}.png`}/>
                  <div id="fade-in-image" className={`items-center z-50 text-xl lg:text-[30px] 2xl:text-[40px] 2xl:leading-[40px] font-semibold text-moi-purple-700 ${activeCard === index ? "block" : "lg:hidden"}`}>
                    <p className="flex-auto w-[70%]">{feature.description}</p>
                  </div>
                  <div className={`border-black bg-white ${activeCard === index ? "border py-2 px-4 w-fit rounded-lg" : "border py-2 px-4 w-fit rounded-lg lg:rotate-[-90deg]"}`}>
                    <p className={`text-base text-center font-semibold text-moi-purple-700 lg:w-[170px]`}>{feature.name}</p>
                  </div> 
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSlides;
