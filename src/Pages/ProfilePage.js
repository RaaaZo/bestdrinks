import React, { Fragment } from "react";

import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import styled from "styled-components";

import {
  CardWrapper,
  StyledSvg,
  StyledDescription,
  DetailsData,
  StyledCardButton,
  StyledDate,
} from "styles/CardStyles";
import bartender from "assets/svg/bartender.svg";
import { Link } from "react-router-dom";
import usePushHistory from "hooks/usePushHistory";

const DUMMY_DATA = [
  {
    id: 1,
    img: bartender,
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde eos voluptate molestiae, quisquam in aliquam neque ipsam vitae quod repudiandae, possimus sint repellendus!",
    user: "Mateusz",
    date: "13.08.2020",
  },
  {
    id: 2,
    img: bartender,
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde!",
    user: "Mateusz",
    date: "13.08.2020",
  },
  {
    id: 3,
    img: bartender,
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde eos voluptate molestiae",
    user: "Mateusz",
    date: "13.08.2020",
  },
];

const DataAndFavouritesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h3`
  width: 100%;
  padding: 20px;
  margin: 15px auto;
  color: black;
  font-size: ${({ theme }) => theme.fontSize.xl};
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 2px solid ${({ theme }) => theme.accentsColor};
  text-align: center;

  @media (min-width: 660px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const DataWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 2px solid ${({ theme }) => theme.accentsColor};

  @media (min-width: 660px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 10px auto;
`;

const ProfilePage = () => {
  const pushToDetailedCard = usePushHistory();

  return (
    <PageWrapper>
      <DataAndFavouritesWrapper>
        <StyledHeader>Dane :</StyledHeader>
        <DataWrapper>
          <StyledParagraph>Imię :</StyledParagraph>
          <StyledParagraph>E-mail :</StyledParagraph>
          <StyledParagraph>Ulubione :</StyledParagraph>
          <StyledParagraph>Twoje przepisy :</StyledParagraph>
        </DataWrapper>

        <StyledHeader as={Link} to="/profile/favourites">
          Ulubione :
        </StyledHeader>

        <PageWrapper profiledata>
          {DUMMY_DATA.slice(0, 2).map((item) => (
            <Fragment key={item.id}>
              <CardWrapper
                profiledata
                onClick={() => pushToDetailedCard(`/drink/${item.id}`)}
              >
                <StyledSvg src={item.img} alt="zdjęcie drinka" />
                <StyledDescription>{item.desc}</StyledDescription>
                <DetailsData>
                  <StyledCardButton>{item.user}</StyledCardButton>
                  <StyledDate>{item.date}</StyledDate>
                </DetailsData>
              </CardWrapper>
            </Fragment>
          ))}
        </PageWrapper>

        <StyledHeader as={Link} to="/profile/myRecipes">
          Twoje przepisy :
        </StyledHeader>

        <PageWrapper profiledata>
          {DUMMY_DATA.slice(0, 2).map((item) => (
            <Fragment key={item.id}>
              <CardWrapper
                profiledata
                onClick={() => pushToDetailedCard(`/drink/${item.id}`)}
              >
                <StyledSvg src={item.img} alt="zdjęcie drinka" />
                <StyledDescription>{item.desc}</StyledDescription>
                <DetailsData>
                  <StyledCardButton>Edytuj</StyledCardButton>
                  <StyledDate>{item.date}</StyledDate>
                </DetailsData>
              </CardWrapper>
            </Fragment>
          ))}
        </PageWrapper>
      </DataAndFavouritesWrapper>
    </PageWrapper>
  );
};

export default ProfilePage;
