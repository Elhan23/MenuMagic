import ShopHero from "../../components/ShopComponents/ShopHero/ShopHero";
import ShopSearch from "../../components/ShopComponents/ShopSeacrh/ShopSearch";
import Footer from "../../layout/base/Footer/Footer";
import "./Shop.scss";

function Shop() {
  return (
    <div>
      <ShopSearch />
      <div className="shop_style">
        <ShopHero/>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
