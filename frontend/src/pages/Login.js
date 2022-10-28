import React, { useEffect, useState } from "react";
import { useAuth } from "../components/auth/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/authActions";
import { useForm } from "react-hook-form";

const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  //const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm();

  const redirectPath = location.state?.path || "/";

  /*
  const handleLogin = () => {
    auth.login({ email, password });
    navigate(redirectPath, { replace: true });
  };
  */

  /*
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
    dispatch(userLogin(data));
  };
  */
  const submitForm = (data) => {
    console.log(data);
    dispatch(loginUser(data));
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <label htmlFor="email">
          Email :{" "}
          <input
            type="email"
            id="email"
            error={errors.email}
            {...register("email")}
            required
          ></input>
        </label>
        <br />
        <label htmlFor="password">
          Password :{" "}
          <input
            type="password"
            id="password"
            error={errors.password}
            {...register("password")}
            required
          ></input>
        </label>
        <br />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
