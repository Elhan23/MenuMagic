import recipehuman from "../../assets/images/recipehuman.png";
import { Link } from "react-router-dom";
import "./RecipeComponents.scss";

function RecipeComponents() {
  return (
    <div className="container recipe_style">
      <div className="recipe_image">
        <img src={recipehuman} alt="" />
      </div>

      <div className="recipe_text">
        <h2>Don't know what to cook?</h2>
        <div>
          <p>
            Looking to diversify your culinary repertoire? Take a look at our
            selection of recipes and discover <br /> plenty of options for your
            next dinners, <br /> lunches and breakfasts. New delicious ideas are
            waiting for you! <br />
            <Link to='/recipe'>View all</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeComponents;
