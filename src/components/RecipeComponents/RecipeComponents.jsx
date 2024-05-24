import React from "react";
import recipehuman from "../../assets/images/sectionimg/recipehuman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./RecipeComponents.scss";

const textAnimationRecipe = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imgAnimationRecipe = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

function RecipeComponents() {
  return (
    <motion.section
      className="container recipe_style"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className="recipe_image" variants={imgAnimationRecipe}>
        <img src={recipehuman} alt="Recipe Human" />
      </motion.div>

      <motion.div className="recipe_text" variants={textAnimationRecipe}>
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
      </motion.div>
    </motion.section>
  );
}

export default RecipeComponents;
