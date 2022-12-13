import React from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../reducers/authReducers";
import { NavLink } from "react-router-dom";

const tlines = (
  <svg
    width="144"
    height="144"
    viewBox="0 0 144 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M28.1739 115.826V144H0V115.826H28.1739Z" fill="white" />
    <path d="M115.826 115.826V144H144V115.826H115.826Z" fill="white" />
    <path d="M56.3477 87.6523V115.826H28.1738V87.6523H56.3477Z" fill="white" />
    <path d="M87.6523 87.6523V115.826H115.826V87.6523H87.6523Z" fill="white" />
    <path d="M87.6525 56.3477V87.652H56.3481V56.3477H87.6525Z" fill="white" />
    <path d="M56.348 56.3477V87.652H87.6523V56.3477H56.348Z" fill="white" />
    <path d="M115.826 28.1738V56.3477H87.6523V28.1738H115.826Z" fill="white" />
    <path d="M28.1742 28.1738V56.3477H56.3481V28.1738H28.1742Z" fill="white" />
    <path d="M144 0V28.1739H115.826V0H144Z" fill="white" />
    <path d="M-7.43866e-05 0V28.1739H28.1738V0H-7.43866e-05Z" fill="white" />
  </svg>
);

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div className="admin_page">
      <section className="admin_section">
        <img src="/doc/admin/Admin_Back.png"></img>
        <br />
        <span className="subtitle_admin">
          This is the admin page, it allows you to manage and edit your blogs
          and projects
        </span>
      </section>
      <section className="upload_blog_section">
        <div className="row">
          <h1 className="section_title col">
            BLOG
            <br />
            DASH
          </h1>
          <NavLink
            className="col tlines"
            to="/"
            style={{ textDecoration: "none" }}
          >
            {tlines}
          </NavLink>
        </div>
        <div className="news">
          <div className="row">
            <div className="col mx-2 my-2">
              <h2>We have a group chat we’re all in it except you</h2>
              <p className="lead py-2">7 September 2020</p>
            </div>
            <div className="col mx-2 my-2">
              <h2>We have a group chat we’re all in it except you</h2>
              <p className="lead">7 September 2020</p>
            </div>
          </div>
          <div className="row">
            <div className="col mx-2 my-2">
              <h2>We have a group chat we’re all in it except you</h2>
              <p className="lead">7 September 2020</p>
            </div>
            <div className="col mx-2 my-2">
              <h2>We have a group chat we’re all in it except you</h2>
              <p className="lead">7 September 2020</p>
            </div>
          </div>
        </div>
      </section>
      <section className="upload_blog_section">
        <div className="row">
          <h1 className="section_title col">
            PROJECT
            <br />
            DASH
          </h1>
          <NavLink
            className="col tlines"
            to="/"
            style={{ textDecoration: "none" }}
          >
            {tlines}
          </NavLink>
        </div>
      </section>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Admin;
