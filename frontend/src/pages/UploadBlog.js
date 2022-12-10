import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./UploadBlog.css";
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

const UploadBlog = () => {
  const { register, handleSubmit } = useForm();
  const onChangeImgs = (e) => {
    e.preventDefault();
  };

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div className="upload_blog_section">
      <div className="row">
        <h1 className="section_title col">
          BLOG
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
      <form
        noValidate
        onSubmit={handleSubmit(submitForm)}
        encType="multipart/form-data  "
      >
        <div
          className="upload_blog_input col d-flex flex-column"
          id="title_div"
        >
          <label htmlFor="title">BLOG TITLE</label>
          <input
            type="text"
            placeholder="name"
            {...register("title")}
            required
            id="title"
          />
        </div>

        <div
          className="upload_blog_input col d-flex flex-column"
          id="parag1_div"
        >
          <label htmlFor="parag1">BLOG BODY</label>
          <textarea
            type="text"
            placeholder="Type your description here"
            required
            id="parag1"
            {...register("parag1")}
          />
        </div>
        <button className="" type="submit">
          Post blog
        </button>
      </form>
    </div>
  );
};

export default UploadBlog;
