import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
  const [user, setUser] = useState();

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
        handleIsLoginModalOpen,
        user,
        setUser
      }}
    >
      {children}
    </Provider>
  );
};

export default AuthContextProvider;
