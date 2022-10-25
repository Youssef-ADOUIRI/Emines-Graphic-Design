import React from "react";
import "./Navbar.css";
import { useAuth } from "../components/auth/auth";
import { NavLink } from "react-router-dom";

function Navbar() {
  const auth = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink to="/" id="LogoText" className="navbar-brand">
          ELX
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav d-flex ms-auto nav-list">
            <li className="nav-item p-2">
              <NavLink to="/" className="nav-link active" aria-current="page">
                About
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to="/" className="nav-link active">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item ms-auto p-2">
              <NavLink to="/" className="nav-link active">
                Contact
              </NavLink>
            </li>
            {!auth.user && (
              <li className="nav-item ms-auto p-2">
                <NavLink to="/login" className="nav-link active">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
