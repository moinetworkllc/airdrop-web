import React, { createContext, useState } from 'react';

const StateContext = createContext();

const StateProvider = ({ children }) => {
    
  const [ moiState, setMoiState] = useState({
    'isMoid': '',
    'phNumber': '',
    'emailAddress': '',
    'kyc': '',
    'validatorNode': '',
    'twitter': '',
    'telegram': '',
    'discord': '',
    'indusTestnet': '',
    'createdApp': '',
    'partApp': '',
    'createdAvatar': '',
    'scannedAvatar': ''
  });

  const handleMoiState = () => {
    setMoiState(!isDarkMode);
  };

  return (
    <StateContext.Provider value={{ moiState, handleMoiState }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, StateContext };
