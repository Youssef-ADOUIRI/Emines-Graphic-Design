import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../reducers/authReducers";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, userInfo, userToken } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      setAuthToken(userToken);
      const decoded = jwt_decode(userToken);
      dispatch(
        setCurrentUser({
          token: userToken,
          id: decoded.id,
          success: decoded.success,
          userdata: { name: decoded.name, email: decoded.email },
        })
      );
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        dispatch(logoutUser());
        // Redirect to login
        navigate("/login");
      }
    }
  }, [userToken]);

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
              <NavLink to="/admin" className="nav-link active">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item ms-auto p-2">
              <NavLink to="/" className="nav-link active">
                Contact
              </NavLink>
            </li>
            {!isAuthenticated && (
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
