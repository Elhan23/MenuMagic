import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasket2Line } from "react-icons/ri";
import "./Navigation.scss";

function Nav() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`background_navigation ${showNav ? "show" : "hide"}`}>
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
            <Link to="/about">About us</Link>
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
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
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
