import React, { useContext, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { AuthContext } from "context/AuthContext";
import { Link } from "react-router-dom";
import {
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledField,
  StyledButton,
  ModalFormikWrapper
} from "styles/FormikStyles";
import { CloseModal } from "components/shared/CloseModal/CloseModal";
import axios from "axios";
import { ApiError } from "components/ApiErrors/ApiErrors";
import LoadingSpinner from "components/shared/LoadingSpinner/LoadingSpinner";

import * as Yup from "yup";

const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Niewłaściwy e-mail")
    .required("Pole wymagane"),
  password: Yup.string()
    .min(6, "Zbyt krótkie hasło")
    .max(16, "Zbyt długie hasło")
    .required("Pole wymagane")
});

const AuthForm = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleIsLoggedIn,
    handleIsLoginModalOpen,
    isLoginModalOpen,
    setUser
  } = useContext(AuthContext);

  return (
    <>
      <CloseModal
        isModalOpen={isLoginModalOpen}
        onClick={handleIsLoginModalOpen}
      />
      <ModalFormikWrapper isModalOpen={isLoginModalOpen}>
        <StyledHeader>Zaloguj się</StyledHeader>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={loginValidation}
          onSubmit={async (values, { resetForm }) => {
            setIsLoading(true);

            try {
              const response = await axios.post(
                "http://localhost:5000/api/users/login",
                {
                  email: values.email,
                  password: values.password
                }
              );
              setError("");
              setUser(response.data.user);
              await handleIsLoggedIn();
              await handleIsLoginModalOpen();
              setIsLoading(false);
              resetForm({ values: "" });
            } catch (err) {
              setError(err.response.data.message);
              setIsLoading(false);
            }
          }}
        >
          <StyledForm>
            <StyledLabel htmlFor="email">E-mail</StyledLabel>
            <StyledField id="email" name="email" placeholder="E-mail" />

            <ErrorMessage name="email" />

            <StyledLabel htmlFor="password">Hasło</StyledLabel>
            <StyledField
              type="password"
              id="password"
              name="password"
              placeholder="Hasło"
            />

            <ErrorMessage name="password" />

            {error && <ApiError>{error}</ApiError>}

            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <StyledButton type="submit">Zaloguj</StyledButton>
            )}

            <StyledHeader
              onClick={handleIsLoginModalOpen}
              as={Link}
              to="/auth/register"
            >
              Nie masz konta?
              <span style={{ fontWeight: "bold" }}> Zarejestruj się</span>!
            </StyledHeader>
          </StyledForm>
        </Formik>
      </ModalFormikWrapper>
    </>
  );
};

export default AuthForm;
