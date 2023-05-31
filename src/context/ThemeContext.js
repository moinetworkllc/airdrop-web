import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginData, setLoginData] = useState()
  const [signature, setSignature] = useState("");
  const [rewards, setRewards] = useState(0)
  const [moiState, setMoiState] = useState({
    isMoid: {},
    phone_no: "",
    email: "",
    kyc: "",
    validator_nodes: "",
    validator_nodes_may: "",
    twitter: "",
    telegram: "",
    discord: "",
    interactions: "",
    kramaID: "",
    createdApp: "",
    partApp: "",
    createdAvatar: "",
    scannedAvatar: "",
  });

  const handleLogin = (id) => {
    setLoginId(id);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        loginId,
        handleLogin,
        moiState,
        setMoiState,
        isModalOpen,
        setModalOpen,
        setLoginData,
        setSignature,
        signature,
        loginData,
        rewards,
        setRewards
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
