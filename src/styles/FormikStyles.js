import styled, {css} from 'styled-components';
import {Form, Field} from 'formik';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(110%, -50%);
  width: 80%;
  height: 70%;
  background-color: ${({theme}) => theme.secondaryColor};
  border: 2px solid ${({theme}) => theme.accentsColor};
  border-radius: 15px;
  transition: transform 0.8s 0.1s ease-in-out;

  @media (orientation: landscape) {
    width: 50%;
    height: 90%;
    top: 5%;
    transform: translate(150%, 0);

    ${({isLoginModalOpen}) =>
      isLoginModalOpen &&
      css`
        transform: translate(-50%, 0);
      `}
  }

  @media (min-width: 768px) {
    width: 60%;
    height: 60%;
  }

  @media (min-width: 1024px) {
    width: 60%;
    height: 70%;
    top: 50%;
    transform: translate(150%, -50%);

    ${({isLoginModalOpen}) =>
      isLoginModalOpen &&
      css`
        transform: translate(-50%, -50%);
      `}
  }

  @media (min-width: 1440px) {
    width: 40%;
    height: 60%;
  }

  ${({isLoginModalOpen}) =>
    isLoginModalOpen &&
    css`
      transform: translate(-50%, -50%);
    `}
`;

export const StyledHeader = styled.h3`
  width: 80%;
  margin: 20px auto;
  text-align: center;
  font-size: ${({theme: {fontSize}}) => fontSize.xxl};
  color: ${({theme: {accentsColor}}) => accentsColor};

  @media (orientation: landscape) {
    margin: 10px auto;
    font-size: ${({theme: {fontSize}}) => fontSize.xl};
  }

  @media (min-width: 1024px) {
    margin: 20px auto;
  }
`;

export const StyledForm = styled(Form)`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  font-size: ${({theme: {fontSize}}) => fontSize.xl};
  font-weight: bold;
  color: ${({theme: {accentsColor}}) => accentsColor};
  margin: 10px 0;

  @media (orientation: landscape) {
    font-size: ${({theme: {fontSize}}) => fontSize.l};
  }

  @media (min-width: 1024px) {
    font-size: ${({theme: {fontSize}}) => fontSize.xl};
  }
`;

export const StyledField = styled(Field)`
  font-size: ${({theme: {fontSize}}) => fontSize.xl};
  width: 100%;
  height: 8%;
  border: 2px solid ${({theme: {accentsColor}}) => accentsColor};
  border-radius: 15px;
  text-align: center;

  @media (orientation: landscape) {
    font-size: ${({theme: {fontSize}}) => fontSize.l};
    height: 10%;
  }

  @media (min-width: 1024px) {
    font-size: ${({theme: {fontSize}}) => fontSize.xl};
  }
`;

export const StyledButton = styled.button`
  margin-top: 15px;
  width: 50%;
  padding: 5% 3%;
  font-size: ${({theme: {fontSize}}) => fontSize.l};
  color: ${({theme: {accentsColor}}) => accentsColor};
  font-weight: bold;
  background-color: ${({theme: {primaryColor}}) => primaryColor};
  border: 2px solid ${({theme: {accentsColor}}) => accentsColor};
  border-radius: 15px;

  @media (orientation: landscape) {
    padding: 2%;
  }
`;
