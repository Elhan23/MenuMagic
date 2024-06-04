import "./SectionDish.scss";
import recipeimg from "../../../assets/images/cardimages/recipeimg.png";
import lemomgarlic from "../../../assets/images/cardimages/lemongarlic.png";
import qania from "../../../assets/images/cardimages/qania.png";
import berry from "../../../assets/images/cardimages/berry.png";
import spagetti from "../../../assets/images/cardimages/spagetti.png";
import grilled from "../../../assets/images/cardimages/grilled.png";
import { Link } from "react-router-dom";
import CardComponents from "../CardComponents/CardComponents";

function SectionDish() {
  return (
    <section>
      <div className="section_dish">
        <div className="recipe_description">
          <span>RECIPES</span>
          <h2>EMBARK ON A JOURNEY</h2>
          <p>
            With our diverse collection of recipes, we have something to <br />{" "}
            satisfy every palate.
          </p>
        </div>
      </div>

      <div className="dish_flex">
        <div className="card">
          <div className="recipeimg_style">
            <img src={recipeimg} alt="Savory Herb-Infused Chicken" />
          </div>
          <div className="text_containers">
            <h3>Savory Herb-Infused Chicken</h3>
            <p>
              Indulge in the rich and savory symphony of flavors <br /> with our
              Savory Herb-Infused Chicken
            </p>
            <div className="btn_text">
              <p>40 Min - easy prep - 3 serves</p>
              <Link to="/recipe">
                <button>View Recipe</button>
              </Link>
            </div>
          </div>
        </div>

        <CardComponents
          recipeimg={lemomgarlic}
          title="Lemon Garlic Grilled Chicken"
          description="Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe"
          time="1 hour"
          serves="4 serves"
        />
        <CardComponents
          recipeimg={qania}
          title="Quinoa Veggie Stir-Fry"
          description="Quick, wholesome, and bursting with flavors, it's perfect for a healthy weeknight dinner."
          time="30 min"
          serves="3 serves"
        />
        <CardComponents
          recipeimg={berry}
          title="Berry Bliss Smoothie Bowl"
          description="This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants."
          time="10 min"
          serves="2 serves"
        />
        <CardComponents
          recipeimg={spagetti}
          title="Spaghetti Aglio e Olio"
          description="A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes."
          time="20 min"
          serves="2 serves"
        />
        <CardComponents
          recipeimg={grilled}
          title="Grilled Veggies with Sauce"
          description="Served with a zesty chimichurri sauce, it's a perfect addition to your outdoor gatherings."
          time="25 min"
          serves="6 serves"
        />
      </div>
    </section>
  );
}

export default SectionDish;
