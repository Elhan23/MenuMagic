import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../../assets/images/icons/logo.svg";
import "./LoginComponents.scss";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../../store/actions/UserLogin/UserLogin";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function LoginComponents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(UserLogin({ userData: data, navigate }));
  };

  return (
    <section className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="login-logo" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className={`login-input ${errors.username ? "input-error" : ""}`}
            />
            {errors.username && (
              <span className="error-message">{errors.username.message}</span>
            )}
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              className={`login-input ${errors.password ? "input-error" : ""}`}
            />
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="google-login-container">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse?.credential);
                console.log(decoded);
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginComponents;
