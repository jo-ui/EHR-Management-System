import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon"
      />
      <div className="header-country">
        <span className="header-optionOne">Deliver to</span>
        <span className="header-optionTwo">Ethiopia</span>
      </div>
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon"></SearchIcon>
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionOne">Hello Guest</span>
          <span className="header-optionTwo">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-optionOne">Returns</span>
          <span className="header-optionTwo">& orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionOne">Your</span>
          <span className="header-optionTwo">Prime</span>
        </div>
        <div className="header-optionBasket">
          <ShoppingBasketIcon />
          <span className="header-optionLineTwo basket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
