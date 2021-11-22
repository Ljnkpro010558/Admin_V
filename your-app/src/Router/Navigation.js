import React from "react";
import Login from "../Component/Login.js";
import Home from "../Component/Home.js";
import { Routes , Route } from "react-router-dom";

import { getToken } from "../Utils/Common.js";

function NavigationURL(props) {
  return (
    <div>
      <Routes >
      <Route path="/" element={ <Login />} />
      <Route
        path="/Home"
        element={(() => {
          // Show a "no access" message if the user is NOT an App Admin doesn't have access to any schools at all (which includes not having access to anything INSIDE any school either)
          if (getToken() != null) return <Home />
          return <Login />
        })()}
      />
      </Routes >
    </div>
  );
}

export default NavigationURL;
