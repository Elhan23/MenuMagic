import React from "react";
import salad from "../../assets/images/salad.png";
import './SectionConponent.scss'

function SectionConponent() {
  return (
    <section className="section_style">
      <div className="salad_style">
        <img src={salad} alt="salad" />
      </div>

      <div className="text_style">
        <h2>
          On our Menu Magic platform, you can search for delicious recipes or
          earn money by sharing your culinary talents with others.
        </h2>

        <div>
          <p>
            Do you want to unleash your culinary potential and make money? Join
            our CookCoin platform, <br /> where you can not only find
            inspiration <br /> for new dishes, but also get rewarded for every
            recipe you share with our community. <br /> Welcome to the world of
            taste and income!
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionConponent;
