import React from "react";
import "./About.scss";
import aboutimg from "../../assets/images/sectionimg/aboutimg.jpg";
import AboutSection from "../../components/AboutComponents/AboutSection/AboutSection";
import AboutSectionWe from "../../components/AboutComponents/AboutSectionWe/AboutSectionWe";
import AboutOurvalues from "../../components/AboutComponents/AboutOurvalues/AboutOurvalues";

function About() {
  return (
    <section className="container">
      <div className="about_style">
        <div className="about_text_style">
          <h2>About MenuMagic</h2>
          <p>
            Welcome to MenuMagic - your universal assistant in managing a
            restaurant business and creating culinary masterpieces.  We offer
            innovative solutions that help  restaurateurs and food lovers achieve
            success, improve service quality and optimize work processes.
          </p>
        </div>

        <div className="about_img_style">
          <img src={aboutimg} alt="aboutimg" />
        </div>
      </div>
      <AboutSectionWe/>
      <AboutSection />
      <AboutOurvalues/>
    </section>
  );
}

export default About;
