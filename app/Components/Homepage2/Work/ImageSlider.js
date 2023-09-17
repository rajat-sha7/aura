import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Work.module.css";
import Link from "next/link";
import "../../../globals.css";
import "./style.css"

const ImageSlider = ({ sliders }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.2,
    centerPadding: "20px",
    slidesToScroll: 3,
    initialSlide: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 2.8,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2.1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {sliders.data.map((slide, index) => (
        <div className={style.hover_txt} key={index}>
          <div className={style.hover_t}>
            <LazyLoadImage
              className={style.slider_imgSize}
              src={slide.slideimg}
              alt={`Image ${index + 1}`}
            />
          </div>
          <div className={style.hover_box}>
            <h5>{slide?.title}</h5>
            <p>{slide?.desc}</p>
            <button className="button" type="button">
              <Link rel="norefere" target="_blank" href={slide?.button?.link}>
                {slide?.button?.title}
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
