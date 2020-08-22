import React from 'react';

import MainTemplate from 'templates/MainTemplate';
import {BrowserRouter as Router} from 'react-router-dom';
import Contexts from 'context/Contexts';
import Routes from 'routes/Routes';

function App() {
  return (
    <Router>
      <Contexts>
        <MainTemplate>
          <Routes />
        </MainTemplate>
      </Contexts>
    </Router>
  );
}

export default App;
