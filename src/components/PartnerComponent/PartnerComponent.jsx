import Marquee from "react-fast-marquee";
import "./PartnerComponent.scss";

// image import
import yandex from "../../assets/images/delivery/yandexlogo.png";
import deleviryclub from "../../assets/images/delivery/deleviryclub.jpg";
import glovo from "../../assets/images/delivery/glovo.png";
import group from "../../assets/images/delivery/x5group.png";
import lavka from "../../assets/images/delivery/lavka.png";
import samokat from "../../assets/images/delivery/samokat.png";
import papajohns from "../../assets/images/delivery/papajohns.png";
import fastkg from "../../assets/images/delivery/fastkg.png";
import fedex from "../../assets/images/delivery/fedex.png";
import { NavLink } from "react-router-dom";

function PartnerComponent() {
  return (
    <div className="partner_style">
      <div className="delivery">
        <h2>Our delivery partners</h2>
      </div>
      <Marquee pauseOnHover={false}>
        <div className="swiper_style">
          <NavLink to="https://eda.yandex.ru/Bishkek?shippingType=delivery">
            <img src={yandex} alt="" />
          </NavLink>
          <NavLink to="https://market-delivery.yandex.ru/">
            <img src={deleviryclub} alt="" />
          </NavLink>
          <NavLink to="https://glovoapp.com/kg/ru/bishkek/">
            <img src={glovo} alt="" />
          </NavLink>
          <NavLink to="https://www.x5.ru/ru/">
            <img src={group} alt="" />
          </NavLink>
          <NavLink to="https://lavka.yandex.ru/">
            <img src={lavka} alt="" />
          </NavLink>
          <NavLink to="https://samokat.ru/">
            <img src={samokat} alt="" />
          </NavLink>
          <NavLink to="https://www.papajohns.kg/">
            <img src={papajohns} alt="" />
          </NavLink>
          <NavLink to="http://fast.kg/">
            <img src={fastkg} alt="" />
          </NavLink>
          <NavLink to="https://www.fedex.com/en-kg/open-account.html">
            <img src={fedex} alt="" />
          </NavLink>
        </div>
      </Marquee>
    </div>
  );
}

export default PartnerComponent;
