"use Client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Slider from "react-slick";
import style from "./LogoSlider.module.scss";

export default function LogoSlider() {
  const Images = [
    {
      image: "/clientlogos/ACMS-Logo.png",
      alt: "logo1",
    },
    {
      image: "/clientlogos/elker-color-logo.svg",
      alt: "logo2",
    },
    {
      image: "/clientlogos/legal.svg",
      alt: "logo3",
    },
    {
      image: "/clientlogos/plexa.svg",
      alt: "logo4",
    },

    {
      image: "/clientlogos/resolve-logo.png",
      alt: "logo6",
    },
    {
      image: "/clientlogos/WLS_website-header.png",
      alt: "logo7",
    },
    {
      image: "/clientlogos/plexa.svg",
      alt: "logo4",
    },
    {
      image: "/clientlogos/resolve-logo.png",
      alt: "logo6",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    // rtl: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className={style.logo_box}>
      <Slider {...settings}>
        {Images.map((img, index) => (
          <div className={style.image__card} key={index}>
            <LazyLoadImage effect="blur"
                style={{ objectFit: "contain" }}
              src={img.image}
              alt={img.alt}
            />
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: "center" }}></div>
    </div>
  );
}
