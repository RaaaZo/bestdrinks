import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "context/AuthContext";

import drinks from "assets/svg/drinks.svg";
import login from "assets/svg/login.svg";
import logout from "assets/svg/logout.svg";
import myDrinks from "assets/svg/myDrinks.svg";
import profile from "assets/svg/profile.svg";
import LogoutModal from "../LogoutModal/LogoutModal";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: none;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    180deg,
    #ff5533 0%,
    #ff5533 50%,
    rgba(255, 85, 51, 0.7) 100%
  );
  box-shadow: -8px 0px 14px -1px rgba(255, 85, 51, 0.75);

  @media (orientation: landscape) {
    display: flex;
  }
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 80%;

  ${({ isLoggedIn }) =>
    isLoggedIn &&
    css`
      justify-content: space-evenly;
    `}
`;

const StyledListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 30px;
  text-decoration: none;
  list-style: none;
  cursor: pointer;

  ${({ activeLink }) =>
    activeLink &&
    css`
      background-color: white;
    `}
`;

const StyledLink = styled(Link)`
  margin-left: 20px;
  color: ${({ theme }) => theme.secondaryColor};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
  transition: color 0.3s 0.1s linear;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: linear-gradient(
    180deg,
    #ff5533 0%,
    #ff5533 50%,
    rgba(255, 85, 51, 0.7) 100%
  );
  border-radius: 30%;
  border: 2px solid black;
  transition: background-color 0.3s 0.1s linear;

  @media (min-width: 1024px) {
    width: 60px;
    height: 60px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

const Navigation = () => {
  const { isLoggedIn, handleIsLoginModalOpen } = useContext(AuthContext);

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleIsLogoutModalOpen = () => {
    setIsLogoutModalOpen(isLogoutModalOpen => !isLogoutModalOpen);
  };

  return (
    <>
      <LogoutModal
        handleIsLogoutModalOpen={handleIsLogoutModalOpen}
        isLogoutModalOpen={isLogoutModalOpen}
      />
      <Wrapper>
        <StyledLink to="/">BestDrinks</StyledLink>
        <StyledList>
          <StyledListItem
            exact
            as={NavLink}
            activeClassName="activeLink"
            to="/"
          >
            <StyledImg src={drinks} alt="strona główna" />
          </StyledListItem>

          {isLoggedIn && (
            <>
              <StyledListItem
                exact
                as={NavLink}
                activeClassName="activeLink"
                to="/profile"
              >
                <StyledImg src={profile} alt="profil" />
              </StyledListItem>

              <StyledListItem
                exact
                as={NavLink}
                activeClassName="activeLink"
                to="/profile/myRecipes"
              >
                <StyledImg src={myDrinks} alt="moje przepisy" />
              </StyledListItem>
            </>
          )}

          {isLoggedIn ? (
            <StyledListItem
              exact
              as={NavLink}
              activeClassName="activeLink"
              to={"/"}
              onClick={handleIsLogoutModalOpen}
            >
              <StyledImg src={logout} alt="wylogowanie" />
            </StyledListItem>
          ) : (
            <StyledListItem>
              <StyledImg
                onClick={handleIsLoginModalOpen}
                src={login}
                alt="logowanie"
              />
            </StyledListItem>
          )}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default Navigation;
