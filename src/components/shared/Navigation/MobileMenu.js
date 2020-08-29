import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(
    180deg,
    #ff5533 0%,
    #ff5533 50%,
    rgba(255, 85, 51, 0.7) 100%
  );
`;

const InnerWrapper = styled.div`
  position: fixed;
  top: 3%;
  right: 5%;
  width: 50px;
  height: 40px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  z-index: 999;
  transition: transform 0.8s ease-in-out;
  cursor: pointer;

  @media (orientation: landscape) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      transform: translateX(-100px);

      @media (min-width: 500px) {
        transform: translateX(-150px);
      }
    `}
`;

const HamburgerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const HamburgerMenu = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 3px;
  background-color: ${({ theme }) => theme.secondaryColor};
  transition: background-color 0.6s linear;
  z-index: 999;

  &::before {
    content: "";
    position: absolute;
    bottom: 7px;
    width: 35px;
    height: 3px;
    background-color: ${({ theme }) => theme.secondaryColor};
    transition: transform 0.6s linear;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -7px;
    width: 35px;
    height: 3px;
    background-color: ${({ theme }) => theme.secondaryColor};
    transition: transform 0.6s linear;
  }
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      background-color: transparent;

      &::before {
        content: "";
        transform: translateY(7px) rotate(45deg);
      }

      &::after {
        content: "";
        transform: translateY(-7px) rotate(-45deg);
      }
    `}
`;

const StyledLogo = styled(Link)`
  position: fixed;
  top: 3%;
  left: 3%;
  color: ${({ theme }) => theme.secondaryColor};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
  z-index: 999;

  @media (orientation: landscape) {
    display: none;
  }
`;

const MobileMenu = ({ handleSetIsMenuOpen, isMenuOpen }) => {
  return (
    <>
      <StyledLogo to="/">BestDrinks</StyledLogo>
      <Wrapper>
        <InnerWrapper isMenuOpen={isMenuOpen} onClick={handleSetIsMenuOpen}>
          <HamburgerWrapper>
            <HamburgerMenu isMenuOpen={isMenuOpen} />
          </HamburgerWrapper>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

MobileMenu.propTypes = {
  handleSetIsMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
};

export default MobileMenu;
