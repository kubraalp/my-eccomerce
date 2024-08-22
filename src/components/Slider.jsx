import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-64 overflow-hidden">
          <img src={image} alt={`Slide ${index}`} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
