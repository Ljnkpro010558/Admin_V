import React from "react";
import Login from "../Component/Login.js";
import Home from "../Component/Home.js";
import { Routes , Route } from "react-router-dom";

import PrivateRoute from "./PrivavateRoute";

function NavigationURL(props) {
  return (
    <div>
      <Routes >
      <Route path="/" element={ <Login />} />
      <Route
        path="/Home"
        element={
          // Good! Do your composition here instead of wrapping <Route>.
          // This is really just inverting the wrapping, but it's a lot
          // more clear which components expect which props.
          <PrivateRoute redirectTo="/">
            <Home />
          </PrivateRoute>
        }
      />
      </Routes >
    </div>
  );
}

export default NavigationURL;
