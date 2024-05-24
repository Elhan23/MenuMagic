import React from "react";
import salad from "../../assets/images/sectionimg/food.jpg";
import "./SectionComponent.scss";
import { motion } from "framer-motion";

const textAnimation = {
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

const imgAnimation = {
  hidden: {
    opacity: 0,
    x: 50,
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

function SectionComponent() {
  return (
    <div className="sectipon_background">
      <motion.section
        className="section_style container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} 
      >
        <motion.div className="salad_style" variants={imgAnimation}>
          <img src={salad} alt="salad" />
        </motion.div>

        <motion.div className="text_style" variants={textAnimation}>
          <h2>
            On our Menu Magic platform, you can search for delicious recipes or
            earn money by sharing your culinary talents with others.
          </h2>

          <div>
            <p>
              Do you want to unleash your culinary potential and make money?
              Join our CookCoin platform, <br /> where you can not only find
              inspiration <br /> for new dishes, but also get rewarded for every
              recipe you share with our community. <br /> Welcome to the world
              of taste and income!
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default SectionComponent;
