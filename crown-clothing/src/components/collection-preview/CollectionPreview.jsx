import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./CollectionPreview.scss";
import { useNavigate } from "react-router-dom";

const CollectionPreview = ({ items, title, routeName }) => {
  const navigate = useNavigate();
  return (
    <div className="collection-preview">
      <h1 onClick={() => navigate(`${routeName}`)} className="title">
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
