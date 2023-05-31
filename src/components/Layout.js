import React, { useContext, useEffect } from "react";
import { Inter } from "next/font/google";
import { ThemeContext } from "../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";

import { Background } from "../components/SvgComponent";


const inter = Inter({ subsets: ["latin"] });

export default React.forwardRef(function Layout({ children, data }, ref) {
  const { setMoiState, loginData, loginId, isDarkMode, setRewards, rewards } = useContext(ThemeContext);
  
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

    const avatarsScanned = data.interactions.data.filter(function (txn) {
      try {
        let namespace = loginData.iome.utils.mDecode(txn.namespace)
        return (namespace.includes("Avatar") &&
        txn.action == "Scanned");
      } catch (error) {
        return ;
      }
    })

    const appsCreated = data.interactions.data.filter(function (txn) {
      try {
        let namespace = loginData.iome.utils.mDecode(txn.namespace)
        return (namespace.includes("App") &&
        txn.action == "Created");
      } catch (error) {
        return ;
      }
    })

    const appsJoined = data.interactions.data.filter(function (txn) {
      try {
        let namespace = loginData.iome.utils.mDecode(txn.namespace)
        return (namespace.includes("App") &&
        txn.action == "Joined");
      } catch (error) {
        return ;
      }
    })

    const kyc = data.email.code == 200 ? true : false
    const phone_no = data.phone_no.code == 200 ? true : false
    const email = data.email.code == 200 ? true : false
    
    const validator_nodes_may = data.interactions.data.filter(function (txn) {
      if (txn.namespace == "MOI Net" &&
          txn.attr == "Validator" &&
          txn.action == "Created" &&
          parseInt(txn.instant) < 1650470399)
          return txn
    })
    let rewards_ = 0
    await data.kramaID.filter(async function (ids) {
      let krama_response = await fetch(`/api/kramaId?kramaId=${ids.kramaID}`)
      let krama_data = await krama_response.json()
      if (krama_data.rewards.data.total_token_summary) {
       rewards_ = rewards_ +  parseInt(krama_data.rewards.data.total_token_summary)
       setRewards(rewards_)
      }
     
         
     }) 
    
    setMoiState((prevData) => ({
      ...prevData,
      phone_no: phone_no,
      email: email,
      kyc: kyc,
      validator_nodes: data.validator_nodes.length,
      validator_nodes_may: validator_nodes_may.length,
      twitter: data.twitter.data.level,
      telegram: data.telegram.data.level,
      discord: data.discord.data.level,
      interactions: data.interactions.data.length,
      kramaID : data.kramaID.length,
      createdApp: appsCreated.length,
      partApp: appsJoined.length,
      createdAvatar: avatarsCreated.length,
      scannedAvatar: avatarsScanned.length
    }));
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
