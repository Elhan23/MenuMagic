import thinkingman from "../../../assets/images/sectionimg/thinkingman.jpg";
import "./AboutSectionWe.scss";

function AboutSectionWe() {
  return (
    <section className="aboutsection_we_style">
      <div className="girl_img_style">
        <img src={thinkingman} alt="girlpng" />
      </div>

      <div className="aboutsection_we_text">
        <h2>Who are we ?</h2>
        <p>
          MenuMagic is a team of experienced professionals from various fields:
          IT, marketing, restaurant management and design. We share a common
          passion for innovation and strive to create a product that simplifies
          restaurant management and makes cooking enjoyable and inspiring.
        </p>
      </div>
    </section>
  );
}

export default AboutSectionWe;
