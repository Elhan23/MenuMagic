import React from "react";
import { Link } from "react-router-dom";
import loginanimation from "../../assets/animation/loginanimaton.json";
import "./Registration.scss";
import Lottie from "lottie-react";

function Registertration() {
  return (
    <div className="container_form container">
      <div className="registration_flex">
        <div className="login_style">
          <h2>Login user</h2>
          <Link to="/chef">register as a chef</Link>
        </div>
        <div className="registration_input_btn">
          <input type="name" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Add</button>
        </div>
      </div>

      <div className="login_animation_class">
        <div>
          <Lottie animationData={loginanimation} />
        </div>
      </div>
    </div>
  );
}

export default Registertration;
