import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const UploadProject = () => {
  const [multipleImages, setMultipleImages] = useState([]);

  const changeMultipleImgs = (e) => {
    if (e.target.files) {
      const imageArray = Array.from(e.target.files).map((file) =>
        console.log(file)
      );
    }
  };

  const { register, handleSubmit } = useForm();
  const submitForm = (data) => {
    //ON SUBMIT:
    data.owner = "ff5654df65456sdf21";
    console.log(data);

    axios
      .post("http://localhost:5000/api/projects/add", data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="upload_project_section">
      <h1 className="section_title">PROJECT DASH</h1>
      <form
        noValidate
        onSubmit={handleSubmit(submitForm)}
        enctype="multipart/form-data"
      >
        <div className="upload_project_input" id="title_div">
          <label htmlFor="title">CARD TITLE</label>
          <input
            type="text"
            placeholder="name"
            {...register("title")}
            required
            id="title"
          />
        </div>
        <div className="upload_project_input" id="type_div">
          <label htmlFor="type">CARD TYPE</label>
          <select
            placeholder="type"
            name="type"
            id="type"
            {...register("cardType", {
              valueAsNumber: true,
            })}
          >
            <option value="0" defaultValue disabled hidden>
              type
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
          </select>
        </div>

        <div className="upload_project_input" id="imgs_div">
          <label htmlFor="imgs">IMG</label>
          <input
            type="file"
            id="imgs"
            placeholder="import"
            multiple
            accept=".png .jpg .jpeg"
            {...register("imgs")}
            onChange={changeMultipleImgs}
          />
        </div>
        <div className="upload_project_input" id="gradient_div">
          <label htmlFor="hexs">GRADIENT</label>
          <div id="hexs">
            <input type="color" id="hex1" {...register("hex1")} />
            <input type="color" id="hex2" {...register("hex2")} />
          </div>
        </div>

        <div className="upload_project_input" id="parag1_div">
          <label htmlFor="parag1">PARAGRAPH 1</label>
          <textarea
            type="text"
            placeholder="Type your description here"
            required
            id="parag1"
            {...register("parag1")}
          />
        </div>
        <div className="upload_project_input" id="parag2_div">
          <label htmlFor="parag2">PARAGRAPH 2</label>
          <textarea
            type="text"
            placeholder="Type your description here"
            id="parag2"
            {...register("parag2")}
          />
        </div>
        <button type="submit">Validate Project</button>
      </form>
    </div>
  );
};

export default UploadProject;
