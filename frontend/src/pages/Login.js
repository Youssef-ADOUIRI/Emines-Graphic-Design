import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/authActions";
import { useForm } from "react-hook-form";

const Login = () => {
  const { loading, userInfo, error, success  , isAuthenticated} = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm();

  const redirectPath = location.state?.path || "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
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
