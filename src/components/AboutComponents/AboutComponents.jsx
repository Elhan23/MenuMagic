import "./AboutComponents.scss";
import aboutimg from "../../assets/images/aboutIMG/aboutimg.jpg";
import cookcard from "../../assets/images/aboutIMG/cookcard.png";
import girlcard from "../../assets/images/aboutIMG/girlcard.png";
import girlcard2 from "../../assets/images/aboutIMG/girlcard2.png";
import foodcard from "../../assets/images/aboutIMG/foodcard.png";
import cooktu from "../../assets/images/aboutIMG/cooktu.png";
import knify from "../../assets/images/aboutIMG/knify.png";
import carddab from "../../assets/images/aboutIMG/cardab.png";
import phone from "../../assets/images/aboutIMG/phone.png";


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
        <div className="flex_about">
          <div className="aboutimg_style">
            <img src={aboutimg} alt="aboutimg" />
          </div>

          <span className="text_convenient">
            <h2>About Us</h2>
            <p>
              Menu Magic is not just a service, it is a solution for everyone
              who is faced with the eternal questions “What to cook today?” We
              know how difficult it is to come up with new dishes every day
              while maintaining creativity and variety. That's why we create
              Menu Magic - to make your life easier and turn meal prep into
              joining mode!
            </p>

            <p>
              Menu Magic is not just a service, it is a solution for everyone
              who br is faced with the eternal question “What to cook today?” We
              know how difficult it can be to come up with new dishes every day
              while maintaining creativity and variety. That's why we created
              Menu Magic - to make your life easier and turn cooking into a fun
              adventure!
            </p>

            <p>
              Get creative, learn from MenuMagic and become real chefs or
              gourmets! We invite you to plunge into the world of culinary
              discoveries and discover new facets of taste. With Menu Magic,
              everyone can unleash their cooking potential, regardless of
              experience level or food preferences. Allow yourself to
              experiment, discover new tastes and delight yourself and your
              loved ones with delicious dishes. With us you can become real
              culinary magicians!
            </p>
            <span>𝑀𝑒𝓃𝓊𝑀𝒶𝑔𝒾𝒸</span>
          </span>
        </div>
        <div className="image_about_block">
          <div className="image_style_ab">
            <img src={cookcard} alt="cookcard" />
            <img src={knify} alt="knify" />
            <img src={girlcard2} alt="girlcard2" />
            <img src={foodcard} alt="foodcard" />
          </div>
          <div className="image_style_ab">
            <img src={cooktu} alt="cooktu" />
            <img src={girlcard} alt="girlcard" />
            <img src={carddab} alt="girlcard2" />
            <img src={phone} alt="foodcard" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponents;
