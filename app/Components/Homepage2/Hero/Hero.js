"use client";
import React from "react";
import style from "./Hero2.module.scss";
import "../../../globals.css";

const HeroSection = () => {


  const handleClick=()=>{
    const otherPageComponent = document.getElementById("call");
    otherPageComponent?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className={`${style.hero} container`}>
      <div className={style.hero__main}>
        <div className={`${style.hero__title}`}>
          <h1>Best Design & Development Company for Startups in Australia</h1>
        </div>
        <div className={`${style.hero__desc}`}>
          <h3>
            Our software development company creates digital transformation
            strategies and solutions to help thrive your business.
          </h3>
        </div>

        <span onClick={handleClick} className={`${style.hero__call} button`}>
          Schedule a call
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
