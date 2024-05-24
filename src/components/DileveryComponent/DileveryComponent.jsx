import React from "react";
import person from "../../assets/images/sectionimg/humanshop.jpg";
import { motion } from "framer-motion";
import "./DileveryComponent.scss";

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

function DileveryComponent() {
  return (
    <motion.section
      className="container product_style"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className="person_img" variants={imgAnimation}>
        <img src={person} alt="Delivery Person" />
      </motion.div>

      <motion.div className="product_text" variants={textAnimation}>
        <h2>Delivery of products</h2>
        <div>
          <p>
            Without products? No problem! We have a solution. Right now
            you can place an order and choose partners from the conversation. <br />
            Forget about product problems and enjoy the convenience of
            delivery.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default DileveryComponent;
