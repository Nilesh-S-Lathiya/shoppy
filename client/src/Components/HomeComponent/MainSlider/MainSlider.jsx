import React from "react";
import "./mainSlider.scss";
import Slider from "react-slick";

const MainSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    arrows: false,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1285,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="mb-6 container mx-auto px-10 pt-[5px]">
      <div className="mb-6 bg-white rounded-[9px] pb-0 overflow-hidden">
        <Slider {...settings}>
              <div className="s-1 Slider-img"></div>
              <div className="s-2 Slider-img"></div>
              <div className="s-3 Slider-img"></div>
              <div className="s-4 Slider-img"></div>
              {/* <img
                src={`images/Main-Slider-Image/Slider-Image-1.jpg`}
                className="h-[auto] mx-auto"
                alt=""
              /> */}
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
