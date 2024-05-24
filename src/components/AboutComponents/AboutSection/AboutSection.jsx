import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.scss";


const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

function AboutSection() {
  const items = [
    "Uploading and saving recipes: Easily upload your favorite recipes, share them with friends and save them in your personal culinary archive.",
    "Interactive Features: Use our platform to search for recipes by ingredients, cooking time or type of dish.",
    "Meal planning: Create menus for the week or month in advance to make cooking and grocery shopping easier.",
    "Grocery Shopping: Order all the necessary ingredients for your recipes directly from us, thanks to cooperation with our reliable partners.",
    "Partner Integrations: Our platform is integrated with major food suppliers, allowing you to instantly order everything you need to prepare your favorite meals.",
  ];

  return (
    <section className="background_section">
      <div className="aboutsection_style">
        <div className="text_style_about">
          <h2>What do we offer</h2>
          <span>
            Our platform offers a wide range of options for everyone who loves
            to cook:
          </span>
        </div>
      </div>
      <div className="about_offer_style">
        {items.map((item, index) => (
          <motion.p
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true, amount: 0.8 }}
          >
            {index + 1}. {item}
          </motion.p>
        ))}
      </div>

       
    </section>
  );
}

export default AboutSection;
