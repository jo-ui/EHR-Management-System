import React from "react";
import { connect } from "react-redux";
import CartItemComponent from "../cart-item-component/cart-item.component";
import CustomButton from "../custom-button/CustomButton";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown hidden">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItemComponent key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
