import React, { createContext, useState } from "react";
import { MOI_INITIAL_DATA, INITAL_POINTS } from '../utils/constants';

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
  const [kycNationality, setKycNationality] = useState("")
  const [proof, setProof] = useState([])
  const [moiState, setMoiState] = useState(MOI_INITIAL_DATA);
  const [points, setPoints] = useState(INITAL_POINTS);

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
        loading,
        setKycNationality,
        kycNationality,
        proof,
        setProof
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
