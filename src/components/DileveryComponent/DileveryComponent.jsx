import person from "../../assets/images/person.png";
import "./DileveryComponent.scss";

function DileveryComponent() {
  return (
    <div className="product_style">
      <div>
        <img src={person} alt="" />
      </div>

      <div className="product_text">
        <h2>Delivery of products</h2>
        <div>
          <p>
          Without products? No problem! We have a solution. <br /> Right now you can place an order and choose partners from the conversation. <br /> Forget about product problems and enjoy the convenience of delivery.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default DileveryComponent;
