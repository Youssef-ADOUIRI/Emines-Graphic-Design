import React from "react";
import Usernav from "../components/Usernav";
import { Outlet } from "react-router-dom";
import "./Admin.css"

const Admin = () => {
  return (
    <div>
      <Usernav />
      <div className="main_section">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
