import React from "react";
import { Link } from "react-router-dom";
import '../SectionDish/SectionDish.scss'

function CardComponents({title, recipeimg, description, time, serves}) {
  return (
    <>
      <div className="card">
        <div className="recipeimg_style">
          <img src={recipeimg} alt="" />
        </div>
        <div className="text_containers">
          <h3>{title}</h3>
          <p>
             {description}
          </p>
          <div className="btn_text">
            <p>{time} - easy prep - {serves}</p>
            <Link to="/recipe">
              <button>View Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponents;
