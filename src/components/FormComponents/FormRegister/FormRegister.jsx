import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./FormRegister.scss";
import { PiChefHatDuotone } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import logo from "../../../assets/images/icons/logo.svg";
import { getUser } from "../../../store/actions/getUser/getUser";

function FormRegister() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [selectedRole, setSelectedRole] = useState(null);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      dispatch(getUser(data));
    } catch {
      console.log("error");
    }
  };

  const handleCheckboxChange = (value) => {
    setSelectedRole(value);
    setValue("role", value);
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
                {...register("name", { required: true })}
              />
              {errors.name && <span>Fill in the field</span>}
            </div>
            <div className="input_field">
              <input
                type="text"
                placeholder="Surname"
                {...register("surname", { required: true })}
              />
              {errors.surname && <span>Fill in the field</span>}
            </div>
            <div className="input_field">
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: true })}
              />
              {errors.username && <span>Fill in the field</span>}
            </div>
            <div className="input_field">
              <input
                type="text"
                placeholder="Phone number"
                {...register("phonenumber", { required: true })}
              />
              {errors.phonenumber && <span>Fill in the field</span>}
            </div>
            <div className="input_field">
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Fill in the field</span>}
            </div>
            <div className="input_field">
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && <span>Fill in the field</span>}
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
              <span className="icons_style">
                <PiChefHatDuotone />
              </span>
              <input
                type="checkbox"
                value="chef"
                checked={selectedRole === "chef"}
                {...register("role", { required: true })}
              />
              <span>Chef</span>
            </label>
          </div>
          {errors.role && <span>Fill in the field</span>}

          <button type="submit">Sign Up</button>
        </section>
      </section>
    </form>
  );
}

export default FormRegister;
