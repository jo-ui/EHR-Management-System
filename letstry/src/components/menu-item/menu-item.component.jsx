import { getByTitle } from "@testing-library/react";
import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";
import ShopItem from "../../pages/shop/shop-item.component";

const MenuItem = ({ size, link, id, imageUrl, title }) => {
  const navigate = useNavigate();
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${link}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};
export default MenuItem;
