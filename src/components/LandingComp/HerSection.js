import React, { useContext, useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col justify-center">
          <p className="inline-block text-moi-purple-600 font-bold text-4xl lg:text-[48px] text-left py-2 leading-[56px]">
            The world's first context-aware peer-to-peer protocol and blockchain
            network built with ISM technology
          </p>
          <div className="py-5">
            <ButtonComponent
              variant="primary"
              className="px-2 py-2 lg:px-4 lg:py-3 text-sm lg:text-lg"
            >
              LogIn MOI ID
            </ButtonComponent>
          </div>
        </div>
        <div>
          <img
            className="mx-auto bg-transperant"
            style={{ "background-size": "1000px" }}
            src={"/images/human.svg"}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
