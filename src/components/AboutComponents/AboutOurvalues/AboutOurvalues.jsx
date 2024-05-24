import "./AboutOurvalues.scss";
import our from "../../../assets/images/sectionimg/ourvalues.jpg";

function AboutOurvalues() {
  return (
    <section>
      <div className="ourvalues_style">
        <div>
          <h2>Our values</h2>
          <p>
            Innovation: We are constantly improving our platform, adding new
            features and functionality for the convenience of users. Quality: We
            pay special attention to the quality of the services and products
            provided. Convenience: Our platform is designed to be as convenient
            and intuitive as possible for all users. Why choose us
          </p>
        </div>

        <div className="ourvalues_img_style">
          <img src={our} alt="ourvaluesimages" />
        </div>
      </div>
    </section>
  );
}

export default AboutOurvalues;
