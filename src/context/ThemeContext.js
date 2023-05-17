import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginData, setLoginData] = useState()
  const [moiState, setMoiState] = useState({
    isMoid: "",
    phone_no: "",
    email: "",
    kyc: "",
    validator_nodes: "",
    twitter: "",
    telegram: "",
    discord: "",
    interactions: "",
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
        loginData
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
