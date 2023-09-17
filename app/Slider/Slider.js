"use client";
import React from "react";
import style from "./Slider.module.css";
import Slides from "../Slider/Slides/Slides";
import "../globals.css";

const Slider = () => {
  return (
    <div className={style.outer_sliderBox}>
    <div className={`${style.slider_box} container_fluid`}>
      <span>What great teams say about us </span>
      <div className={`${style.slidecontainer}`}>
        <Slides />
      </div>
    </div>
    </div>
  );
};

export default Slider;
