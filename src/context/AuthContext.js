import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);

  const handleIsLoggedIn = () => {
    setIsLoggedIn(isLoggedIn => !isLoggedIn);
  };

  const handleIsLoginModalOpen = () => {
    setisLoginModalOpen(isLoginModalOpen => !isLoginModalOpen);
  };

  return (
    <Provider
      value={{
        isLoggedIn,
        handleIsLoggedIn,
        isLoginModalOpen,
        handleIsLoginModalOpen
      }}
    >
      {children}
    </Provider>
  );
};

export default AuthContextProvider;
