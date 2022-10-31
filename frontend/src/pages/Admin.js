import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../reducers/authReducers";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div>
      
    </div>
  );
};

export default Admin;
