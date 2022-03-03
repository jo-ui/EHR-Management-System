import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import CartItem from "../cart-itam/CartItem";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { selectCurrentUser } from "../../redux/user/userSelector";

import "./Header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <div className="log-header">
        <Link to="/">
          <img
            src="https://www.graphicsprings.com/filestorage/stencils/1cf0e62090ebd950855b702c81587979.png?width=500&height=500"
            alt="logo"
          />
        </Link>
      </div>
      <div></div>
      <div className="options">
        {/* <div className="ui search"> */}
        {/* <i className="search icon search-icon"></i> */}

        <div className="ui icon input">
          <input type="search" className="prompt" placeholder="Search" />
          <button className="button">
            <i className="search icon"></i>
          </button>
        </div>

        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartItem />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
