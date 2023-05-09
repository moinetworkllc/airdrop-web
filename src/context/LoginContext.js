import React, { createContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);

  const changeLogin = () => {
    setLogin(!isLogin);
  };

  return (
    <LoginContext.Provider value={{ isLogin, changeLogin }}>
      {children}
    </LoginContext.Provider>
  );
};



export { LoginProvider, LoginContext };
