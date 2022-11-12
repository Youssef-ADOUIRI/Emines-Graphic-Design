import React from "react";
import { useForm } from "react-hook-form";

const UploadProject = () => {
  const { handleSubmit } = useForm();
  const submitForm = (data) => {
    //ON SUBMIT:
  };
  return (
    <div className="upload_project_section">
      <h1 className="section_title">PROJECT DASH</h1>
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        <div className="upload_project_input" id="title_div">
          <label for="title">CARD TITLE</label>
          <input type="text" placeholder="name" required id="title" />
        </div>
        <div className="upload_project_input" id="type_div">
          <label for="type">CARD TYPE</label>
          <select placeholder="type" name="type" id="type">
            <option value="0" selected disabled>
              type
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
          </select>
        </div>

        <div className="upload_project_input" id="img_div">
          <label for="parag2">IMG</label>
          <input type="file" id="parag2" placeholder="import" multiple />
        </div>
        <div className="upload_project_input" id="gradient_div">
          <label for="hexs">GRADIENT</label>
          <div id="hexs">
            <input type="color" id="hex1" />
            <input type="color" id="hex2" />
          </div>
        </div>

        <div className="upload_project_input" id="parag1_div">
          <label for="parag1">PARAGRAPH 1</label>
          <textarea
            type="text"
            placeholder="Type your description here"
            required
            id="parag1"
          />
        </div>
        <div className="upload_project_input" id="parag2_div">
          <label for="parag2">PARAGRAPH 2</label>
          <textarea
            type="text"
            placeholder="Type your description here"
            id="parag2"
          />
        </div>
      </form>
    </div>
  );
};

export default UploadProject;
