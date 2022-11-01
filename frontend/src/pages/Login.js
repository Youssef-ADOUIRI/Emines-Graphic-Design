import "./Login.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/authActions";
import { useForm } from "react-hook-form";

const Login = () => {
  const { loading, userInfo, error, success, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const err = useSelector((state) => state.err);
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
    <div
      className="loginSection"
      style={{ backgroundImage: "url(/documents/admin/admin_background.png)" }}
    >
      <h1 className="title_admin">Admin</h1>
      <form noValidate onSubmit={handleSubmit(submitForm)}>

        
        {err.email && <span style={{ color: "red" }}>{err.email}</span>}
        {err.emailnotfound && (
          <span style={{ color: "red" }}>{err.emailnotfound}</span>
        )}

        <input
          type="email"
          id="email"
          error={errors.email}
          {...register("email")}
          required
          placeholder="Email"
        ></input>

        {err.password && <span style={{ color: "red" }}>{err.password}</span>}
        {err.passwordincorrect && (
          <span style={{ color: "red" }}>{err.passwordincorrect}</span>
        )}
        <input
          type="password"
          id="password"
          error={errors.password}
          {...register("password")}
          required
          placeholder="Password"
        ></input>

        <button type="submit" disabled={loading}>
          <u>Submit</u>
        </button>
      </form>
    </div>
  );
};

export default Login;
