import React, { useRef, useState } from "react";
import style from "./AboutHero.module.css";
import "../../../globals.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function AboutHero() {
  // const [toggle, setToggle] = useState(false);
  // const videoreff = useRef();

  // const handlePlay = () => {
  //   videoreff.current.play();
  //   setToggle(!toggle);
  // };

  // const handlePause = () => {
  //   videoreff.current.pause();
  //   setToggle(!toggle);
  // };

  return (
    <div className={`${style.about__us}`}>
      <div className={`${style.about__hero} container`}>
        <h6>Welcome to Aura</h6>
        <h1>
          We Build Technology for Law, Health, Data Analysis, Disputes and
          Privacy.
        </h1>

        <div className={style.about__box}>
          <div className={style.about__images}>
            <div className={style.about_video}>
              <LazyLoadImage
                effect="blur"
                style={{ objectFit: "cover" }}
                src="./aboutimages/about1.png"
                alt="aboutimg2"
              />
              {/* <video
                id={style.myvideo}
                style={{ borderRadius: "20px", objectFit: "cover" }}
                width="100%"
                height="100%"
                ref={videoreff}
                onClick={handlePause}
                onEnded={() => {
                  setToggle(false);
                }}
              >
                <source src="/dummy.mp4" />
              </video> */}
              {/* {!toggle ? (
                <div className={style.image_back}>
                  <div className={style.button__div}>
                    <img
                      style={{ objectFit: "cover" }}
                      onClick={handlePlay}
                      className={style.video_play}
                      src="/play.png"
                      alt="play"
                    />
                  </div>
                </div>
              ) : (
                ""
              )} */}
            </div>
            <div className={style.about_image}>
              <LazyLoadImage
                effect="blur"
                src="./aboutimg2.png"
                alt="aboutimg2"
              />
              <LazyLoadImage
                effect="blur"
                src="./aboutimg3.png"
                alt="aboutimg3"
              />
            </div>
          </div>

          <div className={style.about__text}>
            <h2>About Us</h2>
            <div className={style.para__box}>
              <p>
                Aura was created to bridge the language divide that exists
                between the tech world and the not-so-tech world.
              </p>
              <p>
                We have 15 years of working across multiple projects and
                developing systems for business leaders, educators, founders,
                doctors and lawyers. The thing that consistently frustrates
                projects is a miscommunication between people that have ideas
                and people that can execute them.
              </p>
              <p>
                The Aura team have extensive experience working on both
                sides of this equation. We have been project creators and
                project managers. We can talk at a high-level about project
                scope and also in granular detail about the micro-steps needed
                to implement ideas effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
