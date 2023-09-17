import React, { useRef, useState } from "react";
import style from "./OurStory.module.css";
import "../../../globals.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function OurStory() {
  const [toggle, setToggle] = useState(false);
  const videoreff = useRef();

  const handlePlay = () => {
    videoreff.current.play();
    setToggle(!toggle);
  };

  const handlePause = () => {
    videoreff.current.pause();
    setToggle(!toggle);
  };

  return (
    <div className={`${style.story__section}`}>
      <div className={`${style.story__box} container`}>
        <div className={style.story__img}>
          <div className={style.story_imgdiv}>
            <LazyLoadImage
              effect="blur" src="/aboutstory1.png" alt="aboutstory1" />
            <LazyLoadImage
              effect="blur" src="/aboutstory2.png" alt="aboutstory2" />
          </div>
          <div className={style.story__video}>
          <LazyLoadImage
              effect="blur" src="./aboutimages/aboutt3.png" alt="aboutt3"/>
            {/* <video
              id={style.myvideo}
              style={{ borderRadius: "20px", objectFit: "cover" }}
              width="100%"
              height="100%"
              ref={videoreff}
              onEnded={() => {
                setToggle(false);
              }}
              onClick={handlePause}
            >
              <source src="/dummy2.mp4" />
            </video> */}
            {/* {!toggle ? (
              <div className={style.image_back}>
                <div className={style.button__div}>
                  <img
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
        </div>

        <div className={style.story__txt}>
          <h2>Our Story</h2>
          <div className={style.story_para}>
            <p>
              Aura started in 2019 by Jack Murray and Alex Murray. Jack
              Murray is an experienced project manager, coder, user experience
              designer and technology consultant. He is also trained as a lawyer
              and holds a Juris Doctor and a degree in Communications.
            </p>
            <p>
              Jack has been involved as a co-founder, consultant and developer
              across multiple startups. Together with Shirli Kirschner, he
              co-founded Resolve Innovations, a new law and dispute resolution
              technology hub created by Resolve Advisors
              (resolveadvisors.com.au).
            </p>
            <p>
              He has experience building enterprise-level web and mobile
              platforms for the legal sector, government and small to medium
              enterprises. He speaks 12 languages (7 machine and 5 human).
            </p>
            <p>
              Alex Murray is a developer, designer and project manager with over
              12 years of experience working in government, NGOs and commercial
              digital agencies. He holds a Masters of Fine Arts and a degree in
              Communications.
            </p>
            <p>
              For six years, Alex was a consultant with the NSW Department of
              Education and Communities, working with the Kids’ Design
              Challenge, Premier’s Reading Challenge and the Professional
              Learning and Leadership Development Directorate. He has developed
              websites and applications for Greenpeace, World Vision Australia
              and the Australian Labor Party, along with numerous commercial
              projects and startup ventures such as Amorelie and the Institute
              of Contemporary Arts, London.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
