import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./UploadProject.css";
import { NavLink } from "react-router-dom";

const UploadProject = () => {
  const { register, handleSubmit } = useForm();

  const { userInfo } = useSelector((state) => state.auth);

  const submitForm = (data) => {
    console.log(data);
    // axios
    //   .post("http://localhost:5000/api/", form)
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
  };

  return (
    <div className="upload_project_section">
      <div className="row ">
        <h1 className="section_title col">
          Admin
          <br />
          DASH
        </h1>
      </div>
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        <div className="row">
          <div
            className="upload_project_input col d-flex flex-column"
            id="title_div"
          >
            <label htmlFor="title">CARD TITLE</label>
            <input
              type="text"
              placeholder="name"
              {...register("title")}
              required
              id="title"
            />
          </div>
        </div>
        <div className="d-flex  justify-content-center align-items-center">
          <button className="" type="submit">
            Validate Project
          </button>
          <div className="flex-grow-1"></div>
          <button className="bg-success">Validate Card</button>
        </div>
      </form>
    </div>
  );
};

export default UploadProject;
