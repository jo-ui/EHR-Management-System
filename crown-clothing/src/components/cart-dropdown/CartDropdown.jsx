import React from "react";
import { connect } from "react-redux";
import CartItemComponent from "../cart-item-component/cart-item.component";
import CustomButton from "../custom-button/CustomButton";
import { selectCartItems } from "../../redux/cart/cartSelector";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown hidden">
    <div className="cart-items">
      {cartItems.map((cart) => (
        <CartItemComponent key={cart.id} item={cart} />
      ))}
    </div>
    <CustomButton>Checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
