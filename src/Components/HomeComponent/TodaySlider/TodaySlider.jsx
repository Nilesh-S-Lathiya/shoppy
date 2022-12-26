import React from "react";
import "./todayslider.css";
import Slider from "react-slick";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { Card } from "react-bootstrap";

const TodaySlider = () => {
  const popularDoc = [
    {
      docname: "Dr. Chris Frazier",
      img: "doctorSectionIcon1",
      doctype: "Pediatrician",
      rating: "5.0",
      backgroundColor: "#AFCFED",
    },
    {
      docname: "Dr. Viola Dunn",
      img: "doctorSectionIcon2",
      doctype: "Pediatrician",
      rating: "4.0",
      backgroundColor: "#98CBD6",
    },
    {
      docname: "Dr. Chris Frazier",
      img: "doctorSectionIcon1",
      doctype: "Pediatrician",
      rating: "5.0",
      backgroundColor: "#CCD0DB",
    },
    {
      docname: "Dr. Viola Dunn",
      img: "doctorSectionIcon2",
      doctype: "Pediatrician",
      rating: "4.0",
      backgroundColor: "#AFCFED",
    },
    {
      docname: "Dr. Chris Frazier",
      img: "doctorSectionIcon1",
      doctype: "Pediatrician",
      rating: "5.0",
      backgroundColor: "#D5D8FC",
    },
    {
      docname: "Dr. Viola Dunn",
      img: "doctorSectionIcon2",
      doctype: "Pediatrician",
      rating: "4.0",
      backgroundColor: "#CCD0DB",
    },
    {
      docname: "Dr. Viola Dunn",
      img: "doctorSectionIcon2",
      doctype: "Pediatrician",
      rating: "4.0",
      backgroundColor: "#AFCFED",
    },
    {
      docname: "Dr. Chris Frazier",
      img: "doctorSectionIcon1",
      doctype: "Pediatrician",
      rating: "5.0",
      backgroundColor: "#D5D8FC",
    },
    {
      docname: "Dr. Viola Dunn",
      img: "doctorSectionIcon2",
      doctype: "Pediatrician",
      rating: "4.0",
      backgroundColor: "#CCD0DB",
    },
    {
      docname: "Dr. Viola Dunn",
      img: "doctorSectionIcon2",
      doctype: "Pediatrician",
      rating: "4.0",
      backgroundColor: "#AFCFED",
    },
    {
      docname: "Dr. Chris Frazier",
      img: "doctorSectionIcon1",
      doctype: "Pediatrician",
      rating: "5.0",
      backgroundColor: "#D5D8FC",
    },
    {
      docname: "Dr. Viola Dunn",
      img: "doctorSectionIcon2",
      doctype: "Pediatrician",
      rating: "4.0",
      backgroundColor: "#CCD0DB",
    },
  ];
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
    infinite: true,
    slidesToShow: 4,
    speed: 1000,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
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
        <div className="w-[90%] px-7 rounded-[9px]">
          <Slider {...settings} className="acc">
            {popularDoc.map((list, index) => (
            <Card
            key={index}
            style={{
              width: "18rem",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Card.Img
              variant="top"
              // src={`/images/ProductImg/${Product.image}.png`}
              src={list.img}
              className="Home-Today-Img"
            />
            <Card.Body>
              <Card.Title className="Home-Today-Title">
                {list.docname}
              </Card.Title>
              <Card.Text className="Home-Today-Des">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Link to={`/productDetails/${Product._id}`}>
                <Button className="Home-Today-AddToCart">View Product</Button>
              </Link> */}
            </Card.Body>
          </Card>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TodaySlider;
