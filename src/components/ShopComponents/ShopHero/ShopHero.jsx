import milk from "../../../assets/images/ShopIMGgl/milk.jpg";
import shophero1 from "../../../assets/images/ShopIMGgl/shophero1.jpg";
import shophero2 from "../../../assets/images/ShopIMGgl/shophero2.jpg";
import ShopProductCards from "../../../components/ShopComponents/ShopProductCards/ShopProductCards";
import "./ShopHero.scss";

function ShopHero() {
  return (
    <section className="container">
      <div className="mini_block">
        <h2>Offers for you</h2>
        <div className="img_block">
          <img src={milk} alt="milk" />
          <img src={shophero1} alt="" />
          <img src={shophero2} alt="" />
        </div>
        <ShopProductCards />
      </div>
    </section>
  );
}

export default ShopHero;
