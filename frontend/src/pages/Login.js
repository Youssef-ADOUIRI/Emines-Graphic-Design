import React, { useState } from "react";
import { useAuth } from "../components/auth/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const [password, setPass] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    auth.login({ user, password });
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <label>
        Email :{" "}
        <input
          type="email"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        ></input>
      </label>
      <br />
      <label>
        Password :{" "}
        <input
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></input>
      </label>
      <br />
      <button onClick={handleLogin}>Handle</button>
    </div>
  );
};

export default Login;
