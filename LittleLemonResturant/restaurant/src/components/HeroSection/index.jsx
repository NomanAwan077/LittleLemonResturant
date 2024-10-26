import React from "react";
import "./style.css";
import ButtonComponent from "../common/ButtonComponent";
import logoimg from "../../asset/images/HeroImage.png";
const HeroSection = () => {
  return (
    <div className="hero-wrapper">
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
        <ButtonComponent text="Reserve a Table" contained />
      </div>
      <div className="image-side">
        <img src={logoimg} />
      </div>
    </div>
  );
};
export default HeroSection;
