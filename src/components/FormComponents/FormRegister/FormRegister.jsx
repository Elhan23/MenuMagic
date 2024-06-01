import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getUser } from "../../../store/actions/getUser/getUser";
import { useDispatch } from "react-redux";
import "./FormRegister.scss";
import registrationvd from "../../../assets/video/registration.mp4";
import logo from "../../../assets/images/icons/logo.svg";

function FormRegister() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [selectedRole, setSelectedRole] = useState("");

  const onSubmit = (data) => {
    console.log(dispatch(getUser(data)));
  };

  const handleCheckboxChange = (value) => {
    setSelectedRole(value);
    setValue("role", value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form_style">
      <section className="form_inp_style">
        <span>
          <video autoPlay muted loop>
            <source src={registrationvd} />
          </video>
        </span>

        <section className="input_style">
          <span className="logo_style">
            <img src={logo} alt="logo" />
            <p>Welcome back! Please enter your details</p>
          </span>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          <input
            type="text"
            placeholder="Surname"
            {...register("surname", { required: true })}
          />
          {errors.surname && <span>This field is required</span>}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}

          <div className="radio_style">
            <label
              className={`radio_button ${
                selectedRole === "user" ? "selected" : ""
              }`}
              onClick={() => handleCheckboxChange("user")}
            >
              <input
                type="checkbox"
                value="user"
                checked={selectedRole === "user"}
                {...register("role", { required: true })}
              />
              <span>User</span>
            </label>
            <label
              className={`radio_button ${
                selectedRole === "chef" ? "selected" : ""
              }`}
              onClick={() => handleCheckboxChange("chef")}
            >
              <input
                type="checkbox"
                value="chef"
                checked={selectedRole === "chef"}
                {...register("role", { required: true })}
              />
              <span>Chef</span>
            </label>
          </div>
          {errors.role && <span>This field is required</span>}

          <button type="submit">Sign Up</button>
        </section>
      </section>
    </form>
  );
}

export default FormRegister;
