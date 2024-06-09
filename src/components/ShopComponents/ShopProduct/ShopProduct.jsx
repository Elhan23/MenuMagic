import "./ShopProduct.scss";

function ShopProduct({ img, price, title, gram }) {
  return (
    <section>
      <div className="card_shop">
        <img src={img} alt="product" />
        <div className="text_style_props">
          <span>{price}</span>
          <h6>{title}</h6>
          <p>{gram}</p>
          <button>+</button>
        </div>
      </div>
    </section>
  );
}

export default ShopProduct;
