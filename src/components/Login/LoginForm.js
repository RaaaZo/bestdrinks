import React, { useContext } from "react";
import { Formik } from "formik";
import { AuthContext } from "context/AuthContext";
import { Link } from "react-router-dom";
import {
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledField,
  StyledButton,
  ModalFormikWrapper,
} from "styles/FormikStyles";
import { CloseModal } from "components/shared/CloseModal/CloseModal";

const AuthForm = () => {
  const {
    handleIsLoggedIn,
    handleIsLoginModalOpen,
    isLoginModalOpen,
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
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            handleIsLoggedIn();
            handleIsLoginModalOpen();
          }}
        >
          <StyledForm>
            <StyledLabel htmlFor="email">E-mail</StyledLabel>
            <StyledField id="email" name="email" placeholder="E-mail" />

            <StyledLabel htmlFor="password">Hasło</StyledLabel>
            <StyledField id="password" name="password" placeholder="Hasło" />

            <StyledButton type="submit">Zaloguj</StyledButton>
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
