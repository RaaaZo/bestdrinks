import React from "react";

import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import styled from "styled-components";

const DataAndFavouritesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: grey;
`;

const DataWrapper = styled.div``;

const ProfilePage = () => {
  return (
    <PageWrapper>
      <DataAndFavouritesWrapper></DataAndFavouritesWrapper>
    </PageWrapper>
  );
};

export default ProfilePage;
