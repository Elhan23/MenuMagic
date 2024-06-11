import React, { useState } from "react";
import axios from "axios";

const Products = () => {
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(
        "https://magicmenu-22e6224ad3f4.herokuapp.com/api/admins",
        newProduct
      );
      console.log("Product added successfully:", response.data);
      setNewProduct({ name: "", price: "" });
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <div>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
        />
        <input
          type="text"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Product Price"
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default Products;
