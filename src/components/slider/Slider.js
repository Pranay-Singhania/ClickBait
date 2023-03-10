import React from "react";
import "../slider/Slider.css";
import { home_banner } from "../../utils/images";

const Slider = () => {
  return (
    <div className="hero-slider-item">
      <img src={home_banner} alt="" />
    </div>
  );
};

export default Slider;
