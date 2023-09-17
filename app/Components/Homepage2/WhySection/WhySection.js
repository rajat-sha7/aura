import React from "react";
import style from "./Why.module.css";
import "../../../globals.css";

const WhySection = () => {
  return (
    <div className={`${style.why_box} container`}>
      <div className={style.heading}>
        <h2>Why work with us?</h2>
      </div>

      <div className={style.why_boxPara}>
        <h3 className={style.why_paratxt}>
          Our software development company can craft smart solutions to help you
          achieve your business and conversion goals by providing enhanced
          interaction, security, and functionality.
        </h3>
      </div>

      <div className={style.why_cards}>
        <div className={style.why_card1}>
          <div className={style.icon}>
            <img src="/why1.png" alt="" />
          </div>
          <div className={style.heading_box}>
            <h3>Client Centric Development</h3>
          </div>
          <div className={style.para_box}>
            <span>
              We craft the client's needs on web, mobile and blockchain to
              tailor the solution and enhance growth of the business.
            </span>
          </div>
        </div>

        <div className={style.why_card2}>
          <div className={style.icon}>
            <img src="/why2.png" alt="" />
          </div>
          <div className={style.heading_box}>
            <h3>Excellent Support</h3>
          </div>
          <div className={style.para_box}>
            <span>
              We are always there to assist our clients in every possible way to
              meet clients expactations and needs.
            </span>
          </div>
        </div>

        <div className={style.why_card3}>
          <div className={style.icon}>
            <img src="/why3.png" alt="" />
          </div>
          <div className={style.heading_box}>
            <h3>Quality Deliverance</h3>
          </div>
          <div className={style.para_box}>
            <span>
              We believe in delevering quality products to our clients by
              assuring all their project specifications at the best industry
              competitive price.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
