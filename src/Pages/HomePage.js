import React, { Fragment } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import HomeCards from "components/HomeCards/HomeCards";
import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";

const HomePage = () => {
  return (
    <PageWrapper>
      <HomeCards />
    </PageWrapper>
  );
};

export default HomePage;
