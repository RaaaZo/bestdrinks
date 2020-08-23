import React, { useState } from "react";

import { CloseModal } from "components/shared/CloseModal/CloseModal";

import { Formik } from "formik";
import { PageFormikWrapper } from "styles/PageFormsStyles";
import {
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledField,
  StyledButton,
} from "styles/FormikStyles";
import usePushToUrl from "hooks/usePushHistory";

const AddRecipeForm = () => {
  const pushToUrl = usePushToUrl();

  return (
    <>
      <CloseModal />
      <PageFormikWrapper>
        <StyledHeader>Dodaj przepis</StyledHeader>
        <Formik
          initialValues={{
            name: "",
            desc: "",
            recipe: "",
            img: "",
          }}
          onSubmit={(values) => {
            pushToUrl("/");
          }}
        >
          <StyledForm>
            <StyledLabel htmlFor="name">Nazwa</StyledLabel>
            <StyledField id="name" name="name" placeholder="Nazwa" />

            <StyledLabel htmlFor="desc">Opis</StyledLabel>
            <StyledField
              as="textarea"
              id="desc"
              name="desc"
              placeholder="Opis"
              rows="6"
            />

            <StyledLabel htmlFor="recipe">Przepis</StyledLabel>
            <StyledField
              as="textarea"
              id="recipe"
              name="recipe"
              placeholder="Przepis"
              rows="6"
            />

            <StyledLabel htmlFor="img">Link do zdjęcia</StyledLabel>
            <StyledField id="img" name="img" placeholder="Link do zdjęcia" />

            <StyledButton type="submit">Dodaj</StyledButton>
          </StyledForm>
        </Formik>
      </PageFormikWrapper>
    </>
  );
};

export default AddRecipeForm;
