import React from "react";
import "./Usernav.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../reducers/authReducers";

function Usernav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <ul className="nav flex-column sidebar">
      <li className="nav-item">
        <NavLink to="upload">First</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="account">Secon</NavLink>
      </li>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </ul>
  );
}

export default Usernav;
