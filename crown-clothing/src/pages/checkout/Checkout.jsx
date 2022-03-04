import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelector";
import CheckoutItem from "../../components/chackout-item/CheckoutItem";

import "./checkout.scss";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="contents">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price(in birr)</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="total">
        {cartItems.map((item) => (
          <div className="description">
            <span>{item.name}</span>
            <span>
              {item.quantity} x {item.price} birr
            </span>
          </div>
        ))}
        <span>Total: {total} birr</span>
        <button className="button">Make Payment</button>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
