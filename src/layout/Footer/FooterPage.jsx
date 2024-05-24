import Lottie from "lottie-react";
import catanimaton from "../../assets/animation/catanimation.json";
import tg from "../../assets/images/telegramm.png";
import fac from "../../assets/images/faceebok.png";
import inst from "../../assets/images/instagramm.png";
import gth from "../../assets/images/github.png";
import "./Footer.scss";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="background_footer">
      <div className="footer_style container">
        <div className="footer_text_style">
          <h2>MenuMagic</h2>
          <div>
            <p>
              Share your culinary experiments with us and <br /> become part of
              our community of chefs and gourmets.
            </p>
          </div>
          <div>
            <img src={tg} alt="telegramm" />
            <img src={fac} alt="facebook" />
            <img src={inst} alt="instagram" />
            <img src={gth} alt="github" />
          </div>
        </div>

        <div className="footer_pages">
          <span>Pages</span>
          <Link to="/recipe">Recipe</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/chef">Chef</Link>
        </div>

        <div className="footer_partner">
          <span>Partner</span>
          <NavLink to="https://eda.yandex.ru/Bishkek?shippingType=delivery">
            YandexFood
          </NavLink>
          <NavLink to="https://samokat.ru/">Samokat</NavLink>
          <NavLink to="https://lavka.yandex.ru/">Lavka</NavLink>
          <NavLink to="https://glovoapp.com/kg/ru/bishkek/">Glovo</NavLink>
          <NavLink to="https://www.fedex.com/en-kg/open-account.html">
            FedEx
          </NavLink>
        </div>

        <div className="animation_style_cat">
          <Lottie animationData={catanimaton} />
        </div>
      </div>
      <span className="copyring"><p>Copyright ©  2024 MenuMagic</p></span>
    </footer>
  );
}

export default Footer;
