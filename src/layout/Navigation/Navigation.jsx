import { Link } from "react-router-dom";
import { RiShoppingBasket2Line } from "react-icons/ri";
import "./Navigation.scss";

function Nav() {
  return (
    <div className="container">
      <div className="navigation_flex">
        <div className="flex_logo">
          <ul>
            <li><Link to="/">MenuMagic</Link></li>
          </ul>
        </div>
        <ul>
          <li><Link to="/recipe">Recipe</Link></li>
          <li><Link to="/aboutmenu">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/chef">Chef</Link></li>
        </ul>
        <div className="button_shop_style">
          <ul className="shop_background">
            <li>
              <Link to="/shop">
                <RiShoppingBasket2Line style={{ fontSize: '20px', color: "white" }} />
              </Link>
            </li>
          </ul>
          <li>
            <Link to="/registration">
              <button>Log In</button>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Nav;
