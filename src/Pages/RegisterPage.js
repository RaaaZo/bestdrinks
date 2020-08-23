import React, { useContext } from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import {
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledField,
  StyledButton,
} from "styles/FormikStyles";
import { PageFormikWrapper, StyledSvg } from "styles/PageFormsStyles";
import { AuthContext } from "context/AuthContext";
import usePushToUrl from "hooks/usePushHistory";

const RegisterPage = () => {
  const pushToUrl = usePushToUrl();
  const { handleIsLoginModalOpen } = useContext(AuthContext);

  return (
    <>
      <PageFormikWrapper register="true">
        <StyledHeader>Zarejestruj się</StyledHeader>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            pushToUrl("/");
            handleIsLoginModalOpen();
          }}
        >
          <StyledForm>
            <StyledLabel htmlFor="name">Imię</StyledLabel>
            <StyledField id="name" name="name" placeholder="imię" />
            <StyledLabel htmlFor="email">E-mail</StyledLabel>
            <StyledField id="email" name="email" placeholder="e-mail" />
            <StyledLabel htmlFor="password">Hasło</StyledLabel>
            <StyledField id="password" name="password" placeholder="hasło" />
            <StyledButton type="submit">Zarejestruj się</StyledButton>
          </StyledForm>
        </Formik>
      </PageFormikWrapper>
      <StyledSvg />
    </>
  );
};
export default RegisterPage;
