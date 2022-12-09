import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


const UploadProject = () => {
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState([]);
  const { userInfo } = useSelector(
    (state) => state.auth
  );
  const onChangeImgs = (e) => {
    e.preventDefault();
    setImages(e.target.files);
  };
  const submitForm = (data) => {
    const form = new FormData();
    Object.keys(data).map((key, index) => {
      form.append(key, data[key]);
      console.log("KEY : " , key, data[key]);
    });
    //get owner from redux store
    form.append('owner' , userInfo.id )
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
      <h1 className="section_title">PROJECT DASH</h1>
      <form
        noValidate
        onSubmit={handleSubmit(submitForm)}
        encType="multipart/form-data"
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
            <option value="0" defaultValue selected disabled>
              type
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
          </select>
        </div>

        <div className="upload_project_input" id="imgs_div">
          <label htmlFor="images">IMG</label>
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
