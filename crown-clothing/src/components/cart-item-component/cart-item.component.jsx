import React from "react";

import "./cart-item.styles.scss";

const CartItemComponent = ({ item: { quantity, imageUrl, price, name } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price} birr
      </span>
    </div>
  </div>
);

export default CartItemComponent;
