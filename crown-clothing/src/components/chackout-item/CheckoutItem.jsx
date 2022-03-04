import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartAction";

import "./checkoutItem.scss";

const CheckoutItem = ({ cartItem, cleatItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10096;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10097;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => cleatItem(cartItem)} className="remove-button">
        <span>&#10005;</span>
        <span>Remove</span>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  cleatItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
//tolesa kitesa 14343
