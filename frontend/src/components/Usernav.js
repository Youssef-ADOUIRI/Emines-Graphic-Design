import React from "react";
import "./Usernav.css";
import { NavLink } from "react-router-dom";

function Usernav() {
  return (
    <ul className="nav flex-column sidebar">
      <li className="nav-item">
        <NavLink to="upload">First</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="account">Secon</NavLink>
      </li>
    </ul>
  );
}

export default Usernav;
