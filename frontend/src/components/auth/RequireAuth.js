import React from "react";
import { useAuth } from "./auth";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
  //const auth = useAuth();
  const isAuth = true;
  const location = useLocation();
  if (isAuth) {
    return (
      <Navigate to="/login" state={{ path: location.pathname }}></Navigate>
    );
  }
  return children;
};

export default RequireAuth;
