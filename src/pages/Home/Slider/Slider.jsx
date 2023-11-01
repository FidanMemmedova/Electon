import React from "react";
import sliderImage from "./../../../components/img/sliderImage1.png";
import "./Slider.css"
const Slider = () => {
  return (
    <div>
      <div className="sliderContainer">
        <div className="sliderText">
          <h1>Canon camera</h1>
          <div className="sliderButtons">
            <button className="shop-now">Shop now</button>
            <button className="view-more">View more</button>
          </div>
        </div>
        <div className="sliderImage">
          <img src={sliderImage} alt="sliderImage" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
