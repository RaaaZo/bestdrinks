import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CloseModal } from "components/shared/CloseModal/CloseModal";
import { PageFormikWrapper } from "styles/PageFormsStyles";
import {
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledField,
  StyledButton
} from "styles/FormikStyles";
import { Formik, ErrorMessage } from "formik";
import { ApiError } from "components/ApiErrors/ApiErrors";
import LoadingSpinner from "components/shared/LoadingSpinner/LoadingSpinner";
import usePushToUrl from "hooks/usePushHistory";

import Axios from "axios";
import { CardWrapper, StyledSvg, StyledError } from "styles/CardStyles";
import bartender from "assets/svg/bartender.svg";

import * as Yup from "yup";
import { StyledBackArrow } from "components/shared/BackArrow/BackArrow";

const editRecipeValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Zbyt krótka nazwa")
    .max(40, "Zbyt długa nazwa")
    .required("Pole wymagane"),
  description: Yup.string()
    .min(15, "Zbyt krótki opis")
    .required("Pole wymagane"),
  recipe: Yup.string()
    .min(15, "Zbyt krótki przepis")
    .required("Pole wymagane"),
  img: Yup.string().matches(
    /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Wprowadź poprawny adres URL"
  )
});

const EditCard = () => {
  const [cardData, setCardData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const { recipeId } = useParams();

  const pushToUrl = usePushToUrl();

  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:5000/api/recipes/singleDrink/${recipeId}`
        );

        setCardData(response.data.drink);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.response.data.message);
      }
    };

    fetchData();
  }, [recipeId]);

  if (!isLoading && cardData.length === 0) {
    return (
      <CardWrapper>
        <StyledSvg src={bartender} alt="zdjęcie drinka" />
        <StyledError>
          Coś poszło nie tak. Spróbuj ponownie za moment.
        </StyledError>
      </CardWrapper>
    );
  }

  return (
    <>
      <StyledBackArrow onClick={() => history.goBack(1)} />

      {isLoading && <LoadingSpinner />}

      {cardData && (
        <>
          <CloseModal />
          <PageFormikWrapper>
            <StyledHeader>Zmień przepis</StyledHeader>
            <Formik
              initialValues={{
                name: cardData.name,
                description: cardData.description,
                recipe: cardData.recipe,
                img: cardData.img
              }}
              validationSchema={editRecipeValidation}
              onSubmit={async values => {
                setIsLoading(true);

                try {
                  await Axios.patch(
                    `http://localhost:5000/api/recipes/editDrink/${recipeId}`,
                    {
                      name: values.name,
                      description: values.description,
                      recipe: values.recipe,
                      img: values.img
                    }
                  );

                  setIsLoading(false);
                  pushToUrl("/profile/myRecipes");
                } catch (err) {
                  setIsLoading(false);
                  setError(err.response.data.message);
                }
              }}
            >
              <StyledForm>
                <StyledLabel htmlFor="name">Nazwa</StyledLabel>
                <StyledField id="name" name="name" placeholder="Nazwa" />

                <ErrorMessage name="name" />

                <StyledLabel htmlFor="description">Opis</StyledLabel>
                <StyledField
                  component="textarea"
                  id="description"
                  name="description"
                  placeholder="Opis"
                  rows="6"
                />

                <ErrorMessage name="description" />

                <StyledLabel htmlFor="recipe">Przepis</StyledLabel>
                <StyledField
                  component="textarea"
                  id="recipe"
                  name="recipe"
                  placeholder="Przepis"
                  rows="6"
                />

                <ErrorMessage name="recipe" />

                <StyledLabel htmlFor="img">Link do zdjęcia</StyledLabel>
                <StyledField
                  id="img"
                  name="img"
                  placeholder="Link do zdjęcia"
                />

                <ErrorMessage name="img" />

                {error && <ApiError>{error}</ApiError>}

                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <StyledButton type="submit">Zatwierdź</StyledButton>
                )}
              </StyledForm>
            </Formik>
          </PageFormikWrapper>
        </>
      )}
    </>
  );
};

export default EditCard;
