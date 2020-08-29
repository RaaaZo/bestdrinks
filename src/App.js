import React from "react";

import MainTemplate from "templates/MainTemplate";
import { BrowserRouter as Router } from "react-router-dom";

import Contexts from "context/Contexts";
import Routes from "routes/Routes";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  return (
    <Router>
      <Contexts>
        <MainTemplate>
          <Routes />
        </MainTemplate>
      </Contexts>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
