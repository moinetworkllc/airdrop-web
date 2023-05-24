import React, { useContext, useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import Image from "next/image";
import Link from "next/link";

const Distribution = () => {
  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-moi-purple-700 sm:text-4xl">
            Distribution
          </p>
        </div>

        <div className="flex justify-between items-center mt-10">
            <div className="grid gap-10">
                <p className="mt-2 text-3xl font-bold tracking-tight text-moi-purple-700 sm:text-4xl">
                God IS(M) in the details
                </p>
                <p className="plarge text-moi-black">MOI leverages ISM (Interaction State Machine) technology to create a stateful
                <br></br> Internet that is personalized, secure, sustainable, and user-friendly.
                        <br></br>ISM is a state machine replication technology designed for a digitally interconnected
                        <br></br>society. It associates the state of objects with participants and their preferences across the
                        <br></br>entire network. It uses a context-based approach to enable a practical messaging framework for
                        <br></br>value creation, discovery, and management, akin to the familiar TCP/IP protocol.
                </p>
            </div>

          <div className="h-full">
            <img src="images/distribution.svg" alt="Distribution" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Distribution;
