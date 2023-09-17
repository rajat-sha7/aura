import React from "react";
import styles from "./Client.module.scss";
import LogoSlider from "../LogoSlider/LogoSlider";

const StartupList = () => {
  return (
    <div className={`${styles.client} container`}>
      <div className={`${styles.client__title}`}>
        <h2>Our Clients</h2>
      </div>
      <div className={`${styles.client__subtitle}`}>
        <h3>
          Trusted by SMEs and enterprise organisations, government, NGOs and
          start-ups
        </h3>
      </div>
      <div className={`${styles.client__wrap}`}>
                <LogoSlider />
      </div>
    </div>
  );
};

export default StartupList;
