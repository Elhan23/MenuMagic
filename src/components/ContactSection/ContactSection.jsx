import React, { useRef,useEffect } from "react";
import review from "../../assets/images/sectionimg/review.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import "./ContactSection.scss";

function ContactSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView(); 

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imgAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="container"
      variants={containerAnimation}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className="contact_block">
        <motion.div className="contact_text" variants={textAnimation}>
          <h2>Contact us</h2>
          <div>
            <p>
              Your opinion is of great importance to us! Tell us about your
              experience with us or ask any questions you may have. <br /> We
              are always ready to listen to you and do our best to support your
              move. Your feedback helps us become even better!"
            </p>
          </div>
        </motion.div>

        <motion.div className="review_images" variants={imgAnimation}>
          <img src={review} alt="" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ContactSection;
