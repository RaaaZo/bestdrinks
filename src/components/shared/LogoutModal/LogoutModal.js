import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { AuthContext } from "context/AuthContext";
import { CloseModal } from "../CloseModal/CloseModal";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(300%, -50%);
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 2px solid ${({ theme }) => theme.accentsColor};
  border-radius: 15px;
  transition: transform 0.8s ease-in-out;
  z-index: 100;

  ${({ isLogoutModalOpen }) =>
    isLogoutModalOpen &&
    css`
      transform: translate(-50%, -50%);
    `}
`;

const StyledHeader = styled.h3`
  margin: 20px 0 60px 0;
  text-align: center;
  color: ${({ theme }) => theme.accentsColor};

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 3%;
  margin: 0 30px;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: bold;
  background-color: ${({ theme }) => theme.accentsColor};
  border: 2px solid ${({ theme }) => theme.accentsColor};
  border-radius: 25px;

  &:nth-of-type(1) {
    background-color: ${({ theme }) => theme.secondaryColor};
    border: 2px solid black;
    width: 60%;
  }
`;

const LogoutModal = ({ isLogoutModalOpen, handleIsLogoutModalOpen }) => {
  const { handleIsLoggedIn } = useContext(AuthContext);

  return (
    <>
      <CloseModal isModalOpen={isLogoutModalOpen} />
      <Wrapper isLogoutModalOpen={isLogoutModalOpen}>
        <StyledHeader>Czy na pewno chcesz się wylogować?</StyledHeader>
        <ButtonsWrapper>
          <StyledButton onClick={handleIsLogoutModalOpen}>Nie</StyledButton>
          <StyledButton
            onClick={() => {
              handleIsLoggedIn();
              handleIsLogoutModalOpen();
            }}
          >
            Tak
          </StyledButton>
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
};

LogoutModal.propTypes = {
  isLogoutModalOpen: PropTypes.bool.isRequired,
  handleIsLogoutModalOpen: PropTypes.func.isRequired
};

export default LogoutModal;
