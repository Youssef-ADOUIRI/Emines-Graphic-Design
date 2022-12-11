import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./UploadProject.css";
import { NavLink } from "react-router-dom";

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

const UploadProject = () => {
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);
  const onChangeImgs = (e) => {
    e.preventDefault();
    setImages(e.target.files);
  };
  const submitForm = (data) => {
    const form = new FormData();
    Object.keys(data).map((key, index) => {
      form.append(key, data[key]);
      console.log("KEY : ", key, data[key]);
    });
    //get owner from redux store
    form.append("owner", userInfo.id);
    console.log("IMGS Selected : ", images);
    for (let i = 0; i < images.length; i++) {
      form.append("images", images[i]);
    }

    axios
      .post("http://localhost:5000/api/projects/add", form)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <div className="upload_project_section">
      <div className="row ">
        <h1 className="section_title col">
          PROJECT
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
        encType="multipart/form-data"
      >
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
          <div
            className="upload_project_input col d-flex flex-column"
            id="type_div"
          >
            <label htmlFor="type">CARD TYPE</label>
            <select
              placeholder="type"
              name="type"
              className="type"
              id="type"
              {...register("cardType", {
                valueAsNumber: true,
              })}
            >
              <option value="0" defaultValue selected disabled>
                type
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div
            className="upload_project_input col d-flex justify-content-center align-items-center"
            id="imgs_div"
          >
            <label className="flex-grow-1" htmlFor="images">
              IMG
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              placeholder="import"
              {...register("images")}
              onChange={onChangeImgs}
            />
          </div>
          <div
            className="upload_project_input col d-flex justify-content-center align-items-center"
            id="gradient_div"
          >
            <label className="flex-grow-1" htmlFor="hexs">
              GRADIENT
            </label>
            <div className="hexs">
              <input
                type="color"
                defaultValue="#7B61FF"
                id="hex1"
                {...register("hex1")}
              />
              <input
                type="color"
                defaultValue="#47FF4D"
                id="hex2"
                {...register("hex2")}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="upload_project_input col d-flex flex-column"
            id="parag1_div"
          >
            <label htmlFor="parag1">PARAGRAPH 1</label>
            <textarea
              type="text"
              placeholder="Type your description here"
              required
              id="parag1"
              className="parag1"
              {...register("parag1")}
            />
          </div>
          <div
            className="upload_project_input col d-flex flex-column"
            id="parag2_div"
          >
            <label htmlFor="parag2">PARAGRAPH 2</label>
            <textarea
              type="text"
              placeholder="Type your description here"
              id="parag2"
              className="parag2"
              {...register("parag2")}
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
