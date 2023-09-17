import React, { useEffect } from "react";
import style from "./PortfolioHero.module.css";
import "../../../globals.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Script from "next/script";
<Script>
  <script
    async
    src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.8.4/dist/lazyload.min.js"
  ></script>
</Script>;

export default function PortfolioHero() {
  // const useEffect = () => {
  //   if (process.client) {
  //     var lazyLoadInstance = new LazyLoad({
  //       elements_selector: ".lazy",
  //     });
  //     const lazyInterval = setInterval(() => {
  //       if (lazyLoadInstance) {
  //         setTimeout(() => lazyLoadInstance.update(), 2000);
  //         clearInterval(lazyInterval);
  //       }
  //     }, 100);
  //   }
  // };
  

  return (
    <div className={`${style.product__hero}`}>
      <div className={`${style.product__box} container`}>
        <div className={style.product__text}>
          <h1>Creating Next Level Digital Products</h1>
          {/* <div className={style.product_button}>
            <a className={`${style.product_link1} button`} href="#">
              industries -
            </a>
            <a className={`${style.product_link2} button`} href="#">
              services +
            </a>
          </div> */}
        </div>
        <div className={style.product__image}>
          <div className={style.border_div}></div>
          <div className={style.image__section}>
            <LazyLoadImage
            effect="blur"
              className="lazy"
              src="./producthero.png"
              alt="portfolio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
