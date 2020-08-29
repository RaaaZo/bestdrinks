import React, { Fragment, useState, useEffect } from "react";

import bartender from "assets/svg/bartender.svg";
import {
  CardWrapper,
  StyledSvg,
  StyledDescription,
  DetailsData,
  StyledCardButton,
  StyledDate,
  StyledError,
  CardInnerWrapper
} from "styles/CardStyles";
import usePushHistory from "hooks/usePushHistory";
import Axios from "axios";
import LoadingSpinner from "components/shared/LoadingSpinner/LoadingSpinner";
import {
  ApiPageError,
  ApiPageErrorMessage
} from "components/ApiErrors/ApiErrors";
import { StyledHeader } from "styles/FormikStyles";
import { StyledPageHeader, PageHeaderWrapper } from "styles/ProfileStyles";

const Card = () => {
  const [cardsData, setCardsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const pushToDetailedCard = usePushHistory();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:5000/api/recipes/allDrinks"
        );

        setCardsData(response.data.allDrinks);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.response.data.message);
      }
    };

    fetchData();
  }, []);

  if (!isLoading && error) {
    return (
      <CardWrapper>
        <StyledSvg src={bartender} alt="zdjęcie drinka" />
        <StyledError>
          Nie ma żadnych przepisów. Zaloguj się i dodaj jakiś!
        </StyledError>
      </CardWrapper>
    );
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}

      {error && (
        <ApiPageError>
          <ApiPageErrorMessage>{error}</ApiPageErrorMessage>
        </ApiPageError>
      )}
      <PageHeaderWrapper>
        <StyledPageHeader>Wszystkie przepisy :</StyledPageHeader>
      </PageHeaderWrapper>
      {cardsData &&
        cardsData.map(item => (
          <Fragment key={item.id}>
            <CardWrapper>
              <CardInnerWrapper
                onClick={() => pushToDetailedCard(`/drink/${item.id}`)}
              >
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
                <StyledCardButton>{item.creatorName}</StyledCardButton>
                <StyledDate>{item.date}</StyledDate>
              </DetailsData>
            </CardWrapper>
          </Fragment>
        ))}
    </>
  );
};

export default Card;
