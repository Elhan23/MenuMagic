import React from "react";
import { useDispatch } from "react-redux";
import logo from "../../../assets/images/icons/logo.svg";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import "./ShopSearch.scss";

function ShopSearch() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <nav className="shopsearch-container container">
      <div className="shopsearch-navbar">
        <div className="shopsearch-logo-text">
          <img src={logo} alt="logo" />
          <p>Menu Magic</p>
        </div>
        <section className="shopsearch-search-user">
          <div className="shopsearch-search-bar">
            <input type="search" placeholder="Search..." onChange={handleSearch}/>
            <FaSearch className="shopsearch-search-icon" />
          </div>

          <span className="FaShoppingBasket_bg">
            <RiShoppingBasket2Fill />
          </span>
          <FaRegCircleUser className="shopsearch-user-icon" />
        </section>
      </div>
    </nav>
  );
}

export default ShopSearch;
