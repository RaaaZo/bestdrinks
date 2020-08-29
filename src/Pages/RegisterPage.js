import React, { useContext, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import Axios from "axios";

import {
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledField,
  StyledButton
} from "styles/FormikStyles";
import { PageFormikWrapper, StyledSvg } from "styles/PageFormsStyles";
import usePushToUrl from "hooks/usePushHistory";
import LoadingSpinner from "components/shared/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "context/AuthContext";
import { ApiError } from "components/ApiErrors/ApiErrors";

import * as Yup from "yup";

const registerValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Minimum dwie litery")
    .max(14, "Maksymalnie 14 liter")
    .required("Pole wymagane"),
  email: Yup.string()
    .email("Niewłaściwy e-mail")
    .required("Pole wymagane"),
  password: Yup.string()
    .min(6, "Zbyt krótkie hasło")
    .max(16, "Zbyt długie hasło")
    .required("Pole wymagane")
});

const RegisterPage = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const pushToUrl = usePushToUrl();
  const { handleIsLoginModalOpen } = useContext(AuthContext);

  return (
    <>
      <PageFormikWrapper register="true">
        <StyledHeader>Zarejestruj się</StyledHeader>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: ""
          }}
          validationSchema={registerValidation}
          onSubmit={async values => {
            setIsLoading(true);
            try {
              await Axios.post("http://localhost:5000/api/users/signup", {
                name: values.name,
                email: values.email,
                password: values.password
              });

              await handleIsLoginModalOpen();
              pushToUrl("/");
              setIsLoading(false);
              setError("");
            } catch (err) {
              setError(err.response.data.message);
              setIsLoading(false);
            }
          }}
        >
          <StyledForm>
            <StyledLabel htmlFor="name">Imię</StyledLabel>
            <StyledField id="name" name="name" placeholder="imię" />

            <ErrorMessage name="name" />

            <StyledLabel htmlFor="email">E-mail</StyledLabel>
            <StyledField id="email" name="email" placeholder="e-mail" />

            <ErrorMessage name="email" />

            <StyledLabel htmlFor="password">Hasło</StyledLabel>
            <StyledField
              type="password"
              id="password"
              name="password"
              placeholder="hasło"
            />

            <ErrorMessage name="password" />

            {error && <ApiError>{error}</ApiError>}

            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <StyledButton type="submit">Zarejestruj się</StyledButton>
            )}
          </StyledForm>
        </Formik>
      </PageFormikWrapper>
      <StyledSvg />
    </>
  );
};
export default RegisterPage;
