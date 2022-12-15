import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../reducers/authReducers";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
const Plusicon = (
  <svg
    className="plus_icon1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
  </svg>
);

const HL = (
  <svg
    className="plus_icon1"
    width="8"
    height="48"
    viewBox="0 0 8 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.10156 0V24V48" stroke="white" stroke-width="7" />
  </svg>
);

const Admin = () => {
  const DISPLAY_LIMIT_PROJECT = 5;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const api_url = "/api/projects/getbyowner/" + userInfo.id;

  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      const resp = await axios
        .get(api_url)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      setProjects(resp);
      setLoading(false);
    };
    getProject();
  }, []);
  if (projects.length > 0 || !loading) {
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
            <NavLink to="/admin/addblog" style={{ textDecoration: "none" }}>
              <div className="row d-flex flex-column ">
                <i className="ibb">
                  {Plusicon} {HL} ADD BLOG
                </i>
              </div>
            </NavLink>
          </div>
        </section>
        <section className="portfolio_project_section">
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
          <div className="row">
            {projects.map((project, i) => {
              if (project.imgs[0] && i < DISPLAY_LIMIT_PROJECT)
                return (
                  <img
                    src={project.imgs[0].path_url}
                    className="d-flex project_image_portfolio"
                  ></img>
                );
            })}
          </div>
          <NavLink to="/admin/upload" style={{ textDecoration: "none" }}>
            <div className="row d-flex flex-column ">
              <i className="ibb">
                {Plusicon} {HL} ADD PROJECT
              </i>
            </div>
          </NavLink>
        </section>

        <button className="btn btn-light my-5" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  } else {
    return <div>Still loading</div>;
  }
};

export default Admin;
