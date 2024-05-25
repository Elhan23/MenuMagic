import React from "react";
import logo from "../../../assets/images/logo.png";
import { CiShop } from "react-icons/ci";
import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar_style container">
      <div className="logo_text_style">
        <img src={logo} alt="logo" />
        <p>Menu Magic</p>
      </div>

      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipe">Recipe</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Chef</Link>
          </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <Link to="/shop">
              <CiShop />
            </Link>
          </li>
          <li>
            <Link to="/registration">
              <button>Log In</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;