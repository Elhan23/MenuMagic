import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/icons/logo.svg";
import { CiShop } from "react-icons/ci";
import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="container">
      <div className="navbar_style">
        <div className="logo_text_style">
          <img src={logo} alt="logo" />
          <p>Menu Magic</p>
        </div>

        <div>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => [isActive ? "active" : ""]}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => [isActive ? "active" : ""]}
                to="/recipe"
              >
                Recipe
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => [isActive ? "active" : ""]}
                to="/aboutus"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => [isActive ? "active" : ""]}
                to="/chef"
              >
                Chef
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => [isActive ? "active" : ""]}
                to="/contactus"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <ul className="logshop_style">
          <li>
            <Link to="/shop">
              <CiShop className="shop_img" />
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
