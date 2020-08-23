import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { MainTheme } from "../styles/MainTheme";

import { Background } from "components/shared/Background/Background";
import NavigationTemplate from "./NavigationTemplate";
import Blobs from "components/shared/Blobs/Blobs";
import ModalsTemplate from "./ModalsTemplate";
import Footer from "components/shared/Footer/Footer";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={MainTheme}>
        <Background />
        <Blobs />
        <NavigationTemplate />
        <ModalsTemplate />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
