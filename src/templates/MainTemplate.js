import React, {useContext} from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {MainTheme} from '../styles/MainTheme';

import {Background} from 'components/shared/Background/Background';
import NavigationTemplate from './NavigationTemplate';
import {AddBtn} from 'components/shared/AddBtn/AddBtn';
import {AuthContext} from 'context/AuthContext';
import LoginForm from 'components/Login/LoginForm';

const MainTemplate = ({children}) => {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={MainTheme}>
        <Background />
        <NavigationTemplate />
        <LoginForm />
        {children}

        {isLoggedIn && <AddBtn />}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
