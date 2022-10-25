import React from "react";
import { useAuth } from "../components/auth/auth";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      Welcome {auth.user}
      <button onClick={handleLogout}> Logout</button>
    </div>
  );
};

export default Admin;
