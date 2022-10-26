import React, { useState } from "react";
import { useAuth } from "../components/auth/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPass] = useState("");
  const [errors, setErrors] = useState({});

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login({ email, password });
    navigate(redirectPath, { replace: true });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userData);
  };

  return (
    <div>
      <form noValidate onSubmit={onSubmit}>
        <label htmlFor="email">
          Email :{" "}
          <input
            type="email"
            id="email"
            error={errors.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label htmlFor="password">
          Password :{" "}
          <input
            type="password"
            id="password"
            error={errors.password}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <button onClick={handleLogin}>Handle</button>
      </form>
    </div>
  );
};

export default Login;
