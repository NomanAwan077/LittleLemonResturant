import React from "react";
import HeroSection from "../../components/HeroSection";
import TestmonialSection from "../../components/Testmonial";
import "./style.css";
import RestaurantArea from "../../components/ResturantArea";
const Home = () => {
  return (
    <div className="wrapper">
      <HeroSection />
      <RestaurantArea />
      <TestmonialSection />
    </div>
  );
};
export default Home;
