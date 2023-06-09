import Slider from "react-slick";
import React from "react";
import { rooms } from "./data";
import ImageCard from "./ImageCard";
import styles from "./rooms.module.scss";
 
function RoomsSlider() {
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,

    slidesToScroll: 1,
    initialSlide: 0,
    className: styles.slider,
    swipeToSlide: true,

    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          speed: 200,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {rooms.map((room) => (
          <div key={room.id}>
            <ImageCard {...room}   />
          </div>
        ))}
      </Slider>
     </>
  );
}

export default RoomsSlider;
