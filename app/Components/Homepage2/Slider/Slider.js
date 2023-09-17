"use client";
import React from "react";
import style from "./Slider.module.css";
import Slide from "./Slide/Slide";
import "../../../globals.css";

const Slider = () => {
  return (
    <div className={style.outer_sliderBox}>
      <div className={`${style.slider_box} container_fluid`}>
        <h2>What Great Teams Say About us </h2>
        <div className={`${style.slidecontainer}`}>
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default Slider;
