import React, { useContext, useEffect } from "react";
import { Inter } from "next/font/google";
import { ThemeContext } from "../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default React.forwardRef(function Layout({ children, data }, ref) {
  const { loginId, setMoiState } = useContext(ThemeContext);

  const getEligibility = async () => {
    let response = await fetch(`/api/moi?id=${loginId}`);
    let data = await response.json();

    setMoiState((prevData) => ({
      ...prevData,
      validator_nodes: data.validator_nodes.length,
      twitter: data.twitter.data.level,
      telegram: data.telegram.data.level,
      discord: data.discord.data.level,
    }));
    console.log(data.validator_nodes.length);
    console.log(data.twitter.data.level);
    console.log(data.telegram.data.level);
    console.log(data.discord.data.level);
  };

  useEffect(() => {
    loginId && getEligibility();
  }, [loginId]);

  return (
    <>
      <Header />
      <div ref={ref} className="p-auto">
        <main className={`relative ${inter.className}`}>{children}</main>
      </div>
      <Footer />
    </>
  );
});
