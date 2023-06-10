import Slider from "react-slick";
import React from "react";
import { rooms } from "./data";
import ImageCard from "./ImageCard";
import styles from "./rooms.module.scss";
import useImage from "../../../utils/useImage";

function RoomsSlider() {
  const { imageEl, onClick } = useImage();

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3.5,
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
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
    <Slider {...settings}>
      {rooms.map((room) => (
        <div key={room.id}>
          <ImageCard {...room} onClick={()=>onClick(room.imageSrc)} />
        </div>
      ))}
    </Slider>
      {imageEl}</>
  );
}

export default RoomsSlider;
