import ShopProduct from "../ShopProduct/ShopProduct";
import mango from "../../../assets/images/ShopCardImg/mango.jpg";
import banana from "../../../assets/images/ShopCardImg/banana.png";
import natura from "../../../assets/images/ShopCardImg/natura.png";
import "./ShopProductCards.scss";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

function ShopProductCards() {
  return (
    <div className="container">
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide className="swiper_style">
          <ShopProduct
            img={mango}
            price="2,23$"
            title="Mango yellow"
            gram="1 piece"
          />

          <ShopProduct
            img={banana}
            price="0,44$"
            title="bananas"
            gram="3 piece"
          />

          <ShopProduct
            img={natura}
            price="2,92$"
            title="cheese Natura"
            gram="150g"
          />
          <ShopProduct
            img={mango}
            price="2,23$"
            title="Mango yellow"
            gram="1 piece"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper_style">
          <ShopProduct
            img={mango}
            price="2,23$"
            title="Mango yellow"
            gram="1 piece"
          />
          <ShopProduct
            img={mango}
            price="2,23$"
            title="Mango yellow"
            gram="1 piece"
          />
          <ShopProduct
            img={mango}
            price="2,23$"
            title="Mango yellow"
            gram="1 piece"
          />
          <ShopProduct
            img={mango}
            price="2,23$"
            title="Mango yellow"
            gram="1 piece"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ShopProductCards;
