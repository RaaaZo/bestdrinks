import React, { Fragment, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import bartender from "assets/svg/bartender.svg";

import {
  CardWrapper,
  StyledSvg,
  StyledDescription,
  DetailsData,
  StyledDate,
  StyledCardButton,
  StyledError,
  CardInnerWrapper
} from "styles/CardStyles";
import usePushHistory from "hooks/usePushHistory";
import { AuthContext } from "context/AuthContext";
import Axios from "axios";
import LoadingSpinner from "components/shared/LoadingSpinner/LoadingSpinner";
import {
  ApiPageError,
  ApiPageErrorMessage
} from "components/ApiErrors/ApiErrors";
import { StyledHeader } from "styles/FormikStyles";

const MyRecipesCards = ({ profilePage }) => {
  const [cardsData, setCardsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const { user } = useContext(AuthContext);

  const pushToUrl = usePushHistory();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:5000/api/recipes/drinks/${user.id}`
        );

        setCardsData(response.data.userDrinks);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.response.data.message);
      }
    };

    fetchData();
  }, [user]);

  const deleteRecipe = async id => {
    setIsLoading(true);
    try {
      await Axios.delete(`http://localhost:5000/api/recipes/deleteDrink/${id}`);
      pushToUrl("/");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      setError(err.response.data.message);
    }
  };

  if (!isLoading && cardsData === "undefined") {
    return (
      <CardWrapper>
        <StyledSvg src={bartender} alt="zdjęcie drinka" />
        <StyledError>Nie masz żadnych przepisów. Dodaj jakiś!</StyledError>
      </CardWrapper>
    );
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}

      {error && !profilePage ? (
        <ApiPageError>
          <ApiPageErrorMessage>{error}</ApiPageErrorMessage>
        </ApiPageError>
      ) : null}

      {cardsData &&
        cardsData.map(item => (
          <Fragment key={item.id}>
            <CardWrapper>
              <CardInnerWrapper onClick={() => pushToUrl(`/drink/${item.id}`)}>
                <StyledSvg
                  src={item.img ? item.img : bartender}
                  alt="zdjęcie drinka"
                />
                <StyledHeader>{item.name}</StyledHeader>
                <StyledDescription>
                  {item.description.slice(0, 300)}
                </StyledDescription>
              </CardInnerWrapper>
              <DetailsData>
                <StyledCardButton
                  onClick={() => pushToUrl(`/profile/myRecipes/${item.id}`)}
                >
                  Edytuj
                </StyledCardButton>
                <StyledCardButton onClick={() => deleteRecipe(item.id)}>
                  Usuń
                </StyledCardButton>
                <StyledDate>{item.date}</StyledDate>
              </DetailsData>
            </CardWrapper>
          </Fragment>
        ))}
    </>
  );
};

MyRecipesCards.propTypes = {
  profilePage: PropTypes.bool.isRequired
};

export default MyRecipesCards;
