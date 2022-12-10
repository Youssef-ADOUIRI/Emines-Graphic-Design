import React from "react";
import Usernav from "../components/Usernav";
import { Outlet } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (

      <Outlet />

  );
};

export default Admin;
