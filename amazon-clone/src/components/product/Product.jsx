import React from "react";
import "./Product.scss";

function Product({ title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      {/* <div className="product-rating">
        <p>{rating}</p>
      </div> */}
      <img className="product-image" src={`${image}`} alt="items" />
      <button>SHOP NOW</button>
    </div>
  );
}

export default Product;
