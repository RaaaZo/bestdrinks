import React, { useState, useEffect, useContext } from "react";

import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import bartender from "assets/svg/bartender.svg";
import { Link } from "react-router-dom";
import Axios from "axios";
import { AuthContext } from "context/AuthContext";
import LoadingSpinner from "components/shared/LoadingSpinner/LoadingSpinner";

import MyRecipesCards from "components/MyRecipesCards/MyRecipesCards";
import {
  StyledPageHeader,
  DataAndFavouritesWrapper,
  DataWrapper,
  StyledParagraph,
  StyledSpan
} from "styles/ProfileStyles";
import {
  CardWrapper,
  CardInnerWrapper,
  StyledSvg,
  StyledError
} from "styles/CardStyles";

const ProfilePage = () => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:5000/api/users/${user.id}`
        );

        setUserData(response.data.user);
        setIsLoading(false);
      } catch (err) {
        setError(err.response.data.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (!isLoading && error) {
    return (
      <CardWrapper>
        <CardInnerWrapper>
          <StyledSvg src={bartender} alt="zdjęcie drinka" />
          <StyledError>{error}</StyledError>
        </CardInnerWrapper>
      </CardWrapper>
    );
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}

      <PageWrapper>
        <StyledPageHeader>Twój profil :</StyledPageHeader>
        <DataAndFavouritesWrapper>
          {userData && (
            <>
              <StyledPageHeader>Dane :</StyledPageHeader>
              <DataWrapper>
                <StyledParagraph>
                  Imię : <StyledSpan>{userData.name}</StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  E-mail : <StyledSpan>{userData.email}</StyledSpan>
                </StyledParagraph>

                {userData.drinks !== "undefined" && (
                  <>
                    <StyledParagraph>
                      Twoje przepisy :
                      <StyledSpan> {userData.drinks.length}</StyledSpan>
                    </StyledParagraph>
                  </>
                )}
              </DataWrapper>
            </>
          )}

          <StyledPageHeader as={Link} to="/profile/myRecipes">
            Twoje przepisy :
          </StyledPageHeader>

          <PageWrapper profiledata>
            <MyRecipesCards profilePage />
          </PageWrapper>
        </DataAndFavouritesWrapper>
      </PageWrapper>
    </>
  );
};

export default ProfilePage;
