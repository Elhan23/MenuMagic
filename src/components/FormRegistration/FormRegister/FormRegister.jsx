import "./FormRegister.scss";
import imagelog from "../../../assets/images/sectionimg/Imagelog.png";
import logo from "../../../assets/images/logo.svg";
import { useForm } from "react-hook-form";
import { getUser } from "../../../slice/getUser/getUser";
import { useDispatch } from "react-redux";

function FormRegister() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
     console.log(dispatch(getUser(data)));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form_style">
        <div className="imagelog_style">
          <img src={imagelog} alt="imagelog" />
        </div>

        <span className="signup_style">
          <img src={logo} alt="logo" />

          <h3>Sign up now</h3>
          <p>Welcome back! Please enter your details</p>

          <input
            type="text"
            placeholder="Name"
            autoComplete="current-name"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="error">Name is required</p>}

          <input
            type="email"
            placeholder="Email"
            autoComplete="current-email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="error">Email is required</p>}

          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="error">Password is required</p>}

          <button type="submit" value="Sign Up" >
            Sign Up
          </button>
        </span>
      </div>
    </form>
  );
}

export default FormRegister;
