/** @format */

import React from "react";

import Home from "./Pages/Home";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./Component/login/login";

function App() {
  // const data = JSON.parse(localStorage.getItem("token"));
  // const companyName = data.companyObj && companyObj.companyName;
  return (
    <>
      {localStorage.getItem("token") ? (
        <Router>
          <Home />
        </Router>
      ) : (
        <Router>
          <Route path="/">
            <Home />

            {/* <Login /> */}
          </Route>
          {/* <Home /> */}
        </Router>
      )}
    </>
  );
}

export default App;
