import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import project1 from "../../image/projects/barberShop1.png";
import project2 from "../../image/projects/barberShop2.png";
import project3 from "../../image/projects/barberShop3.png";
import project4 from "../../image/projects/barberShop4.png";
import project5 from "../../image/projects/barberShop5.png";

const PhotoSlider = () => {
  const sliderInfo = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderInfo}>
      <div>
        <img src={project1} alt="BarberShop" />
      </div>
      <div>
        <img src={project2} alt="BarberShop" />
      </div>
      <div>
        <img src={project3} alt="BarberShop" />
      </div>
      <div>
        <img src={project4} alt="BarberShop" />
      </div>
      <div>
        <img src={project5} alt="BarberShop" />
      </div>
    </Slider>
  );
};

export default PhotoSlider;
