import React, {useContext} from 'react';
import {
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledField,
  StyledButton,
} from 'styles/FormikStyles';
import {Formik} from 'formik';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import {ReactComponent as RegisterSvg} from 'assets/svg/registerSvg.svg';
import {AuthContext} from 'context/AuthContext';

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  margin-top: 120px;
  padding: 20px 0;
  background-color: ${({theme}) => theme.secondaryColor};
  border: 2px solid ${({theme}) => theme.accentsColor};
  border-radius: 15px;

  @media (orientation: landscape) {
    width: 50%;
    height: 90%;
  }

  @media (min-width: 768px) {
    width: 60%;
    height: 60%;
  }

  @media (min-width: 1024px) {
    width: 60%;
    height: 70%;
  }

  @media (min-width: 1440px) {
    width: 40%;
    height: 60%;
  }
`;

const StyledSvg = styled(RegisterSvg)`
  width: 100%;
  height: 300px;
  margin: 30px auto;

  @media (min-width: 1024px) {
    height: 400px;
  }
`;

const RegisterPage = () => {
  const history = useHistory();

  const {handleIsLoginModalOpen} = useContext(AuthContext);

  return (
    <>
      <Wrapper register='true'>
        <StyledHeader>Zarejestruj się</StyledHeader>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            console.log(values);
            history.push('/');
            handleIsLoginModalOpen();
          }}
        >
          <StyledForm>
            <StyledLabel htmlFor='name'>Imię</StyledLabel>
            <StyledField id='name' name='name' placeholder='imię' />
            <StyledLabel htmlFor='email'>E-mail</StyledLabel>
            <StyledField id='email' name='email' placeholder='e-mail' />
            <StyledLabel htmlFor='password'>Hasło</StyledLabel>
            <StyledField id='password' name='password' placeholder='hasło' />
            <StyledButton type='submit'>Zarejestruj się</StyledButton>
          </StyledForm>
        </Formik>
      </Wrapper>
      <StyledSvg />
    </>
  );
};
export default RegisterPage;
