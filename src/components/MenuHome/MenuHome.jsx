import food from "../../assets/animation/salad.json";
import Lottie from "lottie-react";
import Main from "../Main/Main";
import "./MenuHome.scss";

function MenuHome() {
  return (
    <div className="container">
      <div className="home_flex">
        <div className="font_family_menu">
          <h1>
            Watch how to cook and order <br /> food at the same time
          </h1>
          <p>
            Discover the magic of cooking and discover an endless world of
            flavors and aromas. <br /> Cook with love, experiment with your{" "}
            <br /> imagination and discover new gastronomic horizons every day  <br />
            "Explore, create, enjoy: your journey on our website!"
          </p>
        </div>

        <div className="animation_rice">
          <div className="animation_width">
            <Lottie animationData={food} />
          </div>
        </div>
      </div>
      <Main />
    </div>
  );
}

export default MenuHome;
