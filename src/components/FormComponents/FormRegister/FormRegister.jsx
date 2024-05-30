import { useForm } from "react-hook-form";
import { getUser } from "../../../store/slice/getUser/getUser";
import { useDispatch } from "react-redux";
import "./FormRegister.scss";
import logo from "../../../assets/images/logo/logo.svg";
import bg_video from "../../../assets/video/registration_bg.mp4";

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
    <form onSubmit={handleSubmit(onSubmit)} className="form_style">
      <div className="signup_style">
        <div className="registration_style">
          <img src={logo} alt="logo" className="logo_style" />

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

          <button type="submit" value="Sign Up">
            Sign Up
          </button>
        </div>
        <div className="rounded-video">
          <video autoPlay muted loop>
            <source src={bg_video} type="video/mp4" />
          </video>
        </div>
      </div>
    </form>
  );
}

export default FormRegister;
