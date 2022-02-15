import { getByTitle } from "@testing-library/react";
import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ size, id, imageUrl, title }) => (
  <div className={`${size} menu-item`}>
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
export default MenuItem;
