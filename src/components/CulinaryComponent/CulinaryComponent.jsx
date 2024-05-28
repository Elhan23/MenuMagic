import "./CulinaryComponent.scss";
import meatcard from "../../assets/images/cardimages/meatcard.png";
import aboutcard from "../../assets/images/cardimages/aboutcard.png";
import cookcard from "../../assets/images/cardimages/cookcard.png";

function CulinaryComponent() {
  return (
    <section className="border_culinary">
      <div className="about_text">
        <span>ABOUT US</span>
        <h3>EXPLORE WITH MenuMagic</h3>
        <p>
          Our journey is crafted with dedication, creativity, and relentless
          <br />
          focus to create an extraordinary culinary experience. <br /> Join us
          as we get to the heart of each dish and the story that unfolds. <br />{" "}
          Learn more about how our chefs create unique recipes <br /> and become
          a part of the world of culinary art with MenuMagic.
        </p>
      </div>
    </section>
  );
}

export default CulinaryComponent;
