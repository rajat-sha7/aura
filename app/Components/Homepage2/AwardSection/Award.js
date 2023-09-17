import React from "react";
import style from "./Award.module.css";
import "../../../globals.css";
const Award = () => {
  return (
    <div className={`${style.award_section} container`}>
      <h2>Award Winning Design & Development Company in Australia</h2>
      <div className={style.award_boxPara}>
        <h3>
          At Aura, our engineers keep sharpening their skills and expertise
          so our customers can access best industry practices and the latest
          technologies.
        </h3>
      </div>

      <div className={style.award_images}>
        <img src="/awards/award1.png" className={style.images} alt="award1" />
        <img src="/awards/award2.png" className={style.images} alt="award2" />
        <img src="/awards/award3.png" className={style.images} alt="/awards3" />
        <img src="/awards/award4.png" className={style.images} alt="award4" />
        <img src="/awards/award5.png" className={style.images} alt="award5" />
        <img src="/awards/award6.png" className={style.images} alt="award6" />
      </div>
    </div>
  );
};

export default Award;
