import review from "../../assets/images/review.jpg";
import "./ContactSection.scss";

function ContactSection() {
  return (
    <section className="container">
      <div className="contact_block">
        <div className="contact_text">
          <h2>Contact us</h2>
          <div>
            <p>
              Your opinion is of great importance to us!  Tell us about
              your experience with us or ask any questions you may have. <br />{" "}
              We are always ready to listen to you and do our best to support
              your move. Your feedback helps us become even better!"
            </p>
          </div>
        </div>

        <div className="review_images">
          <img src={review} alt="" />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
