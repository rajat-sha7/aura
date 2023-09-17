import React from "react";
import style from "./Work.module.css";
import "../../../globals.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Work() {
  return (
    <div className={`${style.work_section} container_fluid`}>
      <div className={`${style.work_box} container`}>
        <h2>Explore Our Work</h2>
        <h3>View more on our projects page.</h3>

        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.card__img}>
              <LazyLoadImage
                effect="blur"
                src="/product1.png"
                alt="product1"
              ></LazyLoadImage>
            </div>

            <div className={style.card_text}>
              <h3>National Legal Aid</h3>
              <p>
                Aura provided support to a large and complex project to
                simplify legal information across all states and territories in
                Australia.
              </p>
              <span className={style.link_box}>
                <a
                  href="/portfolio/national-legal-aid"
                  className={style.card_link}
                >
                  <span className={style.link_span}>Case Study </span>
                </a>
                <i
                  style={{ color: "var(--bg-primary)" }}
                  className="fa-solid fa-arrow-right"
                ></i>
              </span>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.card__img}>
              <LazyLoadImage
                effect="blur"
                src="/portfolio1.png"
                alt="product1"
              ></LazyLoadImage>
            </div>

            <div className={style.card_text}>
              <h3>Resolution Pathways</h3>
              <p>
                Aura provided web development and project design services to
                Resolution Pathways to augment their capacity to resolve
                disputes for APRA AMCOS members and licensees.
              </p>
              <span className={style.link_box}>
                <a
                  href="/portfolio/resolution-pathways"
                  className={style.card_link}
                >
                  <span className={style.link_span}>Case Study </span>
                </a>
                <i
                  style={{ color: "var(--bg-primary)" }}
                  className="fa-solid fa-arrow-right"
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
