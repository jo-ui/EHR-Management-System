import React from "react";
import { connect } from "react-redux";
import CartItemComponent from "../cart-item-component/cart-item.component";
import CustomButton from "../custom-button/CustomButton";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cartAction";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems,toggleCartHidden }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown hidden">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cart) => (
            <CartItemComponent key={cart.id} item={cart} />
          ))
        ) : (
          <span className="empty-message">Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          toggleCartHidden();
        }}
      >
        Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps, { toggleCartHidden })(CartDropdown);
