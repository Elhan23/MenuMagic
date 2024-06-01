import "./AboutComponents.scss";
import cardabout from "../../assets/images/sectionimg/cardabout.png";

function AboutComponents() {
  return (
    <section className="about_global_style">
      <div className="about_text">
        <h2>
          WELCOME TO <br /> MENUMAGIC!
        </h2>

        <span className="paragraf_style">
          <p>
            Welcome to the Menu Magic! Bonjour and welcome to the kitchen!{" "}
            <br />
            MenuMagci Join the MenuMagic gastronomic journey, where every dish
            carries a story, <br /> and every recipe is a skillful symphony of
            taste. learn recipes
          </p>

          <button>EXPLORE RECIPES</button>
        </span>
      </div>

      <div className="convenient_style">
        <span className="text_convenient">
          <h2>Convenient and simple:</h2>
          <p>
            Our intuitive platform allows you to quickly find and save recipes
            tailored to your tastes and needs. <br />No matter your culinary
            skill level, <br /> you'll find our step-by-step instructions easy
            to follow.
          </p>
        </span>

        <div>
          <img src={cardabout} alt="cardabout" />
        </div>
      </div>
    </section>
  );
}

export default AboutComponents;
