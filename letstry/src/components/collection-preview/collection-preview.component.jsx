import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ items, title }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem
            imageUrl={item.imageUrl}
            price={item.price}
            key={item.id}
            name={item.name}
          />
        ))}
    </div>
  </div>
);
export default CollectionPreview;
