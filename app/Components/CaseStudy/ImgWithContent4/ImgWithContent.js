import React from "react";
import style from "./ImgWithContent4.module.scss";
import "../../../globals.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ImgWithContent() {
  return (
    <div id = "project"  className={`${style.content} container`}>
      <div className={style.content__wrap}>
        <div className={style.content__img}>
          <LazyLoadImage effect="blur" src="/cashmere.png" alt="" />
        </div>
        <div className={style.content__details}>
          <div className={style.content__title}>
            {" "}
            <h2>Cashmere Quality</h2>
          </div>
          <div className={style.content__desc}>
            <p>
              Aura provided support to a large and complex project to
              simplify legal information across all states and territories in
              Australia. We work with multiple stakeholders to provide a
              comprehensive information resource around family violence law in
              Australia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
