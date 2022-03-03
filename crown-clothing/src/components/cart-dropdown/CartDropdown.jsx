import React from "react";
import CustomButton from "../custom-button/CustomButton";

import "./CartDropdown.scss";

const CartDropdown = () => (
  <div className="cart-dropdown hidden">
    <div className="cart-items"></div>
    <CustomButton>Checkout</CustomButton>
  </div>
);
export default CartDropdown;
