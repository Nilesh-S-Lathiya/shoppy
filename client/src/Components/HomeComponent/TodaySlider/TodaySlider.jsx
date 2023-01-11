import React from "react";
import "./todayslider.css";
import Slider from "react-slick";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import ProductCard from "../../Product-Card/ProductCard";

const TodaySlider = ({ data }) => {
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="popular_left_custom_arrow" onClick={onClick}>
        <HiArrowCircleLeft />
      </div>
    );
  }
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="popular_right_custom_arrow" onClick={onClick}>
        <HiArrowCircleRight />
      </div>
    );
  }
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 5,
    speed: 1000,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1285,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
    <div className="Home">
      <div className="container mx-auto flex justify-around">
        <div className="w-[100%] px-7  bg-white">
          <Slider {...settings} className="acc">
            {data.map((list, index) => (
              <ProductCard key={index} list={list} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TodaySlider;
