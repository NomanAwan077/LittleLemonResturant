import React from "react";
import "./style.css";
import banner from "../../asset/images/branch-banner.png";
const RestaurantArea = () => {
  return (
    <div className="area-wrapper d-grid-2">
      <div className="content-side">
        <div className="top-section">
          <h1 className="title">Little Lemon</h1>
          <h4 className="city">Chicago</h4>
          <p className="decription">
            We are a family owned Mediterranean restaurant, focused on
            <br />
            traditional recipes served with a modern twist
          </p>
        </div>
      </div>
      <div className="image-side">
        <img src={banner} />
      </div>
    </div>
  );
};
export default RestaurantArea;
