import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import { CiShoppingBasket } from "react-icons/ci";

function Nav() {
  return (
    <div className="container">
      <div className="navigation_flex">
        <div className="logo_width">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <CiShoppingBasket />
            <NavLink to="/registration">
              <button>Log In</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
