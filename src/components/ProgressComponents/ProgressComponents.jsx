import React from "react";
import progress from "../../assets/images/sectionimg/progress.png";
import "./ProgressComponents.scss";
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

function ProgressComponents() {
  return (
    <div className="container">
      <motion.section
        className="progress_style"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div className="progress_text" variants={textAnimation}>
          <h2>
            Monitor your progress, how many <br /> users view and save your
            recipes.
          </h2>
          <div>
            <p>
              Track your progress and see how many users are viewing and saving
              your favorite recipes on our platform. Improve your profile, add
              new delicious dishes and share cooking tips to attract even more
              users. <br /> Join our community today and start sharing your
              culinary arts with the world!
            </p>
          </div>
        </motion.div>

        <motion.div className="progress_img" variants={imgAnimation}>
          <img src={progress} alt="progress" />
        </motion.div>
      </motion.section>
    </div>
  );
}

export default ProgressComponents;
