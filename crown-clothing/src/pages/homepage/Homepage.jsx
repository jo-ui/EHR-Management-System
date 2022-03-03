import React from "react";
import Banner from "../../components/banner/Banner";
import Directory from "../../components/directory/Directory";
import "./Homepage.scss";
const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />
      <Directory />
    </div>
  );
};

export default Homepage;
