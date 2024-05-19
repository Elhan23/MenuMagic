import person from "../../assets/images/sectionimg/humanshop.jpg";
import "./DileveryComponent.scss";

function DileveryComponent() {
  return (
    <section className="container product_style">
      <div className="person_img">
        <img src={person} alt="" />
      </div>

      <div className="product_text">
        <h2>Delivery of products</h2>
        <div>
          <p>
            Without products? No problem! We have a solution.  Right now
            you can place an order and choose partners from the conversation.{" "}
            <br /> Forget about product problems and enjoy the convenience of
            delivery.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default DileveryComponent;
