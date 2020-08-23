import React, { useContext } from "react";

import { AuthContext } from "context/AuthContext";

import { AddBtn } from "components/shared/AddBtn/AddBtn";
import LoginForm from "components/Login/LoginForm";
import { useHistory } from "react-router-dom";

const ModalsTemplate = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  return (
    <>
      <LoginForm />
      {isLoggedIn && (
        <AddBtn onClick={() => history.push("/profile/addRecipe")} />
      )}
    </>
  );
};

export default ModalsTemplate;
