import React, { useContext, useEffect } from "react";
import { Inter } from "next/font/google";
import { ThemeContext } from "../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";

import { Background } from "../components/SvgComponent";


const inter = Inter({ subsets: ["latin"] });

export default React.forwardRef(function Layout({ children, data }, ref) {
  const { setMoiState, loginData, loginId, isDarkMode } = useContext(ThemeContext);

  const getEligibility = async () => {
    let response = await fetch(`/api/moi?userId=${loginData.userid}&userName=${loginData.userName}`);
    
    let data = await response.json();
    const avatarsCreated = data.interactions.data.filter(function (txn) {
      try {
        let namespace = loginData.iome.utils.mDecode(txn.namespace)
        return (namespace.includes("Avatar") &&
        txn.action == "Created");
      } catch (error) {
        return ;
      }
    })
    console.log(avatarsCreated)

    const avatarsScanned = data.interactions.data.filter(function (txn) {
      try {
        let namespace = loginData.iome.utils.mDecode(txn.namespace)
        return (namespace.includes("Avatar") &&
        txn.action == "Scanned");
      } catch (error) {
        return ;
      }
    })
    console.log(avatarsScanned)

    const appsCreated = data.interactions.data.filter(function (txn) {
      try {
        let namespace = loginData.iome.utils.mDecode(txn.namespace)
        return (namespace.includes("App") &&
        txn.action == "Created");
      } catch (error) {
        return ;
      }
    })
    console.log(appsCreated)

    const appsJoined = data.interactions.data.filter(function (txn) {
      try {
        let namespace = loginData.iome.utils.mDecode(txn.namespace)
        return (namespace.includes("App") &&
        txn.action == "Joined");
      } catch (error) {
        return ;
      }
    })
    console.log(appsJoined)

    const kyc = data.email.code == 200 ? true : false
    const phone_no = data.phone_no.code == 200 ? true : false
    const email = data.email.code == 200 ? true : false

    //const validator_nodes_may = data.validator_nodes[0].timeStamp
    //console.log(validator_nodes_may)

    setMoiState((prevData) => ({
      ...prevData,
      phone_no: phone_no,
      email: email,
      kyc: kyc,
      validator_nodes: data.validator_nodes.length,
      validator_nodes_may: 0,
      twitter: data.twitter.data.level,
      telegram: data.telegram.data.level,
      discord: data.discord.data.level,
      interactions: data.interactions.data.length,
      createdApp: appsCreated.length,
      partApp: appsJoined.length,
      createdAvatar: avatarsCreated.length,
      scannedAvatar: avatarsScanned.length
    }));
    console.log(data)
    
    console.log(data.validator_nodes);
    console.log(data.twitter.data.level);
    console.log(data.telegram.data.level);
    console.log(data.discord.data.level);
  };

  useEffect(() => {
    loginId && getEligibility();
  }, [loginId]);

  return (
    <>
    <div  className={`p-auto bg-fixed bg-no-repeat ${isDarkMode ? "bg-hero-section bg-moi-white-600" : "bg-main-bg bg-[#13162e]"}`}>
      <Header />

      <div
        ref={ref}
        // className={`p-auto bg-fixed  bg-no-repeat ${isDarkMode ? "bg-hero-section bg-moi-white-600" : "bg-moi-black-300"}`}
      >
        <main className={`relative ${inter.className}`}>{children}</main>
      </div>
      </div>
      <Footer />
    </>
  );
});
