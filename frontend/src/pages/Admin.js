import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div>
      Welcome {"YOU"}<br/>
      <button onClick={handleLogout}> Logout</button>
    </div>
  );
};

export default Admin;
