"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../Slider.module.css";
import "./Slide.css";
import "../../../../globals.css";

const ImageSlider = () => {
  const Data = [
    {
      image: "/newsliderimg.png",
      alt: "sarah",
      name: "Sarah Baker",
      position: "Head of Product , MakeMyTrip",
    },
    {
      image: "/newsliderimg.png",
      alt: "jhon",
      name: "jhon Baker",
      position: "Head of sales , MakeMyTrip",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {Data.map((item, index) => {
        return (
          <div key={index} className={`${style.sliderCard} container`}>
            <div className={style.slider_image_section}>
              <div className={style.img__bg}>
                <img
                  className={style.slider_imgsize}
                  src={item.image}
                  alt={item.alt}
                ></img>
                <h3>{item.name}</h3>
                <p>{item.position}</p>
              </div>
              <div className={style.slider_text_section}>
                <div className={style.marks}>
                  <img
                    className={style.svgSize}
                    src="/first.svg"
                    alt="first svg"
                  />
                </div>
                <h6>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis eni m velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet..
                </h6>
                <div className={style.marks2}>
                  <img
                    className={style.svgSize}
                    src="/second.svg"
                    alt="first svg"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ImageSlider;
