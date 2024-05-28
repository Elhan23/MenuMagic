import React from "react";
import "./HeroCompoents.scss";
import { Link } from "react-router-dom";

function HeroComponents() {
  return (
    <section className="hero_bg">
      <div className="hero_text">
        <h1>
          Unleash Culinary <br /> Excellence
        </h1>
        <p>
          Explore a world of flavors, discover <br /> handcrafted recipes, and
          let the aroma <br /> of our passion for cooking fill your kitchen
        </p>
        <Link to="/recipes">
          <button>EXPLORE RECIPES</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroComponents;
