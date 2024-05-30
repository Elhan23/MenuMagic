import "./UserCard.scss";
import form from "../../../assets/images/sectionimg/form.jpg";
import { Link } from "react-router-dom";

function UserCard() {
  return (
    <div className="user-card-container">
      <section className="user-card-text">
        <h2>Register as a foodie or user</h2>
        <p>
          Register and open up opportunities, choose who to be a cook or a user
        </p>
      </section>

      <section className="user-card-options">
        <Link to="/gurmanlogin">
          <div className="user-option">
            <h3>Register as a Foodie</h3>
            <p>Explore and discover delicious recipes from talented chefs.</p>
          </div>
        </Link>

        <Link to="/cooklogin">
          <div className="user-option">
            <h3>Register as a Cook</h3>
            <p>
              Share your culinary creations, connect with foodies, and build
              your culinary brand.
            </p>
          </div>
        </Link>
      </section>
      <div className="form_style_img">
        <img src={form} alt="" />
      </div>
    </div>
  );
}

export default UserCard;
