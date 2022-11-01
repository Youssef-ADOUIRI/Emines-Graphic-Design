import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../reducers/authReducers";

function UploadProject() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div>
      <button type="submit" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default UploadProject;
