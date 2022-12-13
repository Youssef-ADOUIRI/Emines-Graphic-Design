import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./UploadProject.css";
import { NavLink } from "react-router-dom";
import "./Register.css";

const UploadProject = () => {
  const { register, handleSubmit } = useForm();

  const { userInfo } = useSelector((state) => state.auth);
  const [images, setImages] = useState([]);
  const onChangeImgs = (e) => {
    e.preventDefault();
    setImages(e.target.files);
  };
  const submitForm = (data) => {
    console.log(data);
    // axios
    //   .post("http://localhost:5000/api/", form)
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
  };

  const tlines = (
    <svg
      width="145"
      height="146"
      viewBox="0 0 145 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M145 116.693V145.078H0V116.693H145Z" fill="white" />
      <path d="M145 56.7695V88.3082H0V56.7695H145Z" fill="white" />
      <path d="M145 0V28.3848H0V0H145Z" fill="white" />
    </svg>
  );

  return (
    <div className="add_designer_section">
      <div className="row ">
        <h1 className="section_title col">
          Admin
          <br />
          DASH
        </h1>
        <NavLink
          className="col tlines"
          to="/project/1"
          style={{ textDecoration: "none" }}
        >
          {tlines}
        </NavLink>
      </div>
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        <div className="row">
          <div
            className="add_designer_input left_side_form col d-flex flex-column"
            id="name_add"
          >
            <label htmlFor="name">CARD TITLE</label>
            <input
              type="text"
              placeholder="name"
              {...register("name")}
              required
              id="name"
            />
          </div>
          <div
            className="add_designer_input right_side_form col d-flex flex-column"
            id="insta_add"
          >
            <label htmlFor="insta">CARD TITLE</label>
            <input
              type="text"
              placeholder="name"
              {...register("insta")}
              required
              id="insta"
            />
          </div>
        </div>
        <div className="row">
          <div
            className="add_designer_input left_side_form col d-flex justify-content-center align-items-center"
            id="imgs_add"
          >
            <label className="flex-grow-1" htmlFor="image">
              IMG
            </label>
            <input
              type="file"
              id="image"
              name="image"
              multiple
              placeholder="import"
              {...register("image")}
              onChange={onChangeImgs}
            />
          </div>
          <div
            className="add_designer_input right_side_form col d-flex flex-column"
            id="site_add"
          >
            <label htmlFor="site">Website</label>
            <input
              type="text"
              placeholder="type"
              {...register("site")}
              required
              id="site"
            />
          </div>
        </div>

        <div className="row">
          <div
            className="add_designer_input left_side_form col d-flex flex-column"
            id="pass_add"
          >
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="type"
              {...register("password")}
              required
              id="password"
            />
          </div>
          <div
            className="add_designer_input right_side_form col d-flex flex-column"
            id="pass2_add"
          >
            <label htmlFor="password2">Confirm password</label>
            <input
              type="text"
              placeholder="type"
              {...register("password2")}
              required
              id="password2"
            />
          </div>
        </div>

        <button className="bg-success">Add Designer</button>
      </form>
    </div>
  );
};

export default UploadProject;
