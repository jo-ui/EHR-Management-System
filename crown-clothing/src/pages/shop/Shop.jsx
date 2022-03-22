import React from "react";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { Route, Routes, useParams } from "react-router-dom";
import Category from "../catagory/Category";

const Shop = (props) => {
  const params = useParams();

  return (
    <div className="shop-page">
      <Routes>
        <Route exact path="/" element={<CollectionOverview />} />
        <Route path="/:categoryId/*" element={<Category data={params} />} />
      </Routes>
    </div>
  );
};

export default Shop;
