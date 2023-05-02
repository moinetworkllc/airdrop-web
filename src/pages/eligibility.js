import Image from "next/image";
import React, { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { ELIGIBILITY_CRITERIA } from "../utils/constants";
import { CheckMark } from '../components/SvgComponent';


export default function Eligibility() {
  const [expand, setExpand] = useState(false);
  const [moiId, setMoiId] = useState("");
  const getEligibility = async () => {
    let id = "0x9755aa020dB3784B15F286820CF4b6FC0075a712"
    let response = await fetch(`/api/moi?id=${id}`)
    let data = await response.json();
    console.log(data)
  }
  return (
    <>
      <div className="absolute">
        {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_GJh4G3t17P.json"
          loop
          controls
          autoplay
        ></lottie-player> */}
        {/*  background="transparent"  speed="1"  style="width: 300px; height: 300px;" */}
      </div>
      <div className="flex justify-center pt-20">
        <div className="flex flex-col lg:flex-row max-w-5xl bg-card-bg border border-white rounded-xl">
          <div className="w-[40%] p-6 lg:p-10 border-b lg:border-r border-white">
            <p className="text-3xl font-bold">Ah shoot</p>
            <p className="py-8">
              Looks like this wallet isn’t eligible. No stress, you can still
              participate in the ecosystem and governance in several ways.
            </p>
            <div className="bg-card-bg border border-white rounded-2xl">
              <p className="p-4">
                A minimum of 3 points total are required to be eligible. If you
                scored less than 3 points, all criteria will be crossed out.
              </p>
            </div>
            <ButtonComponent
              variant="secondary"
              className="my-8"
              spanClass="!text-sm !py-3 !px-3"
            >
              Explore projects on MOI
            </ButtonComponent>
            <div className="md:flex md:items-center">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                onClick={getEligibility}>
                    Check
              </button>    
            </div>
          </div>

          

          <div className="w-[60%] p-6 lg:p-10">
            {ELIGIBILITY_CRITERIA.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex justify-between items-center transition-all duration-500 cursor-pointer"
                  >
                    <div>
                      <p className="py-4"> 
                      <span className="text-green-300 pr-3">&#10003;</span> 
                      <span>{item.criteria}</span>
                    </p>
                    </div>
                    <div>
                      <button
                        onClick={() => setExpand(!expand)}
                        className="text-xl font-bold"
                      >
                        {expand ? "-" : "+"}
                      </button>
                    </div>
                  </div>
                  <div>{expand && <p className="px-4">expanded data </p>}</div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
