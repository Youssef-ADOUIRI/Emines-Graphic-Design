import React, { useState } from "react";
import { useAuth } from "../components/auth/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/");
  };
  return (
    <div>
      <label>
        Email :{" "}
        <input
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        ></input>
      </label>
      <button onClick={handleLogin}>Handle</button>
    </div>
  );
};

export default Login;
