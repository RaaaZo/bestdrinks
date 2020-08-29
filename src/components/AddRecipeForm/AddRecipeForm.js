import React, { useState, useContext } from "react";

import { CloseModal } from "components/shared/CloseModal/CloseModal";

import { Formik, ErrorMessage } from "formik";
import { PageFormikWrapper } from "styles/PageFormsStyles";
import {
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledField,
  StyledButton
} from "styles/FormikStyles";
import usePushToUrl from "hooks/usePushHistory";
import Axios from "axios";
import { AuthContext } from "context/AuthContext";
import LoadingSpinner from "components/shared/LoadingSpinner/LoadingSpinner";
import { ApiError } from "components/ApiErrors/ApiErrors";

import * as Yup from "yup";

const addRecipeValidation = Yup.object().shape({
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

const AddRecipeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const { user } = useContext(AuthContext);

  const pushToUrl = usePushToUrl();

  return (
    <>
      <CloseModal />
      <PageFormikWrapper>
        <StyledHeader>Dodaj przepis</StyledHeader>
        <Formik
          initialValues={{
            name: "",
            description: "",
            recipe: "",
            img: ""
          }}
          validationSchema={addRecipeValidation}
          onSubmit={async values => {
            setIsLoading(true);

            try {
              await Axios.post("http://localhost:5000/api/recipes/addDrink", {
                name: values.name,
                description: values.description,
                recipe: values.recipe,
                img: values.img,
                creator: user.id,
                creatorName: user.name,
                date: new Date()
                  .toJSON()
                  .slice(0, 10)
                  .replace(/-/g, "/")
              });
              setError("");
              setIsLoading(false);
              pushToUrl("/");
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
            <StyledField id="img" name="img" placeholder="Link do zdjęcia" />

            <ErrorMessage name="img" />

            {error && <ApiError>{error}</ApiError>}

            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <StyledButton type="submit">Dodaj</StyledButton>
            )}
          </StyledForm>
        </Formik>
      </PageFormikWrapper>
    </>
  );
};

export default AddRecipeForm;
