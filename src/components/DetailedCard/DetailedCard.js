import React, { Fragment, useState, useEffect } from "react";
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

import bartender from "assets/svg/bartender.svg";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import LoadingSpinner from "components/shared/LoadingSpinner/LoadingSpinner";
import { StyledHeader } from "styles/FormikStyles";
import { StyledBackArrow } from "components/shared/BackArrow/BackArrow";

const DetailedCard = () => {
  const [cardData, setCardData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const history = useHistory();

  const { drinkId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:5000/api/recipes/singleDrink/${drinkId}`
        );

        setCardData(response.data.drink);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);

        setError(err.response.data.message);
      }
    };

    fetchData();
  }, [drinkId]);

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
      <StyledBackArrow onClick={() => history.goBack(1)} />

      {isLoading && <LoadingSpinner />}

      {cardData && (
        <Fragment key={cardData.id}>
          <CardWrapper detailedCard="true">
            <CardInnerWrapper>
              <StyledSvg
                src={cardData.img ? cardData.img : bartender}
                alt="zdjęcie drinka"
              />

              <StyledHeader>{cardData.name}</StyledHeader>
              <StyledDescription>{cardData.description}</StyledDescription>
              <StyledDescription>{cardData.recipe}</StyledDescription>
            </CardInnerWrapper>
            <DetailsData>
              <StyledCardButton>{cardData.creatorName}</StyledCardButton>

              <StyledDate>{cardData.date}</StyledDate>
            </DetailsData>
          </CardWrapper>
        </Fragment>
      )}
    </>
  );
};

export default DetailedCard;
