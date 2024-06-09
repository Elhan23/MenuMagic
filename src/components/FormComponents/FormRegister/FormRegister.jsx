import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./FormRegister.scss";
import { PiChefHatDuotone } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import logo from "../../../assets/images/icons/logo.svg";
import { PostUser } from "../../../store/actions/PostUser/PostUser";

function FormRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [selectedRole, setSelectedRole] = useState(null);
  const [isFormFilled, setIsFormFilled] = useState(false);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      dispatch(PostUser({ data, navigate })); 
    } catch {
      console.log("error");
    }
  };

  const handleCheckboxChange = (value) => {
    setSelectedRole(value);
    setValue("role", value);
  };

  const handleInputChange = () => {
    const allFieldsFilled = Object.values(register).every(
      (field) => !!field.value
    );
    setIsFormFilled(allFieldsFilled);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form_style">
      <section className="form_inp_style">
        <section className="input_style">
          <span className="logo_style">
            <img src={logo} alt="logo" />
            <p>Welcome back! Please enter your details</p>
          </span>
          <div className="input_grid">
            <div className="input_field">
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                onChange={handleInputChange}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="input_field">
              <input
                type="text"
                placeholder="Surname"
                {...register("surname", { required: "Surname is required" })}
                onChange={handleInputChange}
              />
              {errors.surname && <span>{errors.surname.message}</span>}
            </div>
            <div className="input_field">
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
                onChange={handleInputChange}
              />
              {errors.username && <span>{errors.username.message}</span>}
            </div>
            <div className="input_field">
              <input
                type="text"
                placeholder="Phone number"
                {...register("phonenumber", {
                  required: "Phone number is required",
                })}
                onChange={handleInputChange}
              />
              {errors.phonenumber && <span>{errors.phonenumber.message}</span>}
            </div>
            <div className="input_field">
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                onChange={handleInputChange}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="input_field">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one number, and be at least 8 characters long",
                  },
                })}
                onChange={handleInputChange}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
          </div>
          <div className="radio_style">
            <label
              className={`radio_button ${
                selectedRole === "user" ? "selected" : ""
              }`}
              onClick={() => handleCheckboxChange("user")}
            >
              <span className="icons_style">
                <CiUser />
              </span>
              <input
                type="checkbox"
                value="user"
                checked={selectedRole === "user"}
                {...register("role", { required: "Role is required" })}
                onChange={handleInputChange}
              />
              <span>User</span>
            </label>
            <label
              className={`radio_button ${
                selectedRole === "chef" ? "selected" : ""
              }`}
              onClick={() => handleCheckboxChange("chef")}
            >
              <span className="icons_style">
                <PiChefHatDuotone />
              </span>
              <input
                type="checkbox"
                value="chef"
                checked={selectedRole === "chef"}
                {...register("role", { required: "Role is required" })}
                onChange={handleInputChange}
              />
              <span>Chef</span>
            </label>
          </div>
          {errors.role && <span>{errors.role.message}</span>}
          <div className="text_btn">
            <button type="submit">Sign Up</button>
          </div>
        </section>
      </section>
    </form>
  );
}

export default FormRegister;
