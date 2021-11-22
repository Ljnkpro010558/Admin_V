import React from "react";
import { Route, Navigate } from "react-router-dom";


const getAuth = () => {
   return localStorage.getItem("User");
}


function PrivateRoute({ children, redirectTo }) {
    let isAuthenticated = getAuth();
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }

  export default PrivateRoute;