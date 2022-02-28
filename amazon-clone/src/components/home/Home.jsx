import React from "react";
import Product from "../product/Product";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <div className="header-container">
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="amazon-banner"
        />
        <div className="home-row">
          {/* <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          /> */}
          <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          />
        </div>
        <div className="home-row">
          <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          />
        </div>
        <div className="home-row">
          <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            title="The Loan Star"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={5}
            price={19.99}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
