import React from "react";
import { Navigate } from "react-router";

PrivateRoute.propTypes = {};

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("admin_token");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
