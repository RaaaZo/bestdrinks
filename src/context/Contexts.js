import React from "react";
import AuthContextProvider from "./AuthContext";

const Contexts = ({ children }) => {
  return (
    <>
      <AuthContextProvider>{children}</AuthContextProvider>
    </>
  );
};

export default Contexts;
