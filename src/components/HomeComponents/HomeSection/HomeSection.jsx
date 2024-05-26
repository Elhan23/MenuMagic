import breakfest from "../../../assets/images/sectionimg/breakfest.png";
import lunch from "../../../assets/images/sectionimg/lunch.png";
import dinner from "../../../assets/images/sectionimg/dinner.png";
import dessert from "../../../assets/images/sectionimg/dessert.png";
import quickbite from "../../../assets/images/sectionimg/quickbite.png";
import "./HomeSection.scss";

function HomeSection() {
  return (
    <section className="homesection_style">
      <div className="homesection_style_text">
        <span>EXPLORE</span>
        <h2>
          OUR DIVERSE <br /> PALETTE
        </h2>
        <p>
          If you are a breakfast enthusiast, a connoisseur of savory delights,
          or <br /> on the lookout for irresistible desserts, our curated
          selection has <br />
          something to satisfy every palate.
        </p>

        <button>SEE MORE</button>
      </div>

      <div className="dinner_style">
        <div className="images_flex">
          <img src={breakfest} alt="breakfest" />
          <span>BREAKFEST</span>
        </div>
        <hr />
        <div className="images_flex">
          <img src={lunch} alt="lunch" />
          <span>LUNCH</span>
        </div>
        <hr />
        <div className="images_flex">
          <img src={dinner} alt="dinner" />
          <span>DINNER</span>
        </div>
        <hr />
        <div className="images_flex">
          <img src={dessert} alt="dessert" />
          <span>DESSERT</span>
        </div>
        <hr />
        <div className="images_flex">
          <img src={quickbite} alt="quick bite" />
          <span>QUICK BITE!</span>
        </div>
        <hr />
      </div>
    </section>
  );
}

export default HomeSection;
