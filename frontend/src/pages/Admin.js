import React from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../reducers/authReducers";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (

      <div><button onClick={handleLogout}>Logout</button></div>

  );
};

export default Admin;
