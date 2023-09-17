import React from "react";
import style from "./Cards.module.css";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Cards(){
  return (
    <div className={style.community_cards_wrap}>
      <h2 className={style.community_title}>Blogs</h2>
      <div className={style.community_cards}>
        <span className={style.badge}>Latest</span>

        <div className={style.row1_cards}>
      

          <div className={style.card1}>
            <div className={style._img1}>
              <LazyLoadImage effect="blur"
                className={style.card_imgSize}
                src="/approaching-website-development.jpg"
                alt="community"
              />
            </div>
            <div className={style._text}>
              <p>
                <Link href="/blog/approaching-website-development">
                A Guide to Approaching a Website Development Project
                </Link>
              </p>
            </div>
          </div>

          <div className={style.card1}>
            <div className={style._img1}>
              <LazyLoadImage effect="blur"
                className={style.card_imgSize}
                src="/mobile-app-development.jpg"
                alt="community"
              />
            </div>
            <div className={style._text}>
              <p>
                <Link href="/blog/mobile-app-development">
                Mobile App Development: What You Need to Know
                </Link>
              </p>
            </div>
          </div>

          <div className={style.card1}>
            <div className={style._img1}>
              <LazyLoadImage effect="blur"
                className={style.card_imgSize}
                src="/pros-and-cons-of-wordpress.jpg"
                alt="community2"
              />
            </div>
            <div className={style._text}>
              <p>
                <Link href="/blog/pros-and-cons-of-wordpress">
                  
                The Pros and Cons of WordPress Development
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





// export default Cards;
