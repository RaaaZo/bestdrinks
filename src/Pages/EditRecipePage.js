import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import EditCard from "components/EditCard/EditCard";

const EditRecipePage = () => {
  return (
    <PageWrapper>
      <EditCard />
    </PageWrapper>
  );
};

export default EditRecipePage;
