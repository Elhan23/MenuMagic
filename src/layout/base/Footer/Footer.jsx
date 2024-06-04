import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.scss";
import logofooter from "../../../assets/images/footerimg/logofooter.svg";
import tt from "../../../assets/images/footerimg/tiktok.svg";
import fc from "../../../assets/images/footerimg/facebook.svg";
import inst from "../../../assets/images/footerimg/instagram.svg";
import yt from "../../../assets/images/footerimg/youtube.svg";

function Footer() {
  return (
    <footer className="container">
      <div className="footer_style">
        <div className="footer_img">
          <img src={logofooter} alt="footer" />
          <span>
            Menu <br /> Magic
          </span>
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipe">Recipe</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/chef">Chef</Link> </li>
          <li> <Link to="/contactus">Contact Us</Link></li>
        </ul>

        <div className="footer_images">
          <img src={tt} alt="tiktok" />
          <img src={fc} alt="facebook" />
          <img src={inst} alt="instagram" />
          <img src={yt} alt="youtube" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
