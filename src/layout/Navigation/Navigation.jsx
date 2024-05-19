import { Link } from "react-router-dom";
import { RiShoppingBasket2Line } from "react-icons/ri";
import "./Navigation.scss";

function Nav() {
  return (
    <nav className="background_navigation">
      <div className="navigation_flex container">
        <ul>
          <li>
            <Link to="/">MenuMagic</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/recipe">Recipe</Link>
          </li>
          <li>
            <Link to="/aboutmenu">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/chef">Chef</Link>
          </li>
        </ul>
        <div className="button_shop_style">
          <ul className="shop_background">
            <li>
              <Link to="/shop">
                <div className="shop_svg">
                  <RiShoppingBasket2Line />
                </div>
              </Link>
            </li>
          </ul>
          <li>
            <Link to="/registration">
              <button>
                  Log In
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
              </button>
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
