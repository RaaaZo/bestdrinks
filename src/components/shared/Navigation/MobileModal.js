import React, {useContext, useState} from 'react';
import styled, {css} from 'styled-components';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import drinks from 'assets/svg/drinks.svg';
import favourite from 'assets/svg/favourite.svg';
import login from 'assets/svg/login.svg';
import logout from 'assets/svg/logout.svg';
import myDrinks from 'assets/svg/myDrinks.svg';
import profile from 'assets/svg/profile.svg';
import {AuthContext} from 'context/AuthContext';
import LogoutModal from '../LogoutModal/LogoutModal';

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  transform: translateX(110%);
  background: linear-gradient(
    180deg,
    #ff5533 0%,
    #ff5533 50%,
    rgba(255, 85, 51, 0.7) 100%
  );
  box-shadow: -8px 0px 14px -1px rgba(255, 85, 51, 0.75);
  z-index: 998;
  transition: transform 0.4s 0.2s ease-in-out;

  @media (orientation: landscape) {
    display: none;
  }

  @media (min-width: 500px) {
    width: 150px;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  ${({isMenuOpen}) =>
    isMenuOpen &&
    css`
      transform: translateX(0);
    `}
`;

const LinksWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${({isLoggedIn}) =>
    isLoggedIn &&
    css`
      justify-content: flex-start;
    `}
`;

const StyledNavLinks = styled.div`
  margin-top: 10px;
  padding: 20px 40px;
  font-size: ${({theme}) => theme.fontSize.l};
  font-weight: bold;
  cursor: pointer;

  text-decoration: none;

  @media (min-width: 768px) {
    margin-top: 50px;
  }

  &:first-child {
    margin-top: 50px;
  }

  &:nth-last-of-type(1) {
    margin-top: 20px;
  }

  @media (min-width: 400px) {
    &:first-child {
      margin-top: 70px;
    }

    &:nth-last-of-type(1) {
      margin-top: 40px;
    }
  }

  @media (min-width: 768px) {
    &:first-child {
      margin-top: 120px;
    }

    &:nth-last-of-type(1) {
      margin-top: 80px;
    }
  }
`;

const StyledImg = styled.img`
  width: 60px;
  padding: 10px;
  border-radius: 30%;
  border: 2px solid black;
`;

const MobileModal = ({handleSetIsMenuOpen, isMenuOpen}) => {
  const {isLoggedIn, handleIsLoginModalOpen} = useContext(AuthContext);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleIsLogoutModalOpen = () => {
    setIsLogoutModalOpen((isLogoutModalOpen) => !isLogoutModalOpen);
  };

  return (
    <>
      <LogoutModal
        handleIsLogoutModalOpen={handleIsLogoutModalOpen}
        isLogoutModalOpen={isLogoutModalOpen}
      />
      <Modal isMenuOpen={isMenuOpen}>
        <LinksWrapper>
          <StyledNavLinks
            as={NavLink}
            onClick={handleSetIsMenuOpen}
            exact
            activeClassName='activeLink'
            to='/'
          >
            <StyledImg src={drinks} alt='strona główna' />
          </StyledNavLinks>

          {isLoggedIn ? (
            <>
              <StyledNavLinks
                as={NavLink}
                onClick={handleSetIsMenuOpen}
                exact
                activeClassName='activeLink'
                to='/profile'
              >
                <StyledImg src={profile} alt='profil' />
              </StyledNavLinks>
              <StyledNavLinks
                as={NavLink}
                onClick={handleSetIsMenuOpen}
                exact
                activeClassName='activeLink'
                to='/profile/favourites'
              >
                <StyledImg src={favourite} alt='ulubione' />
              </StyledNavLinks>
              <StyledNavLinks
                as={NavLink}
                onClick={handleSetIsMenuOpen}
                exact
                activeClassName='activeLink'
                to='/profile/myRecipes'
              >
                <StyledImg src={myDrinks} alt='moje przepisy' />
              </StyledNavLinks>

              <StyledNavLinks
                exact
                as={NavLink}
                activeClassName='activeLink'
                to={'/'}
                onClick={() => {
                  handleSetIsMenuOpen();
                  handleIsLogoutModalOpen();
                }}
              >
                <StyledImg src={logout} alt='wylogowywanie' />
              </StyledNavLinks>
            </>
          ) : (
            <StyledNavLinks>
              <StyledImg
                onClick={() => {
                  handleIsLoginModalOpen();
                  handleSetIsMenuOpen();
                }}
                src={login}
                alt='logowanie'
              />
            </StyledNavLinks>
          )}
        </LinksWrapper>
      </Modal>
    </>
  );
};

MobileModal.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleSetIsMenuOpen: PropTypes.func.isRequired,
};

export default MobileModal;
