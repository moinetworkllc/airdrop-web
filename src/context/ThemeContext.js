import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginData, setLoginData] = useState()
  const [signature, setSignature] = useState("");
  const [rewards, setRewards] = useState(0)
  const [kramaIds, setKramaIds] = useState([])
  const [loading, setLoading] = useState(false)
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
    kramaId: "",
    createdApp: "",
    partApp: "",
    createdAvatar: "",
    scannedAvatar: "",
  });
  const [points, setPoints] = useState({
    moid: 0,
    phone_no: 0,
    email: 0,
    kyc: 0,
    validator_nodes: 0,
    validator_nodes_may: 0,
    twitter: 0,
    telegram: 0,
    discord: 0,
    interactions: 0,
    createdApp: 0,
    partApp: 0,
    createdAvatar: 0,
    scannedAvatar: 0,
    kramaId: 0
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
        setRewards,
        setPoints,
        points,
        kramaIds,
        setKramaIds,
        setLoading,
        loading
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
